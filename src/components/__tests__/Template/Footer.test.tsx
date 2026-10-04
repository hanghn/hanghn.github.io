import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { AUTHOR_NAME } from '@/lib/utils';

import Footer from '../../Template/Footer';

describe('Footer', () => {
  it('renders the footer with correct structure', () => {
    render(<Footer />);

    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('shows only the copyright line', () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    expect(screen.getByRole('contentinfo')).toHaveTextContent(
      new RegExp(`^© ${currentYear} ${AUTHOR_NAME}$`),
    );
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
