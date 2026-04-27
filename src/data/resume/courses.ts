export interface Course {
  title: string;
  number: string;
  link: string;
  university: string;
}

const NEU = 'Northeastern University';
const NEU_CATALOG = 'https://catalog.northeastern.edu';
const NEU_CATALOG_CS =
  'https://catalog.northeastern.edu/undergraduate/computer-information-science/computer-science/#coursestext';

const courses: Course[] = [
  // Computer Science
  {
    title: 'Discrete Structures',
    number: 'CS 1800',
    link: NEU_CATALOG_CS,
    university: NEU,
  },
  {
    title: 'Fundamentals of CS I',
    number: 'CS 2500',
    link: NEU_CATALOG_CS,
    university: NEU,
  },
  {
    title: 'Fundamentals of CS II',
    number: 'CS 2510',
    link: NEU_CATALOG_CS,
    university: NEU,
  },
  {
    title: 'Object-Oriented Design',
    number: 'CS 3100',
    link: NEU_CATALOG_CS,
    university: NEU,
  },
  {
    title: 'Database Design',
    number: 'CS 3200',
    link: NEU_CATALOG_CS,
    university: NEU,
  },
  {
    title: 'Algorithms and Data',
    number: 'CS 3000',
    link: NEU_CATALOG_CS,
    university: NEU,
  },
  {
    title: 'Computer Systems',
    number: 'CS 3650',
    link: NEU_CATALOG_CS,
    university: NEU,
  },
  // Data Science
  {
    title: 'Intermediate Programming with Data',
    number: 'DS 2500',
    link: NEU_CATALOG,
    university: NEU,
  },
  {
    title: 'Foundations of Data Science',
    number: 'DS 3000',
    link: NEU_CATALOG,
    university: NEU,
  },
  {
    title: 'Advanced Programming with Data',
    number: 'DS 3500',
    link: NEU_CATALOG,
    university: NEU,
  },
  // Electrical & Computer Engineering
  {
    title: 'Intro to Digital Design and Computer Architecture',
    number: 'EECE 2310',
    link: NEU_CATALOG,
    university: NEU,
  },
  // Math
  {
    title: 'Calculus 2 for Science and Engineering',
    number: 'MATH 1342',
    link: NEU_CATALOG,
    university: NEU,
  },
  {
    title: 'Intro to Mathematical Reasoning',
    number: 'MATH 1365',
    link: NEU_CATALOG,
    university: NEU,
  },
  {
    title: 'Linear Algebra',
    number: 'MATH 2331',
    link: NEU_CATALOG,
    university: NEU,
  },
  // Finance
  {
    title: 'Corporate Finance',
    number: 'FINA 3301',
    link: NEU_CATALOG,
    university: NEU,
  },
  {
    title: 'Investment',
    number: 'FINA 3303',
    link: NEU_CATALOG,
    university: NEU,
  },
  // Scheduled
  {
    title: 'Fundamentals of Software Engineering (scheduled)',
    number: 'CS 4530',
    link: NEU_CATALOG_CS,
    university: NEU,
  },
  {
    title: 'Artificial Intelligence (scheduled)',
    number: 'CS 4100',
    link: NEU_CATALOG_CS,
    university: NEU,
  },
];

export default courses;
