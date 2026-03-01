'use client';

import { useInView } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { projects } from '@/lib/data';
import { Github, ExternalLink, Rocket } from 'lucide-react';
import Image from 'next/image';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1] as const
    }
  }
};

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <section
      ref={ref}
      id="projects"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-32"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/10 dark:bg-primary/5 rounded-full blur-2xl md:blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-secondary/10 dark:bg-secondary/5 rounded-full blur-2xl md:blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 dark:bg-accent/5 rounded-full blur-2xl md:blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div
            variants={fadeInUp}
            className="text-center space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 dark:bg-accent/5 border border-accent/20"
            >
              <Rocket className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Projects</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Featured Work
              </span>
            </h2>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Data science, analytics, AI, and iOS projects — from demand forecasting to native mobile apps
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500" />

                {/* Card */}
                <div className="relative h-full flex flex-col rounded-3xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden">
                  {/* Project Image/Thumbnail */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                          <Rocket className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    )}

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent opacity-60" />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-1 space-y-4">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary dark:text-primary border border-primary/20"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800 mt-auto">
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-medium text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Demo</span>
                        </motion.a>
                      )}

                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`
                            flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl
                            font-medium text-sm transition-all
                            ${project.demo
                              ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                              : 'bg-gradient-to-r from-secondary to-secondary-dark text-white shadow-lg shadow-secondary/25 hover:shadow-secondary/40'
                            }
                          `}
                        >
                          <Github className="w-4 h-4" />
                          <span>GitHub</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={fadeInUp}
            className="text-center pt-8"
          >
            <motion.a
              href="https://github.com/revinobakmaldi?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 transition-all"
            >
              <Github className="w-5 h-5" />
              <span>View All Projects</span>
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
