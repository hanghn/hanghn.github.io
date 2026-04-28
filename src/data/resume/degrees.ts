export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'Northeastern University — Khoury College of Computer Sciences',
    degree:
      "B.S. Computer Science and Business Administration — Expected April 2027 · GPA 3.64 · Dean's List",
    link: 'https://www.khoury.northeastern.edu',
    year: 2027,
  },
];

export default degrees;
