import dayjs from 'dayjs';

import type { Position } from '@/data/resume/work';

import JobSummary from './JobSummary';

interface JobProps {
  data: Position;
}

export default function Job({ data }: JobProps) {
  const { name, position, url, startDate, endDate, summary, highlights, logo } =
    data;

  return (
    <article className="jobs-container">
      <div className="job-layout">
        {logo ? (
          <div className="job-logo">
            {/* biome-ignore lint/performance/noImgElement: Static export, avoid next/image runtime */}
            <img src={logo} alt={`${name} logo`} width={48} height={48} />
          </div>
        ) : null}
        <div className="job-body">
          <header>
            <h4>
              <a href={url}>{name}</a> - {position}
            </h4>
            <p className="daterange">
              {' '}
              <time dateTime={startDate}>
                {dayjs(startDate).format('MMMM YYYY')}
              </time>{' '}
              -{' '}
              {endDate ? (
                <time dateTime={endDate}>
                  {dayjs(endDate).format('MMMM YYYY')}
                </time>
              ) : (
                'Present'
              )}
            </p>
          </header>
          {summary ? <JobSummary summary={summary} /> : null}
          {highlights ? (
            <ul className="points">
              {highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </article>
  );
}
