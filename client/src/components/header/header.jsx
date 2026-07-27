import React from "react";
import { Terminal } from "lucide-react";

const GithubIcon = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Header() {
  const repoUrl = "https://github.com/xz10101/zapret-default-CustomMenu";

  return (
    <header className="zap-wrap" style={{ paddingTop: 24, paddingBottom: 24, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
        <Terminal size={16} />
        <span className="zap-faint">user@zapret</span>
        <span className="zap-faint">:</span>
        <span className="zap-white">~</span>
        <span className="zap-white">$</span>
        <span className="cursor-thin" style={{ width: 6, height: 13, color: "#fff" }} />
      </div>
      <nav style={{ display: "flex", alignItems: "center", gap: 24, fontSize: 12 }}>
        <a href="#features" className="zap-nav-link">--features</a>
        <a href="#status" className="zap-nav-link">--status</a>
        <a href="#faq" className="zap-nav-link">--faq</a>
        
        <a 
          href={repoUrl} 
          target="_blank" 
          rel="noreferrer" 
          className="zap-btn-ghost" 
          style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}
        >
          <GithubIcon size={13} /> GitHub
        </a>
      </nav>
    </header>
  );
}