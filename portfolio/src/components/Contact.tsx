"use client";

export default function Contact() {
  const handleSubmit = () => {
    alert("Message sent! (Wire up your backend or Formspree)");
  };

  return (
    <div id="contact" style={{ background: "var(--surface)", padding: "100px 60px" }}>
      <div className="contact-inner">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="section-label">Contact</div>
            <h2>
              Let&apos;s <em>Build</em>
              <br />
              Together
            </h2>
            <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.8, marginBottom: 10 }}>
              Open to full-time roles, freelance projects, and exciting engineering challenges. Let&apos;s connect.
            </p>
            <div className="contact-links">
              <a className="contact-link" href="mailto:lalithkumargoud999@gmail.com">
                <div className="cl-icon">✉️</div>
                <div className="cl-text">lalithkumargoud999@gmail.com</div>
              </a>
              <a className="contact-link" href="tel:+918465050345">
                <div className="cl-icon">📞</div>
                <div className="cl-text">+91 8465050345</div>
              </a>
              <a className="contact-link" href="https://github.com" target="_blank" rel="noopener noreferrer">
                <div className="cl-icon">🐙</div>
                <div className="cl-text">github.com/lalithkumargoud</div>
              </a>
              <a className="contact-link" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <div className="cl-icon">💼</div>
                <div className="cl-text">linkedin.com/in/lalithkumargoud</div>
              </a>
            </div>
          </div>
          <div>
            <div className="contact-form">
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input className="form-input" type="text" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input className="form-input" type="email" placeholder="you@company.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" placeholder="Tell me about the opportunity..." />
              </div>
              <button
                className="btn-primary"
                style={{ alignSelf: "flex-start" }}
                onClick={handleSubmit}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
