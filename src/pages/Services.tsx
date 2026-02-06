import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Shield, Zap, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '@/data/services';

/* ✅ Service images */
const serviceImages: Record<string, string> = {
  'enterprise-design': '/services/enterprise-design.png',
  'ai-machine-learning': '/services/ai-machine-learning.png',
  'custom-software-development': '/services/custom-software-development.png',
};

const values = [
  {
    icon: Shield,
    title: 'Security First',
    desc: 'Every line of code is written with security in mind. We follow industry best practices and compliance standards.',
  },
  {
    icon: Zap,
    title: 'Performance Driven',
    desc: 'We optimize for speed and efficiency, ensuring your applications perform flawlessly under any load.',
  },
  {
    icon: Users,
    title: 'Collaborative Approach',
    desc: 'We work alongside your team, treating your challenges as our own and celebrating your wins together.',
  },
];

const Services = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero – SAME AS PRODUCTS */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.15)_0%,_transparent_50%)]" />

        <div className="relative section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Services
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
              Expertise That <span className="text-gradient">Delivers Results</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From strategic consulting to hands-on development, we provide
              comprehensive services that transform your vision into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="section-container space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Text */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {service.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors"
                >
                  Explore Service
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Image – clean, no clumsy container */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <img
                  src={serviceImages[service.id]}
                  alt={service.title}
                  className="
                    w-full
                    max-h-[420px]
                    object-contain
                    rounded-2xl
                    transition-transform duration-500
                    hover:scale-[1.02]
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values – SAME CARD STYLE AS PRODUCTS */}
      <section className="py-20 bg-secondary/20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">
              How We <span className="text-gradient">Work</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-xl bg-card/50 border border-border/30"
              >
                <value.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA – SAME AS PRODUCTS */}
      <section className="py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-br from-primary/10 to-accent/5 rounded-3xl p-12 border border-border/30"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let’s discuss how our services can help you achieve your goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
