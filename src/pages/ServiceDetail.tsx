import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { services } from '@/data/services';
import {
  ArrowRight,
  CheckCircle2,
  ArrowLeft,
  Target,
  Zap,
} from 'lucide-react';

/* 🔄 UPDATED: Image mapping for service detail page */
const serviceImages: Record<string, string> = {
  'enterprise-design': '/services/enterprise-design.png',
  'ai-machine-learning': '/services/ai-machine-learning.png',
  'custom-software-development': '/services/custom-software-development.png',
};

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="section-container pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Service Not Found
          </h1>
          <Link to="/services" className="text-primary hover:text-accent">
            Back to Services
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--accent)/0.15)_0%,_transparent_50%)]" />

        <div className="relative section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Services</span>
            </Link>

            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <ServiceIcon className="w-8 h-8 text-primary" />
                </div>
                <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider">
                  Service Detail
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
                {service.title}
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>

              <p className="text-lg text-muted-foreground/80 leading-relaxed">
                {service.detailedDescription}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🔄 UPDATED: Service Visual with REAL IMAGE */}
      <section className="py-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={serviceImages[service.id] || '/services/default.png'}
              alt={service.title}
              className="
                w-full
                max-h-[480px]
                object-contain
                rounded-2xl
                transition-transform duration-500 ease-out
                hover:scale-[1.02]
              "
            />
          </motion.div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                What We <span className="text-gradient">Offer</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {service.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border/30"
                  >
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {item}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional implementation with industry best practices
                        and quality assurance.
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Capabilities & Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 mb-12"
            >
              <div className="p-8 rounded-2xl bg-card/50 border border-border/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Capabilities
                  </h3>
                </div>

                <ul className="space-y-3">
                  {service.capabilities.map((capability, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-card/50 border border-border/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Benefits
                  </h3>
                </div>

                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Get Started with {service.title}?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let&apos;s discuss how {service.title} can transform your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/services"
                className="px-8 py-4 rounded-xl font-semibold text-foreground border border-border/50 bg-secondary/30 hover:bg-secondary/50 hover:border-primary/30 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServiceDetail;
