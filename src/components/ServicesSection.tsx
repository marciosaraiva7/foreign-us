"use client";

import Image from "next/image";
import { useState } from "react";
import type { Messages } from "@/messages";
import type { ServiceId } from "@/messages/types";
import { serviceImages } from "@/lib/images";
import { RevealOnScroll } from "./RevealOnScroll";
import { ServiceIcon } from "./ServiceIcon";

export function ServicesSection({ messages }: { messages: Messages }) {
  const [activeId, setActiveId] = useState<ServiceId>(
    messages.services.items[0]?.id ?? "paint-correction"
  );
  const [openMobileId, setOpenMobileId] = useState<ServiceId | null>(null);

  const activeService =
    messages.services.items.find((s) => s.id === activeId) ??
    messages.services.items[0];

  function toggleMobile(id: ServiceId) {
    setOpenMobileId((current) => (current === id ? null : id));
  }

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-brand-surface py-20 sm:py-28"
    >
      <div className="noise-overlay absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <RevealOnScroll>
          <div className="mb-12 max-w-3xl">
            <p className="font-script text-step-3 text-brand-gold sm:text-step-4">
              {messages.services.eyebrow}
            </p>
            <h2 className="font-display mt-1 text-step-4 font-black leading-none tracking-[0.06em] lg:text-step-5">
              {messages.services.title}
            </h2>
            <p className="font-display mt-4 text-step--1 tracking-[0.22em] text-brand-cream/80">
              {messages.services.subtitle}{" "}
              <span className="text-brand-gold">
                {messages.services.subtitleAccent}
              </span>
            </p>
          </div>
        </RevealOnScroll>

        {/* Desktop: index + stage */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-12">
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
                  className={`group flex w-full items-start gap-5 border-b border-white/10 py-6 text-left transition-colors ${
                    isActive ? "text-brand-cream" : "text-brand-cream/70"
                  }`}
                >
                  <span
                    className={`font-display text-step-1 font-black tracking-widest ${
                      isActive ? "text-brand-gold" : "text-brand-muted"
                    }`}
                  >
                    {num}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-3">
                      <span
                        className={`flex h-10 w-10 items-center justify-center border transition-colors ${
                          isActive
                            ? "border-brand-gold text-brand-gold"
                            : "border-white/15 text-brand-cream/60 group-hover:border-brand-gold/50"
                        }`}
                      >
                        <ServiceIcon id={service.id} className="h-5 w-5" />
                      </span>
                      <span className="font-display text-step-1 font-bold tracking-[0.1em]">
                        {service.title}
                      </span>
                    </span>
                    <span
                      className={`mt-3 block h-0.5 origin-left bg-brand-gold transition-transform duration-500 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                    <span className="mt-3 block text-step-0 leading-relaxed text-brand-muted">
                      {service.description}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
            {messages.services.items.map((service) => (
              <Image
                key={service.id}
                src={serviceImages[service.id]}
                alt={service.imageAlt}
                fill
                sizes="560px"
                className={`object-cover object-center transition-opacity duration-500 ${
                  activeId === service.id ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-transparent to-transparent" />
            {activeService && (
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-step-2 font-bold tracking-[0.12em]">
                  {activeService.title}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile: numbered accordion */}
        <div className="space-y-0 border-t border-white/10 lg:hidden">
          {messages.services.items.map((service, index) => {
            const isOpen = openMobileId === service.id;
            const num = String(index + 1).padStart(2, "0");
            const panelId = `service-panel-${service.id}`;

            return (
              <RevealOnScroll key={service.id} delay={index * 40}>
                <div className="border-b border-white/10">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleMobile(service.id)}
                    className="group flex w-full items-start gap-4 py-5 text-left"
                  >
                    <span
                      className={`font-display text-step-0 font-black ${
                        isOpen ? "text-brand-gold" : "text-brand-muted"
                      }`}
                    >
                      {num}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="font-display block text-step-0 font-bold tracking-[0.1em]">
                        {service.title}
                      </span>
                      <span
                        className={`mt-2 block h-0.5 origin-left bg-brand-gold transition-transform duration-500 ${
                          isOpen ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                      <span className="mt-2 block text-step--1 leading-relaxed text-brand-muted">
                        {service.description}
                      </span>
                    </span>
                  </button>

                  <div
                    id={panelId}
                    className={`service-panel ${isOpen ? "is-open" : ""}`}
                  >
                    <div className="service-panel-inner">
                      <div className="relative mb-5 aspect-[4/3] overflow-hidden">
                        <Image
                          src={serviceImages[service.id]}
                          alt={service.imageAlt}
                          fill
                          sizes="100vw"
                          className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />
                      </div>
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
