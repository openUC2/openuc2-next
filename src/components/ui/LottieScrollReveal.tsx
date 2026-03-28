"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web";

interface Props {
  src: string;
  alt: string;
  className?: string;
  preLoad?: number; // fraction of animation to preload (0-1)
}

/**
 * Renders a Lottie animation that plays forward as it scrolls into view.
 * The animation is linked to the container's scroll position within the viewport.
 */
export function LottieScrollReveal({ src, alt, className = "", preLoad=0.1 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<ReturnType<typeof lottie.loadAnimation> | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // enforce a transaparent background for better blending with the page
    const anim = lottie.loadAnimation({
      container: el,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: src,
      
    });

    animRef.current = anim;

    let totalFrames = 0;
    anim.addEventListener("DOMLoaded", () => {
      totalFrames = anim.totalFrames;
      // Set to first frame
      anim.goToAndStop(0, true);
    });

    function onScroll() {
      if (!totalFrames || !el) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;

      // progress: 0 when element enters viewport at bottom, 1 when it reaches top
      const progress = Math.min(
        Math.max((windowH - rect.top) / (windowH + rect.height), 0),
        1
      );
      //console.log("Scroll progress:", progress.toFixed(2));
      const frame = Math.floor((progress + preLoad) * (totalFrames - 1));
      anim.goToAndStop(frame, true);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    // Run once on mount
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      anim.destroy();
      animRef.current = null;
    };
  }, [src]);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label={alt}
      className={className}
    />
  );
}
