export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
  /** Pre-computed text color for contrast - 'dark' for light backgrounds, 'light' for dark */
  textColor: 'dark' | 'light';
}

const skills: Skill[] = [
  // Programming & Technologies
  {
    title: 'Python',
    competency: 5,
    category: ['Programming & Technologies'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Programming & Technologies'],
  },
  {
    title: 'C',
    competency: 4,
    category: ['Programming & Technologies'],
  },
  {
    title: 'TypeScript / JavaScript',
    competency: 4,
    category: ['Programming & Technologies'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Programming & Technologies'],
  },
  {
    title: 'Vitest',
    competency: 4,
    category: ['Programming & Technologies'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Programming & Technologies'],
  },
  {
    title: 'Node.js',
    competency: 4,
    category: ['Programming & Technologies'],
  },
  {
    title: 'Linux (Ubuntu)',
    competency: 4,
    category: ['Programming & Technologies'],
  },
  {
    title: 'Socket.io',
    competency: 4,
    category: ['Programming & Technologies'],
  },
  {
    title: 'Supabase',
    competency: 4,
    category: ['Programming & Technologies'],
  },
  {
    title: 'x86 & RISC-V Assembly',
    competency: 3,
    category: ['Programming & Technologies'],
  },
  {
    title: 'Data Encoding / Decoding',
    competency: 4,
    category: ['Programming & Technologies'],
  },
  // Machine Learning & Data
  {
    title: 'PyTorch',
    competency: 4,
    category: ['Machine Learning & Data'],
  },
  {
    title: 'Regression (Logistic, Polynomial, Ridge/Lasso)',
    competency: 4,
    category: ['Machine Learning & Data'],
  },
  {
    title: 'Gradient Boosting',
    competency: 4,
    category: ['Machine Learning & Data'],
  },
  {
    title: 'RNNs',
    competency: 4,
    category: ['Machine Learning & Data'],
  },
  {
    title: 'Feature Engineering',
    competency: 4,
    category: ['Machine Learning & Data'],
  },
  // Software Engineering
  {
    title: 'Object-Oriented Design',
    competency: 4,
    category: ['Software Engineering'],
  },
  {
    title: 'Design Patterns',
    competency: 4,
    category: ['Software Engineering'],
  },
  {
    title: 'Unit & Integration Testing',
    competency: 4,
    category: ['Software Engineering'],
  },
  {
    title: 'TDD',
    competency: 4,
    category: ['Software Engineering'],
  },
  {
    title: 'Refactoring',
    competency: 4,
    category: ['Software Engineering'],
  },
  {
    title: 'HTTP / REST APIs',
    competency: 4,
    category: ['Software Engineering'],
  },
  {
    title: 'CI/CD',
    competency: 4,
    category: ['Software Engineering'],
  },
  {
    title: 'Agile',
    competency: 4,
    category: ['Software Engineering'],
  },
  // Systems & Hardware
  {
    title: 'Digital Logic Design',
    competency: 4,
    category: ['Systems & Hardware'],
  },
  {
    title: 'Instruction Set Architecture',
    competency: 3,
    category: ['Systems & Hardware'],
  },
  {
    title: 'Memory Systems',
    competency: 3,
    category: ['Systems & Hardware'],
  },
  {
    title: 'FPGA Development',
    competency: 3,
    category: ['Systems & Hardware'],
  },
  {
    title: 'ALU Implementation',
    competency: 4,
    category: ['Systems & Hardware'],
  },
  {
    title: 'Digital Circuit Simulation',
    competency: 4,
    category: ['Systems & Hardware'],
  },
  {
    title: 'Performance Optimization',
    competency: 4,
    category: ['Systems & Hardware'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

/**
 * Category colors with pre-computed text contrast.
 * Uses CSS custom properties defined in tailwind.css for runtime styling,
 * with textColor pre-computed from the hex values for accessibility.
 *
 * Hex values from tailwind.css @theme block:
 * --color-skill-1: #6968b3, --color-skill-2: #37b1f5, --color-skill-3: #40494e
 * --color-skill-4: #515dd4, --color-skill-5: #e47272, --color-skill-6: #cc7b94
 */
const CATEGORY_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: 'var(--color-skill-1)', textColor: 'light' }, // #6968b3 - dark bg
  { color: 'var(--color-skill-2)', textColor: 'dark' }, // #37b1f5 - light bg
  { color: 'var(--color-skill-5)', textColor: 'dark' }, // #e47272 - light bg
  { color: 'var(--color-skill-4)', textColor: 'light' }, // #515dd4 - dark bg
  { color: 'var(--color-skill-3)', textColor: 'light' }, // #40494e - dark bg
  { color: 'var(--color-skill-6)', textColor: 'dark' }, // #cc7b94 - light bg
];

// Fallback colors for categories beyond the predefined set (with pre-computed contrast)
const FALLBACK_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: '#3896e2', textColor: 'dark' },
  { color: '#c3423f', textColor: 'light' },
  { color: '#d75858', textColor: 'light' },
  { color: '#747fff', textColor: 'light' },
  { color: '#64cb7b', textColor: 'dark' },
];

/**
 * Build categories from skills with type-safe color assignment.
 * Logs a warning in development if there are more categories than colors.
 */
function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  const allColors = [...CATEGORY_COLORS, ...FALLBACK_COLORS];

  if (
    process.env.NODE_ENV === 'development' &&
    uniqueCategories.length > allColors.length
  ) {
    console.warn(
      `[skills.ts] Warning: ${uniqueCategories.length} categories but only ${allColors.length} colors defined`,
    );
  }

  return uniqueCategories.map((category, index) => {
    const colorConfig = allColors[index] ?? {
      color: '#888888',
      textColor: 'light' as const,
    };
    return {
      name: category,
      color: colorConfig.color,
      textColor: colorConfig.textColor,
    };
  });
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
