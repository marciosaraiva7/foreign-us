import Image from "next/image";
import type { Messages } from "@/messages";
import { croppedImages } from "@/lib/images";
import { RevealOnScroll } from "./RevealOnScroll";

export function WhyForeignSection({ messages }: { messages: Messages }) {
  const panelStyles = [
    "lg:col-span-2 lg:row-span-1",
    "lg:col-start-1 lg:row-start-2",
    "lg:col-start-2 lg:row-start-2 lg:translate-y-6",
  ];

  return (
    <section
      id="why"
      className="relative min-h-[85svh] overflow-hidden bg-brand-black py-20 sm:py-28"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-[10%] top-[10%] h-[70%] w-[75%] lg:-right-[5%] lg:top-[5%] lg:h-[85%] lg:w-[60%]">
          <Image
            src={croppedImages.gtr}
            alt={messages.why.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-contain object-right opacity-70"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/60" />
      </div>
      <div className="noise-overlay absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <RevealOnScroll>
          <div className="max-w-xl">
            <p className="font-script text-step-3 text-brand-gold sm:text-step-4">
              {messages.why.eyebrow}
            </p>
            <h2 className="font-display mt-1 text-step-4 font-black leading-none tracking-[0.05em] lg:text-step-5">
              {messages.why.title}
            </h2>
            <p className="font-display mt-4 text-step--1 tracking-[0.18em] text-brand-cream/85">
              {messages.why.subtitle}{" "}
              <span className="text-brand-gold">{messages.why.subtitleAccent}</span>{" "}
              {messages.why.subtitleEnd}
            </p>
          </div>
        </RevealOnScroll>

        <div className="values-scroll mt-12 flex gap-4 overflow-x-auto pb-2 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-6 lg:overflow-visible">
          {messages.why.values.map((value, index) => (
            <RevealOnScroll
              key={value.title}
              delay={index * 80}
              className={`value-card w-[82vw] shrink-0 lg:w-auto ${panelStyles[index] ?? ""}`}
            >
              <article
                className={`surface-panel h-full p-6 backdrop-blur-sm sm:p-8 ${
                  index === 0 ? "border-brand-gold/30" : ""
                }`}
              >
                <h3 className="font-display text-step-1 font-bold tracking-[0.14em] text-brand-cream sm:text-step-2">
                  {value.title}
                </h3>
                <div className="mt-3 h-0.5 w-10 bg-brand-gold" />
                <p className="mt-4 text-step-0 leading-relaxed text-brand-muted">
                  {value.description}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={240}>
          <p className="font-display mt-10 text-step--1 tracking-[0.3em] text-brand-gold">
            {messages.why.tagline}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
