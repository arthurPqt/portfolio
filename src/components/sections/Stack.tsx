"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiDirectus,
  SiGit,
  SiFigma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

interface Technology {
  name: string;
  icon: IconType;
  category: "frontend" | "backend" | "tools";
}

const technologies: Technology[] = [
  { name: "Next.js", icon: SiNextdotjs, category: "frontend" },
  { name: "React", icon: SiReact, category: "frontend" },
  { name: "Tailwind", icon: SiTailwindcss, category: "frontend" },

  { name: "PHP", icon: SiPhp, category: "backend" },
  { name: "MySQL", icon: SiMysql, category: "backend" },
  { name: "Directus", icon: SiDirectus, category: "backend" },

  { name: "Git", icon: SiGit, category: "tools" },
  { name: "VS Code", icon: VscVscode, category: "tools" },
  { name: "Figma", icon: SiFigma, category: "tools" },
];

const categoryLabels: Record<string, string> = {
  frontend: "Front-end",
  backend: "Back-end",
  tools: "Outils",
};

export default function Stack() {
  const categories = {
    frontend: technologies.filter((t) => t.category === "frontend"),
    backend: technologies.filter((t) => t.category === "backend"),
    tools: technologies.filter((t) => t.category === "tools"),
  };

  return (
    <section id="stack" className="py-24 flex justify-center px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center font-mono text-sm font-semibold text-accent tracking-wide mb-4"
      >
        01 . STACK TECHNIQUE
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-syne font-bold text-3xl md:text-4xl text-dark text-center mb-16"
      >
        Les technologies que j&apos;utilise au quotidien
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col md:flex-row justify-center gap-16 md:gap-24 lg:gap-32"
      >
        {Object.entries(categories).map(([category, items]) => (
          <div key={category} className="text-center">
            <h3 className="font-syne font-semibold text-accent mb-6">
              {categoryLabels[category]}
            </h3>
            <div className="flex justify-center gap-8">
              {items.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center gap-2">
                  <tech.icon className="text-3xl text-dark" />
                  <span className="font-dm text-sm text-grey">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
      </div>
    </section>
  );
}
