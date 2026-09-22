type RevealOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function RevealOnScroll({
  children,
  className = "",
  delay = 0,
}: RevealOnScrollProps) {
  return (
    <div
      data-reveal
      className={`reveal-on-scroll ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
