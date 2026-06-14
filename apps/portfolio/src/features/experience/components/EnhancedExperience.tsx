"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/config/portfolio-data";
import { useSectionAnimation, fadeInUp, staggerChildren } from "@/shared/hooks/useScrollAnimation";
import { useReducedMotion } from "@/shared/hooks/useReducedMotion";

export default function EnhancedExperience() {
  const { experience } = portfolioData;
  const prefersReducedMotion = useReducedMotion();
  const sectionAnimation = useSectionAnimation(0.2);

  return (
    <motion.section
      {...sectionAnimation}
      className="relative py-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <motion.div
          variants={staggerChildren}
          className="mb-16 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl"
          >
            Professional Journey
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto max-w-2xl text-lg text-gray-300"
          >
            Building innovative solutions and scaling applications across diverse tech stacks
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 md:left-1/2 md:-ml-0.5" />

          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              variants={fadeInUp}
              className={`relative mb-16 md:mb-24 ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'
              } md:w-1/2`}
            >
              {/* Timeline Dot */}
              <motion.div
                className={`absolute top-8 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-gray-900 ${
                  index % 2 === 0 ? 'left-2 md:right-[-2.5rem]' : 'left-2 md:left-[-2.5rem]'
                } md:top-8`}
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />

              {/* Experience Card */}
              <motion.div
                className="group ml-8 md:ml-0"
                whileHover={prefersReducedMotion ? {} : { 
                  scale: 1.02,
                  y: -8
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 shadow-2xl backdrop-blur-xl">
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-4 py-1 text-sm font-medium text-cyan-300">
                          {job.startDate} - {job.endDate}
                        </span>
                        <div className="text-right text-sm text-gray-400">
                          {job.location}
                        </div>
                      </div>
                      <h3 className="mb-2 text-2xl font-bold text-white">
                        {job.position}
                      </h3>
                      <h4 className="mb-4 text-xl font-semibold text-blue-400">
                        {job.company}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {job.description}
                      </p>
                    </div>

                    {/* Projects */}
                    <div className="space-y-6">
                      <h5 className="text-lg font-semibold text-white">Key Projects</h5>
                      {job.projects.map((project, projectIndex) => (
                        <motion.div
                          key={projectIndex}
                          className="group/project rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.05]"
                          whileHover={prefersReducedMotion ? {} : { x: index % 2 === 0 ? -5 : 5 }}
                        >
                          <h6 className="mb-3 text-lg font-semibold text-yellow-400 group-hover/project:text-yellow-300">
                            {project.name}
                          </h6>
                          <p className="mb-4 text-gray-300 leading-relaxed">
                            {project.description}
                          </p>

                          {/* Technologies */}
                          <div className="mb-4">
                            <div className="mb-2 text-sm text-gray-400">Technologies:</div>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <motion.span
                                  key={tech}
                                  className="rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-3 py-1 text-sm text-blue-200 backdrop-blur-sm"
                                  whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: techIndex * 0.1 }}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>

                          {/* Achievements */}
                          <div>
                            <div className="mb-2 text-sm text-gray-400">Key Achievements:</div>
                            <div className="space-y-2">
                              {project.achievements.map((achievement, achievementIndex) => (
                                <motion.div
                                  key={achievementIndex}
                                  className="flex items-start gap-3"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: achievementIndex * 0.1 }}
                                >
                                  <div className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex-shrink-0" />
                                  <span className="text-sm text-gray-300 leading-relaxed">
                                    {achievement}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}