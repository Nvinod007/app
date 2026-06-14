import { EnhancedHero } from "@/features/hero/components";
import { ModernSkills } from "@/features/skills/components";
import { EnhancedExperience } from "@/features/experience/components";
import { EnhancedProjects } from "@/features/projects/components";
import { Contact } from "@/features/contact/components";
import {
  OptimizedBackground,
  ScrollProgress,
  PerformanceMonitor,
  CodeMatrix,
  CursorEffect,
} from "@/shared/components";

export default function Home() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Performance-Optimized Background Effects */}
      <OptimizedBackground />
      <CodeMatrix />
      <CursorEffect />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Performance Monitor (Dev only) */}
      <PerformanceMonitor />

      {/* Content with Enhanced Animations */}
      <div className="relative z-10">
        {/* Enhanced Hero Section */}
        <EnhancedHero />

        {/* Skills Section with Scroll Animation */}
        <section id="skills" className="py-12">
          <div className="mx-4 rounded-3xl border border-white/10 bg-white/[0.08] shadow-2xl shadow-purple-500/10 backdrop-blur-xl sm:mx-8">
            <ModernSkills />
          </div>
        </section>

        {/* Enhanced Experience Section */}
        <section id="experience" className="py-12">
          <div className="mx-4 rounded-3xl border border-white/10 bg-white/[0.05] shadow-2xl shadow-blue-500/10 backdrop-blur-xl sm:mx-8">
            <EnhancedExperience />
          </div>
        </section>

        {/* Enhanced Projects Section */}
        <section id="projects" className="py-12">
          <div className="mx-4 rounded-3xl border border-white/10 bg-white/[0.08] shadow-2xl shadow-pink-500/10 backdrop-blur-xl sm:mx-8">
            <EnhancedProjects />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12">
          <div className="mx-4 rounded-3xl border border-white/10 bg-white/[0.05] shadow-2xl shadow-cyan-500/10 backdrop-blur-xl sm:mx-8">
            <Contact />
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="mt-12 px-4 py-8">
          <div className="mx-auto max-w-6xl text-center">
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl">
              <div className="mb-4">
                <h3 className="mb-2 text-lg font-semibold text-white">Vinod Kumar Nelanakula</h3>
                <p className="text-gray-300">Building the future, one line of code at a time</p>
              </div>
              <div className="mb-4 flex justify-center space-x-6">
                <a href="https://github.com/Nvinod007" className="text-gray-400 hover:text-white transition-colors">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/vinod-kumar-nelanakula" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="mailto:vinodkumar.nelanakula@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  Email
                </a>
              </div>
              <p className="text-sm text-gray-400">
                © 2024 Vinod Kumar Nelanakula. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
