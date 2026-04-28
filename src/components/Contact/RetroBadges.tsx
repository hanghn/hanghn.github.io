import type { CSSProperties } from 'react';

import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface Badge {
  href: string;
  label: string;
  tag: string;
  iconBg: string;
  labelColor: string;
  icon: IconDefinition;
}

const BADGES: Badge[] = [
  {
    href: 'https://www.linkedin.com/in/amberhang/',
    label: 'LinkedIn',
    tag: 'LINKEDIN',
    iconBg: '#0a66c2',
    labelColor: '#0a66c2',
    icon: faLinkedinIn,
  },
  {
    href: 'https://github.com/hanghn',
    label: 'GitHub',
    tag: 'GITHUB',
    iconBg: '#1f1f1f',
    labelColor: '#c9d1d9',
    icon: faGithub,
  },
  {
    href: 'mailto:hanghn559@gmail.com',
    label: 'Personal Email',
    tag: 'GMAIL',
    iconBg: '#c5221f',
    labelColor: '#c5221f',
    icon: faGoogle,
  },
  {
    href: 'mailto:hang.h@northeastern.edu',
    label: 'Northeastern Email',
    tag: 'NU MAIL',
    iconBg: '#c8102e',
    labelColor: '#c8102e',
    icon: faEnvelope,
  },
];

const listStyle: CSSProperties = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexWrap: 'wrap',
  gap: 6,
  justifyContent: 'center',
};

const itemStyle: CSSProperties = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const badgeStyle: CSSProperties = {
  display: 'inline-flex',
  width: 168,
  height: 56,
  border: '1px solid #000',
  fontFamily:
    'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
  fontSize: 18,
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
  textDecoration: 'none',
  overflow: 'hidden',
  background: '#000',
};

const iconCellStyle = (color: string): CSSProperties => ({
  width: 56,
  height: '100%',
  background: color,
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRight: '1px solid #000',
});

const labelStyle = (color: string): CSSProperties => ({
  flex: 1,
  background: '#111',
  color,
  display: 'flex',
  alignItems: 'center',
  padding: '0 6px',
  letterSpacing: '0.05em',
});

interface BrandSvgProps {
  icon: IconDefinition;
}

function BrandSvg({ icon }: BrandSvgProps) {
  const [width, height, , , svgPath] = icon.icon;
  const path = Array.isArray(svgPath) ? svgPath.join(' ') : svgPath;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      width={28}
      height={28}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

export default function RetroBadges() {
  return (
    <ul className="retro-badges" style={listStyle}>
      {BADGES.map((b) => (
        <li key={b.href} style={itemStyle}>
          <a
            href={b.href}
            className="retro-badge"
            aria-label={b.label}
            style={badgeStyle}
            target={b.href.startsWith('http') ? '_blank' : undefined}
            rel={b.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            <span style={iconCellStyle(b.iconBg)}>
              <BrandSvg icon={b.icon} />
            </span>
            <span style={labelStyle(b.labelColor)}>{b.tag}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
