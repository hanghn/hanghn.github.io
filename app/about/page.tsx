import type { Metadata } from 'next';

import AboutContent from '@/components/About/Sections';
import PageWrapper from '@/components/Template/PageWrapper';
import { aboutMarkdown } from '@/data/about';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'About',
  description:
    'Learn about Hang Hang — Computer Science + Business student at Northeastern, currently TA-ing Foundations of Data Science and seeking Summer 2026 internships.',
  path: '/about/',
});

export default function AboutPage() {
  return (
    <PageWrapper mainClassName="page-main--wide">
      <section className="about-page">
        <header className="about-header">
          <h1 className="page-title">About</h1>
        </header>

        <div className="about-layout">
          <aside className="about-sidebar" aria-hidden="true">
            <figure className="about-sidebar-figure">
              <img src="/images/about/IMG_2445.jpg" alt="Hang Hang's hometown view" />
              <figcaption>Where I grew up — Shanghai.</figcaption>
            </figure>

            <figure className="about-sidebar-figure">
              <img
                src="/images/about/seafood-expo.jpg"
                alt="At the Boston Seafood Expo translating between my parents and clients"
              />
              <figcaption>
                Bilingual go-between for my parents and their clients at Seafood Expo North America
                (Boston).
              </figcaption>
            </figure>
          </aside>

          <div className="about-main">
            <AboutContent markdown={aboutMarkdown} />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
