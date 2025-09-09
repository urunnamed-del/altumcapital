import React from "react";

export default function NetworkBG({ className = "" }: { className?: string }) {
  return (
    <svg
      className={"absolute inset-0 -z-10 w-full h-full " + className}
      viewBox="0 0 1200 600"
      aria-hidden
    >
      <defs>
        <radialGradient id="rg" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      <rect width="1200" height="600" fill="url(#rg)" />
      {Array.from({ length: 20 }).map((_, i) => {
        const x1 = Math.random() * 1200;
        const y1 = Math.random() * 600;
        const x2 = Math.random() * 1200;
        const y2 = Math.random() * 600;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1"
          />
        );
      })}
    </svg>
  );
}