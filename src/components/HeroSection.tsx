import Image from "next/image";
import type { Messages } from "@/messages";
import { croppedImages } from "@/lib/images";
import { INSTAGRAM_URL, PHONE_HREF } from "@/lib/constants";
import { IconInstagram, IconPhone } from "./Icons";
import { RevealOnScroll } from "./RevealOnScroll";

export function HeroSection({ messages }: { messages: Messages }) {
  return (
    <section className="foreign-hero relative overflow-hidden bg-brand-black">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-wordmark" aria-hidden="true">FOREIGN</div>
      <div className="hero-editorial mx-auto max-w-7xl px-5 sm:px-8">
        <div className="hero-copy relative z-10">
          <RevealOnScroll>
            <p className="hero-kicker">{messages.hero.location}</p>
            <p className="font-script hero-signature text-brand-gold">{messages.hero.scriptWord}</p>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <h1 className="hero-title font-display font-black">
              {messages.hero.headline}
              <span className="block text-brand-gold">{messages.hero.headlineAccent}</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={180}>
            <p className="hero-tagline">{messages.hero.tagline} <span className="text-brand-gold">{messages.hero.taglineAccent}</span></p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={PHONE_HREF} className="btn-primary"><IconPhone className="h-4 w-4" />{messages.hero.ctaCall}</a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost"><IconInstagram className="h-4 w-4" />Instagram</a>
            </div>
          </RevealOnScroll>
        </div>
        <RevealOnScroll delay={160} className="hero-visual">
          <div className="hero-photo-frame">
            <Image src={croppedImages.gtr} alt={messages.why.imageAlt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="hero-car-image object-cover" />
            <div className="hero-photo-shade" aria-hidden="true" />
            <span className="hero-photo-label">FRGN / 01</span>
            <span className="hero-photo-script font-script" aria-hidden="true">Built different.</span>
          </div>
          <div className="hero-photo-caption"><span>{messages.contact.tagline}</span><span>FRGN © {new Date().getFullYear()}</span></div>
        </RevealOnScroll>
      </div>
      <a href="#services" className="hero-explore"><span className="explore-line" aria-hidden="true" />{messages.hero.scrollHint}</a>
      <div className="hero-service-strip" aria-hidden="true">
        {messages.services.items.map((service) => <span key={service.id}>{service.title}<b>✦</b></span>)}
      </div>
    </section>
  );
}
