const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
const CACHE_ENABLED = process.env.NEXT_PUBLIC_API_CACHE === 'true';

const fetchOptions: RequestInit = CACHE_ENABLED
  ? { cache: 'force-cache', next: { revalidate: 300 } } as RequestInit
  : { cache: 'no-store' };

function isValidBlogPost(post: any): post is BlogPost {
  return (
    post &&
    typeof post.id === 'number' &&
    typeof post.slug === 'string' &&
    post.slug.trim().length > 0 &&
    typeof post.title === 'string' &&
    post.title.trim().length > 0 &&
    typeof post.excerpt === 'string' &&
    typeof post.content === 'string' &&
    typeof post.created_at === 'string' &&
    Array.isArray(post.authors) &&
    post.authors.length > 0 &&
    post.authors.every((author: any) => 
      author && 
      (typeof author.id === 'number' || typeof author.id === 'string') &&
      typeof author.name === 'string' &&
      author.name.trim().length > 0
    )
  );
}

export interface BlogAuthor {
  id: number | string;
  name: string;
  email: string;
  avatar?: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string | null;
  category: string;
  pinned: boolean;
  authors: BlogAuthor[];
  created_at: string;
  updated_at: string;
}

export async function getBlogPosts(category?: string): Promise<BlogPost[]> {
  try {
    const url = category && category !== 'Overview' 
      ? `${API_BASE_URL}/blogs?category=${encodeURIComponent(category)}`
      : `${API_BASE_URL}/blogs`;
    
    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }

    const data = await response.json();
    return Array.isArray(data) ? data.filter(isValidBlogPost) : [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs/slug/${slug}`, fetchOptions);

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error('Failed to fetch blog post');
    }

    const data = await response.json();
    return isValidBlogPost(data) ? data : null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const posts = await getBlogPosts();
    return posts
      .filter(post => post.slug && post.slug.trim().length > 0)
      .map(post => post.slug);
  } catch (error) {
    console.error('Error fetching blog slugs:', error);
    return [];
  }
}

