"use client";

import { useEffect, useRef } from "react";

interface ExpData {
  role: string;
  date: string;
  company: string;
  points: string[];
  tags: string[];
}

const EXPERIENCES: ExpData[] = [
  {
    role: "Software Engineer",
    date: "Jun 2023 – Present",
    company: "Scutoid Technologies Pvt Ltd · Hyderabad, India",
    points: [
      "Led full-stack development of 6+ enterprise projects using React.js, Next.js, Node.js & .NET serving 3 major clients including XDlinx Labs and Mythri Movie Makers",
      "Designed Manufacturing Execution System (MES) handling real-time data for 10,000+ daily transactions",
      "Migrated enterprise database from MongoDB to PostgreSQL — 100,000+ records, 35% query performance improvement, zero downtime",
      "Architected containerized applications via Docker & Kubernetes with 99.9% uptime",
      "Implemented GraphQL APIs alongside REST, reducing data over-fetching by 45%",
      "Built Next.js SSR applications improving SEO and initial page load by 50%",
      "Optimized web app performance by 40% — from 3s to 1.8s load time",
      "Built WordPress site achieving 95+ PageSpeed score with 50% faster load times",
      "Reduced deployment time by 60% via CI/CD pipelines with Azure DevOps & GitHub Actions",
      "Mentored 3 junior developers, improving team code quality by 30%",
    ],
    tags: [
      "React.js", "Next.js", "Node.js", ".NET",
      "PostgreSQL", "Docker", "Kubernetes", "GraphQL", "Azure DevOps",
    ],
  },
];

function ExpItem({ exp }: { exp: ExpData }) {
  return (
    <div className="exp-item fade-up">
      <div className="exp-meta">
        <div className="exp-role">{exp.role}</div>
        <div className="exp-date">{exp.date}</div>
      </div>
      <div className="exp-company">{exp.company}</div>
      <ul className="exp-points">
        {exp.points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
      <div className="tech-tags" style={{ marginTop: 20 }}>
        {exp.tags.map((t) => (
          <span key={t} className="tech-tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const ref = useRef<HTMLElement>(null);

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
    <section id="experience" ref={ref}>
      <div className="section-label">Career</div>
      <h2 className="section-title">
        Work
        <br />
        Experience
      </h2>
      <div className="exp-timeline">
        {EXPERIENCES.map((exp, i) => (
          <ExpItem key={i} exp={exp} />
        ))}
      </div>
    </section>
  );
}
