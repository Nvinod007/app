"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/config/portfolio-data";
import { useParallax, useSectionAnimation, fadeInUp, staggerChildren } from "@/shared/hooks/useScrollAnimation";
import { useReducedMotion } from "@/shared/hooks/useReducedMotion";
import TypingAnimation from "./TypingAnimation";
import HeroCTAButtons from "./HeroCTAButtons";
import HeroContactInfo from "./HeroContactInfo";
import HeroSocialLinks from "./HeroSocialLinks";
import ScrollIndicator from "./ScrollIndicator";

export default function EnhancedHero() {
  const { personal } = portfolioData;
  const prefersReducedMotion = useReducedMotion();
  const sectionAnimation = useSectionAnimation();
  const y = useParallax(0.3);

  return (
    <motion.section
      {...sectionAnimation}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Parallax Background Elements */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            style={{ y }}
            className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl"
          />
          <motion.div
            style={{ y: useParallax(-0.2) }}
            className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-r from-pink-500/20 to-blue-500/20 blur-3xl"
          />
        </>
      )}

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        <motion.div variants={staggerChildren}>
          {/* Animated Greeting with Enhanced Animation */}
          <motion.div
            variants={fadeInUp}
            className="mb-6"
          >
            <motion.span 
              className="inline-block font-mono text-lg text-cyan-400 sm:text-xl"
              animate={prefersReducedMotion ? {} : {
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              👋 Hi there, I&apos;m
            </motion.span>
          </motion.div>

          {/* Enhanced Name Animation */}
          <motion.h1
            variants={fadeInUp}
            className="mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl lg:text-8xl"
          >
            <motion.span
              className="inline-block"
              animate={prefersReducedMotion ? {} : {
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%",
                backgroundImage: "linear-gradient(45deg, #ffffff, #67e8f9, #c084fc, #ffffff)"
              }}
            >
              {personal.name}
            </motion.span>
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.h2
            variants={fadeInUp}
            className="mb-8 text-xl text-cyan-100 sm:text-2xl md:text-3xl"
          >
            <span className="font-medium">{personal.title}</span>
            <span className="mx-3 text-cyan-400">|</span>
            <span className="text-purple-300">{personal.subtitle}</span>
          </motion.h2>

          {/* Enhanced Typing Animation */}
          <motion.div variants={fadeInUp}>
            <TypingAnimation />
          </motion.div>

          {/* Enhanced Description */}
          <motion.p
            variants={fadeInUp}
            className="mx-auto mb-12 max-w-3xl px-4 text-lg leading-relaxed text-gray-200 sm:px-0 sm:text-xl lg:text-2xl"
          >
            {personal.summary}
          </motion.p>

          {/* Stats Section */}
          <motion.div
            variants={fadeInUp}
            className="mb-12 grid grid-cols-2 gap-8 sm:grid-cols-4"
          >
            {[
              { number: "2+", label: "Years Experience" },
              { number: "15+", label: "Projects Completed" },
              { number: "5+", label: "Technologies" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="mb-2 text-2xl font-bold text-cyan-400 sm:text-3xl">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp}>
            <HeroContactInfo />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp}>
            <HeroCTAButtons />
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeInUp}>
            <HeroSocialLinks />
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div variants={fadeInUp}>
            <ScrollIndicator />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements for Visual Interest */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-cyan-400/30"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      )}
    </motion.section>
  );
}