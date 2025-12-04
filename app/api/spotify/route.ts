import { NextResponse } from 'next/server';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token!,
    }),
  });

  return response.json();
};

export async function GET() {
  try {
    if (!client_id || !client_secret || !refresh_token) {
      console.error('Missing Spotify credentials');
      return NextResponse.json({ 
        isPlaying: false,
        error: 'Missing credentials'
      }, { status: 500 });
    }

    const tokenResponse = await getAccessToken();
    
    if (!tokenResponse.access_token) {
      console.error('Failed to get access token:', tokenResponse);
      return NextResponse.json({ 
        isPlaying: false,
        error: 'Failed to get access token'
      }, { status: 500 });
    }

    const { access_token } = tokenResponse;

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    console.log('Currently playing status:', response.status);

    if (response.status === 204 || response.status >= 400) {
      const recentlyPlayedResponse = await fetch(RECENTLY_PLAYED_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      console.log('Recently played status:', recentlyPlayedResponse.status);

      if (recentlyPlayedResponse.status === 200) {
        const recentData = await recentlyPlayedResponse.json();
        
        if (recentData.items && recentData.items.length > 0) {
          const track = recentData.items[0].track;
          
          return NextResponse.json({
            album: track.album.name,
            albumImageUrl: track.album.images[0]?.url,
            artist: track.artists.map((_artist: any) => _artist.name).join(', '),
            isPlaying: false,
            songUrl: track.external_urls.spotify,
            title: track.name,
          });
        }
      }
      
      return NextResponse.json({ isPlaying: false });
    }

    const song = await response.json();

    if (!song.item) {
      return NextResponse.json({ isPlaying: false });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist: any) => _artist.name).join(', ');
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0]?.url;
    const songUrl = song.item.external_urls.spotify;

    return NextResponse.json({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    });
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    return NextResponse.json({ 
      isPlaying: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
