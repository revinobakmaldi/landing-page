'use client';

import { useInView } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { digitalProducts } from '@/lib/data';
import { LayoutDashboard, Bot, GraduationCap, Check, Bell, Package } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutDashboard,
  Bot,
  GraduationCap,
};

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

export default function Products() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <section
      ref={ref}
      id="products"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-32"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/10 dark:bg-primary/5 rounded-full blur-2xl md:blur-3xl" />
        <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-secondary/10 dark:bg-secondary/5 rounded-full blur-2xl md:blur-3xl" />
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/5 border border-primary/20"
            >
              <Package className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Products</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Digital Products
              </span>
            </h2>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Data-driven templates, tools, and courses — built from real-world experience
            </p>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {digitalProducts.map((product) => {
              const Icon = iconMap[product.icon] || Package;
              return (
                <motion.div
                  key={product.id}
                  variants={cardVariants}
                  className="group relative"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500" />

                  {/* Card */}
                  <div className="relative h-full rounded-3xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden">
                    {/* Card Header */}
                    <div className="p-8 pb-4 space-y-4">
                      {/* Icon + Badge */}
                      <div className="flex items-start justify-between">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/25">
                          <Icon className="w-8 h-8 text-white" />
                        </div>

                        {product.comingSoon && (
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20">
                            Coming Soon
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>

                      {/* Description */}
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="px-8 pb-8">
                      <ul className="space-y-2">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            className="text-center pt-8"
          >
            <div className="relative inline-block">
              <div className="p-8 rounded-3xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 shadow-xl">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                      Get notified when products launch
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Be the first to access new templates, tools, and courses.
                    </p>
                  </div>
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all whitespace-nowrap"
                  >
                    <Bell className="w-4 h-4" />
                    Notify Me
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
