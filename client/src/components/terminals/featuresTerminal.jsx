import React from "react";
import TermSkin from "../termskin/termSkin";

const ZSH_THEME = {
  bg: "#1c1c28", fg: "#e8e6f0", border: "#38384a", bar: "#16161f",
  font: "'Fira Code', monospace", fsize: "13.5px", lh: 1.7, dot: "#4a4a5e", titlefg: "#a9a9c0",
};

const P10K_COLORS = ["#61afef", "#98c379", "#e5c07b", "#c678dd"];

const FEATURES = [
  { seg: "auto-fallback", title: "Автоподбор стратегии", body: "(скоро)" },
  { seg: "no-vpn", title: "Работает без VPN", body: "Трафик идёт напрямую к сайту через провайдера — без стороннего сервера-посредника." },
  { seg: "single-binary", title: "Один бинарник на C++", body: "Все обходы собраны в одну консольную программу. Без отдельных скриптов и зависимостей." },
  { seg: "open-source", title: "Открытый код", body: "Видно, что именно программа делает с трафиком, и можно собрать её самостоятельно." },
];

function ZshSegments() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", marginBottom: 22, borderRadius: 6, overflow: "hidden", fontSize: 12 }}>
      <span className="p10k-seg" style={{ background: P10K_COLORS[0] }}>you@zapret</span>
      <span className="p10k-arrow" style={{ color: P10K_COLORS[0] }}>▶</span>
      <span className="p10k-seg" style={{ background: P10K_COLORS[1], color: "#101014" }}>~/zapret-default-console</span>
      <span className="p10k-arrow" style={{ color: P10K_COLORS[1] }}>▶</span>
      <span className="p10k-seg" style={{ background: P10K_COLORS[2] }}>⎇ main</span>
      <span className="p10k-arrow" style={{ color: P10K_COLORS[2] }}>▶</span>
    </div>
  );
}

export default function FeaturesTerminal() {
  return (
    <TermSkin theme={ZSH_THEME} title="you@zapret — zsh">
      <ZshSegments />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
        {FEATURES.map((f, i) => (
          <div key={f.seg} style={{ borderLeft: `3px solid ${P10K_COLORS[i % P10K_COLORS.length]}`, paddingLeft: 12 }}>
            <div style={{ fontSize: 11, opacity: 0.55, marginBottom: 6 }}>--{f.seg}</div>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>{f.title}</div>
            <div style={{ fontSize: 12.5, opacity: 0.7, lineHeight: 1.65 }}>{f.body}</div>
          </div>
        ))}
      </div>
    </TermSkin>
  );
}