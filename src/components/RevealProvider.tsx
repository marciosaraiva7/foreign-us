"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-reveal]";
const SAFETY_MS = 2500;

export function RevealProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js-reveal");

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)
    );

    const revealAll = () => {
      elements.forEach((el) => el.classList.add("is-visible"));
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || elements.length === 0) {
      revealAll();
      return;
    }

    const revealInView = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) {
          el.classList.add("is-visible");
        }
      });
    };

    revealInView();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    elements.forEach((el) => {
      if (!el.classList.contains("is-visible")) {
        observer.observe(el);
      }
    });

    const safetyTimer = window.setTimeout(revealAll, SAFETY_MS);

    return () => {
      observer.disconnect();
      window.clearTimeout(safetyTimer);
    };
  }, []);

  return children;
}
