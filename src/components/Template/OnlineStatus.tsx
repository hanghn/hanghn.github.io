'use client';

import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';

const wrapperStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.65em',
  fontFamily:
    'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
  fontSize: '1rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  color: '#fff',
  background: 'rgba(0, 0, 0, 0.55)',
  padding: '0.5em 1em',
  borderRadius: 999,
  border: '1px solid rgba(255, 255, 255, 0.35)',
  backdropFilter: 'blur(6px)',
  textShadow: '0 1px 6px rgba(0, 0, 0, 0.5)',
};

const dotStyle = (online: boolean): CSSProperties => ({
  width: 14,
  height: 14,
  borderRadius: '50%',
  background: online ? '#22c55e' : '#ef4444',
  boxShadow: online
    ? '0 0 14px rgba(34, 197, 94, 0.95), 0 0 4px rgba(34, 197, 94, 0.8)'
    : '0 0 8px rgba(239, 68, 68, 0.7)',
  animation: online ? 'online-pulse 2s ease-in-out infinite' : 'none',
  flexShrink: 0,
});

export default function OnlineStatus() {
  const [online, setOnline] = useState<boolean | null>(null);

  useEffect(() => {
    setOnline(navigator.onLine);
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (online === null) return null;

  return (
    <span style={wrapperStyle} aria-live="polite">
      <span style={dotStyle(online)} aria-hidden="true" />
      {online ? 'online' : 'offline'}
      <style>{`@keyframes online-pulse { 0%,100% { opacity: 1 } 50% { opacity: 0.55 } }`}</style>
    </span>
  );
}
