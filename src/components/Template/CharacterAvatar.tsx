'use client';

import { useEffect, useRef } from 'react';

const LEFT_EYE = { cx: 40, cy: 55 };
const RIGHT_EYE = { cx: 60, cy: 55 };
const PUPIL_RANGE = 2.5;

export default function CharacterAvatar() {
  const svgRef = useRef<SVGSVGElement>(null);
  const leftPupilRef = useRef<SVGCircleElement>(null);
  const rightPupilRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      const svg = svgRef.current;
      if (!svg) return;

      const rect = svg.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const scaleX = rect.width / 100;
      const scaleY = rect.height / 100;

      const updatePupil = (
        ref: React.RefObject<SVGCircleElement | null>,
        eye: { cx: number; cy: number },
      ) => {
        const eyeScreenX = rect.left + eye.cx * scaleX;
        const eyeScreenY = rect.top + eye.cy * scaleY;
        const angle = Math.atan2(
          event.clientY - eyeScreenY,
          event.clientX - eyeScreenX,
        );

        const node = ref.current;
        if (!node) return;
        node.setAttribute('cx', String(eye.cx + Math.cos(angle) * PUPIL_RANGE));
        node.setAttribute('cy', String(eye.cy + Math.sin(angle) * PUPIL_RANGE));
      };

      updatePupil(leftPupilRef, LEFT_EYE);
      updatePupil(rightPupilRef, RIGHT_EYE);
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <svg
      ref={svgRef}
      className="character-avatar"
      viewBox="0 0 100 100"
      width="clamp(80px, 13cqi, 200px)"
      height="clamp(80px, 13cqi, 200px)"
      aria-hidden="true"
    >
      {/* Wolf cut — longer back layers with choppy ends */}
      <path
        d="
          M22 38 Q22 18 50 16 Q78 18 78 38
          L82 54 L78 70 L82 86 L74 80 L70 90 L64 80 L60 88
          L58 78 L52 84 L50 76 L48 84 L42 78
          L40 88 L36 80 L30 90 L26 80 L18 86 L22 70 L18 54 Z
        "
        fill="#2c2c2c"
      />
      {/* Face */}
      <ellipse cx="50" cy="56" rx="20" ry="22" fill="#fdd9c0" />
      {/* Ears */}
      <ellipse
        cx="28"
        cy="60"
        rx="3"
        ry="5"
        fill="#fdd9c0"
        stroke="#c8907a"
        strokeWidth="0.6"
      />
      <path
        d="M27 58 Q26 60 27 63"
        stroke="#c8907a"
        strokeWidth="0.6"
        fill="none"
      />
      <ellipse
        cx="72"
        cy="60"
        rx="3"
        ry="5"
        fill="#fdd9c0"
        stroke="#c8907a"
        strokeWidth="0.6"
      />
      <path
        d="M73 58 Q74 60 73 63"
        stroke="#c8907a"
        strokeWidth="0.6"
        fill="none"
      />
      {/* Curtain bangs (wispy, parted in the middle) */}
      <path
        d="
          M30 36 Q34 28 42 28 Q46 32 48 40 L46 44
          Q42 38 38 40 Q34 42 30 50 Z
        "
        fill="#1f1f1f"
      />
      <path
        d="
          M70 36 Q66 28 58 28 Q54 32 52 40 L54 44
          Q58 38 62 40 Q66 42 70 50 Z
        "
        fill="#1f1f1f"
      />
      {/* Cheeks */}
      <circle cx="32" cy="64" r="3.5" fill="#f7a8a8" opacity="0.7" />
      <circle cx="68" cy="64" r="3.5" fill="#f7a8a8" opacity="0.7" />
      {/* Eye whites */}
      <ellipse
        cx={LEFT_EYE.cx}
        cy={LEFT_EYE.cy}
        rx="6"
        ry="7"
        fill="#fff"
        stroke="#000"
        strokeWidth="1.2"
      />
      <ellipse
        cx={RIGHT_EYE.cx}
        cy={RIGHT_EYE.cy}
        rx="6"
        ry="7"
        fill="#fff"
        stroke="#000"
        strokeWidth="1.2"
      />
      {/* Pupils — tracked by JS */}
      <circle
        ref={leftPupilRef}
        cx={LEFT_EYE.cx}
        cy={LEFT_EYE.cy}
        r="3"
        fill="#0d0d0d"
      />
      <circle
        ref={rightPupilRef}
        cx={RIGHT_EYE.cx}
        cy={RIGHT_EYE.cy}
        r="3"
        fill="#0d0d0d"
      />
      {/* Square glasses */}
      <rect
        x={LEFT_EYE.cx - 9}
        y={LEFT_EYE.cy - 8}
        width="18"
        height="16"
        rx="2"
        fill="none"
        stroke="#1f4d2c"
        strokeWidth="1.8"
      />
      <rect
        x={RIGHT_EYE.cx - 9}
        y={RIGHT_EYE.cy - 8}
        width="18"
        height="16"
        rx="2"
        fill="none"
        stroke="#1f4d2c"
        strokeWidth="1.8"
      />
      <line
        x1={LEFT_EYE.cx + 9}
        y1={LEFT_EYE.cy}
        x2={RIGHT_EYE.cx - 9}
        y2={RIGHT_EYE.cy}
        stroke="#1f4d2c"
        strokeWidth="1.8"
      />
      <line
        x1={LEFT_EYE.cx - 9}
        y1={LEFT_EYE.cy - 4}
        x2={LEFT_EYE.cx - 14}
        y2={LEFT_EYE.cy - 2}
        stroke="#1f4d2c"
        strokeWidth="1.8"
      />
      <line
        x1={RIGHT_EYE.cx + 9}
        y1={RIGHT_EYE.cy - 4}
        x2={RIGHT_EYE.cx + 14}
        y2={RIGHT_EYE.cy - 2}
        stroke="#1f4d2c"
        strokeWidth="1.8"
      />
      {/* Mouth */}
      <path
        d="M45 72 Q50 76 55 72"
        stroke="#a04060"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Earring detail */}
      <circle cx="26" cy="62" r="1.5" fill="#f5d442" />
    </svg>
  );
}
