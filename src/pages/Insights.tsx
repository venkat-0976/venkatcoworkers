import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArrowRight, Clock, Tag, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const articles = [
  {
    title: "How Intelligent Document Processing Saves Costs",
    excerpt:
      "Discover how AI-powered document processing can reduce operational costs by up to 70% while improving accuracy and compliance.",
    category: "AI & Automation",
    date: "Dec 20, 2024",
    readTime: "5 min read",
    featured: true,
    content: `
Organizations across industries still rely on manual document handling for invoices, contracts, onboarding forms, claims, and compliance records. These processes are slow, error‑prone, and expensive to maintain at scale. Intelligent Document Processing (IDP) offers a smarter alternative by using AI technologies such as Optical Character Recognition (OCR), Natural Language Processing (NLP), and Machine Learning (ML) to automate document ingestion, classification, data extraction, and validation.

The impact is significant. Manual workflows often suffer from high labor costs, long processing cycles, and frequent errors that lead to rework and compliance risks. IDP eliminates these inefficiencies by automating repetitive tasks, accelerating turnaround times, and applying consistent validation rules. As a result, organizations can reduce document‑related operational costs by up to 70%, while improving accuracy and speed.

Beyond cost savings, IDP strengthens compliance and risk management. Automated policy checks, audit trails, and consistent rule application ensure regulatory requirements are met with less effort. This reduces the likelihood of penalties and lowers the burden on legal and compliance teams.

Scalability is another advantage. Traditional document processing costs grow in proportion to volume, but IDP decouples cost from scale. The same system can process thousands or millions of documents without requiring proportional increases in staff, enabling predictable costs and higher margins.

Real‑world implementations show measurable benefits: 50–70% lower processing costs, 60–90% faster turnaround times, and improved customer satisfaction. IDP delivers the highest ROI in environments with high document volumes, repetitive formats, time‑sensitive workflows, and strict compliance requirements — such as accounts payable, customer onboarding, insurance claims, and regulatory reporting.

Conclusion: IDP is not just a technology upgrade; it is a proven strategy for operational excellence. By automating document‑heavy workflows, organizations achieve cost efficiency, accuracy, and compliance at scale.
`
  },
  {
    title: "The Future of LMS in 2026",
    excerpt:
      "Explore emerging trends in learning management systems and how enterprises are adapting to the new era of corporate training.",
    category: "Enterprise Design",
    date: "Dec 15, 2024",
    readTime: "7 min read",
    // featured: true,
    content: `
    Introduction
Learning Management Systems (LMS) have moved far beyond being simple training platforms. By 2026, they are becoming intelligent ecosystems that support continuous learning, compliance, and workforce development. Enterprises are adapting quickly as new technologies and employee expectations reshape how learning is delivered and measured.

Artificial Intelligence is one of the biggest drivers of change. Modern LMS platforms use AI to personalize learning paths, recommend relevant courses, and adjust training in real time. This makes learning more engaging and effective, while reducing administrative overhead. Predictive analytics also help organizations identify skill gaps before they affect performance.

Integration is another defining feature. LMS platforms are increasingly connected with HR, CRM, and compliance systems, ensuring that learning aligns directly with business goals. Training data flows into performance management and risk systems, giving leaders a unified view of workforce readiness.

The way content is consumed is also evolving. Microlearning and mobile‑friendly modules allow employees to access short, focused lessons on demand, often in the flow of work. This flexibility supports hybrid and remote work models, while improving completion rates. Gamification and social learning features further boost engagement, making training collaborative and motivating.

Compliance remains a critical priority. Automated tracking, audit‑ready reports, and instant policy updates reduce risk and save time, especially in regulated industries such as healthcare, finance, and manufacturing. At the same time, extended reality technologies like VR and AR are beginning to play a role, offering immersive simulations for technical and safety training.

Ultimately, the LMS of 2026 is intelligent, integrated, and learner‑centric. It is not just a tool for delivering courses but a strategic platform for building skills, ensuring compliance, and supporting career growth. Enterprises that embrace these innovations will be better positioned to develop agile, future‑ready workforces and achieve long‑term business success.
`

  },
  {
    title: "AI Automation for Mid-Scale Enterprises",
    excerpt:
      "A practical guide to implementing AI automation solutions that scale with your business without breaking the bank.",
    category: "AI & Automation",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    content: `
    Why Mid-Scale Enterprises Need AI Automation
Mid‑scale enterprises often face a unique challenge: they are too large to rely on manual processes, yet not big enough to afford the complex, fully customized automation systems used by global corporations. As competition intensifies, these businesses need scalable solutions that reduce costs, improve efficiency, and support growth — without overwhelming budgets or resources.

Key Benefits of AI Automation
Cost Efficiency: Automates repetitive tasks such as data entry, reporting, and customer support.

Scalability: Systems can grow with the business, handling higher volumes without proportional increases in staff.

Accuracy: AI reduces human error, ensuring consistent results across operations.

Customer Experience: Faster response times and personalized interactions improve satisfaction and loyalty.

Compliance: Automated checks and audit trails help meet regulatory requirements with less effort.

Practical Steps to Implementation
Identify High-Impact Areas – Focus on processes with high volume and repetitive tasks (e.g., invoicing, HR onboarding, customer queries).

Start Small, Scale Fast – Begin with pilot projects to prove ROI, then expand gradually.

Leverage Cloud-Based Tools – Choose platforms that offer flexibility and integration with existing systems.

Train Teams Early – Ensure employees understand and adopt automation tools to maximize value.

Monitor and Optimize – Use analytics to track performance and continuously refine workflows.

Conclusion
AI automation is no longer reserved for large enterprises. Mid‑scale businesses can now access affordable, scalable solutions that deliver measurable benefits. By starting with targeted use cases and expanding strategically, organizations can reduce operational costs, improve accuracy, and unlock new growth opportunities — all without adding unnecessary complexity.
  `
  },
  {
    title: "Building scalable clouad infrastructure for enterprise software",
    excerpt:
      "Best Practices for Building Scalable Enterprise Cloud Platforms",
    category: "Development ",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    content: `
    In today’s digital economy, scalability is not just a technical requirement—it is a business imperative. Enterprises operate in environments where user demand can spike unpredictably, data volumes grow exponentially, and applications must remain available across global regions. Building scalable cloud architectures ensures that organizations can meet these challenges without sacrificing performance, reliability, or cost efficiency.

At the heart of scalability lies the principle of elasticity. Cloud platforms such as AWS, Azure, and Google Cloud provide the ability to dynamically allocate resources based on demand. This means applications can scale up during peak traffic and scale down during quieter periods, optimizing both performance and cost. To leverage elasticity effectively, developers must design applications to be stateless, allowing workloads to be distributed seamlessly across multiple servers. Statelessness ensures that no single machine becomes a bottleneck, and user sessions can be handled by any available instance.

Microservices architecture plays a crucial role in scalability. By breaking applications into smaller, independent services, enterprises can scale specific components without affecting the entire system. For example, if a payment service experiences heavy load, only that microservice needs additional resources, rather than scaling the entire application. Containerization technologies such as Docker, combined with orchestration platforms like Kubernetes, make deploying and managing microservices more efficient. They provide automated scaling, self‑healing, and load balancing, which are essential for enterprise‑level reliability.

Data management is another cornerstone of scalable cloud design. Traditional monolithic databases often struggle under high concurrency and large datasets. Techniques such as database sharding, replication, and caching help distribute data workloads effectively. NoSQL databases like MongoDB or DynamoDB are particularly well‑suited for cloud environments, offering flexible schemas and horizontal scalability. Meanwhile, caching layers such as Redis or Memcached reduce latency by serving frequently accessed data directly from memory.

Observability is equally important. Enterprises must implement robust monitoring, logging, and tracing systems to gain visibility into application performance. Tools like Prometheus, Grafana, and ELK Stack provide real‑time insights, enabling teams to detect bottlenecks and optimize resource usage. Without observability, scaling decisions become guesswork, leading to inefficiencies and potential downtime.

Security cannot be overlooked in scalable architectures. As systems expand, the attack surface grows. Best practices include enforcing identity and access management, encrypting data in transit and at rest, and adopting zero‑trust principles. Automated compliance checks and continuous security monitoring ensure that scaling does not compromise safety.

Cost optimization is another critical dimension. While cloud platforms offer near‑infinite scalability, uncontrolled growth can lead to spiraling expenses. Enterprises must adopt strategies such as right‑sizing instances, leveraging serverless computing, and using reserved or spot instances where appropriate. A well‑designed architecture balances scalability with financial sustainability.

Ultimately, building scalable cloud architectures is about future‑proofing enterprise applications. It empowers organizations to innovate rapidly, deliver seamless user experiences, and remain competitive in a digital‑first world. By combining elasticity, microservices, data optimization, observability, security, and cost management, enterprises can create cloud‑native systems that not only handle today’s demands but also adapt gracefully to tomorrow’s challenges.

`
  },
  {
    title: "The ROI of Custom Software Development",
    excerpt:
      "Understanding ROI in Custom Software Investments",
    category: "Development ",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    content: `
    Organizations often face the decision of whether to build custom software or purchase off‑the‑shelf solutions. Custom development offers tailored functionality, aligning precisely with business processes and unique requirements. This can lead to higher efficiency, better integration with existing systems, and long‑term competitive advantage. However, the upfront investment is typically larger, requiring careful ROI analysis. Costs include design, development, testing, and ongoing maintenance. The benefits, on the other hand, manifest in reduced manual work, improved customer experiences, and scalability that off‑the‑shelf tools may not provide. ROI should be measured not only in financial terms but also in strategic impact—such as agility, innovation, and differentiation. For businesses with complex workflows or regulatory needs, custom solutions often deliver greater value over time, especially when compared to the limitations of generic software. The key is aligning development with clear business goals and ensuring that the long‑term benefits outweigh the initial expense.

    `
  },
  {
    title: "TSecuring Enterprise AI Applications",
    excerpt:
      "Enterprise-Grade Security for AI Applications",
    category: "Development ",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    content: `
    As enterprises adopt AI systems, security becomes a critical concern. AI applications often process sensitive data, making them attractive targets for cyberattacks. Securing these systems requires a multi‑layered approach. First, robust identity and access management ensures that only authorized users interact with AI models. Second, data protection through encryption, anonymization, and secure storage safeguards information at rest and in transit. Third, adversarial resilience is essential—AI models can be manipulated through malicious inputs, so defenses against adversarial attacks must be built in. Continuous monitoring, logging, and auditing provide visibility into system behavior, helping detect anomalies early. Compliance with regulations such as GDPR or HIPAA is also vital, as AI systems often cross borders and industries. Finally, enterprises should adopt a “security by design” mindset, embedding safeguards during development rather than treating them as afterthoughts. By prioritizing security, organizations can harness AI’s transformative potential while protecting trust, data integrity, and business continuity.
    `
  },
];

