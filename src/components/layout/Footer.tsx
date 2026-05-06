"use client";

import { ArrowUp } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-deep text-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-dm text-sm text-grey-light text-center md:text-left">
            © {currentYear} Arthur Picquot – Développeur Full-Stack
          </p>

          <div className="flex gap-6 items-center">
            <a
              href="https://github.com/arthurPqt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-grey-light hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <SiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/arthurpicquot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-grey-light hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="text-grey-light hover:text-white transition-colors"
            aria-label="Retour vers le haut"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
