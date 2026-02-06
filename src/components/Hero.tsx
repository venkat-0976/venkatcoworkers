import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParticleField } from './ParticleField';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.15)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(var(--accent)/0.1)_0%,_transparent_40%)]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />

        {/* 3D Particles */}
        <ParticleField />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">Enterprise AI Solutions</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-foreground"
          >
            Intelligence that{' '}
            <span className="text-gradient">Works for You.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            CoWorkers delivers enterprise-grade software solutions—from Intelligent Document Processing
            to custom ML tools—designed to automate your workflow and scale your business.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/products"
              className="group flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-base
bg-primary/10 hover:bg-primary/20
border border-primary/30 hover:border-primary/60
transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Play className="w-4 h-4 text-primary fill-primary" />
              </div>
              <span className="text-foreground">View our solutions</span>
            </Link>

            <Link
              to="/contact"
              className="group flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-base border border-border/50 bg-secondary/30 hover:bg-secondary/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Play className="w-4 h-4 text-primary fill-primary" />
              </div>
              <span className="text-foreground">Book a Consultation</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
