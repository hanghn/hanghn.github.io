import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://www.linkedin.com/in/amberhang/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://github.com/hanghn',
    label: 'GitHub',
    icon: faGithub,
  },
  {
    link: 'mailto:hanghn559@gmail.com',
    label: 'Personal Email',
    icon: faEnvelope,
  },
  {
    link: 'mailto:hang.h@northeastern.edu',
    label: 'Northeastern Email',
    icon: faEnvelope,
  },
];

export default data;
