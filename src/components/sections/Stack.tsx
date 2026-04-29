"use client";

import { motion } from "framer-motion";

interface Technology {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools";
}

const technologies: Technology[] = [
  { name: "Next.js", icon: "▲", category: "frontend" },
  { name: "React", icon: "⚛", category: "frontend" },
  { name: "Tailwind", icon: "🎨", category: "frontend" },

  { name: "PHP", icon: "🐘", category: "backend" },
  { name: "MySQL", icon: "🗄", category: "backend" },
  { name: "Directus", icon: "📊", category: "backend" },

  { name: "Git", icon: "🔀", category: "tools" },
  { name: "VS Code", icon: "💻", category: "tools" },
  { name: "Figma", icon: "✏️", category: "tools" },
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
    <section id="stack" className="py-20 px-6 sm:px-12 md:px-16 lg:px-24">
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
                  <span className="text-3xl">{tech.icon}</span>
                  <span className="font-dm text-sm text-grey">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
