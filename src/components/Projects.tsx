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
    name: "Spacelinx (MES) V3",
    client: "XDlinx Space Labs · Mar 2024 – Present (12 months)",
    desc: "Led database migration from MongoDB to PostgreSQL with comprehensive schema redesign. Implemented advanced analytics and real-time monitoring features using GraphQL for efficient data querying. Deployed containerized application on Kubernetes cluster with auto-scaling and load balancing. Achieved 35% improvement in query performance through PostgreSQL optimization. Built SSR pages with Next.js for improved SEO and faster initial page loads.",
    tech: ["React.js", "Next.js", "Node.js", "PostgreSQL", ".NET", "C#", "Express.js", "GraphQL", "Docker", "Kubernetes", "HTML5", "CSS3"],
  },
  {
    num: "02",
    name: "Manufacturing Execution System V2",
    client: "XDlinx Space Labs · Sep 2023 – Mar 2024 (6 months)",
    desc: "Developed complete MERN stack application from scratch with enterprise-level features. Built real-time data monitoring tools using React Query for efficient server state management. Implemented OAuth 2.0 authentication and role-based access control for secure user management. Integrated .NET backend for robust enterprise processes and microservices architecture.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", ".NET", "C#", "React Query", "OAuth 2.0", "HTML5", "CSS3"],
  },
  {
    num: "03",
    name: "CineBuddy — Film Industry Asset Management System",
    client: "Mythri Movie Makers · Mar 2024 – May 2025 (14 months)",
    desc: "Built end-to-end digital asset management platform for tracking movie production assets including scripts, footage, VFX files, and media archives. Developed role-based dashboards for producers, directors, and production teams to manage budgets, schedules, and asset workflows. Implemented real-time asset tracking and version control for large media files across multiple film productions. Designed GraphQL APIs for efficient querying of production metadata, asset catalogs, and crew assignment data.",
    tech: ["React.js", "Next.js", "Node.js", "PostgreSQL", ".NET", "C#", "Express.js", "GraphQL", "Docker", "Kubernetes", "HTML5", "CSS3"],
  },
  {
    num: "04",
    name: "Geolinx — Satellite Tracking & Globe Visualization",
    client: "XDlinx Space Labs · Jan 2024 – Sep 2024 (9 months)",
    desc: "Built interactive 3D globe visualization using Cesium.js for satellite orbit tracking and real-time imagery data capture. Integrated geospatial data pipelines to capture and render satellite imagery on the Cesium globe interface. Developed GraphQL APIs for efficient querying of satellite tracking data and orbit parameters.",
    tech: ["React.js", "Cesium.js", "GraphQL", "C#", "PostgreSQL", "Kubernetes"],
  },
  {
    num: "05",
    name: "Corporate Website for Scutoid Technologies",
    client: "July 2023 – Sep 2023 (3 months)",
    desc: "Designed and developed custom WordPress theme from scratch matching brand guidelines. Created dynamic product catalog, career portal, and achievement timeline. Configured modern build pipeline using Webpack and NPM for asset optimization. Achieved 95+ PageSpeed score through performance optimization and lazy loading.",
    tech: ["WordPress", "PHP", "JavaScript", "jQuery", "HTML5", "CSS3", "Webpack", "NPM"],
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
