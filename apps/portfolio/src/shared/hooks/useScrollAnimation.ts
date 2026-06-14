"use client";

import { useInView } from "react-intersection-observer";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

// Enhanced scroll animation hook with intersection observer
export function useScrollAnimation(threshold = 0.1) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  return {
    ref,
    inView,
    variants: {
      hidden: { 
        opacity: 0, 
        y: 60,
        scale: 0.95,
        filter: "blur(10px)"
      },
      visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
          duration: 0.8,
          ease: [0.25, 0.25, 0.25, 0.75],
          staggerChildren: 0.1,
        }
      }
    }
  };
}

// Scroll progress hook
export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setProgress(latest);
    });
  }, [scrollYProgress]);

  return progress;
}

// Parallax scroll hook
export function useParallax(speed = 0.5) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -1000 * speed]);
  
  return y;
}

// Section-based scroll animations
export function useSectionAnimation(delay = 0) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return {
    ref,
    initial: "hidden",
    animate: inView ? "visible" : "hidden",
    variants: {
      hidden: { 
        opacity: 0,
        y: 100,
        scale: 0.9,
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 1,
          delay,
          ease: "easeOut",
          staggerChildren: 0.2,
        }
      }
    }
  };
}

// Stagger children animation
export const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};