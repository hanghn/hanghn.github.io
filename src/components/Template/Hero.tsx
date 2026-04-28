import Link from 'next/link';

import OnlineStatus from './OnlineStatus';
import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="win-panel win-panel--glass hero-panel">
        <div className="win-panel-titlebar">WELCOME.HTML</div>
        <div className="win-panel-body">
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
              Think of this as my scrapbook — projects, experiments, half-formed
              thoughts (maybe?).
            </p>

            <div className="hero-chips">
              <span className="hero-chip">Open to Summer 2026 Internships</span>
              <span className="hero-chip">Khoury · CS + Business</span>
              <span className="hero-chip">Boston, MA</span>
            </div>

            <div className="hero-status">
              <OnlineStatus />
            </div>

            <div className="retro-marquee" aria-hidden="true">
              <div className="retro-marquee-track">
                <span>last updated: april 27 2026</span>
                <span>·</span>
                <span>seeking: summer 2026 internships</span>
                <span>·</span>
                <span>currently: studying @ khoury</span>
                <span>·</span>
                <span>★ thanks for stopping by ★</span>
              </div>
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
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
