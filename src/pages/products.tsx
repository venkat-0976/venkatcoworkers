import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard, products } from '@/components/ProductCard';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
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
              Products
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
              Enterprise Products{' '}
              <span className="text-gradient">Built to Scale</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our suite of intelligent products is designed to handle the complexity
              of modern enterprise operations with elegance and precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={product.title}
                {...product}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Enterprises Choose <span className="text-gradient">CoWorkers</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We don't just build software—we engineer competitive advantages.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "99.9% Uptime", desc: "Enterprise-grade reliability with redundant infrastructure" },
              { title: "SOC 2 Compliant", desc: "Your data security is our top priority" },
              { title: "24/7 Support", desc: "Dedicated team ready to assist around the clock" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border/30"
              >
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-br from-primary/10 to-accent/5 rounded-3xl p-12 border border-border/30"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to see our products in action?
            </h2>
            <p className="text-muted-foreground mb-8">
              Schedule a personalized demo with our products team.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              Request a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Products;
