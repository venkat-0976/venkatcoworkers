import { motion, useScroll, useTransform } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  ArrowRight,
  Code,
  Brain,
  Cloud,
  Palette,
  ShieldCheck,
  Layers,
  Users,
  Target,
  Zap,
  CheckCircle,
  Globe,
  Sparkles,
  TrendingUp,
  Award,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

/* ======================
   EXPERTISE AREAS
====================== */
const expertiseAreas = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    description:
      'Enterprise-grade web applications with modern frameworks and scalable architecture.',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
  },
  {
    icon: Brain,
    title: 'AI & Automation',
    description:
      'Intelligent solutions that reduce manual workload by up to 70% using cutting-edge AI.',
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'User-centered design focused on conversion, accessibility, and intuitive experiences.',
    color: 'from-orange-500/20 to-red-500/20',
    borderColor: 'border-orange-500/30',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description:
      'Secure cloud deployments with automated CI/CD pipelines and 24/7 monitoring.',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
  },
];

/* ======================
   VALUES
====================== */
const values = [
  {
    icon: Target,
    title: 'Clear Ownership',
    description:
      'Dedicated engineers responsible for quality, delivery, and long-term success.',
  },
  {
    icon: Users,
    title: 'Direct Communication',
    description:
      'Work directly with developers. No account managers, just clear technical collaboration.',
  },
  {
    icon: ShieldCheck,
    title: 'Production-Ready',
    description:
      'Enterprise-grade code quality, security best practices, and comprehensive testing.',
  },
];

/* ======================
   TEAM CAPABILITIES
====================== */
const teamCapabilities = [
  {
    area: 'Frontend Engineering',
    description:
      'Expert in React, TypeScript, Next.js, and modern UI frameworks. Building high-performance, accessible interfaces with focus on Core Web Vitals and user experience.',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    area: 'Backend & APIs',
    description:
      'Scalable server architectures with Node.js, Python, and GraphQL. Expertise in microservices, database optimization, and high-traffic system design.',
    icon: Layers,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    area: 'AI & Machine Learning',
    description:
      'Intelligent automation, document processing, and NLP solutions. Proven track record in reducing manual operations by 60%+ using TensorFlow and AI APIs.',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
  },
  {
    area: 'Product Design',
    description:
      'User research, design systems, and conversion optimization. Creating intuitive B2B and B2C experiences with WCAG 2.1 accessibility compliance.',
    icon: Palette,
    color: 'from-orange-500 to-red-500',
  },
  {
    area: 'Cloud Infrastructure',
    description:
      'AWS, Docker, Kubernetes expertise with 99.9% uptime. Automated CI/CD pipelines, infrastructure as code, and comprehensive security practices.',
    icon: Cloud,
    color: 'from-indigo-500 to-blue-500',
  },
];

/* ======================
   TECHNOLOGIES
====================== */
const technologies = [
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'GraphQL',
  'PostgreSQL',
  'MySQL',
  'AWS',
  'Docker',
  'Search Engine Optimization (SEO)',
  'TensorFlow'
];

/* ======================
   PROCESS
====================== */
const processSteps = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description:
      'Analyze requirements, define scope, and create a detailed roadmap with clear milestones.',
    icon: Target,
  },
  {
    step: '02',
    title: 'Design & Architecture',
    description:
      'UI/UX design, system architecture planning, and technology stack selection.',
    icon: Palette,
  },
  {
    step: '03',
    title: 'Development & Testing',
    description:
      'Agile development with continuous integration, automated testing, and regular updates.',
    icon: Code,
  },
  {
    step: '04',
    title: 'Deployment & Support',
    description:
      'Production deployment, monitoring setup, documentation, and ongoing support.',
    icon: Cloud,
  },
];