const Insights = () => {
  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

  const [activeArticle, setActiveArticle] = useState<any>(null);

  // ESC key close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveArticle(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_hsl(var(--primary)/0.15)_0%,_transparent_50%)]" />

        <div className="relative section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Insights
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Ideas & <span className="text-gradient">Expertise</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Thoughts on technology, innovation, and the future of enterprise software.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURED ================= */}
      {featuredArticle && (
        <section className="pb-16">
          <div className="section-container">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-primary/10 to-accent/5 rounded-3xl p-8 md:p-12 border border-border/30"
            >
              <div className="absolute top-4 right-4 px-3 py-1 bg-accent/20 rounded-full text-xs font-medium text-accent">
                Featured
              </div>

              <div className="max-w-2xl">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="px-3 py-1 rounded-full bg-secondary text-foreground">
                    {featuredArticle.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {featuredArticle.title}
                </h2>

                <p className="text-lg text-muted-foreground mb-6">
                  {featuredArticle.excerpt}
                </p>

                <button
                  onClick={() => setActiveArticle(featuredArticle)}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* ================= GRID ================= */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border/30"
              >
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                  <Tag className="w-3 h-3" />
                  {article.category}
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {article.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                <button
                  onClick={() => setActiveArticle(article)}
                  className="text-sm font-medium text-primary hover:text-accent transition"
                >
                  Read →
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= READER MODAL ================= */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveArticle(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl mx-4 bg-background rounded-3xl border border-border shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 z-10 bg-background/80 backdrop-blur border-b border-border px-6 sm:px-8 py-5 flex justify-between">
                <div>
                  <span className="block text-sm text-accent mb-1">
                    {activeArticle.category} · {activeArticle.readTime}
                  </span>
                  <h2 className="text-2xl font-bold">
                    {activeArticle.title}
                  </h2>
                </div>

                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-2 rounded-xl hover:bg-secondary"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="max-h-[75vh] overflow-y-auto px-6 sm:px-8 py-6">
                <p className="text-muted-foreground text-lg mb-6">
                  {activeArticle.excerpt}
                </p>

                <div className="prose prose-neutral prose-lg leading-relaxed max-w-none whitespace-pre-line">
                  {activeArticle.content}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
};

export default Insights;
