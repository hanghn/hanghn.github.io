import { AUTHOR_NAME } from '@/lib/utils';

export default function Footer() {
  return (
    <footer className="site-footer-new">
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} {AUTHOR_NAME}
      </p>
    </footer>
  );
}
