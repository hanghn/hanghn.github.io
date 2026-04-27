import type { Metadata } from 'next';

import Courses from '@/components/Resume/Courses';
import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import References from '@/components/Resume/References';
import ResumeNav from '@/components/Resume/ResumeNav';
import Skills from '@/components/Resume/Skills';
import PageWrapper from '@/components/Template/PageWrapper';
import courses from '@/data/resume/courses';
import degrees from '@/data/resume/degrees';
import { categories, skills } from '@/data/resume/skills';
import work from '@/data/resume/work';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Resume',
  description:
    'Resume of Hang (Amber) Hang — Northeastern Khoury CS+Business student. TA, J&J MedTech intern, private-equity intern, technical projects in Python, Java, C, and RISC-V.',
  path: '/resume/',
});

export default function ResumePage() {
  return (
    <PageWrapper>
      <section className="resume-page">
        <header className="resume-header">
          <h1 className="resume-title">Resume</h1>
          <p className="resume-summary">
            Hi, I&apos;m Hang — I grew up in Shanghai and moved to Boston for
            college. I&apos;m a Computer Science + Business student at
            Northeastern&apos;s Khoury College, graduating in April 2027. I&apos;m
            interested in AI applications across all fields and like building
            automation tools for myself. Inside of school, I worked as a TA for
            Khoury&apos;s DS concentration course (DS3000), and previously
            interned at Johnson &amp; Johnson MedTech and Advent International,
            a global private-equity firm. I love working at the intersection of
            code, data, and business, and I&apos;m looking for a Summer 2026
            internship in data science, ML, fintech, or software engineering.
            Take a look around — if anything sparks your interest, I&apos;d love
            to chat.
          </p>
        </header>

        <ResumeNav />

        <div className="resume-content">
          <section id="experience" className="resume-section">
            <Experience data={work} />
          </section>

          <section id="education" className="resume-section">
            <Education data={degrees} />
          </section>

          <section id="skills" className="resume-section">
            <Skills skills={skills} categories={categories} />
          </section>

          <section id="courses" className="resume-section">
            <Courses data={courses} />
          </section>

          <section id="references" className="resume-section">
            <References />
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}
