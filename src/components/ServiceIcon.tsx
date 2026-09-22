import type { ServiceId } from "@/messages/types";

type ServiceIconProps = {
  id: ServiceId;
  className?: string;
};

export function ServiceIcon({ id, className = "h-6 w-6" }: ServiceIconProps) {
  switch (id) {
    case "paint-correction":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" />
          <rect x="16" y="3" width="5" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "ceramic-coating":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M8 4h8l2 4v12H6V8l2-4z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 12h4" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="16" r="1" fill="currentColor" />
        </svg>
      );
    case "caliper-painting":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
          <rect x="14" y="8" width="5" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "window-tint":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="4" y="6" width="16" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 6v12M16 6v12" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        </svg>
      );
    case "wraps":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M4 14c2-4 4-6 8-6s6 2 8 6" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6 16h12" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 10l2-3M16 10l-2-3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "ppf":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M9 11h6M9 14h4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
  }
}
