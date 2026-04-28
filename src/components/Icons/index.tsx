interface IconProps {
  size?: number;
  className?: string;
}

export function SunIcon({ size = 44, className }: IconProps) {
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
      {/* Outline ring (dark) for visibility on any background */}
      <rect x="6" y="4" width="4" height="1" fill="#3d2c08" />
      <rect x="6" y="11" width="4" height="1" fill="#3d2c08" />
      <rect x="4" y="6" width="1" height="4" fill="#3d2c08" />
      <rect x="11" y="6" width="1" height="4" fill="#3d2c08" />
      <rect x="5" y="5" width="1" height="1" fill="#3d2c08" />
      <rect x="10" y="5" width="1" height="1" fill="#3d2c08" />
      <rect x="5" y="10" width="1" height="1" fill="#3d2c08" />
      <rect x="10" y="10" width="1" height="1" fill="#3d2c08" />
      {/* Sun body */}
      <rect x="6" y="5" width="4" height="6" fill="#fbc547" />
      <rect x="5" y="6" width="6" height="4" fill="#fbc547" />
      {/* Highlight */}
      <rect x="6" y="6" width="2" height="2" fill="#fde68a" />
      {/* Rays — bold */}
      <rect x="7" y="0" width="2" height="3" fill="#3d2c08" />
      <rect x="7" y="13" width="2" height="3" fill="#3d2c08" />
      <rect x="0" y="7" width="3" height="2" fill="#3d2c08" />
      <rect x="13" y="7" width="3" height="2" fill="#3d2c08" />
      <rect x="2" y="2" width="2" height="2" fill="#3d2c08" />
      <rect x="12" y="2" width="2" height="2" fill="#3d2c08" />
      <rect x="2" y="12" width="2" height="2" fill="#3d2c08" />
      <rect x="12" y="12" width="2" height="2" fill="#3d2c08" />
    </svg>
  );
}

export function MoonIcon({ size = 44, className }: IconProps) {
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
      {/* Outline of crescent (dark) */}
      <rect x="4" y="2" width="6" height="1" fill="#0f1530" />
      <rect x="3" y="3" width="1" height="1" fill="#0f1530" />
      <rect x="2" y="4" width="1" height="1" fill="#0f1530" />
      <rect x="1" y="5" width="1" height="6" fill="#0f1530" />
      <rect x="2" y="11" width="1" height="1" fill="#0f1530" />
      <rect x="3" y="12" width="1" height="1" fill="#0f1530" />
      <rect x="4" y="13" width="6" height="1" fill="#0f1530" />
      {/* Inner crescent fill — deep navy */}
      <rect x="4" y="3" width="6" height="1" fill="#1e3a8a" />
      <rect x="3" y="4" width="6" height="1" fill="#1e3a8a" />
      <rect x="2" y="5" width="6" height="1" fill="#1e3a8a" />
      <rect x="2" y="6" width="5" height="1" fill="#1e3a8a" />
      <rect x="2" y="7" width="5" height="2" fill="#1e3a8a" />
      <rect x="2" y="9" width="5" height="1" fill="#1e3a8a" />
      <rect x="2" y="10" width="6" height="1" fill="#1e3a8a" />
      <rect x="3" y="11" width="6" height="1" fill="#1e3a8a" />
      <rect x="4" y="12" width="6" height="1" fill="#1e3a8a" />
      {/* Star */}
      <rect x="12" y="3" width="1" height="1" fill="#fbc547" />
      <rect x="13" y="2" width="1" height="3" fill="#fbc547" />
      <rect x="11" y="3" width="3" height="1" fill="#fbc547" />
    </svg>
  );
}

export function SoundOnIcon({ size = 44, className }: IconProps) {
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
      {/* Speaker — dark for contrast on light bg */}
      <rect x="2" y="6" width="2" height="4" fill="#1f2937" />
      <rect x="4" y="5" width="1" height="6" fill="#1f2937" />
      <rect x="5" y="4" width="1" height="8" fill="#1f2937" />
      <rect x="6" y="3" width="2" height="10" fill="#1f2937" />
      {/* Sound waves — green pixel arcs */}
      <rect x="9" y="6" width="1" height="4" fill="#16a34a" />
      <rect x="11" y="4" width="1" height="2" fill="#16a34a" />
      <rect x="11" y="10" width="1" height="2" fill="#16a34a" />
      <rect x="12" y="5" width="1" height="6" fill="#16a34a" />
      <rect x="13" y="3" width="1" height="2" fill="#16a34a" />
      <rect x="13" y="11" width="1" height="2" fill="#16a34a" />
      <rect x="14" y="4" width="1" height="8" fill="#16a34a" />
    </svg>
  );
}

export function SoundOffIcon({ size = 44, className }: IconProps) {
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
      {/* Speaker — dark grey for muted look */}
      <rect x="2" y="6" width="2" height="4" fill="#4b5563" />
      <rect x="4" y="5" width="1" height="6" fill="#4b5563" />
      <rect x="5" y="4" width="1" height="8" fill="#4b5563" />
      <rect x="6" y="3" width="2" height="10" fill="#4b5563" />
      {/* X mark — dark red for contrast */}
      <rect x="10" y="5" width="1" height="1" fill="#b91c1c" />
      <rect x="11" y="6" width="1" height="1" fill="#b91c1c" />
      <rect x="12" y="7" width="1" height="1" fill="#b91c1c" />
      <rect x="13" y="8" width="1" height="1" fill="#b91c1c" />
      <rect x="14" y="9" width="1" height="1" fill="#b91c1c" />
      <rect x="14" y="5" width="1" height="1" fill="#b91c1c" />
      <rect x="13" y="6" width="1" height="1" fill="#b91c1c" />
      <rect x="11" y="8" width="1" height="1" fill="#b91c1c" />
      <rect x="10" y="9" width="1" height="1" fill="#b91c1c" />
    </svg>
  );
}
