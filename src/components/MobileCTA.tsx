"use client";

import { useEffect, useState } from "react";
import type { Messages } from "@/messages";
import { INSTAGRAM_URL, PHONE_HREF } from "@/lib/constants";
import { IconInstagram, IconPhone } from "./Icons";

export function MobileCTA({ messages }: { messages: Messages }) {
  const [visible, setVisible] = useState(false);
  const [contactInView, setContactInView] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) return;

    const contactObserver = new IntersectionObserver(
      ([entry]) => setContactInView(entry?.isIntersecting ?? false),
      { threshold: 0.15 }
    );
    contactObserver.observe(contact);

    const onScroll = () => {
      if (window.scrollY > 120) setVisible(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      contactObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const show = visible && !contactInView;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-brand-black/95 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <div className="mx-auto flex max-w-lg gap-3">
        <a href={PHONE_HREF} className="btn-primary flex-1">
          <IconPhone className="h-4 w-4" />
          {messages.nav.call}
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost flex-1"
        >
          <IconInstagram className="h-4 w-4" />
          {messages.nav.instagram}
        </a>
      </div>
    </div>
  );
}
