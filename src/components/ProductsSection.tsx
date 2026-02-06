import { motion } from 'framer-motion';
import { ProductCard, products } from './ProductCard';

export const ProductsSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.05)_0%,_transparent_60%)]" />
      
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
            Our Products
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-foreground mb-6"
          >
            Enterprise-Grade{' '}
            <span className="text-gradient">Innovations</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Purpose-built solutions designed to transform your business operations 
            with cutting-edge AI and automation.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
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
  );
};
