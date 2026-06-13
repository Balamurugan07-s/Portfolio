"use client";

import { useState } from "react";
import FrozenKeyboard from "@/components/FrozenKeyboard";
import SmoothScroll from "@/components/smooth-scroll";
import Reveal from "@/components/Reveal";
import SectionNav from "@/components/SectionNav";
import CopyEmail from "@/components/CopyEmail";
import SeasonPicker from "@/components/SeasonPicker";
import ProjectModal, {
  type ProjectDetail,
} from "@/components/ProjectModal";
import { useIsMobile } from "@/lib/useIsMobile";
import { SKILLS_FLAT } from "@/lib/skills";

const EMAIL = "balamurugansubramaniyam333@gmail.com";

type Project = ProjectDetail & {
  align: "left" | "right";
  section: "project1" | "project2" | "project3" | "project4";
};

const projects: Project[] = [
  {
    num: "01",
    name: "NoteStack",
    stack: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "MySQL",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Thymeleaf",
      "Maven",
    ],
    desc: "Student Notes Sharing Platform that enables students to upload, organize, and share academic notes efficiently.",
    details: "Implemented secure user authentication, note management, and categorized content access. Built a centralized platform to improve collaboration and simplify access to study materials.",
    github: "https://github.com/balamurugan-s",
    media: [],
    highlights: ["java", "spring", "mysql", "javascript", "html5", "css"],
    align: "left",
    section: "project1",
  },
  {
    num: "02",
    name: "School Management System",
    stack: [
      "Python",
      "Django",
      "HTML",
      "CSS",
      "Bootstrap",
      "MySQL",
    ],
    desc: "Developed a School Management System to streamline the management of students, teachers, attendance, and academic records.",
    details: "Implemented secure user authentication and role-based access for efficient administration. Built a centralized platform to simplify school operations and improve data management.",
    github: "https://github.com/Balamurugan07-s",
    media: [],
    highlights: ["python", "django", "mysql", "html5", "css"],
    align: "right",
    section: "project2",
  },
];

const education = [
  {
    degree: "B.E. Electronics and Communication Engineering",
    school: "Sri Eshwar College of Engineering",
    period: "2022 - 2026",
    location: "Coimbatore",
    score: "CGPA: 8.12",
  },
  {
    degree: "Higher Secondary (Class XII)",
    school: "Board of Higher Secondary Education",
    period: "2023 - 2024",
    location: "Tamil Nadu",
    score: "92.5%",
  },
  {
    degree: "SSLC (Class X)",
    school: "Board of Secondary Education",
    period: "2021 - 2022",
    location: "Tamil Nadu",
    score: "91.6%",
  }
];

