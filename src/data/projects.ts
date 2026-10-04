export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image?: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: 'What Makes a Persuasive Argument on Reddit?',
    subtitle: 'In progress · NLP · TF-IDF + LR, BiLSTM, RoBERTa',
    date: '2026-12-01',
    desc: 'Currently working on this: given two replies to an r/ChangeMyView post, predict which one earned more upvotes, using about 41,000 comment pairs from the Stanford Human Preferences dataset. Compares TF-IDF with logistic regression, a BiLSTM, and a fine-tuned RoBERTa, and tests whether each model learns argument quality or shortcuts like comment length.',
    tech: ['Python', 'PyTorch', 'scikit-learn', 'Hugging Face'],
    featured: true,
  },
  {
    title: 'Exoplanet Classifier',
    subtitle: 'NASA Kepler dataset · Gradient Boosting · PyTorch RNNs',
    link: 'https://github.com/hanghn/Exoplanet-Classifier',
    image: '/images/projects/exoplanet-transit.jpg',
    date: '2026-06-01',
    desc: 'Built an end-to-end ML pipeline classifying 6,640 NASA Kepler light curves using from-scratch Gradient Boosting and PyTorch RNNs, achieving 0.969 ROC-AUC, evaluated with cross-validation and ROC-AUC comparison across models. Constructed scalable pipelines for feature extraction and candidate generation, improved RNN performance through preprocessing and hyperparameter tuning, and developed evaluation visualizations to compare model performance.',
    tech: ['Python', 'PyTorch', 'Gradient Boosting', 'RNNs'],
    featured: true,
  },
  {
    title: 'PlayNexus — Multiplayer Web Gaming Platform',
    subtitle: 'React · TypeScript · Socket.io · Supabase',
    link: 'https://github.com/hanghn/PlayNexus',
    image: '/images/projects/playnexus.png',
    date: '2026-08-01',
    desc: 'Designed full-stack Cribbage (Node/TypeScript, Supabase, Socket.io, React) with a configurable AI opponent, backed by a GitHub Actions CI/CD pipeline (ESLint, Prettier, Vitest, Playwright) and ~95% branch coverage. Engineered the React UI to WCAG standards with keyboard-navigable card selection, ARIA live regions for score updates, and screen-reader-friendly card labels.',
    tech: [
      'TypeScript',
      'React',
      'Node.js',
      'Supabase',
      'Socket.io',
      'Playwright',
    ],
    featured: true,
  },
  {
    title: 'Sanguine — Strategy Card Game',
    subtitle: 'Java · MVC · heuristic AI',
    image: '/images/projects/sanguine.png',
    date: '2025-03-01',
    desc: "A configurable two-player strategy card game inspired by Queen's Blood, built in Java over a ~6-week multi-phase semester project. Implemented board-state updates, scoring, turn-based gameplay, and file-driven deck management. Designed with MVC and interface-based abstractions for modularity, plus heuristic-driven AI players for card placement and row-score optimization.",
    tech: ['Java', 'MVC', 'OOD', 'JUnit', 'AI Heuristics'],
    featured: true,
  },
  {
    title: 'Unix Shell',
    subtitle: 'C · fork/exec · pipes · I/O redirection',
    image: '/images/projects/unix-shell.png',
    date: '2024-12-01',
    desc: 'Built a Unix shell from scratch in C with command parsing, process creation (fork/exec), I/O redirection, pipes, sequential execution, and built-in commands (cd, source, prev, help). Implemented using low-level system calls and validated with Valgrind for memory management.',
    tech: ['C', 'Linux', 'System Calls', 'Valgrind'],
  },
  {
    title: 'Digital Systems Design Projects',
    subtitle: 'FPGA · FSM · Single-Cycle RISC-V Processor',
    image: '/images/projects/digital-systems.png',
    date: '2024-11-01',
    desc: 'Two hardware projects: (1) a railroad crossing controller FSM on an FPGA with minimized state logic and alternating flashing signals driven by a counter-based timing circuit; (2) a compact single-cycle RISC-V processor with instruction fetch, decode, execute, and register writeback, validated against manually traced register results.',
    tech: ['FPGA', 'RISC-V', 'Verilog', 'FSM', 'Digital Logic'],
  },
];

export default data;
