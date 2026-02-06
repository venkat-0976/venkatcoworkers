import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.2)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(var(--accent)/0.1)_0%,_transparent_50%)]" />
      </div>

      <div className="relative section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto text-center"
        >
          {/* Decorative elements */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 left-1/4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />

          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-8"
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Ready to Transform{' '}
            <span className="text-gradient">Your Business?</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Join the leading enterprises that trust CoWorkers to power their digital transformation.
            Let's build something extraordinary together.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 flex items-center gap-3"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/products"
              className="group flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-base
bg-primary/10 hover:bg-primary/20
border border-primary/30 hover:border-primary/60
transition-all duration-300"
            >
              <span>Explore Solutions</span>

            </Link>
          </div>


        </motion.div>
      </div>
    </section>
  );
};
