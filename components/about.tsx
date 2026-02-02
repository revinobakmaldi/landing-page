'use client';

import { useInView } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { personalInfo, skills } from '@/lib/data';
import { Code2, Sparkles, Zap } from 'lucide-react';

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

const skillPillVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Color assignments for skill pills
  const skillColors = [
    'bg-gradient-to-r from-primary to-primary-dark',
    'bg-gradient-to-r from-secondary to-secondary-dark',
    'bg-gradient-to-r from-accent to-accent-dark',
    'bg-gradient-to-r from-primary to-secondary',
    'bg-gradient-to-r from-secondary to-accent',
    'bg-gradient-to-r from-accent to-primary',
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-32"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient blob */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl"
        />

        {/* Secondary gradient blob */}
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl"
        />

        {/* Accent gradient blob */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl"
        />
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/5 border border-primary/20"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Me</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Get to Know Me
              </span>
            </h2>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Passionate about building innovative solutions and creating meaningful digital experiences
            </p>
          </motion.div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left column - Bio */}
            <motion.div
              variants={fadeInUp}
              className="space-y-6"
            >
              <div className="relative">
                {/* Decorative icon */}
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-8 -left-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/25"
                >
                  <Code2 className="w-8 h-8 text-white" />
                </motion.div>

                <div className="relative p-8 rounded-3xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 shadow-xl">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                    <span className="text-3xl">👋</span>
                    Hey there!
                  </h3>

                  <div className="space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p className="text-lg">
                      {personalInfo.bio}
                    </p>

                    <p>
                      I specialize in building modern web applications using cutting-edge technologies.
                      My passion lies in creating intuitive user experiences and robust backend systems
                      that scale seamlessly.
                    </p>

                    <p>
                      When I'm not coding, you'll find me exploring new technologies, contributing to
                      open-source projects, or sharing knowledge with the developer community.
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="text-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                      >
                        5+
                      </motion.div>
                      <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Years Exp</div>
                    </div>
                    <div className="text-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"
                      >
                        50+
                      </motion.div>
                      <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Projects</div>
                    </div>
                    <div className="text-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"
                      >
                        100%
                      </motion.div>
                      <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Dedication</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right column - Skills */}
            <motion.div
              variants={fadeInUp}
              className="space-y-6"
            >
              <div className="relative p-8 rounded-3xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 shadow-xl">
                {/* Decorative icon */}
                <motion.div
                  animate={{
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-8 -right-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg shadow-accent/25"
                >
                  <Zap className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-2">
                  <span className="text-3xl">⚡</span>
                  Tech Stack
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                  Tools and technologies I use to bring ideas to life
                </p>

                {/* Skills grid */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate={controls}
                  className="flex flex-wrap gap-3"
                >
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      variants={skillPillVariants}
                      whileHover={{
                        scale: 1.05,
                        rotate: [0, -2, 2, 0],
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`
                        ${skillColors[index % skillColors.length]}
                        px-5 py-3 rounded-full text-white font-semibold shadow-lg
                        hover:shadow-xl transition-all duration-300 cursor-default
                      `}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>

                {/* Additional info */}
                <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 text-center">
                    Always learning and exploring new technologies to stay at the forefront of innovation
                  </p>
                </div>
              </div>

              {/* Learning card */}
              <motion.div
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white dark:bg-zinc-800 shadow-lg">
                    <Sparkles className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                      Currently Learning
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                      Advanced AI/ML techniques, Web3, and cloud architecture.
                      Always pushing the boundaries of what's possible!
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
