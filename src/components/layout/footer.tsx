'use client';

import { QrCode, Link2, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-700 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-center md:text-left text-sm">
            © {currentYear} Arthur Picquot – Développeur Full-Stack
          </div>

          {/* Social Links */}
          <div className="flex gap-6 items-center">
            <a
              href="https://linkedin.com/in/arthurpicquot"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
              aria-label="LinkedIn"
            >
              <Link2 size={24} />
            </a>
            <a
              href="https://github.com/arthurpicquot"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
              aria-label="GitHub"
            >
              <QrCode size={24} />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="hover:opacity-75 transition-opacity"
            aria-label="Retour vers le haut"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
}
