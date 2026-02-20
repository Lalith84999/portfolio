"use client";

import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Impact", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav ref={navRef} className={scrolled ? "scrolled" : ""}>
        <div className="nav-logo">LK.dev</div>
        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
              {item.label}
            </a>
          ))}
        </div>
        <button className="mobile-menu-btn" onClick={() => setMobileOpen(true)}>
          MENU
        </button>
      </nav>

      <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
        <button className="mobile-close" onClick={() => setMobileOpen(false)}>
          ✕
        </button>
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
