"use client";

import { useEffect, useState } from "react";

export default function PerformanceMonitor() {
  const [fps, setFPS] = useState(60);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationId: number;

    const calculateFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const currentFPS = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setFPS(currentFPS);
        
        // Show warning if FPS drops below 30 consistently
        if (currentFPS < 30) {
          setShowWarning(true);
        } else if (currentFPS > 45) {
          setShowWarning(false);
        }
        
        frameCount = 0;
        lastTime = currentTime;
      }
      
      animationId = requestAnimationFrame(calculateFPS);
    };

    animationId = requestAnimationFrame(calculateFPS);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 rounded-lg bg-black/80 p-2 text-white backdrop-blur-sm">
      <div className="text-xs">
        FPS: <span className={fps < 30 ? 'text-red-400' : fps < 45 ? 'text-yellow-400' : 'text-green-400'}>
          {fps}
        </span>
      </div>
      {showWarning && (
        <div className="mt-1 text-xs text-orange-400">
          Low performance detected
        </div>
      )}
    </div>
  );
}