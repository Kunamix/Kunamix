// hooks/useScrollReveal.ts
// Simple IntersectionObserver hook for scroll-reveal animations.
// Usage: const { ref, visible } = useScrollReveal();
//        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>

import { useEffect, useRef, useState } from "react";

interface Options {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export const useScrollReveal = ({
  threshold = 0.08,
  rootMargin = "0px 0px -40px 0px",
  once = true,
}: Options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, visible };
};
