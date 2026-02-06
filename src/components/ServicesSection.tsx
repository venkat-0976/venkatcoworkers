import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '@/data/services';

export const ServicesSection = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-secondary/20">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      
      <div className="relative section-container">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4"
          >
            Our Expertise
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-foreground mb-6"
          >
            Building the{' '}
            <span className="text-gradient">Future of Work</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            From concept to deployment, we deliver end-to-end solutions 
            that transform how enterprises operate.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/30 h-full transition-all duration-300 hover:bg-card/80 hover:border-primary/30">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Items */}
                <ul className="space-y-3 mb-6">
                  {service.items.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Learn More */}
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-accent transition-colors group/link"
                >
                  Explore Service
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
