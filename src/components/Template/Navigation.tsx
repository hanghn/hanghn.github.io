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
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M5 10v10h14V10" />
          <path d="M10 20v-6h4v6" />
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
