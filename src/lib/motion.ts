import type { Transition, Variants } from "framer-motion";

export const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUpTransition: Transition = {
  duration: 0.45,
  ease: easeOutExpo,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export const viewportOnce = {
  once: true,
  margin: "-80px" as const,
};

export const ctaTap = {
  whileHover: { y: -1 },
  whileTap: { scale: 0.98 },
};
