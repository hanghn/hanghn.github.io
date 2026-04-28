'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { SoundOffIcon, SoundOnIcon } from '@/components/Icons';

const AUDIO_SRC = '/audio/Ariel Shalom - Teddy Bass.mp3';
const STORAGE_KEY = 'audio-on';
const TARGET_VOLUME = 0.35;

export default function AudioToggle() {
  const [isOn, setIsOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'true') {
      setIsOn(true);
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isOn) {
      audio.volume = TARGET_VOLUME;
      audio.play().catch((err) => {
        // Browsers reject play() if a user gesture isn't satisfied
        // (NotAllowedError). Roll back only in that case so transient
        // load failures don't flip the toggle off prematurely.
        if (err?.name === 'NotAllowedError') {
          setIsOn(false);
        } else {
          console.warn('Audio play failed:', err);
        }
      });
    } else {
      audio.pause();
    }

    window.localStorage.setItem(STORAGE_KEY, isOn ? 'true' : 'false');
  }, [isOn]);

  const toggle = useCallback(() => {
    setIsOn((prev) => !prev);
  }, []);

  return (
    <>
      <button
        type="button"
        className="theme-toggle"
        onClick={toggle}
        aria-label={isOn ? 'Mute background music' : 'Play background music'}
        title={isOn ? 'Mute background music' : 'Play background music'}
      >
        <span className="theme-toggle-icon">
          {isOn ? <SoundOnIcon /> : <SoundOffIcon />}
        </span>
      </button>
      <audio ref={audioRef} src={AUDIO_SRC} loop preload="metadata" />
    </>
  );
}
