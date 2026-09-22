import type { Messages } from "@/messages";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/constants";
import { BrandMark } from "./BrandMark";
import { IconCalendar, IconInstagram, IconPhone } from "./Icons";
import { RevealOnScroll } from "./RevealOnScroll";

export function ContactSection({ messages }: { messages: Messages }) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-brand-surface py-20 sm:py-28"
    >
      <div className="wall-texture absolute inset-0" aria-hidden="true" />
      <div className="noise-overlay absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-8">
        <RevealOnScroll>
          <h2 className="font-display text-step-4 font-black leading-[0.95] tracking-[0.05em] lg:text-step-5">
            {messages.contact.headline}
          </h2>
          <p className="font-display mt-4 text-step--1 tracking-[0.24em] text-brand-muted">
            {messages.contact.subheadline}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/10">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-12 flex-col items-center px-4"
            >
              <IconInstagram className="mb-3 h-6 w-6 text-brand-gold" />
              <span className="text-step--1 tracking-[0.2em] text-brand-muted">
                {messages.contact.instagram}
              </span>
              <span className="font-display mt-2 text-step--1 font-bold tracking-[0.12em] text-brand-cream group-hover:text-brand-gold">
                {INSTAGRAM_HANDLE}
              </span>
              <span className="mt-3 h-0.5 w-0 bg-brand-gold transition-all duration-300 group-hover:w-16" />
            </a>

            <a
              href={PHONE_HREF}
              className="group flex min-h-12 flex-col items-center px-4"
            >
              <IconPhone className="mb-3 h-6 w-6 text-brand-gold" />
              <span className="text-step--1 tracking-[0.2em] text-brand-muted">
                {messages.contact.phone}
              </span>
              <span className="font-display mt-2 text-step--1 font-bold tracking-[0.12em] text-brand-cream group-hover:text-brand-gold">
                {PHONE_DISPLAY}
              </span>
              <span className="mt-3 h-0.5 w-0 bg-brand-gold transition-all duration-300 group-hover:w-16" />
            </a>

            <div className="flex min-h-12 flex-col items-center px-4">
              <IconCalendar className="mb-3 h-6 w-6 text-brand-gold" />
              <span className="font-display mt-2 text-step--1 font-bold tracking-[0.12em] text-brand-cream">
                {messages.contact.appointment}
              </span>
              <p className="mt-2 max-w-[14rem] text-step--1 leading-relaxed text-brand-muted">
                {messages.contact.appointmentNote}
              </p>
              <span className="mt-3 h-0.5 w-16 bg-brand-gold/40" aria-hidden="true" />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={180}>
          <div className="mt-16 flex flex-col items-center">
            <BrandMark size="lg" />
            <p className="font-display mt-6 text-step--1 tracking-[0.28em] text-brand-muted">
              {messages.contact.location}
            </p>
            <p className="font-display mt-3 text-step--1 tracking-[0.22em] text-brand-cream/80">
              {messages.contact.tagline}{" "}
              <span className="text-brand-gold">
                {messages.contact.taglineAccent}
              </span>
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
