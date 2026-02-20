"use client";

import { useEffect, useRef } from "react";

interface ProjectData {
  num: string;
  name: string;
  client: string;
  desc: string;
  tech: string[];
}

const PROJECTS: ProjectData[] = [
  {
    num: "01",
    name: "Manufacturing Execution System V3",
    client: "XDlinx Labs · Mar 2024 – Present",
    desc: "Full-stack enterprise MES with real-time analytics, advanced monitoring, and Kubernetes deployment. Led DB migration from MongoDB to PostgreSQL with schema redesign achieving 35% performance gain.",
    tech: ["React.js", "Next.js", "Node.js", "PostgreSQL", ".NET", "GraphQL", "Docker", "Kubernetes"],
  },
  {
    num: "02",
    name: "Manufacturing Execution System V2",
    client: "XDlinx Labs · Nov 2023 – Mar 2024",
    desc: "MERN stack enterprise application with real-time data monitoring via React Query, OAuth 2.0 auth, role-based access control, and .NET microservices backend.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", ".NET", "React Query", "OAuth 2.0"],
  },
  {
    num: "03",
    name: "Asset Management System",
    client: "Mythri Movie Makers",
    desc: "Scalable asset tracking platform built with Next.js, C# and PostgreSQL, containerized with Docker for enterprise-grade media asset management.",
    tech: ["Next.js", "React.js", "C#", "PostgreSQL", "Docker"],
  },
  {
    num: "04",
    name: "Imagery Platform",
    client: "XDlinx Labs",
    desc: "High-performance GraphQL-driven image platform with C# backend, Kubernetes orchestration and PostgreSQL at scale.",
    tech: ["React.js", "GraphQL", "C#", "PostgreSQL", "Kubernetes"],
  },
  {
    num: "05",
    name: "Corporate Website — Scutoid Technologies",
    client: "Sep 2023 – Oct 2023",
    desc: "Custom WordPress theme from scratch with dynamic product catalog, career portal and achievement timeline. Achieved 95+ PageSpeed score via Webpack optimization.",
    tech: ["WordPress", "PHP", "JavaScript", "jQuery", "Webpack", "NPM"],
  },
  {
    num: "06",
    name: "Books Keeping System",
    client: "XDlinx Labs",
    desc: "Financial books management system built with React.js, React Query for efficient server state management, C# backend and PostgreSQL database.",
    tech: ["React.js", "React Query", "C#", "PostgreSQL"],
  },
];

function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <div className="project-card fade-up">
      <div className="project-num">{project.num}</div>
      <div className="project-name">{project.name}</div>
      <div className="project-client">{project.client}</div>
      <p className="project-desc">{project.desc}</p>
      <div className="project-tech">
        {project.tech.map((t) => (
          <span key={t} className="ptag">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    el.querySelectorAll(".fade-up").forEach((child) => obs.observe(child));
    return () => obs.disconnect();
  }, []);

  return (
    <div id="projects" ref={ref} style={{ background: "var(--surface)", padding: "1px 0" }}>
      <section>
        <div className="section-label">Portfolio</div>
        <h2 className="section-title">
          Key
          <br />
          Projects
        </h2>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.num} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
