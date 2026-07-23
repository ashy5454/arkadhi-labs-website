import { useEffect, useRef, useState } from 'react';

/**
 * Lightweight Intersection Observer hook for scroll-triggered animations.
 * Returns [ref, isInView] — attach ref to any element to detect viewport entry.
 */
export default function useInView({ threshold = 0.15, triggerOnce = true } = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) observer.unobserve(el);
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  return [ref, isInView];
}