/* ======================
   WHY CHOOSE US
====================== */
const whyChooseUs = [
  {
    icon: CheckCircle,
    title: 'No Outsourcing',
    description:
      'Your project is built by our core team, not freelancers or contractors.',
  },
  {
    icon: Zap,
    title: 'Fast Response Time',
    description:
      'We respond to all inquiries within 24 hours and maintain clear communication.',
  },
  {
    icon: ShieldCheck,
    title: 'Security First',
    description:
      'Enterprise-grade security practices, code audits, and compliance standards.',
  },
  {
    icon: Award,
    title: 'Certified Experts',
    description:
      'Industry-recognized certifications from AWS, Google Cloud, and leading platforms.',
  },
  {
    icon: Globe,
    title: 'Scalable Solutions',
    description:
      'Architecture designed to handle growth from MVP to enterprise scale.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description:
      'Post-launch maintenance, monitoring, and continuous improvement.',
  },
];

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  return (
    <main ref={containerRef} className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Subtle Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      {/* ======================
          HERO
      ====================== */}
      <motion.section
        style={{ opacity, scale }}
        className="relative pt-32 pb-20"
      >
        <div className="section-container max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                About Us
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              A Unified Team
              <br />
              <span className="relative inline-block mt-2">
                <span className="text-gradient bg-gradient-to-r from-primary via-blue-500 to-purple-500">
                  Building Excellence Together
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-4"
            >
              We are a cohesive team of senior software professionals working
              together to craft scalable, production-ready applications with
              precision and care.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-base text-muted-foreground/80 max-w-2xl mx-auto"
            >
              <strong className="text-foreground">
                We believe in collective expertise over individual recognition.
              </strong>{' '}
              Every project benefits from our combined knowledge, ensuring the
              best possible outcome.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* ======================
          STATS
      ====================== */}


      {/* ======================
          VALUES
      ====================== */}
      <section className="relative py-20">
        <div className="section-container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We{' '}
              <span className="text-gradient bg-gradient-to-r from-primary to-blue-500">
                Work
              </span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Built on transparency, accountability, and technical excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/20 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-500">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================
          EXPERTISE
      ====================== */}
      <section className="relative py-20 bg-secondary/30">
        <div className="section-container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our{' '}
              <span className="text-gradient bg-gradient-to-r from-primary to-purple-500">
                Expertise
              </span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Comprehensive capabilities across the entire development stack
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {expertiseAreas.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div
                  className={`relative h-full bg-card/90 backdrop-blur-sm border ${item.borderColor} rounded-2xl p-6 hover:border-opacity-50 transition-all duration-500`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-500">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-base font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================
          TEAM CAPABILITIES - REPLACES INDIVIDUAL TEAM SECTION
      ====================== */}
      <section className="relative py-20">
        <div className="section-container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our{' '}
              <span className="text-gradient bg-gradient-to-r from-primary via-blue-500 to-purple-500">
                Collective Expertise
              </span>
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              A unified team with deep expertise across all domains, working
              collaboratively to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {teamCapabilities.map((capability, index) => (
              <motion.div
                key={capability.area}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${capability.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}
                />

                <div className="relative h-full bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/20 transition-all duration-500">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${capability.color} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-500`}
                  >
                    <capability.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-lg font-bold mb-3">{capability.area}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================
          PROCESS
      ====================== */}
      <section className="relative py-20 bg-secondary/30">
        <div className="section-container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our{' '}
              <span className="text-gradient bg-gradient-to-r from-primary to-emerald-500">
                Process
              </span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              A proven methodology for successful delivery
            </p>
          </motion.div>

          <div className="space-y-6">
            {processSteps.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-start gap-5 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/20 transition-all duration-500">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-blue-500/10 flex items-center justify-center">
                      <process.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 pt-1">
                    <div className="text-xs font-bold text-primary/60 mb-1">
                      {process.step}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{process.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="absolute left-[33px] top-full h-6 w-0.5 bg-gradient-to-b from-primary/20 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================
          TECHNOLOGIES
      ====================== */}
      <section className="relative py-20">
        <div className="section-container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technologies We{' '}
              <span className="text-gradient bg-gradient-to-r from-primary to-cyan-500">
                Master
              </span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Modern, battle-tested stack for scalable applications
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/15 to-blue-500/15 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative px-4 py-2 rounded-xl bg-card/90 backdrop-blur-sm border border-border/50 text-sm font-semibold hover:border-primary/20 transition-all duration-300">
                  {tech}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ======================
          WHY CHOOSE US
      ====================== */}
      <section className="relative py-20 bg-secondary/30">
        <div className="section-container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose{' '}
              <span className="text-gradient bg-gradient-to-r from-primary to-purple-500">
                Us
              </span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              What sets our team apart
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex gap-4 p-5 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/20 transition-all duration-500"
              >
                <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================
          CTA
      ====================== */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="section-container max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Let's Build Together
                </span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to Build Something{' '}
              <span className="text-gradient bg-gradient-to-r from-primary via-blue-500 to-purple-500">
                Exceptional?
              </span>
            </h2>

            <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              Let's discuss your project and explore how our team can help you
              achieve your goals.{' '}
              <span className="text-foreground font-medium">
                We respond within 24 hours.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-purple-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />
                  <span className="relative text-white">Get in Touch</span>
                  <ArrowRight className="relative w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border-2 border-border hover:border-primary/20 font-semibold hover:bg-secondary/50 transition-all duration-300"
                >
                  View Our Work
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;