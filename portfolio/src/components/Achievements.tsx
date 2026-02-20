"use client";

import { useEffect, useRef } from "react";

interface AchievementData {
  icon: string;
  num: string;
  text: string;
}

const ACHIEVEMENTS: AchievementData[] = [
  { icon: "⚡", num: "40%", text: "Performance improvement in web apps through optimization" },
  { icon: "🗄️", num: "35%", text: "Query performance gain via PostgreSQL migration with zero downtime" },
  { icon: "🚀", num: "50%", text: "SEO & page load improvement using Next.js SSR" },
  { icon: "☁️", num: "99.9%", text: "Uptime for containerized K8s applications" },
  { icon: "🔌", num: "45%", text: "Reduction in data over-fetching via GraphQL APIs" },
  { icon: "⏱️", num: "60%", text: "Deployment time reduction via CI/CD pipelines" },
  { icon: "📄", num: "95+", text: "PageSpeed score on WordPress site with 50% faster loads" },
  { icon: "👥", num: "30%", text: "Code quality improvement mentoring 3 junior developers" },
];

export default function Achievements() {
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
    <section id="achievements" ref={ref}>
      <div className="section-label">Impact</div>
      <h2 className="section-title">
        Key
        <br />
        Achievements
      </h2>
      <div className="achievements-grid">
        {ACHIEVEMENTS.map((a, i) => (
          <div key={i} className="achievement-card fade-up">
            <div className="ach-icon">{a.icon}</div>
            <div className="ach-text">
              <span className="ach-num">{a.num}</span>
              {a.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
