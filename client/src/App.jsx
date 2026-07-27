import React from "react";
import { ChevronRight, Terminal } from "lucide-react";

import Header from "./components/header/header";
import HeroTerminal from "./components/terminals/heroTerminal";
import FeaturesTerminal from "./components/terminals/featuresTerminal";
import StatusTerminal from "./components/terminals/statusTerminal";
import DosTerminal from "./components/terminals/dosTerminal";
import FaqTerminal from "./components/terminals/faqTerminal";

import "./App.css";

function App() {
  return (
    <div className="zap-root">
      <div className="zap-bg">
        <Header />

        <section className="zap-wrap" style={{ paddingTop: 48, paddingBottom: 96 }}>
          <div className="zap-hero-grid">
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
            <div style={{ width: "100%", overflowX: "auto" }}>
              <HeroTerminal />
            </div>
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
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
