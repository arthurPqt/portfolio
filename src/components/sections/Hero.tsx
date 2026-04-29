"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 md:px-16 lg:px-24 pt-20 text-center">
      {/* Badge disponible */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-2 mb-6"
      >
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="font-mono text-s tracking-widest text-accent uppercase">
          Disponible
        </span>
      </motion.div>

      {/* Titre principal */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-syne font-extrabold text-6xl md:text-8xl text-dark leading-none tracking-tight mb-4"
      >
        Arthur Picquot.
      </motion.h1>

      {/* Sous-titre */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-syne font-semibold text-2xl md:text-3xl text-dark/50 mb-6"
      >
        Développeur <span className="text-accent">Full-Stack</span>
      </motion.p>

      {/* Accroche */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="font-dm text-base text-grey max-w-md mx-auto mb-10 leading-relaxed"
      >
        Passionné par le web, je conçois des interfaces modernes et des
        back-ends robustes. Disponible pour de nouvelles opportunités.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col sm:flex-row justify-center gap-4"
      >
        <Link
          href="#projects"
          className="font-dm font-medium text-sm text-white bg-accent hover:bg-accent-hover transition-colors px-6 py-3 rounded-md text-center"
        >
          Voir mes projets →
        </Link>
        <a
          href="/cv-arthur-picquot.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-dm font-medium text-sm text-accent border border-accent hover:bg-accent-light transition-colors px-6 py-3 rounded-md text-center"
        >
          Mon CV ↓
        </a>
      </motion.div>
    </section>
  );
}
