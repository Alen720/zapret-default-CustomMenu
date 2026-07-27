import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const GITHUB_URL = "https://github.com/xz10101/zapret-default-CustomMenu";

const GithubIcon = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="zap-header-root">
      <div className="zap-wrap zap-header-inner">
        <a href="/" className="zap-logo">
          <span className="zap-dim">_&gt;</span> user@zapret : ~ $
        </a>

        <nav className="zap-nav-desktop">
          <a href="#features" onClick={(e) => handleNavClick(e, "features")} className="zap-nav-link">--features</a>
          <a href="#status" onClick={(e) => handleNavClick(e, "status")} className="zap-nav-link">--status</a>
          <a href="#faq" onClick={(e) => handleNavClick(e, "faq")} className="zap-nav-link">--faq</a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="zap-btn-ghost zap-gh-btn">
            <GithubIcon size={13} /> GitHub
          </a>
        </nav>

        <button 
          type="button" 
          className="zap-burger-btn" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={`zap-mobile-menu ${isOpen ? "open" : ""}`}>
        <a href="#features" onClick={(e) => handleNavClick(e, "features")} className="zap-nav-link">--features</a>
        <a href="#status" onClick={(e) => handleNavClick(e, "status")} className="zap-nav-link">--status</a>
        <a href="#faq" onClick={(e) => handleNavClick(e, "faq")} className="zap-nav-link">--faq</a>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="zap-btn-ghost zap-gh-btn" onClick={() => setIsOpen(false)}>
          <GithubIcon size={14} /> GitHub
        </a>
      </div>
    </header>
  );
}