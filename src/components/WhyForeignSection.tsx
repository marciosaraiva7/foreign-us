import Image from "next/image";
import type { Messages } from "@/messages";
import { croppedImages } from "@/lib/images";
import { RevealOnScroll } from "./RevealOnScroll";

function GtrImage({ alt }: { alt: string }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/10 sm:aspect-video">
      <Image
        src={croppedImages.gtr}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 420px"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-brand-black/10" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-gold" />
    </div>
  );
}

export function WhyForeignSection({ messages }: { messages: Messages }) {
  return (
    <section
      id="why"
      className="relative overflow-x-clip bg-brand-black py-16 sm:py-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_minmax(0,420px)] lg:items-center lg:gap-12">
          <RevealOnScroll className="w-full min-w-0 lg:col-start-1 lg:row-start-1">
            <p className="font-script text-step-2 text-brand-gold sm:text-step-3">
              {messages.why.eyebrow}
            </p>
            <h2 className="font-display mt-1 text-step-3 font-black leading-none tracking-[0.05em] sm:text-step-4 lg:text-step-5">
              {messages.why.title}
            </h2>
            <p className="font-display mt-3 text-step--1 tracking-[0.16em] text-brand-cream/85 sm:mt-4">
              {messages.why.subtitle}{" "}
              <span className="text-brand-gold">{messages.why.subtitleAccent}</span>{" "}
              {messages.why.subtitleEnd}
            </p>
          </RevealOnScroll>

          <RevealOnScroll
            delay={80}
            className="w-full min-w-0 lg:col-start-2 lg:row-start-1 lg:row-span-3"
          >
            <GtrImage alt={messages.why.imageAlt} />
          </RevealOnScroll>

          <div className="w-full min-w-0 space-y-3 lg:col-start-1 lg:row-start-2">
            {messages.why.values.map((value, index) => (
              <RevealOnScroll key={value.title} delay={index * 60}>
                <article
                  className={`surface-panel p-5 sm:p-6 ${
                    index === 0 ? "border-brand-gold/30" : ""
                  }`}
                >
                  <h3 className="font-display text-step-0 font-bold tracking-[0.12em] text-brand-cream sm:text-step-1">
                    {value.title}
                  </h3>
                  <div className="mt-2 h-0.5 w-8 bg-brand-gold" />
                  <p className="mt-3 text-step--1 leading-relaxed text-brand-muted sm:text-step-0">
                    {value.description}
                  </p>
                </article>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={200} className="w-full min-w-0 lg:col-start-1 lg:row-start-3">
            <p className="font-display text-step--1 tracking-[0.28em] text-brand-gold">
              {messages.why.tagline}
            </p>
          </RevealOnScroll>
        </div>
      </div>
      <div className="noise-overlay absolute inset-0" aria-hidden="true" />
    </section>
  );
}
