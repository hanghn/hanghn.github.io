import Link from 'next/link';

import ContactIcons from '@/components/Contact/ContactIcons';
import { AUTHOR_NAME } from '@/lib/utils';

export default function Footer() {
  return (
    <footer className="site-footer-new">
      <div className="footer-content">
        <div className="footer-right">
          <nav className="footer-links" aria-labelledby="footer-links-heading">
            <h4 id="footer-links-heading" className="footer-links-label">
              Explore
            </h4>
            <div className="footer-links-grid">
              <Link href="/about">About</Link>
              <Link href="/resume">Resume</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>

          <div
            className="footer-social"
            aria-labelledby="footer-social-heading"
          >
            <h4 id="footer-social-heading" className="footer-social-label">
              Connect
            </h4>
            <ContactIcons />
          </div>
        </div>
      </div>

      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} {AUTHOR_NAME}. Built with{' '}
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          Next.js
        </a>{' '}
        &amp;{' '}
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          React
        </a>
        .
      </p>
    </footer>
  );
}
