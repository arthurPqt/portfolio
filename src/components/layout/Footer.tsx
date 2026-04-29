import Link from "next/link";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/arthurPqt", icon: "🐙" },
  { label: "LinkedIn", href: "https://linkedin.com/in/arthurpicquot", icon: "💼" },
  { label: "Email", href: "mailto:arthurpicquot2004@gmail.com", icon: "✉️" },
];

export default function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 sm:px-12 md:px-16 lg:px-24 border-t border-grey-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-mono text-sm font-semibold text-dark tracking-wide uppercase mb-8">
          Retrouvez-moi sur
        </p>

        <div className="flex justify-center gap-8 mb-12">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-dm text-sm text-accent hover:text-accent-hover transition-colors"
            >
              <span>{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </div>

        <p className="font-dm text-sm text-grey">
          © {new Date().getFullYear()} Arthur Picquot – Développeur Full-Stack
        </p>
      </div>
    </footer>
  );
}
