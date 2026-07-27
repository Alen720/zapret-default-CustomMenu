import React from "react";
import { ChevronRight, ExternalLink, Terminal } from "lucide-react";

import Header from "./components/header/header";
import HeroTerminal from "./components/terminals/heroTerminal";
import FeaturesTerminal from "./components/terminals/featuresTerminal";
import StatusTerminal from "./components/terminals/statusTerminal";
import DosTerminal from "./components/terminals/dosTerminal";
import FaqTerminal from "./components/terminals/faqTerminal";

import "./App.css";

const GithubIcon = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

function App() {
  return (
    <div className="zap-root">
      <div className="zap-bg">
        <Header />

        <section className="zap-wrap" style={{ paddingTop: 48, paddingBottom: 96 }}>
          <div className="zap-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <div className="zap-border zap-dim" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, letterSpacing: "0.15em", borderRadius: 999, padding: "5px 14px", marginBottom: 22 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }} />
                В РАЗРАБОТКЕ · C++
              </div>
              <h1 className="zap-display zap-white" style={{ fontWeight: 700, fontSize: 42, lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: 18 }}>
                zapret-default-console
              </h1>
              <p className="zap-dim" style={{ fontSize: 16, lineHeight: 1.7, maxWidth: 420, marginBottom: 30 }}>
                Все известные обходы блокировок — в одной консольной программе.
                Без интерфейса, без лишнего веса, без VPN.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <a href="#status" className="zap-btn-ghost" style={{ padding: "11px 22px" }}>Статус разработки <ChevronRight size={14} /></a>
              </div>
            </div>
            <HeroTerminal />
          </div>
        </section>

        <section id="features" className="zap-wrap" style={{ paddingBottom: 96 }}>
          <div className="zap-section-tag"><span className="n">#</span><h2 className="zap-display zap-section-title">возможности</h2></div>
          <p className="zap-section-sub">то, что уже реализовано в ядре</p>
          <FeaturesTerminal />
        </section>

        <section id="status" className="zap-wrap" style={{ paddingBottom: 96 }}>
          <div className="zap-section-tag"><span className="n">#</span><h2 className="zap-display zap-section-title">статус</h2></div>
          <p className="zap-section-sub">программа ещё не готова к установке — здесь появится команда, когда будет релиз</p>
          <StatusTerminal />
        </section>

        <section className="zap-wrap" style={{ paddingBottom: 96 }}>
          <div className="zap-section-tag"><span className="n">#</span><h2 className="zap-display zap-section-title">что происходит внутри</h2></div>
          <p className="zap-section-sub">упрощённый пример журнала работы ядра</p>
          <DosTerminal />
        </section>

        <section id="faq" className="zap-wrap" style={{ paddingBottom: 110 }}>
          <div className="zap-section-tag"><span className="n">#</span><h2 className="zap-display zap-section-title">faq</h2></div>
          <p className="zap-section-sub">частые вопросы</p>
          <FaqTerminal />
        </section>

        <footer className="zap-border-t">
          <div className="zap-wrap zap-faint" style={{ paddingTop: 28, paddingBottom: 28, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16, fontSize: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Terminal size={13} />
              zapret-default-console · в разработке
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <button type="button" className="zap-nav-link" style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                <GithubIcon size={13} /> исходный код
              </button>
              <span>exit code 0</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App