interface PlaceholderImageProps {
  text: string;
  aspectRatio?: string;
  bgColor?: string;
  className?: string;
}

export function PlaceholderImage({
  text,
  aspectRatio = "16/9",
  bgColor = "bg-uc2-surface-alt/60",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden ${bgColor} ${className}`}
      style={{ aspectRatio }}
    >
      <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
        <span className="text-sm text-uc2-muted">{text}</span>
      </div>
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
    </div>
  );
}