const experiences: Array<{
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  stack: string[];
}> = [
  {
    role: "MERN Stack Intern",
    company: "Internship",
    period: "2025",
    location: "Remote",
    summary: "Worked on full-stack web development using the MERN stack to build dynamic and scalable web applications.",
    bullets: [
      "Developed responsive user interfaces and created RESTful APIs.",
      "Managed database operations and implemented end-to-end application functionality.",
      "Gained hands-on experience in frontend and backend integration, authentication, and deployment of modern web solutions."
    ],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
];

const achievements = [
  {
    title: "Participant – QUBITRON 2K25",
    desc: "Coimbatore Institute of Technology",
    year: "2025"
  },
  {
    title: "Winner – Freshwarites Prelims",
    desc: "ECE Department",
    year: "2024"
  }
];

const profiles = [
  {
    name: "LeetCode",
    stats: "Solved 170+ problems | Rank: 8,64,548",
    url: "https://leetcode.com/balamurugan_s"
  },
  {
    name: "HackerRank",
    stats: "2 Star Python, 2 Star Java, 1 Star SQL",
    url: "https://hackerrank.com/"
  },
  {
    name: "SkillRack",
    stats: "Solved 900+ problems | 240+ Bronzes | Rank: 23,728",
    url: "https://skillrack.com/"
  }
];

// Hero name split per word so each can rise independently. Whitespace
// preserved as its own span so the line wraps naturally if needed.
function HeroWord({
  text,
  delay,
  className = "",
}: {
  text: string;
  delay: number;
  className?: string;
}) {
  return (
    <span className={`hero-word ${className}`}>
      <span style={{ animationDelay: `${delay}ms` }}>{text}</span>
    </span>
  );
}

export default function Home() {
  const isMobile = useIsMobile();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <SmoothScroll>
      <div className="relative">
        {/* Desktop: persistent 3D scene fullscreen behind content. On mobile
            the canvas lives inside the hero instead (see below) so it scrolls
            away and the rest of the page is clean, fast 2D. */}
        {!isMobile && (
          <div className="fixed inset-0 z-0">
            <FrozenKeyboard />
          </div>
        )}

        {/* Header */}
        <header className="fixed top-0 inset-x-0 z-50 px-6 sm:px-10 md:px-14 py-5 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-3 pointer-events-auto">
            <span
              data-cursor="hover"
              className="text-sm font-semibold tracking-tight text-ice-100 whitespace-nowrap"
            >
              Balamurugan S
            </span>
            <span className="hidden md:inline-flex">
              <span className="status-pill">Available for tech roles</span>
            </span>
          </div>
          <div className="flex items-center gap-2 pointer-events-auto">
            <SeasonPicker />
            <span className="hidden md:inline-flex">
            <a
              href="https://github.com/Balamurugan07-s"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="frost-btn !py-1.5 !px-3 !text-xs"
            >
              <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden>
                <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <span>GitHub</span>
            </a>
            </span>
          </div>
        </header>

        <SectionNav />

        <main className="relative z-10 pointer-events-none">
          {/* Hero */}
          <section
            data-kb-section="hero"
            className="min-h-screen flex flex-col justify-center p-6 sm:p-10 md:p-14"
          >
            {isMobile && (
              <div className="w-full h-[34vh] mt-12 -mb-4 pointer-events-auto">
                <FrozenKeyboard mobile />
              </div>
            )}
            <div className="mt-2 md:mt-20 flex flex-col md:flex-row items-center gap-10 md:gap-16">
              
              <div className="flex-1">
                <p
                  className="text-[11px] uppercase tracking-[0.3em] text-ice-300 mb-5 fade-in-up"
                  style={{ ["--d" as string]: "0ms" }}
                >
                  👋 Hello, I'm
                </p>
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-bold tracking-[-0.03em] text-ice-50 leading-[0.92] whitespace-nowrap">
                  <HeroWord text="Balamurugan" delay={120} />
                  <br />
                  <HeroWord text="S" delay={260} className="text-ice-400" />
                </h1>
                <p
                  className="mt-8 text-base sm:text-lg md:text-xl text-ice-200 max-w-xl leading-relaxed fade-in-up"
                  style={{ ["--d" as string]: "520ms" }}
                >
                  B.E ECE Student @ Sri Eshwar College of Engineering
                  <br />
                  Full-Stack Developer, Competitive Programmer & Problem Solver.
                </p>

                {/* CTAs */}
                <div
                  className="mt-10 flex flex-wrap items-center gap-3 pointer-events-auto fade-in-up"
                  style={{ ["--d" as string]: "700ms" }}
                >
                  <a
                    href="/Balamurugan_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    data-magnetic
                    className="frost-btn frost-btn--primary"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
                      <path d="M14 3v5h5" />
                    </svg>
                    Download Resume
                  </a>
                  <button
                    type="button"
                    data-cursor="hover"
                    data-magnetic
                    className="frost-btn"
                    onClick={() =>
                      document
                        .querySelector<HTMLElement>(
                          '[data-kb-section="contact"]'
                        )
                        ?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                  >
                    Contact me
                  </button>
                  <div className="basis-full h-0 md:hidden" aria-hidden />
                  <a
                    href="https://www.linkedin.com/in/balamurugan-s-ece-023839333/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    data-magnetic
                    className="frost-icon"
                    aria-label="LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.4 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.59c0-1.57-.03-3.6-2.19-3.6-2.19 0-2.53 1.71-2.53 3.48V22H7.62V8z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/Balamurugan07-s"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    data-magnetic
                    className="frost-icon"
                    aria-label="GitHub"
                  >
                    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden>
                      <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Profile Photo Space */}
              <div 
                className="relative shrink-0 pointer-events-auto fade-in-up md:mr-10 mt-8 md:mt-0" 
                style={{ ["--d" as string]: "400ms" }}
              >
                <div className="relative">
                  {/* Ambient Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-[#00d2ff]/30 to-transparent rounded-2xl blur opacity-50"></div>
                  
                  {/* Image Container */}
                  <div className="relative w-56 h-72 md:w-72 md:h-[26rem] rounded-2xl overflow-hidden border border-ice-500/20 shadow-2xl z-10 group">
                    <img src="/profile.jpg" alt="Balamurugan S" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    {/* Shadow overlay at the bottom for depth */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a1526] to-transparent opacity-60"></div>
                  </div>

                  {/* Top Right Badge */}
                  <div className="absolute -top-4 -right-4 md:-top-5 md:-right-6 z-20 bg-[#0c162d]/90 backdrop-blur-xl border border-ice-500/10 text-[#00d2ff] text-xs font-mono px-4 py-2.5 rounded-xl shadow-lg flex items-center">
                    MERN Stack
                  </div>

                  {/* Bottom Left Badge */}
                  <div className="absolute -bottom-4 -left-4 md:-bottom-5 md:-left-6 z-20 bg-[#0c162d]/90 backdrop-blur-xl border border-ice-500/10 text-xs px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-1.5">
                    <span className="text-[#00d2ff] font-bold text-sm">8.12</span> <span className="text-ice-400">CGPA</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="mt-10 md:mt-auto flex items-center gap-3 fade-in-up"
              style={{ ["--d" as string]: "900ms" }}
            >
              <span className="scroll-indicator">
                <span>Scroll to explore</span>
                <span className="scroll-indicator__rail" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-ice-400 hidden sm:inline">
                · hover over the keys
              </span>
            </div>
          </section>

          <section
            data-kb-section="stack"
            className="relative md:min-h-[200vh] p-6 sm:p-10 md:p-14"
          >
            <div className="relative md:h-[150vh]">
              <div className="md:sticky md:top-28 text-center">
                <Reveal>
                  <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.03em] text-ice-50 leading-[0.95]">
                    Tech Stack
                  </h2>
                </Reveal>
                <Reveal delay={120}>
                  <p className="mt-3 text-sm sm:text-base text-ice-400">
                    <span className="hidden md:inline">(hint: hover over a key)</span>
                    <span className="md:hidden">The tools I build with.</span>
                  </p>
                </Reveal>
              </div>

              {isMobile && (
                <div className="md:hidden mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 pointer-events-auto">
                  {SKILLS_FLAT.map((s) => (
                    <div
                      key={s.slug}
                      className="flex items-start gap-3 rounded-xl bg-ink-1/70 backdrop-blur-sm border border-ink-3 p-4"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="22"
                        height="22"
                        fill={`#${s.hex}`}
                        className="flex-none mt-0.5"
                        aria-hidden
                      >
                        <path d={s.path} />
                      </svg>
                      <div>
                        <p className="text-ice-50 font-medium text-sm">
                          {s.title}
                        </p>
                        <p className="text-ice-400 text-xs mt-0.5 leading-snug">
                          {s.tagline}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          <section
            data-kb-section="education"
            className="relative p-6 sm:p-10 md:p-14 pb-24"
          >
            <div className="sticky top-24 sm:top-28 text-center mb-12 sm:mb-16 z-0">
              <Reveal>
                <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.03em] text-ice-50 leading-[0.95]">
                  Education
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-3 text-sm sm:text-base text-ice-300">
                  My academic qualifications.
                </p>
              </Reveal>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              {education.map((edu, idx) => (
                <Reveal
                  key={`${edu.school}-${idx}`}
                  delay={idx * 120}
                  as="article"
                  className="relative rounded-2xl bg-ink-1/75 backdrop-blur-md border border-ink-3 p-6 sm:p-8 md:p-10 pointer-events-auto shadow-[0_8px_40px_-20px_rgba(0,0,0,0.6)]"
                >
                  <header className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-ice-50 tracking-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-ice-400 font-medium mt-1">
                        {edu.school}
                        <span className="text-ice-500/80 font-normal">
                          {" · "}
                          {edu.location}
                        </span>
                      </p>
                    </div>
                    <span className="font-mono text-xs text-ice-100 px-3 py-1 rounded-full border border-ice-700/70 bg-ink-2/60 whitespace-nowrap">
                      {edu.period}
                    </span>
                  </header>

                  <div className="flex flex-wrap items-center gap-3 text-ice-200">
                    <span className="font-mono text-sm px-3 py-1 bg-[#00d2ff]/20 text-[#00d2ff] rounded-md font-bold">
                      {edu.score}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section
            data-kb-section="experience"
            className="relative p-6 sm:p-10 md:p-14 pb-24"
          >
            <div className="sticky top-24 sm:top-28 text-center mb-12 sm:mb-16 z-0">
              <Reveal>
                <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.03em] text-ice-50 leading-[0.95]">
                  Experience
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-3 text-sm sm:text-base text-ice-300">
                  My professional journey.
                </p>
              </Reveal>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              {experiences.map((exp, idx) => (
                <Reveal
                  key={`${exp.company}-${idx}`}
                  delay={idx * 120}
                  as="article"
                  className="relative rounded-2xl bg-ink-1/75 backdrop-blur-md border border-ink-3 p-6 sm:p-8 md:p-10 pointer-events-auto shadow-[0_8px_40px_-20px_rgba(0,0,0,0.6)]"
                >
                  <header className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-ice-50 tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="text-ice-400 font-medium mt-1">
                        {exp.company}
                        <span className="text-ice-500/80 font-normal">
                          {" · "}
                          {exp.location}
                        </span>
                      </p>
                    </div>
                    <span className="font-mono text-xs text-ice-100 px-3 py-1 rounded-full border border-ice-700/70 bg-ink-2/60 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </header>

                  <p className="text-ice-200 leading-relaxed mb-5">
                    {exp.summary}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {exp.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-ice-100 leading-relaxed"
                      >
                        <span className="mt-[0.65em] flex-none w-1.5 h-1.5 rounded-full bg-ice-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        data-cursor="hover"
                        className="frost-chip"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-6 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Reveal as="div" className="md:col-span-1 rounded-2xl bg-ink-1/75 backdrop-blur-md border border-ink-3 p-6 shadow-[0_8px_40px_-20px_rgba(0,0,0,0.6)] pointer-events-auto">
                <h3 className="text-xl font-bold text-ice-50 tracking-tight mb-4 border-b border-ink-3 pb-2">Achievements</h3>
                <ul className="space-y-4">
                  {achievements.map((a, i) => (
                    <li key={i} className="text-ice-200 text-sm">
                      <strong className="text-ice-100 block">{a.title}</strong>
                      <span className="text-ice-400">{a.desc} — {a.year}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal as="div" className="md:col-span-1 rounded-2xl bg-ink-1/75 backdrop-blur-md border border-ink-3 p-6 shadow-[0_8px_40px_-20px_rgba(0,0,0,0.6)] pointer-events-auto">
                 <h3 className="text-xl font-bold text-ice-50 tracking-tight mb-4 border-b border-ink-3 pb-2">Coding Profiles</h3>
                <ul className="space-y-4">
                  {profiles.map((p, i) => (
                    <li key={i} className="text-ice-200 text-sm">
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-ice-100 font-bold hover:text-ice-300 transition-colors block">{p.name}</a>
                      <span className="text-ice-400 block mt-1">{p.stats}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>

          {projects.map((p) => (
            <section
              key={p.num}
              data-kb-section={p.section}
              data-kb-highlights={(p.highlights ?? []).join(",")}
              className="relative py-20 md:min-h-screen flex items-center p-6 sm:p-10 md:p-14 overflow-hidden"
            >
              <span
                aria-hidden
                className={`watermark hidden md:block top-1/2 -translate-y-1/2 ${
                  p.align === "left" ? "right-[-2vw]" : "left-[-2vw]"
                }`}
              >
                {p.num}
              </span>

              <div
                className={
                  p.align === "left"
                    ? "max-w-xl relative"
                    : "max-w-xl relative md:ml-auto md:text-right md:mr-16 lg:mr-24"
                }
              >
                <Reveal>
                  <p className="font-mono text-sm text-ice-400 mb-3">
                    {p.num} · project
                  </p>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-ice-50 leading-[1.05] mb-4">
                    {p.name}
                  </h2>
                </Reveal>
                {p.badge ? (
                  <Reveal delay={140}>
                    <span className="inline-block text-[10px] uppercase tracking-widest text-ice-300 border border-ice-700 rounded-full px-2 py-0.5 mb-4">
                      {p.badge}
                    </span>
                  </Reveal>
                ) : null}
                <Reveal delay={180}>
                  <p className="text-base sm:text-lg text-ice-200 leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </Reveal>
                <Reveal delay={260}>
                  <div
                    className={
                      p.align === "right"
                        ? "flex flex-wrap gap-1.5 md:justify-end pointer-events-auto mb-5"
                        : "flex flex-wrap gap-1.5 pointer-events-auto mb-5"
                    }
                  >
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        data-cursor="hover"
                        className="frost-chip"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={320}>
                  <div
                    className={
                      p.align === "right"
                        ? "flex md:justify-end pointer-events-auto"
                        : "flex pointer-events-auto"
                    }
                  >
                    <button
                      type="button"
                      onClick={() => setActiveProject(p)}
                      data-cursor="hover"
                      data-magnetic
                      className="frost-btn"
                    >
                      View more
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        aria-hidden
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </Reveal>
              </div>
            </section>
          ))}

          <section
            data-kb-section="contact"
            className="relative py-24 md:min-h-screen flex flex-col justify-center p-6 sm:p-10 md:p-14 overflow-hidden"
          >
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center relative z-10 fade-in-up" style={{ ["--d" as string]: "80ms" }}>
              <div className="w-full max-w-lg pointer-events-auto flex flex-col items-center">
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-ice-50 mb-6 flex flex-col items-center">
                  <span>Get In <span className="text-[#00d2ff]">Touch</span></span>
                  <div className="w-10 h-1 bg-[#00d2ff] mt-2"></div>
                </h2>
                <p className="text-ice-200 leading-relaxed mb-10 text-center">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of something meaningful. Feel free to reach out.
                </p>

                <div className="flex flex-col gap-6 w-full max-w-xs mx-auto">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 rounded-lg bg-[#004e66]/30 border border-ice-500/10 flex items-center justify-center text-[#00d2ff] shrink-0">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg>
                    </div>
                    <a href={`mailto:${EMAIL}`} className="text-ice-200 hover:text-[#00d2ff] transition-colors overflow-hidden text-ellipsis">{EMAIL}</a>
                  </div>
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 rounded-lg bg-[#004e66]/30 border border-ice-500/10 flex items-center justify-center text-[#00d2ff] shrink-0">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <a href="tel:+919361194144" className="text-ice-200 hover:text-[#00d2ff] transition-colors">+91 9361194144</a>
                  </div>
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 rounded-lg bg-[#004e66]/30 border border-ice-500/10 flex items-center justify-center text-[#00d2ff] shrink-0">
                      <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor" aria-hidden><path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>
                    </div>
                    <a href="https://github.com/Balamurugan07-s" target="_blank" rel="noopener noreferrer" className="text-ice-200 hover:text-[#00d2ff] transition-colors">GitHub</a>
                  </div>
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 rounded-lg bg-[#004e66]/30 border border-ice-500/10 flex items-center justify-center text-[#00d2ff] shrink-0">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.4 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.59c0-1.57-.03-3.6-2.19-3.6-2.19 0-2.53 1.71-2.53 3.48V22H7.62V8z" /></svg>
                    </div>
                    <a href="https://www.linkedin.com/in/balamurugan-s-ece-023839333/" target="_blank" rel="noopener noreferrer" className="text-ice-200 hover:text-[#00d2ff] transition-colors">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
            <Reveal delay={320}>
              <p className="mt-14 text-[11px] uppercase tracking-[0.25em] text-ice-400">
                © 2026 Balamurugan S. All rights reserved.
              </p>
            </Reveal>
          </section>
        </main>

        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </SmoothScroll>
  );
}
