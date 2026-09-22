import type { Messages } from "@/messages";
import { processImageDimensions, processImages } from "@/lib/images";
import { RevealOnScroll } from "./RevealOnScroll";
import { SectionImage } from "./SectionImage";

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

        <ol className="grid gap-10 lg:gap-16">
          {messages.process.steps.map((step, index) => {
            const imageFirst = index % 2 === 0;

            return (
              <RevealOnScroll key={step.title} delay={index * 80}>
                <li>
                  <div className="grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-10">
                    <SectionImage
                      src={processImages[index] ?? processImages[0]}
                      alt={step.imageAlt}
                      intrinsicSize={processImageDimensions[index]}
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className={imageFirst ? "lg:order-1" : "lg:order-2"}
                    />

                    <article
                      className={`surface-panel p-6 sm:p-8 ${
                        imageFirst ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <p className="font-display text-step--1 font-black tracking-[0.2em] text-brand-gold">
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
                  </div>
                </li>
              </RevealOnScroll>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
