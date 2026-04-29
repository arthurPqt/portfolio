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
    <section id="contact" className="py-20 px-6 sm:px-12 md:px-16 lg:px-24">
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

        <div className="flex justify-center gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 font-dm text-sm text-accent hover:text-accent-hover transition-colors"
            >
              <link.icon size={18} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
