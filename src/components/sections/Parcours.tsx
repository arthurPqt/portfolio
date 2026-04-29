"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    year: "2024",
    title: "Développeur web - Stage",
    company: "IFWECODE Rouen, France",
    description:
      "Réalisation d'un site immobilier complet en conditions professionnelles. Affichage dynamique des biens depuis une base de données Directus. Filtres de recherche et design responsive.",
    skills: ["Next.js", "Tailwind CSS", "Directus", "JSX"],
  },
  {
    year: "2022",
    title: "Formation Développeur Web & Web Mobile",
    company: "Studi En Ligne 2022 – 2024",
    description:
      "Formation certifiante de niveau Bac+2. Apprentissage des fondamentaux du développement web front-end et back-end, avec réalisation de projets concrets dont l'ECF de certification.",
    skills: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
  },
];

export default function Parcours() {
  return (
    <section id="about" className="py-20 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center font-mono text-sm font-semibold text-accent tracking-wide mb-4"
        >
          03 . PARCOURS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-syne font-bold text-3xl md:text-4xl text-dark text-center mb-16"
        >
          Mon expérience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center shrink-0">
                <span className="font-syne font-semibold text-lg text-accent">
                  {exp.year}
                </span>
                {index !== experiences.length - 1 && (
                  <div className="w-0.5 h-full bg-accent mt-4" />
                )}
              </div>

              <div className="pb-8">
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-syne font-semibold text-lg text-dark">
                    {exp.title}
                  </h3>
                  <p className="font-dm text-sm text-grey mt-1">{exp.company}</p>
                  <p className="font-dm text-sm text-grey leading-relaxed mt-3">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-xs bg-grey-border/50 text-grey px-3 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <a
            href="/cv-arthur-picquot.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm font-medium text-sm text-white bg-accent hover:bg-accent-hover transition-colors px-6 py-3 rounded-md"
          >
            Mon CV →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
