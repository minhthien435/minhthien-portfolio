import { useReducedMotion as useFramerReducedMotion } from 'framer-motion';

/**
 * useReducedMotion
 * Returns true if the user has prefers-reduced-motion enabled.
 * Use this to disable or simplify animations.
 */
export function useReducedMotion() {
  return useFramerReducedMotion();
}
