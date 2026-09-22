export function IconPhone({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6.5 3h3l1.2 5.1-2.1 1.2a11 11 0 0 0 5.1 5.1l1.2-2.1L20.5 14v3a1.5 1.5 0 0 1-1.6 1.5C9.8 18.5 5.5 14.2 5.5 6.1A1.5 1.5 0 0 1 6.5 3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconInstagram({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function IconCalendar({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M8 3v4M16 3v4M3 10h18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
