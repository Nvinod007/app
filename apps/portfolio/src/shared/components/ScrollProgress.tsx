"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "../hooks/useScrollAnimation";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transform-gpu"
      style={{ scaleX: progress }}
      initial={{ scaleX: 0 }}
      transformTemplate={({ scaleX }) => `scaleX(${scaleX})`}
    />
  );
}