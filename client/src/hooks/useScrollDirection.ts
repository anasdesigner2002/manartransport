import { useEffect, useState } from "react";

export function useScrollDirection() {
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 20);
      if (current < 20) {
        setDirection("up");
      } else if (Math.abs(current - lastScrollY) > 6) {
        setDirection(current > lastScrollY ? "down" : "up");
      }
      lastScrollY = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { direction, scrolled };
}
