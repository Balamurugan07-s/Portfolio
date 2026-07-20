import {
  siC,
  siPython,
  siJavascript,
  siHtml5,
  siCss,
  siReact,
  siFastapi,
  siSpringboot,
  siNodedotjs,
  siExpress,
  siMysql,
  siPostgresql,
  siMongodb,
  siDocker,
  siKubernetes,
} from "simple-icons";

export type SkillIcon = {
  title: string;
  slug: string;
  path: string;
  hex: string;
  tagline?: string;
};

const mapTagline = (icon: any, tagline: string): SkillIcon => ({
  ...icon,
  tagline,
});

export const SKILLS_GRID: readonly (readonly SkillIcon[])[] = [
  [
    mapTagline(siC, "Low-level performance & system memory."),
    mapTagline(siPython, "Reads like English, scales like a rocket."),
    mapTagline(siJavascript, "The web's native interactive language."),
    mapTagline(siHtml5, "The foundational structure of the web."),
    mapTagline(siCss, "What separates good from beautiful."),
  ],
  [
    mapTagline(siReact, "Modern component-driven UI library."),
    mapTagline(siFastapi, "High-performance Python microservices & REST APIs."),
    mapTagline(siSpringboot, "Enterprise Java made fast, robust & simple."),
    mapTagline(siNodedotjs, "Server-side JavaScript runtime engine."),
    mapTagline(siExpress, "Minimalist web framework for Node.js."),
  ],
  [
    mapTagline(siMysql, "Classic relational database management system."),
    mapTagline(siPostgresql, "Advanced open-source relational database."),
    mapTagline(siMongodb, "Flexible document-based NoSQL store."),
    mapTagline(siDocker, "Standard for software containerization."),
    mapTagline(siKubernetes, "Production-grade container orchestration."),
  ],
] as const;

export const SKILLS_FLAT: readonly SkillIcon[] = SKILLS_GRID.flat();

