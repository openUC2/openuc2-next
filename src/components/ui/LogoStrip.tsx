"use client";

interface LogoItem {
  name: string;
  src: string;
}

interface LogoStripProps {
  logos: (string | LogoItem)[];
}

export function LogoStrip({ logos }: LogoStripProps) {
  // Duplicate for seamless loop
  const items = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden py-8">
      <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
        {items.map((logo, i) => {
          if (typeof logo === "string") {
            return (
              <span
                key={i}
                className="text-sm text-uc2-muted/50 font-medium shrink-0 hover:text-uc2-muted transition-colors"
              >
                {logo}
              </span>
            );
          }
          return (
            <img
              key={i}
              src={logo.src}
              alt={logo.name}
              className="h-12 shrink-0 opacity-50 hover:opacity-80 transition-opacity"
            />
          );
        })}
      </div>
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-uc2-light to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-uc2-light to-transparent pointer-events-none" />
    </div>
  );
}
