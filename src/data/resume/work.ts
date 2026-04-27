/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Northeastern University — Khoury College',
    position: 'TA, Foundations of Data Science (DS3000)',
    url: 'https://www.khoury.northeastern.edu',
    startDate: '2025-07-01',
    endDate: '2025-08-01',
    summary: `Teaching assistant for a required Data Science concentration course
    in Khoury's accelerated Summer 2 format, supporting 60+ students through Python-based data analysis,
    NumPy, pandas, classification/regression, and KNN.`,
    highlights: [
      'Graded weekly quizzes and provided detailed feedback to reinforce student understanding of pandas, NumPy, data cleaning, and intro ML.',
      'Ran weekly office hours, clarifying course concepts and collaborating with fellow TAs to improve student learning.',
    ],
  },
  {
    name: 'Johnson & Johnson MedTech',
    position: 'Orthopedics Offer Development (OOD) Analyst Intern',
    url: 'https://www.jnj.com',
    startDate: '2025-01-01',
    endDate: '2025-06-01',
    summary: `Worked on the DePuy Synthes orthopedics business in Raynham, MA — a mix of contract analytics,
    Python automation, and business-strategy deliverables.`,
    highlights: [
      "Analyzed J&J's customer hierarchy and contract strategies across 10+ parent and 50+ standalone DePuy Synthes contracts to reconcile billing and ensure invoicing accuracy.",
      'Developed an Excel dashboard comparing price erosion to sales growth on key DePuy platforms to drive margin-recovery insights.',
      'Built a Python automation pipeline that batch-processed ~1,200 customer directories and used pattern matching to retrieve Requests for Proposals, reducing quote preparation time by 30%.',
      'Led creation of an ~80-page Ethicon business overview deck across all key surgical platforms, coordinating marketing-partner interviews to accelerate new-hire ramp-up.',
      'Engineered an Excel ETL pipeline consolidating 4+ disparate workbooks into a 4M+ data-point master and automating leadership reorg updates.',
    ],
  },
  {
    name: 'Advent International',
    position: 'Deal Cost Accounting Intern',
    url: 'https://www.adventinternational.com',
    startDate: '2024-02-01',
    endDate: '2024-06-01',
    summary: `Supported the Deal Cost team at a global private-equity firm with recurring and ad-hoc operations,
    audit prep, and reporting.`,
    highlights: [
      'Ran CRM deal status and deal-cost reports, processed vouchers/invoices, prepared 200+ monthly cash entries, and recorded $300k+ in check deposits.',
      'Streamlined audit prep by organizing 200+ bank statements, reconciling 20+ accounts, and cleaning up $10k in deal costs.',
      'Partnered with senior leadership in weekly team and monthly corporate meetings to review monthly close items and improve the finance pipeline.',
    ],
  },
  {
    name: 'Northeastern University — NU Global Pathway Program',
    position: 'Global Student Ambassador',
    url: 'https://www.northeastern.edu',
    startDate: '2022-08-01',
    endDate: '2025-04-01',
    highlights: [
      'Helped 200+ international students adjust to Northeastern through personal and career guidance.',
      'Collaborated with 30 GSAs to organize semester events including orientation, cultural excursions, academic sessions, and co-op panels.',
    ],
  },
];

export default work;
