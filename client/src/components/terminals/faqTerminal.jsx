import React, { useState } from "react";
import { Terminal, ChevronRight } from "lucide-react";
import TermSkin from "../termskin/termSkin";

const FISH_THEME = {
  bg: "#0d1117", fg: "#c9d1d9", border: "#30363d", bar: "#0a0e14",
  font: "'JetBrains Mono', monospace", fsize: "13.5px", lh: 1.7, dot: "#3a3f47", titlefg: "#8b949e",
};

const FAQ = [
  { q: "Это VPN?", ghost: " --check", a: "Нет. Программа не заворачивает трафик через сторонний сервер — она меняет то, как пакеты уходят к провайдеру, чтобы блокировка их не распознала." },
  { q: "Нужны права администратора?", ghost: " --perms", a: "Да, для работы с сетевым стеком нужны повышенные права — как у большинства подобных консольных инструментов." },
  { q: "На чём написано?", ghost: " --stack", a: "Ядро — на C++, ради скорости и минимального потребления ресурсов." },
  { q: "Когда релиз?", ghost: " --eta", a: "Пока без даты. Программа в активной разработке, сроки появятся ближе к готовности." },
];

function FaqItem({ item, index, open, onToggle }) {
  return (
    <div style={{ borderBottom: index < FAQ.length - 1 ? "1px solid #23262d" : "none" }}>
      <button className="faq-btn" onClick={onToggle}>
        <span style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
          <span style={{ color: "#c678dd" }}>❯</span>
          <span className="faq-q">{item.q}</span>
          <span className="fish-ghost">{item.ghost}</span>
        </span>
        <ChevronRight size={15} className={`chevron ${open ? "open" : ""}`} />
      </button>
      <div className="faq-panel" style={{ maxHeight: open ? 140 : 0 }}>
        <p className="faq-answer">{item.a}</p>
      </div>
    </div>
  );
}

export default function FaqTerminal() {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <TermSkin theme={FISH_THEME} title="~/zapret · fish" icon={<Terminal size={11} />}>
      <div style={{ fontSize: 11, marginBottom: 14, color: "#56b6c2" }}>~/zapret-default-console</div>
      {FAQ.map((item, i) => (
        <FaqItem key={item.q} item={item} index={i} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
      ))}
    </TermSkin>
  );
}