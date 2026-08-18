"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const hero = glow?.parentElement;

    if (!glow || !hero) return;

    let frame = 0;

    const moveGlow = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = hero.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;

        glow.style.setProperty("--cursor-x", `${x}px`);
        glow.style.setProperty("--cursor-y", `${y}px`);
        glow.style.opacity = "1";
      });
    };

    const hideGlow = () => {
      glow.style.opacity = "0";
    };

    hero.addEventListener("pointermove", moveGlow);
    hero.addEventListener("pointerleave", hideGlow);

    return () => {
      cancelAnimationFrame(frame);
      hero.removeEventListener("pointermove", moveGlow);
      hero.removeEventListener("pointerleave", hideGlow);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}
