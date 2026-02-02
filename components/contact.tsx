'use client';

import { useInView } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { personalInfo } from '@/lib/data';
import { Github, Twitter, Linkedin, Mail, Copy, Check, MessageCircle } from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const socialButtonVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const copyEmailToClipboard = async () => {
    if (personalInfo.socials.email) {
      try {
        await navigator.clipboard.writeText(personalInfo.socials.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy email:', err);
      }
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: personalInfo.socials.github,
      gradient: 'from-zinc-700 to-zinc-900 dark:from-zinc-600 dark:to-zinc-800',
      hoverGradient: 'hover:from-primary hover:to-primary-dark',
      shadowColor: 'shadow-zinc-700/25',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: personalInfo.socials.twitter,
      gradient: 'from-sky-400 to-sky-600 dark:from-sky-500 dark:to-sky-700',
      hoverGradient: 'hover:from-sky-500 hover:to-sky-700',
      shadowColor: 'shadow-sky-500/25',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: personalInfo.socials.linkedin,
      gradient: 'from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800',
      hoverGradient: 'hover:from-blue-600 hover:to-blue-800',
      shadowColor: 'shadow-blue-500/25',
    },
    {
      name: 'Email',
      icon: Mail,
      href: `mailto:${personalInfo.socials.email}`,
      gradient: 'from-emerald-400 to-emerald-600 dark:from-emerald-500 dark:to-emerald-700',
      hoverGradient: 'hover:from-emerald-500 hover:to-emerald-700',
      shadowColor: 'shadow-emerald-500/25',
    },
  ];

  return (
    <section
      ref={ref}
      id="contact"
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
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl"
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 dark:bg-accent/5 border border-accent/20"
            >
              <MessageCircle className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Get in Touch</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions
            </p>
          </motion.div>

          {/* Social Links Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                social.href && (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={socialButtonVariants}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative"
                  >
                    {/* Glow effect on hover */}
                    <motion.div
                      className={`absolute -inset-1 bg-gradient-to-r ${social.hoverGradient} rounded-3xl blur opacity-0 group-hover:opacity-40 transition duration-500`}
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    {/* Button */}
                    <div className="relative h-full rounded-3xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-xl overflow-hidden">
                      {/* Gradient background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                      {/* Content */}
                      <div className="relative p-8 flex flex-col items-center justify-center gap-4">
                        {/* Icon container */}
                        <motion.div
                          className={`
                            p-5 rounded-2xl bg-gradient-to-br ${social.gradient}
                            text-white shadow-lg ${social.shadowColor}
                            group-hover:scale-110 transition-transform duration-300
                          `}
                          animate={{
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <Icon className="w-8 h-8" />
                        </motion.div>

                        {/* Social name */}
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-white transition-colors">
                          {social.name}
                        </h3>

                        {/* Connect text */}
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-white/80 transition-colors">
                          {social.name === 'Email' ? 'Send a message' : 'Follow me'}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                )
              );
            })}
          </motion.div>

          {/* Email Copy Section */}
          <motion.div
            variants={fadeInUp}
            className="max-w-2xl mx-auto"
          >
            <div className="relative p-8 rounded-3xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 shadow-xl">
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
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/25"
              >
                <Mail className="w-6 h-6 text-white" />
              </motion.div>

              <div className="pt-6 text-center space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    Or send me an email
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Click to copy my email address to your clipboard
                  </p>
                </div>

                {/* Email copy button */}
                <motion.button
                  onClick={copyEmailToClipboard}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    relative group w-full sm:w-auto inline-flex items-center justify-center gap-3
                    px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300
                    ${copied
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/25'
                      : 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40'
                    }
                  `}
                >
                  {/* Background glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Content */}
                  <div className="relative flex items-center gap-3">
                    {copied ? (
                      <>
                        <Check className="w-5 h-5" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5" />
                        <span>{personalInfo.socials.email}</span>
                      </>
                    )}
                  </div>
                </motion.button>

                {/* Additional info */}
                <p className="text-sm text-zinc-500 dark:text-zinc-500">
                  I typically respond within 24-48 hours
                </p>
              </div>
            </div>
          </motion.div>

          {/* Footer CTA */}
          <motion.div
            variants={fadeInUp}
            className="text-center pt-8"
          >
            <motion.p
              className="text-lg text-zinc-600 dark:text-zinc-400"
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Thanks for stopping by! Let's build something amazing together.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
