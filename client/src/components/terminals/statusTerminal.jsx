import React from "react";
import TermSkin from "../termskin/termSkin";

const PS_THEME = {
  bg: "#012456", fg: "#f2f2f2", border: "#1f3b73", bar: "#01214d",
  font: "'JetBrains Mono', monospace", fsize: "13.5px", lh: 1.8, dot: "#e8e8e8", titlefg: "#cfe0ff",
};

export default function StatusTerminal() {
  return (
    <TermSkin theme={PS_THEME} chrome="win" title="Windows PowerShell">
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          <span style={{ opacity: 0.65 }}>PS C:\Users\dev&gt;</span>
          <span>zapret --install</span>
        </div>
        <div style={{ marginTop: 10, color: "#ffd866" }}>⚠ Установка пока недоступна — программа в разработке.</div>
        <div style={{ marginTop: 14, fontSize: 12.5, opacity: 0.85 }}>Готовность сборки</div>
        <div className="ps-bar" style={{ marginTop: 6, marginBottom: 4 }}>
          <div style={{ width: "42%" }} />
        </div>
        <div style={{ fontSize: 11.5, opacity: 0.6 }}>42% · без даты релиза</div>
        <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 6 }}>
          <span style={{ opacity: 0.65 }}>PS C:\Users\dev&gt;</span>
          <span className="cursor-thin" />
        </div>
      </div>
    </TermSkin>
  );
}