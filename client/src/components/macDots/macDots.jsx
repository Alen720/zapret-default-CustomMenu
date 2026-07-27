import React from "react";

export default function MacDots({ color }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
      <span className="term-dot" style={{ "--dot": color }} />
      <span className="term-dot" style={{ "--dot": color }} />
      <span className="term-dot" style={{ "--dot": color }} />
    </div>
  );
}