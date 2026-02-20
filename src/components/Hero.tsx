export default function Hero() {
  return (
    <div id="hero">
      <div className="grid-bg" />
      <div className="glow-orb orb1" />
      <div className="glow-orb orb2" />
      <div className="hero-grid">
        <div>
          <div className="hero-badge">Available for opportunities</div>
          <div className="hero-badges-row">
            <div className="hero-badge hero-badge--highlight">🌍 Open to Relocate Globally</div>
            <div className="hero-badge hero-badge--green">🏠 Remote &amp; Hybrid Ready</div>
          </div>
          <h1 className="hero-name">
            <span className="line1">Chittibomma</span>
            <span className="line1" style={{ fontSize: "0.75em", letterSpacing: "-2px", marginBottom: "4px" }}>
              Lalithkumar
            </span>
            <span className="line2">Goud</span>
          </h1>
          <div className="hero-title">React · .NET · Full Stack Developer</div>
          <p className="hero-desc">
            3 years building enterprise-grade web applications. Expert in React.js, Next.js, Node.js &amp; .NET.
            Delivered 6+ projects with 40% performance improvements across manufacturing, media and tech industries.
            Willing to relocate anywhere globally.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn-primary">
              Hire Me
            </a>
            <a href="#projects" className="btn-outline">
              View Work
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="stats-grid">
            <StatCard value="6+" label="Enterprise Projects" />
            <StatCard value="40%" label="Perf. Improvement" />
            <StatCard value="99.9%" label="Uptime Delivered" />
            <StatCard value="3yrs" label="Experience" />
          </div>
          <div className="hero-contact">
            <div className="contact-item">
              <span>📍</span> Hyderabad, India
            </div>
            <div className="contact-item">
              <span>✉️</span> lalithkumargoud999@gmail.com
            </div>
            <div className="contact-item">
              <span>📞</span> +91 8465050345
            </div>
            <div className="contact-item contact-item--highlight">
              <span>🌍</span> Willing to Relocate Anywhere Globally
            </div>
            <div className="contact-item contact-item--highlight">
              <span>🏠</span> Remote · Hybrid · On-site
            </div>
            <div className="contact-item">
              <span>💰</span> Expected CTC: 8–15 LPA (Negotiable)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="stat-card">
      <div className="stat-num">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
