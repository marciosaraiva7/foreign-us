"use client";

import Image from "next/image";
import { useState } from "react";
import type { Messages } from "@/messages";
import type { ServiceId } from "@/messages/types";
import { serviceImages } from "@/lib/images";
import { RevealOnScroll } from "./RevealOnScroll";
import { SectionImage } from "./SectionImage";
import { ServiceIcon } from "./ServiceIcon";

export function ServicesSection({ messages }: { messages: Messages }) {
  const [activeId, setActiveId] = useState<ServiceId>(
    messages.services.items[0]?.id ?? "paint-correction"
  );
  const [openMobileId, setOpenMobileId] = useState<ServiceId | null>(null);

  const activeService =
    messages.services.items.find((s) => s.id === activeId) ??
    messages.services.items[0];

  const activeIndex = messages.services.items.findIndex((s) => s.id === activeId);

  function toggleMobile(id: ServiceId) {
    setOpenMobileId((current) => (current === id ? null : id));
  }

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-brand-surface py-16 sm:py-24"
    >
      <div className="noise-overlay absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <RevealOnScroll>
          <div className="mb-10 max-w-3xl sm:mb-12">
            <p className="font-script text-step-2 text-brand-gold sm:text-step-3">
              {messages.services.eyebrow}
            </p>
            <h2 className="font-display mt-1 text-step-3 font-black leading-none tracking-[0.06em] sm:text-step-4 lg:text-step-5">
              {messages.services.title}
            </h2>
            <p className="font-display mt-3 text-step--1 tracking-[0.2em] text-brand-cream/80 sm:mt-4">
              {messages.services.subtitle}{" "}
              <span className="text-brand-gold">
                {messages.services.subtitleAccent}
              </span>
            </p>
          </div>
        </RevealOnScroll>

        {/* Desktop: service list + photo showcase */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_380px] lg:gap-10 xl:grid-cols-[1fr_420px] xl:gap-12">
          <div className="space-y-0 border-t border-white/10">
            {messages.services.items.map((service, index) => {
              const isActive = activeId === service.id;
              const num = String(index + 1).padStart(2, "0");

              return (
                <button
                  key={service.id}
                  type="button"
                  onMouseEnter={() => setActiveId(service.id)}
                  onFocus={() => setActiveId(service.id)}
                  onClick={() => setActiveId(service.id)}
                  className={`group flex w-full items-start gap-4 border-b border-white/10 py-5 text-left transition-colors ${
                    isActive ? "text-brand-cream" : "text-brand-cream/70"
                  }`}
                >
                  <span
                    className={`font-display text-step-0 font-black tracking-widest ${
                      isActive ? "text-brand-gold" : "text-brand-muted"
                    }`}
                  >
                    {num}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-3">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center border transition-colors ${
                          isActive
                            ? "border-brand-gold text-brand-gold"
                            : "border-white/15 text-brand-cream/60 group-hover:border-brand-gold/50"
                        }`}
                      >
                        <ServiceIcon id={service.id} className="h-4 w-4" />
                      </span>
                      <span className="font-display text-step-0 font-bold tracking-[0.1em]">
                        {service.title}
                      </span>
                    </span>
                    <span
                      className={`mt-2 block h-0.5 max-w-[120px] origin-left bg-brand-gold transition-transform duration-500 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                    <span className="mt-2 block text-step--1 leading-relaxed text-brand-muted">
                      {service.description}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {activeService && (
            <div className="service-showcase relative flex flex-col overflow-hidden border border-white/10 bg-brand-black/40">
              <div className="relative aspect-[4/3] w-full shrink-0">
                {messages.services.items.map((service) => (
                  <Image
                    key={service.id}
                    src={serviceImages[service.id]}
                    alt={service.imageAlt}
                    fill
                    sizes="420px"
                    className={`object-cover object-center transition-opacity duration-500 ${
                      service.id === activeId ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-brand-black/50 via-transparent to-brand-black/10"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-gold" aria-hidden="true" />
              </div>

              <div className="flex flex-1 flex-col items-center justify-center p-6 text-center">
                <span className="font-display text-step-3 font-black text-brand-gold/25">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 flex h-12 w-12 items-center justify-center border border-brand-gold/40 text-brand-gold">
                  <ServiceIcon id={activeService.id} className="h-6 w-6" />
                </span>
                <p className="font-display mt-4 text-step-1 font-bold tracking-[0.12em]">
                  {activeService.title}
                </p>
                <div className="mt-3 h-0.5 w-12 bg-brand-gold" />
                <p className="mt-3 text-step--1 leading-relaxed text-brand-muted">
                  {activeService.description}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Mobile: accordion with photos when open */}
        <div className="space-y-0 border-t border-white/10 lg:hidden">
          {messages.services.items.map((service, index) => {
            const isOpen = openMobileId === service.id;
            const num = String(index + 1).padStart(2, "0");
            const panelId = `service-panel-${service.id}`;

            return (
              <RevealOnScroll key={service.id} delay={index * 30}>
                <div className="border-b border-white/10">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleMobile(service.id)}
                    className="service-accordion-trigger group flex w-full items-start gap-3 py-4 text-left"
                  >
                    <span
                      className={`font-display text-sm font-black ${
                        isOpen ? "text-brand-gold" : "text-brand-muted"
                      }`}
                    >
                      {num}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2.5">
                        <span
                          className={`service-accordion-icon flex h-8 w-8 shrink-0 items-center justify-center border ${
                            isOpen
                              ? "border-brand-gold text-brand-gold"
                              : "border-white/15 text-brand-cream/60"
                          }`}
                        >
                          <ServiceIcon id={service.id} className="h-3.5 w-3.5" />
                        </span>
                        <span className="font-display block text-sm font-bold tracking-[0.08em]">
                          {service.title}
                        </span>
                      </span>
                      <span
                        className={`mt-1.5 block h-0.5 max-w-[80px] origin-left bg-brand-gold transition-transform duration-500 ${
                          isOpen ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                      {!isOpen && (
                        <span className="mt-1.5 line-clamp-2 block text-xs leading-relaxed text-brand-muted">
                          {service.description}
                        </span>
                      )}
                    </span>
                  </button>

                  <div
                    id={panelId}
                    className={`service-panel ${isOpen ? "is-open" : ""}`}
                  >
                    <div className="service-panel-inner">
                      <SectionImage
                        src={serviceImages[service.id]}
                        alt={service.imageAlt}
                        aspect="4/3"
                        sizes="100vw"
                        className="mb-4 ml-10 mr-2"
                      />
                      <p className="pb-4 pl-10 pr-2 text-sm leading-relaxed text-brand-muted">
                        {service.description}
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
