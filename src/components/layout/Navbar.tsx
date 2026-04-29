"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Stack",    href: "#stack"      },
  { label: "Projects", href: "#projects"   },
  { label: "About",    href: "#about"      },
  { label: "Contact",  href: "#contact"    },
];

export default function Navbar() {
  const [isOpen,     setIsOpen]     = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled
        ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-grey-border"
        : "bg-transparent"
    )}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="font-syne font-extrabold text-xl text-dark tracking-tight hover:text-accent transition-colors"
        >
          AP
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-dm text-sm text-grey hover:text-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/cv-arthur-picquot.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm text-sm font-medium text-white bg-accent hover:bg-accent-hover transition-colors px-4 py-2 rounded-md"
          >
            Mon CV
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-dark"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-grey-border px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-syne font-semibold text-lg text-dark hover:text-accent transition-colors border-b border-grey-border pb-4"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/cv-arthur-picquot.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm text-sm font-medium text-white bg-accent hover:bg-accent-hover transition-colors px-4 py-3 rounded-md text-center mt-2"
          >
            Mon CV
          </a>
        </div>
      )}
    </header>
  );
}