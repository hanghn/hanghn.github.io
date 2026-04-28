interface IconProps {
  size?: number;
  className?: string;
}

export function SunIcon({ size = 32, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      className={className}
      aria-hidden="true"
    >
      {/* Center body */}
      <rect x="6" y="6" width="4" height="4" fill="#fde68a" />
      <rect x="5" y="6" width="1" height="4" fill="#fbc547" />
      <rect x="10" y="6" width="1" height="4" fill="#fbc547" />
      <rect x="6" y="5" width="4" height="1" fill="#fbc547" />
      <rect x="6" y="10" width="4" height="1" fill="#fbc547" />
      {/* Inner highlight */}
      <rect x="6" y="6" width="2" height="2" fill="#fef3c7" />
      {/* Cardinal rays */}
      <rect x="7" y="1" width="2" height="2" fill="#fbc547" />
      <rect x="7" y="13" width="2" height="2" fill="#fbc547" />
      <rect x="1" y="7" width="2" height="2" fill="#fbc547" />
      <rect x="13" y="7" width="2" height="2" fill="#fbc547" />
      {/* Diagonal rays */}
      <rect x="3" y="3" width="2" height="2" fill="#fbc547" />
      <rect x="11" y="3" width="2" height="2" fill="#fbc547" />
      <rect x="3" y="11" width="2" height="2" fill="#fbc547" />
      <rect x="11" y="11" width="2" height="2" fill="#fbc547" />
    </svg>
  );
}

export function MoonIcon({ size = 32, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      className={className}
      aria-hidden="true"
    >
      {/* Crescent moon body */}
      <rect x="5" y="3" width="6" height="1" fill="#e2e8f0" />
      <rect x="3" y="4" width="6" height="1" fill="#e2e8f0" />
      <rect x="2" y="5" width="6" height="1" fill="#e2e8f0" />
      <rect x="2" y="6" width="5" height="1" fill="#e2e8f0" />
      <rect x="2" y="7" width="5" height="2" fill="#e2e8f0" />
      <rect x="2" y="9" width="5" height="1" fill="#e2e8f0" />
      <rect x="2" y="10" width="6" height="1" fill="#e2e8f0" />
      <rect x="3" y="11" width="6" height="1" fill="#e2e8f0" />
      <rect x="5" y="12" width="6" height="1" fill="#e2e8f0" />
      {/* Highlight rim */}
      <rect x="2" y="5" width="1" height="6" fill="#fff" />
      <rect x="3" y="4" width="1" height="1" fill="#fff" />
      {/* Tiny star */}
      <rect x="12" y="3" width="1" height="1" fill="#fde68a" />
      <rect x="13" y="2" width="1" height="3" fill="#fde68a" />
      <rect x="12" y="3" width="3" height="1" fill="#fde68a" />
    </svg>
  );
}

export function SoundOnIcon({ size = 32, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      className={className}
      aria-hidden="true"
    >
      {/* Speaker body */}
      <rect x="2" y="6" width="2" height="4" fill="#e2e8f0" />
      <rect x="4" y="5" width="1" height="6" fill="#e2e8f0" />
      <rect x="5" y="4" width="1" height="8" fill="#e2e8f0" />
      <rect x="6" y="3" width="2" height="10" fill="#e2e8f0" />
      {/* Speaker outline accent */}
      <rect x="2" y="6" width="2" height="1" fill="#fff" />
      {/* Sound waves */}
      <rect x="9" y="6" width="1" height="4" fill="#4ade80" />
      <rect x="11" y="4" width="1" height="2" fill="#4ade80" />
      <rect x="11" y="10" width="1" height="2" fill="#4ade80" />
      <rect x="12" y="5" width="1" height="6" fill="#4ade80" />
      <rect x="13" y="3" width="1" height="2" fill="#4ade80" />
      <rect x="13" y="11" width="1" height="2" fill="#4ade80" />
      <rect x="14" y="4" width="1" height="8" fill="#4ade80" />
    </svg>
  );
}

export function SoundOffIcon({ size = 32, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      className={className}
      aria-hidden="true"
    >
      {/* Speaker body (dimmed) */}
      <rect x="2" y="6" width="2" height="4" fill="#a1a1aa" />
      <rect x="4" y="5" width="1" height="6" fill="#a1a1aa" />
      <rect x="5" y="4" width="1" height="8" fill="#a1a1aa" />
      <rect x="6" y="3" width="2" height="10" fill="#a1a1aa" />
      {/* X mark in red — easy to read as MUTED */}
      <rect x="10" y="5" width="1" height="1" fill="#ef4444" />
      <rect x="11" y="6" width="1" height="1" fill="#ef4444" />
      <rect x="12" y="7" width="1" height="1" fill="#ef4444" />
      <rect x="13" y="8" width="1" height="1" fill="#ef4444" />
      <rect x="14" y="9" width="1" height="1" fill="#ef4444" />
      <rect x="14" y="5" width="1" height="1" fill="#ef4444" />
      <rect x="13" y="6" width="1" height="1" fill="#ef4444" />
      <rect x="11" y="8" width="1" height="1" fill="#ef4444" />
      <rect x="10" y="9" width="1" height="1" fill="#ef4444" />
    </svg>
  );
}
