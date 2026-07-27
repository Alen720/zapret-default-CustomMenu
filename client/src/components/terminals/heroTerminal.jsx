import React, { useState, useEffect } from "react";
import { Terminal } from "lucide-react";
import TermSkin from "../termskin/termSkin";

const BASH_THEME = {
  bg: "#050605", fg: "#3dff6e", border: "#123018", bar: "#020302",
  font: "'JetBrains Mono', monospace", fsize: "14px", lh: 1.75, dot: "#1f5b32", titlefg: "#3dff6e",
};

const HERO_LINES = [
  { p: "user@linux", d: "~", c: "zapret-default-console --status" },
  { o: "▸ ядро загружено · стратегия: auto-fallback" },
  { o: "▸ обходов реализовано: 14" },
  { o: "▸ сборка: в активной разработке" },
];

export default function HeroTerminal() {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    const cur = HERO_LINES[lineIdx];
    const full = cur.c ?? cur.o;
    if (charIdx < full.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), cur.c ? 34 : 14);
      return () => clearTimeout(t);
    }
    if (lineIdx < HERO_LINES.length - 1) {
      const t = setTimeout(() => { setLineIdx((l) => l + 1); setCharIdx(0); }, 380);
      return () => clearTimeout(t);
    }
    setDone(true);
  }, [charIdx, lineIdx, done]);

  return (
    <TermSkin theme={BASH_THEME} title="user@linux: ~" icon={<Terminal size={11} />}>
      <div className="bash-glow bash-scan" style={{ minHeight: 120 }}>
        {HERO_LINES.map((line, i) => {
          if (i > lineIdx) return null;
          const text = line.c ?? line.o;
          const shown = i === lineIdx ? text.slice(0, charIdx) : text;
          if (line.c) {
            return (
              <div key={i} style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                <span style={{ opacity: 0.55 }}>{line.p}</span>
                <span style={{ opacity: 0.55 }}>{line.d}</span>
                <span>$</span>
                <span>{shown}{i === lineIdx && !done && <span className="cursor-thin" />}</span>
              </div>
            );
          }
          return <div key={i} style={{ opacity: 0.8, paddingLeft: 16 }}>{shown}</div>;
        })}
        {done && (
          <div style={{ display: "flex", marginTop: 6 }}>
            <span style={{ opacity: 0.55 }}>user@linux</span>
            <span style={{ opacity: 0.55, margin: "0 6px" }}>~</span>
            <span style={{ marginRight: 6 }}>$</span>
            <span className="cursor-thin" />
          </div>
        )}
      </div>
    </TermSkin>
  );
}