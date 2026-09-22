export type ServiceId =
  | "paint-correction"
  | "ceramic-coating"
  | "caliper-painting"
  | "window-tint"
  | "wraps"
  | "ppf";

export type NavId = "services" | "process" | "why" | "faq" | "contact";

export type Messages = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    call: string;
    instagram: string;
    services: string;
    process: string;
    why: string;
    faq: string;
    contact: string;
  };
  hero: {
    scriptWord: string;
    headline: string;
    headlineAccent: string;
    tagline: string;
    taglineAccent: string;
    location: string;
    ctaCall: string;
    ctaInstagram: string;
    scrollHint: string;
    imageAlt: string;
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    subtitleAccent: string;
    items: Array<{
      id: ServiceId;
      title: string;
      description: string;
      imageAlt: string;
    }>;
  };
  process: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  why: {
    eyebrow: string;
    title: string;
    subtitle: string;
    subtitleAccent: string;
    subtitleEnd: string;
    values: Array<{
      title: string;
      description: string;
    }>;
    tagline: string;
    imageAlt: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  contact: {
    headline: string;
    subheadline: string;
    instagram: string;
    phone: string;
    appointment: string;
    appointmentNote: string;
    location: string;
    tagline: string;
    taglineAccent: string;
  };
  jsonLd: {
    description: string;
    areaServed: string;
  };
};
