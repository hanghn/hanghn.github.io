export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: 'S&P 500 ESG Risk & Valuation ML Pipeline',
    subtitle:
      'OLS, Polynomial Regression, PCA, K-Means — from scratch in NumPy',
    image: '/images/projects/sp500-esg.jpg',
    date: '2025-04-01',
    desc: 'Implemented Ordinary Least Squares and polynomial regression from scratch in NumPy via the normal equation on a 100-company S&P 500 dataset (Yahoo Finance API + BeautifulSoup), validated with hand-rolled Leave-One-Out Cross Validation (MSE, R², residual plots). Used PCA (>90% variance retained) and K-Means (k=4) to segment firms into interpretable ESG-financial risk tiers. Co-authored the final report with a 4-person team.',
    tech: ['Python', 'NumPy', 'pandas', 'BeautifulSoup', 'PCA', 'K-Means'],
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
    image: '/images/projects/digital-systems.jpg',
    date: '2024-11-01',
    desc: 'Two hardware projects: (1) a railroad crossing controller FSM on an FPGA with minimized state logic and alternating flashing signals driven by a counter-based timing circuit; (2) a compact single-cycle RISC-V processor with instruction fetch, decode, execute, and register writeback, validated against manually traced register results.',
    tech: ['FPGA', 'RISC-V', 'Verilog', 'FSM', 'Digital Logic'],
  },
];

export default data;
