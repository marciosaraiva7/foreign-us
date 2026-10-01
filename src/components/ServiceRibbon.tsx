"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { Messages } from "@/messages";

const labels = {
  pt: { pause: "Pausar faixa", play: "Animar faixa" },
  en: { pause: "Pause ribbon", play: "Animate ribbon" },
  es: { pause: "Pausar banda", play: "Animar banda" },
};

export function ServiceRibbon({ messages, locale }: { messages: Messages; locale: Locale }) {
  const [paused, setPaused] = useState(false);
  return (
    <div className="service-ribbon-section" data-paused={paused}>
      <div className="ribbon-outline" aria-hidden="true" />
      <div className="service-ribbon" aria-hidden="true">
        <div className="ribbon-track">
          {[0, 1].map((copy) => (
            <div className="ribbon-group" key={copy}>
              {messages.services.items.map((service) => (
                <span className="ribbon-item" key={service.id}>{service.title}<span className="ribbon-star">✦</span></span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <button className="ribbon-control" type="button" aria-pressed={paused} onClick={() => setPaused(!paused)}>
        <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>
        {paused ? labels[locale].play : labels[locale].pause}
      </button>
    </div>
  );
}
