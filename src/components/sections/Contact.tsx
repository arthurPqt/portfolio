"use client";

import { motion } from "framer-motion";
import { GitFork, Link2, Mail } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/arthurPqt",
    icon: GitFork,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/arthurpicquot",
    icon: Link2,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:arthurpicquot2004@gmail.com",
    icon: Mail,
    external: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 sm:px-12 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto text-center"
      >
        <p className="font-mono text-sm font-semibold text-dark tracking-wide uppercase mb-8">
          Retrouvez-moi sur
        </p>

        <div className="flex flex-col items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 font-dm text-sm text-accent hover:text-accent-hover transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-accent-light flex items-center justify-center">
                <link.icon size={16} className="text-accent" />
              </span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
