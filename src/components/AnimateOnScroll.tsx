"use client";

import { useEffect, useRef, type ReactNode } from "react";

type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale-in"
  | "blur-in"
  | "count-up";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;     // seconds
  duration?: number;  // seconds
  className?: string;
  as?: keyof HTMLElementTagNameMap;
  threshold?: number; // 0-1
  once?: boolean;
}

export function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.7,
  className = "",
  as: Tag = "div",
  threshold = 0.15,
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.remove("animate-on-scroll");
      el.style.opacity = "1";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationDuration = `${duration}s`;
          el.style.animationDelay = `${delay}s`;
          el.classList.add("is-visible", `anim-${animation}`);
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("is-visible", `anim-${animation}`);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, delay, duration, threshold, once]);

  // @ts-expect-error dynamic tag
  return <Tag ref={ref} className={`animate-on-scroll ${className}`}>{children}</Tag>;
}
