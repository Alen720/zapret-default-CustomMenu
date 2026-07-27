import React from "react";
import MacDots from "../macDots/macDots";
import WinButtons from "../winButtons/winButtons";

export default function TermSkin({ theme, chrome = "mac", title, icon, children }) {
  const vars = {
    "--bg": theme.bg,
    "--fg": theme.fg,
    "--border": theme.border,
    "--bar": theme.bar,
    "--font": theme.font,
    "--fsize": theme.fsize,
    "--lh": theme.lh,
    "--dot": theme.dot || theme.fg,
    "--titlefg": theme.titlefg || theme.fg,
  };

  return (
    <div className="term-skin" style={vars}>
      <div className="term-bar">
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {chrome === "mac" ? (
            <MacDots color={theme.dot || theme.fg} />
          ) : chrome === "win" ? (
            <span style={{ width: 11 }} />
          ) : null}
          <span className="term-title">
            {icon}
            {title}
          </span>
        </div>
        {chrome === "win" ? (
          <WinButtons color={theme.fg} />
        ) : (
          <span style={{ width: 40 }} />
        )}
      </div>
      <div className="term-body">{children}</div>
    </div>
  );
}