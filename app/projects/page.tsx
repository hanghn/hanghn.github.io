import type { Metadata } from 'next';

import Cell from '@/components/Projects/Cell';
import PageWrapper from '@/components/Template/PageWrapper';
import data from '@/data/projects';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Projects',
  description:
    'Technical projects by Hang (Amber) Hang — ML pipelines, Java OOD, C systems, and FPGA hardware design.',
  path: '/projects/',
});

export default function ProjectsPage() {
  return (
    <PageWrapper mainClassName="page-main--wide">
      <section className="projects-page">
        <header className="projects-header">
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">
            Some of the projects and experiments from my student years
          </p>
        </header>

        <div className="win-panel">
          <div className="win-panel-titlebar">PROJECTS.EXE</div>
          <div className="win-panel-body">
            <div className="projects-grid">
              {data.map((project) => (
                <Cell data={project} key={project.title} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
