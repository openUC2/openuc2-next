import Link from "next/link";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  alt?: boolean;
  dark?: boolean;
  id?: string;
}

export function Section({ children, className = "", alt, dark, id }: SectionProps) {
  const bg = dark
    ? "bg-uc2-dark dark-section"
    : alt
    ? "bg-uc2-surface-alt"
    : "bg-white";
  return (
    <section id={id} className={`py-20 ${bg} ${className}`}>
      <div className="max-w-[1140px] mx-auto px-6">{children}</div>
    </section>
  );
}

interface CTABannerProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTABanner({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-uc2-blue/80 to-uc2-blue/60 p-10 md:p-14 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{title}</h2>
      <p className="text-white/80 mb-8 max-w-lg mx-auto">{description}</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href={primaryHref}
          className="px-6 py-3 bg-white text-uc2-blue font-semibold rounded-lg hover:bg-uc2-light transition-colors"
        >
          {primaryLabel}
        </Link>
        {secondaryLabel && secondaryHref && (
          <Link
            href={secondaryHref}
            className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            {secondaryLabel}
          </Link>
        )}
      </div>
    </div>
  );
}

interface SpecsTableProps {
  rows: [string, string][];
}

export function SpecsTable({ rows }: SpecsTableProps) {
  return (
    <table className="w-full text-sm">
      <tbody>
        {rows.map(([label, value], i) => (
          <tr key={i} className="border-b border-uc2-border">
            <th className="text-left py-3 pr-4 text-uc2-muted font-medium w-2/5">{label}</th>
            <td className="py-3 text-uc2-text">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-uc2-card border border-uc2-border rounded-xl p-6 hover:border-uc2-blue/50 transition-colors">
      <div className="w-10 h-10 rounded-lg bg-uc2-blue/20 text-uc2-blue flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-uc2-muted leading-relaxed">{description}</p>
    </div>
  );
}

interface TagProps {
  variant: "edu" | "pro" | "maker";
  children: ReactNode;
  className?: string;
}

export function Tag({ variant, children, className }: TagProps) {
  const colors = {
    edu: "bg-uc2-green/20 text-uc2-green",
    pro: "bg-uc2-blue/20 text-uc2-blue",
    maker: "bg-uc2-accent/20 text-uc2-accent",
  };
  return (
    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${colors[variant]} ${className ?? ''}`}>
      {children}
    </span>
  );
}
