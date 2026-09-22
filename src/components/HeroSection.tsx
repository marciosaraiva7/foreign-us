import Image from "next/image";
import type { Messages } from "@/messages";
import { croppedImages } from "@/lib/images";
import { INSTAGRAM_URL, PHONE_HREF } from "@/lib/constants";
import { BrandMark } from "./BrandMark";
import { IconInstagram, IconPhone } from "./Icons";
import { RevealOnScroll } from "./RevealOnScroll";

export function HeroSection({ messages }: { messages: Messages }) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-brand-black">
      <div className="wall-texture absolute inset-0 opacity-80" aria-hidden="true" />
      <div className="noise-overlay absolute inset-0 opacity-20" aria-hidden="true" />

      {/* Cinematic car atmosphere — gradients control legibility, not low opacity */}
      <div className="hero-car-layer pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-x-0 bottom-0 h-[44vh] min-h-[240px] max-h-[380px] sm:h-[48vh] sm:max-h-[460px]">
          <Image
            src={croppedImages.heroBanner}
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-car-image object-cover object-[center_72%] sm:object-[center_68%]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/88 to-brand-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/25 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_100%,rgba(232,185,35,0.07),transparent_65%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-gold/35 to-transparent" />
      </div>

      <div className="hero-glow pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-gold/10 blur-[100px]" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-3xl flex-col items-center justify-center px-4 pb-28 pt-28 text-center sm:px-8 md:pb-24 md:pt-32">
        <RevealOnScroll>
          <BrandMark size="lg" className="mb-6 scale-125 sm:scale-150" />
        </RevealOnScroll>

        <RevealOnScroll delay={60}>
          <p className="font-script text-step-3 text-brand-gold sm:text-step-4">
            {messages.hero.scriptWord}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={120}>
          <h1 className="font-display mt-2 text-step-4 font-black leading-[0.92] tracking-[0.04em] text-brand-cream sm:text-step-5 lg:text-step-6">
            {messages.hero.headline}
            <span className="block text-brand-gold">
              {messages.hero.headlineAccent}
            </span>
          </h1>
        </RevealOnScroll>

        <div className="mx-auto mt-5 h-1 w-24 origin-center bg-brand-gold animate-draw-line sm:mt-6 sm:w-28" />

        <RevealOnScroll delay={180}>
          <p className="font-display mx-auto mt-5 max-w-xl text-step--1 font-semibold tracking-[0.2em] text-brand-cream/90 sm:mt-6">
            {messages.hero.tagline}{" "}
            <span className="text-brand-gold">{messages.hero.taglineAccent}</span>
          </p>
          <p className="mt-2 text-step--1 tracking-[0.24em] text-brand-muted sm:mt-3">
            {messages.hero.location}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={240}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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

      <div className="absolute inset-x-0 bottom-6 z-10 flex flex-col items-center gap-1.5 text-brand-muted sm:bottom-8">
        <span className="text-[0.65rem] tracking-[0.24em] uppercase sm:text-step--1">
          {messages.hero.scrollHint}
        </span>
        <span className="h-6 w-px animate-pulse bg-brand-gold/60 sm:h-8" aria-hidden="true" />
      </div>
    </section>
  );
}
