'use client';

import { useEffect, useState } from 'react';

const COUNTER_KEY = 'visit-count';
const COUNTER_BASE = 427;

const MOODS = [{ emoji: '💻', text: ':)' }];

function pad(n: number, len: number) {
  return String(n).padStart(len, '0');
}

export default function RetroExtras() {
  const [count, setCount] = useState<number | null>(null);
  const [mood, setMood] = useState<(typeof MOODS)[number] | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(COUNTER_KEY);
    const next = stored ? Number(stored) + 1 : COUNTER_BASE;
    window.localStorage.setItem(COUNTER_KEY, String(next));
    setCount(next);

    setMood(MOODS[Math.floor(Math.random() * MOODS.length)]);
  }, []);

  if (count === null || mood === null) return null;

  return (
    <div className="retro-extras">
      <div
        className="retro-counter"
        title={`You are visitor #${count}`}
        aria-label={`Visitor number ${count}`}
      >
        <span className="retro-counter-label">★ VISITOR #</span>
        <span className="retro-counter-digits">{pad(count, 5)}</span>
        <span className="retro-counter-label">★</span>
      </div>

      <div className="retro-mood" aria-label={`Current mood: ${mood.text}`}>
        <span className="retro-mood-label">MOOD</span>
        <span className="retro-mood-text">
          {mood.emoji} {mood.text}
        </span>
      </div>
    </div>
  );
}
