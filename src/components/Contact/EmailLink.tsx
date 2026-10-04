interface EmailLinkProps {
  label: string;
  email: string;
}

export default function EmailLink({ label, email }: EmailLinkProps) {
  const [prefix, domain] = email.split('@');

  return (
    <div className="contact-email-container">
      <span className="contact-email-label">{label}:</span>
      <a href={`mailto:${email}`} className="contact-email-link">
        <span className="contact-email-prefix">{prefix}</span>
        <span className="contact-email-domain">@{domain}</span>
      </a>
    </div>
  );
}
