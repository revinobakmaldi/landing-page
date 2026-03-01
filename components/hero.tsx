'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { personalInfo } from '@/lib/data';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as const }
};

export default function Hero() {
  const [taglineText, setTaglineText] = useState('');
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const taglines = [
    personalInfo.tagline,
    'Data & AI Product Builder',
    'From insights to impact',
    'Building data-driven solutions',
    'From data pipelines to iOS apps'
  ];

  useEffect(() => {
    const currentTagline = taglines[currentTaglineIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (taglineText.length < currentTagline.length) {
          setTaglineText(currentTagline.slice(0, taglineText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (taglineText.length > 0) {
          setTaglineText(currentTagline.slice(0, taglineText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [taglineText, isDeleting, currentTaglineIndex]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href) as HTMLElement | null;
    if (element) {
      const offsetTop = element.offsetTop + 32;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Static gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] bg-primary/20 dark:bg-primary/10 rounded-full blur-2xl md:blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] bg-secondary/20 dark:bg-secondary/10 rounded-full blur-2xl md:blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 dark:bg-accent/5 rounded-full blur-2xl md:blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left column - Text content */}
          <div className="space-y-8">
            {/* Greeting */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-base font-medium text-zinc-600 dark:text-zinc-400">
                Data & AI Product Builder
              </span>
            </motion.div>

            {/* Name with gradient animation */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="inline-block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Animated tagline */}
            <motion.div variants={fadeInUp} className="h-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-zinc-800 dark:text-zinc-200">
                {taglineText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block ml-1 w-1 h-8 bg-primary align-middle"
                />
              </h2>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, '#projects')}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5" />
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-full font-semibold text-lg border-2 border-zinc-200 dark:border-zinc-700 hover:border-primary hover:text-primary dark:hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Hire Me
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={fadeInUp}
              className="flex gap-4 pt-4"
            >
              {personalInfo.socials.github && (
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}

              {personalInfo.socials.linkedin && (
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-accent hover:bg-accent/10 dark:hover:bg-accent/20 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {personalInfo.socials.email && (
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              )}
            </motion.div>
          </div>

          {/* Right column - Avatar with glowing border */}
          <motion.div
            variants={scaleIn}
            className="relative flex justify-center items-center"
          >
            {/* Glowing rings - CSS animated for performance */}
            <div
              className="absolute inset-0 rounded-full animate-spin-slow"
              style={{
                background: 'conic-gradient(from 0deg, #10b981, #3b82f6, #14b8a6, #10b981)',
                filter: 'blur(40px)',
                opacity: 0.6
              }}
            />

            <div
              className="absolute w-[120%] h-[120%] rounded-full animate-spin-slow-reverse"
              style={{
                background: 'conic-gradient(from 180deg, #10b981, #3b82f6, #14b8a6, #10b981)',
                filter: 'blur(30px)',
                opacity: 0.4
              }}
            />

            {/* Avatar container */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Avatar border */}
              <div
                className="absolute inset-0 rounded-full animate-gradient-shift"
                style={{
                  background: 'linear-gradient(45deg, #10b981, #3b82f6, #14b8a6)',
                  padding: '4px',
                  backgroundSize: '200% 200%',
                }}
              >
                <div className="w-full h-full rounded-full bg-zinc-100 dark:bg-zinc-900 p-1">
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center overflow-hidden">
                    <Image
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 p-4 rounded-2xl bg-white dark:bg-zinc-800 shadow-xl">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>

              <div className="absolute -bottom-4 -left-4 p-4 rounded-2xl bg-white dark:bg-zinc-800 shadow-xl">
                <div className="text-2xl">🚀</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1.5,
            ease: [0.25, 0.4, 0.25, 1] as const
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-sm text-zinc-500 dark:text-zinc-400">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-zinc-300 dark:border-zinc-700 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
