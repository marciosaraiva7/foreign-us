"use client";

import { useState } from "react";
import type { Messages } from "@/messages";
import { RevealOnScroll } from "./RevealOnScroll";

export function FAQSection({ messages }: { messages: Messages }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-brand-surface py-20 sm:py-28"
    >
      <div className="noise-overlay absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-8">
        <RevealOnScroll>
          <div className="mb-12 text-center">
            <p className="font-script text-step-3 text-brand-gold sm:text-step-4">
              {messages.faq.eyebrow}
            </p>
            <h2 className="font-display mt-1 text-step-4 font-black tracking-[0.06em] lg:text-step-5">
              {messages.faq.title}
            </h2>
          </div>
        </RevealOnScroll>

        <div className="border-t border-white/10">
          {messages.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;

            return (
              <RevealOnScroll key={item.question} delay={index * 50}>
                <div className="border-b border-white/10">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-start justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-display text-step-0 font-bold tracking-[0.06em] text-brand-cream">
                      {item.question}
                    </span>
                    <span
                      className={`mt-1 shrink-0 text-brand-gold transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  <div
                    id={panelId}
                    className={`faq-panel ${isOpen ? "is-open" : ""}`}
                  >
                    <div className="faq-panel-inner">
                      <p className="pb-5 text-step-0 leading-relaxed text-brand-muted">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
