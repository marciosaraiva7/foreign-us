import type { Messages } from "@/messages";
import { RevealOnScroll } from "./RevealOnScroll";

export function FAQSection({ messages }: { messages: Messages }) {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-brand-surface py-20 sm:py-28"
    >
      <div className="noise-overlay absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-8">
        <RevealOnScroll>
          <div className="mb-12 text-center">
            <p className="font-script text-step-3 text-brand-gold sm:text-step-4">
              {messages.faq.eyebrow}
            </p>
            <h2 className="font-display mt-1 text-step-4 font-black tracking-[0.06em] lg:text-step-5">
              {messages.faq.title}
            </h2>
          </div>
        </RevealOnScroll>

        <div className="border-t border-white/10">
          {messages.faq.items.map((item, index) => (
            <details
              key={item.question}
              name="foreign-faq"
              className="faq-details group border-b border-white/10"
              open={index === 0}
            >
              <summary className="faq-summary flex min-h-11 cursor-pointer list-none items-start justify-between gap-4 py-5 text-left [&::-webkit-details-marker]:hidden">
                <span className="min-w-0 flex-1">
                  <span className="font-display block text-step-0 font-bold tracking-[0.06em] text-brand-cream">
                    {item.question}
                  </span>
                  <span className="faq-accent mt-2 block h-0.5 w-full max-w-[120px] origin-left bg-brand-gold" />
                </span>
                <span
                  className="faq-icon mt-1 shrink-0 text-xl leading-none text-brand-gold"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="faq-answer pb-5">
                <p className="text-step-0 leading-relaxed text-brand-muted">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
