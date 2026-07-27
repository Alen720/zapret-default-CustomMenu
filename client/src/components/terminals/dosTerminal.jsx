import React from "react";
import TermSkin from "../termskin/termSkin";

const DOS_THEME = {
  bg: "#000000",
  fg: "#d8d8d8",
  border: "#3a3a3a",
  bar: "#000000",
  font: "'VT323', monospace",
  fsize: "20px",
  lh: 1.5,
  dot: "#5a5a5a",
  titlefg: "#d8d8d8",
};

const LOG_LINES = [
  { t: "00:00:00", m: "ЗАПУСК ИНТЕРФЕЙСА ПРОГРАММЫ" },
  { t: "00:00:00", m: "ЧТЕНИЕ ВСЕХ .BAT ФАЙЛОВ" },
  { t: "00:00:01", m: "ВЫВЕСТИ ИХ НА ЭКРАН" },
  { t: "00:00:01", m: "ПОЛУЧИТЬ ОТ ПОЛЬЗОВАТЕЛЯ НОМЕР СТРАТЕГИИ" },
  { t: "00:00:02", m: "ЗАПУСК" },
  { t: "00:00:03", m: "СОЕДИНЕНИЕ УСТАНОВЛЕНО" },
];

export default function DosTerminal() {
  return (
    <TermSkin theme={DOS_THEME} chrome="none" title="C:\\ZAPRET\\LOG.TXT">
      <div className="dos-body">
        <div className="dos-box" style={{ opacity: 0.8, marginBottom: 10 }}>
{`+----------------------------+
|   ZAPRET SYSTEM LOG        |
+----------------------------+`}
        </div>
        {LOG_LINES.map((l, i) => (
          <div key={i} style={{ display: "flex", gap: 14 }}>
            <span style={{ opacity: 0.55 }}>[{l.t}]</span>
            <span>{l.m}</span>
          </div>
        ))}
        <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
          <span>C:\ZAPRET&gt;</span>
          <span className="cursor-block" />
        </div>
      </div>
    </TermSkin>
  );
}