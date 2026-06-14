"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { allProjects, projectCategories } from "@/config/projects-data";
import { useSectionAnimation, fadeInUp, staggerChildren } from "@/shared/hooks/useScrollAnimation";
import { useReducedMotion } from "@/shared/hooks/useReducedMotion";

export default function EnhancedProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const sectionAnimation = useSectionAnimation(0.3);

  const filteredProjects = selectedCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

  return (
    <motion.section
      {...sectionAnimation}
      className="relative py-20"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <motion.div
          variants={staggerChildren}
          className="mb-16 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="mb-4 bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto max-w-2xl text-lg text-gray-300"
          >
            A showcase of my development journey across different technologies and domains
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={fadeInUp}
          className="mb-12 flex flex-wrap justify-center gap-2"
        >
          {projectCategories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25"
                  : "border border-white/20 text-gray-300 hover:border-white/40 hover:text-white"
              }`}
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <motion.div
            variants={staggerChildren}
            className="mb-16"
          >
            <motion.h3
              variants={fadeInUp}
              className="mb-8 text-2xl font-bold text-white"
            >
              Featured
            </motion.h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isHovered={hoveredProject === project.id}
                  onHover={setHoveredProject}
                  featured={true}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <motion.div variants={staggerChildren}>
            <motion.h3
              variants={fadeInUp}
              className="mb-8 text-2xl font-bold text-white"
            >
              Other Projects
            </motion.h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isHovered={hoveredProject === project.id}
                  onHover={setHoveredProject}
                  featured={false}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}

function ProjectCard({ 
  project, 
  index, 
  isHovered, 
  onHover, 
  featured 
}: {
  project: any;
  index: number;
  isHovered: boolean;
  onHover: (id: string | null) => void;
  featured: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={fadeInUp}
      className="group relative"
      onHoverStart={() => onHover(project.id)}
      onHoverEnd={() => onHover(null)}
      whileHover={prefersReducedMotion ? {} : { 
        y: -8,
        scale: 1.02
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl transition-all duration-500 group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-cyan-500/10 ${
        featured ? 'p-8' : 'p-6'
      }`}>
        {/* Status Badge */}
        {project.status && (
          <div className="absolute top-4 right-4 z-10">
            <span className={`rounded-full px-3 py-1 text-xs font-medium ${
              project.status === 'deployed' 
                ? 'bg-green-500/20 text-green-300' 
                : 'bg-blue-500/20 text-blue-300'
            }`}>
              {project.status}
            </span>
          </div>
        )}

        {/* Project Image Placeholder */}
        <div className={`mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 ${
          featured ? 'h-48' : 'h-32'
        }`}>
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <div className="mb-2 text-2xl">🚀</div>
              <div className="text-sm text-gray-400">{project.category}</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div>
            <h4 className={`font-bold text-white group-hover:text-cyan-300 transition-colors ${
              featured ? 'text-xl mb-2' : 'text-lg mb-1'
            }`}>
              {project.name}
            </h4>
            <p className={`text-gray-300 leading-relaxed ${
              featured ? 'text-base' : 'text-sm'
            }`}>
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, featured ? 5 : 3).map((tech: string) => (
              <span
                key={tech}
                className="rounded-lg bg-white/10 px-2 py-1 text-xs text-gray-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > (featured ? 5 : 3) && (
              <span className="rounded-lg bg-white/10 px-2 py-1 text-xs text-gray-400">
                +{project.technologies.length - (featured ? 5 : 3)}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-2">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-white/20 hover:text-white"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            >
              <span>GitHub</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.a>
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-3 py-2 text-sm text-cyan-300 transition-colors hover:from-cyan-500/30 hover:to-purple-500/30"
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              >
                <span>Live Demo</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
            )}
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </motion.div>
  );
}