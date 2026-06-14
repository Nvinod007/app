"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function OptimizedBackground() {
  const [isMounted, setIsMounted] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setIsMounted(true);
    
    // Detect low-performance devices
    const checkPerformance = () => {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      
      if (!gl) {
        setIsLowPerformance(true);
        return;
      }

      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      const renderer = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : '';
      
      // Check for low-end GPUs
      const lowEndPatterns = ['intel', 'integrated', 'software', 'generic'];
      const isLowEnd = lowEndPatterns.some(pattern => 
        renderer.toLowerCase().includes(pattern)
      );

      // Check hardware concurrency (CPU cores)
      const cores = navigator.hardwareConcurrency || 2;
      
      setIsLowPerformance(isLowEnd || cores <= 2);
    };

    checkPerformance();
  }, []);

  // Memoize expensive calculations
  const backgroundConfig = useMemo(() => {
    if (prefersReducedMotion || isLowPerformance) {
      return {
        enableAnimations: false,
        particleCount: 0,
        gradientComplexity: 'simple'
      };
    }
    
    return {
      enableAnimations: true,
      particleCount: isLowPerformance ? 3 : 8,
      gradientComplexity: isLowPerformance ? 'simple' : 'complex'
    };
  }, [prefersReducedMotion, isLowPerformance]);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Base Static Background for Performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20" />
      
      {backgroundConfig.enableAnimations && (
        <>
          {/* Optimized Animated Gradients */}
          <motion.div
            className="absolute inset-0 opacity-40"
            animate={{
              background: backgroundConfig.gradientComplexity === 'complex' ? [
                "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.2), transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.2), transparent 50%)",
                "radial-gradient(circle at 40% 80%, rgba(119, 198, 255, 0.2), transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.2), transparent 50%)",
              ] : [
                "radial-gradient(circle at 50% 50%, rgba(120, 119, 198, 0.15), transparent 60%)",
                "radial-gradient(circle at 50% 50%, rgba(119, 198, 255, 0.15), transparent 60%)",
              ]
            }}
            transition={{
              duration: isLowPerformance ? 20 : 12,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />

          {/* Reduced Particle Count for Performance */}
          {Array.from({ length: backgroundConfig.particleCount }, (_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-white/20"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + Math.sin(i) * 40}%`,
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                y: [-10, 10, -10],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                delay: i * 0.5,
                duration: 4 + i * 0.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          ))}
        </>
      )}
    </div>
  );
}