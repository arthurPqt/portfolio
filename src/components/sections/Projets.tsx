"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Projects } from "@/data/projects";
interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  status?: "available" | "in-progress";
}

const projects: Project[] = [
  {
    id: "1",
    title: "Site immobilier - IFWECODE",
    description:
      "Site immobilier dynamique réalisé en stage. Affiche des biens depuis une BDD Directus.",
    technologies: ["Next.js", "Tailwind", "Directus"],
    githubUrl: "#",
    status: "available",
  },
  {
    id: "2",
    title: "ECF - Gestion de véhicules",
    description:
      "Site de certification réalisé en formation. PHP vanilla & MySQL.",
    technologies: ["PHP", "MySQL", "HTML"],
    githubUrl: "#",
    status: "available",
  },
  {
    id: "3",
    title: "Portfolio Personnel",
    description:
      "Portfolio full-stack avec blog et back-office. En cours de développement.",
    technologies: ["Next.js", "Tailwind", "Prisma"],
    liveUrl: "#",
    status: "in-progress",
  },
];

export default function Projets() {
  return (
    <section className="py-0 md:py-20 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="min-h-auto flex flex-col items-center justify-center px-6 mt-10 sm:px-12 md:px-16 lg:px-24 pt-20 text-center">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-extrabold text-6xl md:text-8xl text-dark leading-none  mb-4"
          >
            <p className="text-green-600 text-sm text-center font-semibold mb-2">
              02 . MES PROJETS
            </p>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-extrabold text-6xl md:text-8xl text-dark leading-none  mb-4"
          >
            <p className="text-4xl font-bold text-gray-900">
              Ce que j'ai réalisé
            </p>
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-200 rounded-lg p-8 flex flex-col"
              >
                <div className="bg-gray-300 h-32 rounded mb-6 flex items-center justify-center">
                  <div className="text-4xl text-gray-400">📦</div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-300 text-gray-700 px-3 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      className="bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-green-700"
                    >
                      GitHub →
                    </Link>
                  )}
                  {project.status === "in-progress" && (
                    <span className="bg-gray-400 text-white text-sm px-4 py-2 rounded">
                      En cours
                    </span>
                  )}
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      className="bg-yellow-300 text-gray-900 text-sm font-semibold px-4 py-2 rounded hover:bg-yellow-400"
                    >
                      Voir le site
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
