'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import routes from '@/data/routes';

import AudioToggle from './AudioToggle';
import Hamburger from './Hamburger';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path);
  };

  return (
    <header className="site-header">
      <Link href="/" className="site-logo" aria-label="Home">
        <svg
          className="logo-icon"
          width="40"
          height="40"
          viewBox="0 0 16 16"
          shapeRendering="crispEdges"
          aria-hidden="true"
        >
          {/* Sky / chimney */}
          <rect x="11" y="2" width="2" height="3" fill="#8e4828" />
          <rect x="11" y="2" width="2" height="1" fill="#a85c3f" />
          {/* Roof — pixel triangle */}
          <rect x="7" y="3" width="2" height="1" fill="#c5483b" />
          <rect x="6" y="4" width="4" height="1" fill="#c5483b" />
          <rect x="5" y="5" width="6" height="1" fill="#c5483b" />
          <rect x="4" y="6" width="8" height="1" fill="#c5483b" />
          <rect x="3" y="7" width="10" height="1" fill="#c5483b" />
          {/* Roof shadow line */}
          <rect
            x="3"
            y="7"
            width="10"
            height="1"
            fill="#9c2f25"
            opacity="0.5"
          />
          {/* Walls */}
          <rect x="4" y="8" width="8" height="6" fill="#f0d8a8" />
          {/* Wall shadow on right */}
          <rect x="11" y="8" width="1" height="6" fill="#d4b986" />
          {/* Door */}
          <rect x="7" y="11" width="2" height="3" fill="#7a4a2a" />
          <rect x="8" y="12" width="1" height="1" fill="#f5d442" />
          {/* Window */}
          <rect x="5" y="9" width="2" height="2" fill="#7ec8e3" />
          <rect x="9" y="9" width="2" height="2" fill="#7ec8e3" />
          {/* Window cross */}
          <rect x="6" y="9" width="1" height="2" fill="#3a3a3a" opacity="0.5" />
          <rect
            x="9"
            y="9"
            width="2"
            height="1"
            fill="#3a3a3a"
            opacity="0.3"
            transform="translate(0 0.5)"
          />
          {/* Ground */}
          <rect x="3" y="14" width="10" height="1" fill="#5cba6c" />
        </svg>
      </Link>

      <nav className="nav-links">
        {routes
          .filter((l) => !l.index)
          .map((l) => (
            <Link
              key={l.label}
              href={l.path}
              className={`nav-link ${isActive(l.path) ? 'active' : ''}`}
              aria-current={isActive(l.path) ? 'page' : undefined}
            >
              {l.label}
            </Link>
          ))}
      </nav>

      <div className="nav-actions">
        <AudioToggle />
        <ThemeToggle />
        <Hamburger />
      </div>
    </header>
  );
}
