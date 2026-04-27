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
          Computer Science + Business student at{' '}
          <a
            href="https://www.khoury.northeastern.edu"
            className="hero-highlight"
          >
            Northeastern&apos;s Khoury College
          </a>
          , concentrating in Finance.
          <br />
          Currently a TA for Foundations of Data Science. Previously interned
          at Johnson &amp; Johnson and Advent International.
          <br />
          <strong>
            Seeking Summer 2026 internships in data science, ML, fintech, or
            software engineering.
          </strong>
        </p>

        <div className="hero-chips">
          <span className="hero-chip">Open to Summer 2026 Internships</span>
          <span className="hero-chip">Khoury · CS + Business</span>
          <span className="hero-chip">Finance Concentration</span>
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
