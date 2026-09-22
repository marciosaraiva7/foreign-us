"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = ["services", "process", "why", "faq", "contact"] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export function useActiveSection() {
  const [active, setActive] = useState<SectionId>("services");

  useEffect(() => {
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id)
    ).filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActive(visible[0].target.id as SectionId);
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}
