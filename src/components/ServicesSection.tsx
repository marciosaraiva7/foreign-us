"use client";

import Image from "next/image";
import { useState } from "react";
import type { Messages } from "@/messages";
import type { ServiceId } from "@/messages/types";
import { serviceImages } from "@/lib/images";
import { PHONE_HREF } from "@/lib/constants";
import { RevealOnScroll } from "./RevealOnScroll";
import { ServiceIcon } from "./ServiceIcon";
import { IconPhone } from "./Icons";

export function ServicesSection({ messages }: { messages: Messages }) {
  const [activeId, setActiveId] = useState<ServiceId>(messages.services.items[0].id);
  const activeIndex = messages.services.items.findIndex((service) => service.id === activeId);
  const activeService = messages.services.items[activeIndex];

  return (
    <section id="services" className="services-editorial">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <RevealOnScroll>
          <div className="services-heading">
            <div>
              <p className="section-index">01 / FOREIGN</p>
              <p className="font-script services-script">{messages.services.eyebrow}</p>
              <h2 className="font-display services-title">{messages.services.title}<span>.</span></h2>
            </div>
            <p className="services-intro">{messages.services.subtitle}<br /><span>{messages.services.subtitleAccent}</span></p>
          </div>
        </RevealOnScroll>
        <div className="services-stage">
          <div className="services-selector" role="group" aria-label={messages.services.title}>
            {messages.services.items.map((service, index) => {
              const active = service.id === activeId;
              return (
                <button key={service.id} type="button" className={`service-choice ${active ? "is-active" : ""}`} aria-pressed={active} aria-controls="service-feature" onClick={() => setActiveId(service.id)} onFocus={() => setActiveId(service.id)}>
                  <span className="service-choice-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="service-choice-copy">
                    <span className="service-choice-title">{service.title}</span>
                    <span className="service-choice-description">{service.description}</span>
                  </span>
                  <span className="service-choice-icon"><ServiceIcon id={service.id} className="h-5 w-5" /></span>
                </button>
              );
            })}
          </div>
          <div id="service-feature" className="service-feature" aria-label={activeService.title}>
            <div className="service-feature-photos" aria-hidden="true">
              {messages.services.items.map((service) => (
                <Image key={service.id} src={serviceImages[service.id]} alt="" fill sizes="(min-width: 1024px) 48vw, 100vw" className={`service-feature-photo ${service.id === activeId ? "is-active" : ""}`} />
              ))}
            </div>
            <div className="service-feature-shade" aria-hidden="true" />
            <div className="service-feature-top"><span>FRGN / STUDIO</span><span>{String(activeIndex + 1).padStart(2, "0")} <span className="text-white/40">/ 06</span></span></div>
            <div className="service-feature-content">
              <div key={activeId} className="service-feature-caption" aria-live="polite" aria-atomic="true">
                <span className="service-feature-badge"><ServiceIcon id={activeId} className="h-6 w-6" /></span>
                <h3>{activeService.title}</h3>
                <p>{activeService.description}</p>
              </div>
              <a href={PHONE_HREF} className="btn-primary"><IconPhone className="h-4 w-4" />{messages.hero.ctaCall}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
