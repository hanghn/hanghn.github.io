import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '@/data/contact';

// Email addresses are written out above the icons, so only link profiles here
const profiles = data.filter((s) => !s.link.startsWith('mailto:'));

export default function ContactIcons() {
  return (
    <ul className="icons">
      {profiles.map((s) => (
        <li key={s.label}>
          <a
            href={s.link}
            aria-label={`${s.label} (opens in new tab)`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={s.icon} className="size-8" />
          </a>
        </li>
      ))}
    </ul>
  );
}
