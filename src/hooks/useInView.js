import { useEffect, useRef, useState } from 'react';

export function useInView({ delay = 0, threshold = 0.1 } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let timeout;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeout = setTimeout(() => setInView(true), delay);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [delay, threshold]);

  return [ref, inView];
}
