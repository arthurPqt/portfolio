"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projets() {
  return (
    <section id="projects" className="py-20 px-6 sm:px-12 md:px-16 lg:px-24">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center font-mono text-sm font-semibold text-accent tracking-wide mb-4"
      >
        02 . MES PROJETS
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-syne font-bold text-3xl md:text-4xl text-dark text-center mb-16"
      >
        Ce que j&apos;ai réalisé
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-grey-border/30 rounded-lg p-6 flex flex-col"
          >
            <div className="bg-grey-border/50 h-32 rounded-md mb-6 flex items-center justify-center">
              <span className="text-4xl text-grey-light">📦</span>
            </div>

            <h3 className="font-syne font-bold text-lg text-dark mb-3">
              {project.title}
            </h3>
            <p className="font-dm text-sm text-grey mb-6 flex-grow leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs bg-grey-border/50 text-grey px-3 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  className="font-dm font-medium text-sm text-white bg-accent hover:bg-accent-hover transition-colors px-4 py-2 rounded-md"
                >
                  GitHub →
                </Link>
              )}
              {project.status === "wip" && (
                <>
                  <span className="font-dm text-sm text-dark bg-accent-light px-4 py-2 rounded-md">
                    Bientôt disponible
                  </span>
                  <span className="font-dm text-sm text-white bg-grey-light px-4 py-2 rounded-md">
                    En cours
                  </span>
                </>
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
