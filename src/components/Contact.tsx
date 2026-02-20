"use client";

import { useState, FormEvent } from "react";

// ──────────────────────────────────────────────
// STEP 1: Go to https://formspree.io and create a free form
// STEP 2: Replace the ID below with your Formspree form ID
const FORMSPREE_ID = "YOUR_FORMSPREE_ID"; // e.g. "xyzabcde"
// ──────────────────────────────────────────────

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  name="message"
                  placeholder="Tell me about the opportunity..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {status === "sent" && (
                <p style={{ color: "var(--accent3)", fontFamily: "'Space Mono', monospace", fontSize: 12 }}>
                  ✓ Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p style={{ color: "#ef4444", fontFamily: "'Space Mono', monospace", fontSize: 12 }}>
                  ✕ Something went wrong. Please email me directly.
                </p>
              )}

              <button
                className="btn-primary"
                type="submit"
                style={{ alignSelf: "flex-start" }}
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
