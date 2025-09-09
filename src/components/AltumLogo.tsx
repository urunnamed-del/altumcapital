import React from "react";

export default function AltumLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-label="Altum Capital">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <path
        d="M12 46L30 12c1.2-2.2 4.8-2.2 6 0l5.2 9.4c.6 1.1.2 2.5-.9 3.1l-7.1 4.1c-1.1.6-1.5 2-.9 3.1l3.7 6.6c.6 1.1 2 1.5 3.1.9l3.3-1.9c1.1-.6 2.5-.2 3.1.9L52 46c1.2 2.2-.3 5-2.9 5H14.9c-2.6 0-4.1-2.8-2.9-5z"
        fill="url(#g)"
      />
    </svg>
  );
}