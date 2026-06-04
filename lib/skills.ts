import {
  siC,
  siCplusplus,
  siPython,
  siJava,
  siJavascript,
  siHtml5,
  siCss3,
  siBootstrap,
  siReact,
  siSpringboot,
  siNodedotjs,
  siMysql,
  siMongodb,
  siGit,
  siGithub
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
  tagline
});

export const SKILLS_GRID: readonly (readonly SkillIcon[])[] = [
  [
    mapTagline(siC, "The mother of all languages."),
    mapTagline(siCplusplus, "Object-oriented powerhouse."),
    mapTagline(siPython, "Reads like English, scales like a rocket."),
    mapTagline(siJava, "Write once, run anywhere."),
    mapTagline(siJavascript, "The web's native language.")
  ],
  [
    mapTagline(siHtml5, "The bones of any web page."),
    mapTagline(siCss3, "What separates good from beautiful."),
    mapTagline(siBootstrap, "Responsive design made easy."),
    mapTagline(siReact, "Components, components, components."),
    mapTagline(siNodedotjs, "JavaScript on the server.")
  ],
  [
    mapTagline(siSpringboot, "Enterprise Java made fast and simple."),
    mapTagline(siMysql, "Classic relational data storage."),
    mapTagline(siMongodb, "Flexible NoSQL document database."),
    mapTagline(siGit, "History and time machine for code."),
    mapTagline(siGithub, "Where the world builds software.")
  ],
] as const;

export const SKILLS_FLAT: readonly SkillIcon[] = SKILLS_GRID.flat();
