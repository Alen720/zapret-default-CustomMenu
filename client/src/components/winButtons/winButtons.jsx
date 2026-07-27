import React from "react";
import { Minus, Square, X } from "lucide-react";

export default function WinButtons({ color }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, color, opacity: 0.7 }}>
      <Minus size={12} />
      <Square size={10} />
      <X size={12} />
    </div>
  );
}