import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">Hang (Amber) Hang</span>
        </h1>

        <p className="hero-tagline">
          Welcome to my corner of the internet.
          <br />
          Click around to see the projects, work, and ideas I&apos;ve been
          exploring.
          <br />
          <strong>
            Head to About for the full story — or jump straight to Projects.
          </strong>
        </p>

        <div className="hero-chips">
          <span className="hero-chip">Open to Summer 2026 Internships</span>
          <span className="hero-chip">Khoury · CS + Business</span>
          <span className="hero-chip">Boston, MA</span>
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button button-primary">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
