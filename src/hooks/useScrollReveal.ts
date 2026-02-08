import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Observe the element and all children with fade-up class
    const elements = el.querySelectorAll(".fade-up");
    elements.forEach((child) => observer.observe(child));
    if (el.classList.contains("fade-up")) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}
