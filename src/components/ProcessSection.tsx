import type { Messages } from "@/messages";
import { RevealOnScroll } from "./RevealOnScroll";

export function ProcessSection({ messages }: { messages: Messages }) {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-brand-black py-20 sm:py-28"
    >
      <div className="wall-texture absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <RevealOnScroll>
          <div className="mb-14 max-w-2xl">
            <p className="font-script text-step-3 text-brand-gold sm:text-step-4">
              {messages.process.eyebrow}
            </p>
            <h2 className="font-display mt-1 text-step-4 font-black leading-none tracking-[0.06em] lg:text-step-5">
              {messages.process.title}
            </h2>
            <p className="mt-4 text-step-0 leading-relaxed text-brand-muted">
              {messages.process.subtitle}
            </p>
          </div>
        </RevealOnScroll>

        <div className="relative">
          <div
            className="absolute left-4 top-0 hidden h-full w-px origin-top bg-brand-gold/30 lg:block"
            aria-hidden="true"
          >
            <div className="h-full w-full origin-top scale-y-0 bg-brand-gold animate-draw-line" />
          </div>

          <ol className="grid gap-8 lg:gap-12">
            {messages.process.steps.map((step, index) => (
              <RevealOnScroll key={step.title} delay={index * 80}>
                <li className="relative lg:pl-16">
                  <span
                    className="font-display absolute left-0 top-1 hidden h-8 w-8 items-center justify-center border border-brand-gold bg-brand-black text-step--1 font-black text-brand-gold lg:flex"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <article className="surface-panel p-6 sm:p-8">
                    <p className="font-display text-step--1 font-black tracking-[0.2em] text-brand-gold lg:hidden">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-display mt-1 text-step-2 font-bold tracking-[0.12em] text-brand-cream">
                      {step.title}
                    </h3>
                    <div className="mt-3 h-0.5 w-12 bg-brand-gold" />
                    <p className="mt-4 max-w-xl text-step-0 leading-relaxed text-brand-muted">
                      {step.description}
                    </p>
                  </article>
                </li>
              </RevealOnScroll>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
