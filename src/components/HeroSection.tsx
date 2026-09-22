import type { Messages } from "@/messages";
import { croppedImages } from "@/lib/images";
import { INSTAGRAM_URL, PHONE_HREF } from "@/lib/constants";
import { HeroParallaxImage } from "./HeroParallaxImage";
import { IconInstagram, IconPhone } from "./Icons";
import { RevealOnScroll } from "./RevealOnScroll";

export function HeroSection({ messages }: { messages: Messages }) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-brand-black">
      <div className="noise-overlay absolute inset-0" aria-hidden="true" />
      <div className="wall-texture absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-4 pb-32 pt-28 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-24 lg:pt-32">
        <div>
          <RevealOnScroll>
            <p className="font-script text-step-4 text-brand-gold sm:text-step-5">
              {messages.hero.scriptWord}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={80}>
            <h1 className="font-display mt-2 text-step-5 font-black leading-[0.92] tracking-[0.04em] text-brand-cream lg:text-step-6">
              {messages.hero.headline}
              <span className="block text-brand-gold">
                {messages.hero.headlineAccent}
              </span>
            </h1>
          </RevealOnScroll>

          <div className="mt-6 h-1 w-28 origin-left bg-brand-gold animate-draw-line" />

          <RevealOnScroll delay={160}>
            <p className="font-display mt-6 max-w-lg text-step--1 font-semibold tracking-[0.22em] text-brand-cream/90">
              {messages.hero.tagline}{" "}
              <span className="text-brand-gold">{messages.hero.taglineAccent}</span>
            </p>
            <p className="mt-3 text-step--1 tracking-[0.28em] text-brand-muted">
              {messages.hero.location}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={240}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={PHONE_HREF} className="btn-primary">
                <IconPhone className="h-4 w-4" />
                {messages.hero.ctaCall}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <IconInstagram className="h-4 w-4" />
                {messages.hero.ctaInstagram}
              </a>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={120} className="mx-auto w-full lg:mx-0">
          <HeroParallaxImage
            src={croppedImages.hero}
            alt={messages.hero.imageAlt}
          />
        </RevealOnScroll>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2 text-brand-muted">
        <span className="text-step--1 tracking-[0.24em] uppercase">
          {messages.hero.scrollHint}
        </span>
        <span className="h-8 w-px animate-pulse bg-brand-gold/60" aria-hidden="true" />
      </div>
    </section>
  );
}
