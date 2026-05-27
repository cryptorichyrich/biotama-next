"use client";

import { useEffect } from "react";

/**
 * Initialises --shine-delay CSS custom properties on every .glass-card
 * after hydration, so the server-rendered HTML matches the client's
 * first paint and avoids React hydration warnings.
 */
export function ShineInitializer() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".glass-card");
    cards.forEach((el) => {
      if (!el.style.getPropertyValue("--shine-delay")) {
        el.style.setProperty("--shine-delay", String(Math.random() * 12));
      }
    });
  }, []);

  return null;
}
