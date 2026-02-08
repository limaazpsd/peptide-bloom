interface MarqueeStripProps {
  direction?: "left" | "right";
  variant?: "primary" | "accent";
}

const MARQUEE_TEXT = "BIOHACKING • CIÊNCIA • LONGEVIDADE • PERFORMANCE • RECUPERAÇÃO • ";

export default function MarqueeStrip({ direction = "left", variant = "primary" }: MarqueeStripProps) {
  const bgClass = variant === "primary" 
    ? "bg-primary" 
    : "bg-accent";
  
  const textClass = variant === "primary"
    ? "text-primary-foreground"
    : "text-accent-foreground";

  return (
    <div className="relative overflow-hidden py-16">
      <div
        className={`${bgClass} py-4 rotate-[-3deg] scale-110`}
        style={{ transform: `rotate(${direction === "left" ? "-3deg" : "3deg"}) scale(1.1)` }}
      >
        <div className="flex whitespace-nowrap">
          <div
            className={`animate-marquee flex shrink-0 ${textClass}`}
            style={{ animationDirection: direction === "right" ? "reverse" : "normal" }}
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="text-sm font-bold tracking-[0.2em] uppercase mx-4">
                {MARQUEE_TEXT}
              </span>
            ))}
          </div>
          <div
            className={`animate-marquee flex shrink-0 ${textClass}`}
            style={{ animationDirection: direction === "right" ? "reverse" : "normal" }}
            aria-hidden
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="text-sm font-bold tracking-[0.2em] uppercase mx-4">
                {MARQUEE_TEXT}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
