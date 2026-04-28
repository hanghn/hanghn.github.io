'use client';

import Markdown from 'markdown-to-jsx';
import { createUniqueHeadingIds } from '@/lib/anchors';

interface AboutContentProps {
  markdown: string;
}

interface AboutSection {
  body: string;
  id: string;
  title: string;
}

interface ParsedAboutSection {
  body: string;
  title: string;
}

const sectionVariants: Record<string, string> = {
  'Fun Facts': 'about-section--compact',
  'I Like': 'about-section--compact',
  'I Dream Of': 'about-section--compact',
  'Websites from People I Admire': 'about-section--links',
};

const PANEL_PALETTE = [
  'win-panel--purple',
  'win-panel--amber',
  'win-panel--green',
  'win-panel--rose',
  'win-panel--teal',
];

const PANEL_FILENAMES: Record<string, string> = {
  'A Bit More About Me': 'ABOUT_ME.TXT',
  'What I’m Looking For': 'SEEKING.LOG',
  "What I'm Looking For": 'SEEKING.LOG',
  'Fun Facts': 'TRIVIA.DAT',
  'I Like': 'FAVES.LST',
  'I Dream Of': 'DREAMS.MSG',
  'Websites from People I Admire': 'BOOKMARKS.URL',
};

function panelFilename(title: string) {
  if (PANEL_FILENAMES[title]) return PANEL_FILENAMES[title];
  const base = title
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, '_')
    .replace(/^_|_$/g, '')
    .slice(0, 14);
  const exts = ['TXT', 'LOG', 'DOC', 'DAT', 'MSG'];
  const ext = exts[base.length % exts.length];
  return `${base}.${ext}`;
}

function splitAboutMarkdown(markdown: string) {
  const trimmed = markdown.trim();
  const introHeading = '# Intro';

  if (!trimmed.startsWith(introHeading)) {
    return {
      intro: '',
      sections: parseSections(trimmed),
    };
  }

  const withoutIntroHeading = trimmed.slice(introHeading.length).trimStart();
  const nextHeadingIndex = withoutIntroHeading.search(/\n# /);

  if (nextHeadingIndex === -1) {
    return {
      intro: withoutIntroHeading.trim(),
      sections: [] as AboutSection[],
    };
  }

  return {
    intro: withoutIntroHeading.slice(0, nextHeadingIndex).trim(),
    sections: parseSections(
      withoutIntroHeading.slice(nextHeadingIndex + 1).trim(),
    ),
  };
}

function parseSections(markdown: string): AboutSection[] {
  const sections: ParsedAboutSection[] = markdown
    .split(/\n(?=# )/)
    .map((section) => section.trim())
    .filter((section) => section !== '')
    .map((section) => {
      const [heading, ...rest] = section.split('\n');

      return {
        title: heading.replace(/^#\s+/, '').trim(),
        body: rest.join('\n').trim(),
      };
    });

  const sectionIds = createUniqueHeadingIds(
    sections.map((section) => section.title),
  );

  return sections.map((section, index) => ({
    ...section,
    id: sectionIds[index] ?? 'section',
  }));
}

function getSectionClassName(title: string) {
  const variant = sectionVariants[title];
  return variant ? `about-section ${variant}` : 'about-section';
}

export default function AboutContent({ markdown }: AboutContentProps) {
  const { intro, sections } = splitAboutMarkdown(markdown);

  return (
    <article className="about-content">
      {intro ? (
        <div className="win-panel">
          <div className="win-panel-titlebar">INTRO.TXT</div>
          <div className="win-panel-body">
            <div className="about-intro">
              <Markdown>{intro}</Markdown>
            </div>
          </div>
        </div>
      ) : null}
      {sections.length > 0 ? (
        <nav className="about-section-nav" aria-label="About sections">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="about-section-nav-link"
            >
              {section.title}
            </a>
          ))}
        </nav>
      ) : null}
      {sections.map((section, index) => {
        const palette = PANEL_PALETTE[index % PANEL_PALETTE.length];
        return (
          <div key={section.id} className={`win-panel ${palette}`}>
            <div className="win-panel-titlebar">
              {panelFilename(section.title)}
            </div>
            <div className="win-panel-body">
              <section className={getSectionClassName(section.title)}>
                <h2 id={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="about-section-heading-link"
                  >
                    <span>{section.title}</span>
                    <span
                      className="about-section-heading-hash"
                      aria-hidden="true"
                    >
                      #
                    </span>
                  </a>
                </h2>
                <Markdown>{section.body}</Markdown>
              </section>
            </div>
          </div>
        );
      })}
    </article>
  );
}
