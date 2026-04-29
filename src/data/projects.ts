export type Project = {
  id:          string;
  title:       string;
  description: string;
  stack:       string[];
  githubUrl?:  string;
  liveUrl?:    string;
  status:      "live" | "wip" | "soon";
};

export const projects: Project[] = [
  {
    id:          "site-immobilier",
    title:       "Site Immobilier — IFWECODE",
    description: "Site immobilier dynamique réalisé en stage. Affichage des biens depuis une base de données Directus.",
    stack:       ["Next.js", "Tailwind", "Directus", "JSX"],
    githubUrl:   "https://github.com/arthurPqt/Site-stage-IFWECODE",
    status:      "live",
  },
  {
    id:          "ecf",
    title:       "ECF — Gestion de véhicules",
    description: "Site de certification réalisé en formation. PHP vanilla & MySQL.",
    stack:       ["PHP", "MySQL", "HTML", "CSS"],
    githubUrl:   "https://github.com/arthurPqt/ECF",
    status:      "live",
  },
  {
    id:          "portfolio",
    title:       "Portfolio Personnel",
    description: "Portfolio full-stack avec blog et back-office. En cours de développement.",
    stack:       ["Next.js", "Tailwind", "Prisma", "TypeScript"],
    status:      "wip",
  },
];