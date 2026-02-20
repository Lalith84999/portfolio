"use client";

import { useEffect, useRef, useState } from "react";

/* ─── DATA ─── */
interface Skill {
  name: string;
  pct: number;
}

interface SkillGroupData {
  title: string;
  skills: Skill[];
  tags: string[];
}

const PRIMARY_GROUPS: SkillGroupData[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js (Expert)", pct: 95 },
      { name: "Next.js", pct: 90 },
      { name: "TypeScript / JavaScript ES6+", pct: 90 },
      { name: "Redux / React Query", pct: 88 },
      { name: "Tailwind CSS / Material-UI", pct: 90 },
      { name: "HTML5 / CSS3", pct: 95 },
    ],
    tags: ["React Router", "jQuery", "Bootstrap", "Ant Design", "Isomorphic React / SSR", "Responsive Design"],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js / Express.js", pct: 88 },
      { name: ".NET / C# / ASP.NET", pct: 85 },
      { name: "RESTful APIs", pct: 92 },
      { name: "GraphQL APIs", pct: 82 },
      { name: "Microservices Architecture", pct: 80 },
    ],
    tags: ["OAuth 2.0", "SSO", "JSON", "XML"],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", pct: 88 },
      { name: "MongoDB", pct: 82 },
      { name: "Database Migration", pct: 85 },
      { name: "Query Optimization", pct: 82 },
    ],
    tags: ["Schema Design", "Indexing", "Data Modeling", "Zero-Downtime Migration"],
  },
];

const SECONDARY_GROUPS: SkillGroupData[] = [
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git / GitHub Actions", pct: 88 },
      { name: "Docker / Kubernetes", pct: 80 },
      { name: "Azure DevOps / CI/CD", pct: 78 },
      { name: "Webpack / Vite / Babel", pct: 85 },
    ],
    tags: ["NPM", "VS Code", "Visual Studio"],
  },
  {
    title: "Design Patterns & Architecture",
    skills: [
      { name: "Component-Based Architecture", pct: 90 },
      { name: "MVC / MVVM", pct: 85 },
      { name: "Cloud-Native Patterns", pct: 78 },
    ],
    tags: ["Singleton", "Factory", "Observer", "Microservices"],
  },
  {
    title: "CMS & Methodologies",
    skills: [
      { name: "WordPress Development", pct: 82 },
      { name: "SEO Optimization", pct: 80 },
      { name: "Agile / Scrum", pct: 88 },
    ],
    tags: ["Custom Theme Dev", "Plugin Development", "Sprint Planning", "Code Review", "Mentoring"],
  },
];

/* ─── COMPONENTS ─── */
function SkillBar({ name, pct, animate }: Skill & { animate: boolean }) {
  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{pct}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-fill"
          style={{ width: animate ? `${pct}%` : "0%" }}
        />
      </div>
    </div>
  );
}

function SkillGroup({ group, animate }: { group: SkillGroupData; animate: boolean }) {
  return (
    <div className="skill-group">
      <div className="skill-group-title">{group.title}</div>
      {group.skills.map((s) => (
        <SkillBar key={s.name} {...s} animate={animate} />
      ))}
      <div className="tech-tags">
        {group.tags.map((t) => (
          <span key={t} className="tech-tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setAnimate(true);
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="skills" ref={sectionRef}>
      <div className="skills-container">
        <div className="section-label">Core Competencies</div>
        <h2 className="section-title">
          Technical
          <br />
          Expertise
        </h2>
        <div className="skills-grid">
          {PRIMARY_GROUPS.map((g) => (
            <SkillGroup key={g.title} group={g} animate={animate} />
          ))}
        </div>
        <div className="skills-grid-secondary">
          {SECONDARY_GROUPS.map((g) => (
            <SkillGroup key={g.title} group={g} animate={animate} />
          ))}
        </div>
      </div>
    </div>
  );
}
