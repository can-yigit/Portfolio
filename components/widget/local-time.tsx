'use client';

import { useEffect, useState } from 'react';

export default function LocalTime() {
  const [time, setTime] = useState<string>('');
  const [diff, setDiff] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const berlinTimeStr = now.toLocaleTimeString('de-DE', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Europe/Berlin',
      });
      setTime(berlinTimeStr);

      const berlinFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Europe/Berlin',
        hour: 'numeric',
        hour12: false,
      });
      const localFormatter = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        hour12: false,
      });

      const berlinHour = parseInt(berlinFormatter.format(now), 10);
      const localHour = parseInt(localFormatter.format(now), 10);

      let diffInHours = localHour - berlinHour;
      if (diffInHours > 12) diffInHours -= 24;
      if (diffInHours < -12) diffInHours += 24;

      if (diffInHours !== 0) {
        const sign = diffInHours > 0 ? '+' : '';
        setDiff(`${sign}${diffInHours}h`);
      } else {
        setDiff('');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <>
      <span>{time}</span>
      {diff && (
        <span style={{ color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
          {diff.startsWith('+') ? `// ${diff} ahead` : `// ${diff} behind`}
        </span>
      )}
    </>
  );
}
