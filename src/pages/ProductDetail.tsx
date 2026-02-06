import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { products } from '@/components/ProductCard';
import { ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';



const getProductImage = (productId: string): string => {
  const images: Record<string, string> = {
    "doc-processor": "/products/intelligentdocprocessor.jpg",
    "inventory-master": "/products/inventarymaster.jpg",
    "bot-suite": "/products/botsuit.jpg",
    "the-reporter": "/products/reporter.jpg",
    "bank-statement-analyser": "/products/bankstatement.jpg",
    "statistics-tool": "/products/stattool.jpg"
  };

  return images[productId] || "/products/default.png";
};

const getFeatureDescription = (productId: string, feature: string): string => {
  const descriptions: Record<string, Record<string, string>> = {
    "doc-processor": {
      "PDF to Structured Data Conversion": "Convert any PDF document into structured JSON, CSV, or database-ready formats with intelligent field mapping.",
      "Finance & HR Automation": "Automate invoice processing, expense reports, employee onboarding documents, and compliance forms.",
      "99.5% Accuracy Rate": "Industry-leading accuracy powered by advanced ML models trained on millions of documents.",
      "Multi-format Support (PDF, Images, Scans)": "Process documents in any format including scanned images, photos, and multi-page PDFs.",
      "Custom Field Extraction": "Define custom fields and extraction rules tailored to your specific document types and requirements.",
      "Batch Processing Capabilities": "Process thousands of documents simultaneously with parallel processing and queue management."
    },
    "inventory-master": {
      "Real-time Multi-location Sync": "Synchronize inventory data across all warehouses and locations instantly with cloud-based architecture.",
      "Predictive Stock Alerts": "AI-powered forecasting predicts demand and alerts you before stockouts occur, optimizing inventory levels.",
      "Multi-warehouse Support": "Manage inventory across unlimited warehouses with centralized control and location-specific rules.",
      "Automated Reorder Points": "Set intelligent reorder points that automatically adjust based on sales velocity and lead times.",
      "Supplier Management": "Track supplier performance, manage purchase orders, and maintain supplier catalogs in one platform.",
      "ERP Integration": "Seamlessly integrate with SAP, Oracle, Microsoft Dynamics, and other major ERP systems via APIs."
    },
    "bot-suite": {
      "Natural Language Processing": "Advanced NLP engine understands context, intent, and sentiment for natural conversations.",
      "Multi-channel Support (Web, Mobile, Voice)": "Deploy the same bot across websites, mobile apps, WhatsApp, voice assistants, and more.",
      "Intelligent Human Handoff": "Automatically escalate complex queries to human agents with full conversation context.",
      "Sentiment Analysis": "Monitor customer sentiment in real-time and adjust responses to improve satisfaction.",
      "Custom Training & Learning": "Train bots on your specific domain knowledge and continuously improve from interactions.",
      "Analytics & Performance Metrics": "Track conversation success rates, resolution times, and customer satisfaction scores."
    },
    "the-reporter": {
      "Custom Executive Dashboards": "Build personalized dashboards with drag-and-drop widgets showing KPIs and metrics that matter to you.",
      "Automated Report Generation": "Schedule reports to generate automatically and deliver via email, Slack, or other channels.",
      "Real-time Data Analytics": "Connect to live data sources for real-time insights without manual data refresh.",
      "Interactive Visualizations": "Create interactive charts, graphs, and heatmaps that allow drill-down analysis.",
      "Multi-source Data Integration": "Combine data from databases, APIs, spreadsheets, and cloud services into unified reports.",
      "Scheduled Report Delivery": "Automatically generate and distribute reports on daily, weekly, or custom schedules."
    },
    "bank-statement-analyser": {
      "Automated Transaction Extraction": "Extract all transaction details including dates, amounts, descriptions, and running balances automatically.",
      "Intelligent Categorization": "AI automatically categorizes transactions by type, merchant, and purpose for easy analysis.",
      "Advanced Fraud Detection": "Machine learning algorithms identify anomalies, duplicate transactions, and suspicious patterns.",
      "Multi-currency Support": "Process statements in multiple currencies with automatic conversion and exchange rate tracking.",
      "Reconciliation Tools": "Automated reconciliation with accounting systems, matching transactions and identifying discrepancies.",
      "Compliance Reporting": "Generate audit-ready reports meeting regulatory requirements for financial institutions."
    },
    "statistics-tool": {
      "Advanced Data Visualization": "Create compelling charts, graphs, and interactive dashboards to visualize statistical insights.",
      "Statistical Modeling & Regression": "Perform linear, logistic, and polynomial regression analysis with automated model diagnostics.",
      "Predictive Analysis & Forecasting": "Build predictive models using time series analysis, ARIMA, and machine learning algorithms.",
      "A/B Testing Framework": "Design and analyze A/B tests with statistical significance testing and confidence intervals.",
      "Automated Model Selection": "AI recommends the best statistical models based on your data characteristics and goals.",
      "Export & Integration Capabilities": "Export results to Excel, PDF, or integrate via APIs with your existing analytics stack."
    }
  };

  return descriptions[productId]?.[feature] || "Enterprise-grade implementation with industry-leading performance.";
};

const getCapabilities = (productId: string): string[] => {
  const capabilities: Record<string, string[]> = {
    "doc-processor": [
      "Process thousands of documents per hour",
      "Support for 50+ document types",
      "Cloud-based scalable infrastructure",
      "API integration with existing systems",
      "Custom workflow automation",
      "Multi-language document support"
    ],
    "inventory-master": [
      "Unlimited warehouse and location management",
      "Real-time inventory tracking across channels",
      "Advanced demand forecasting algorithms",
      "Barcode and RFID scanning support",
      "Mobile app for on-the-go management",
      "Integration with major e-commerce platforms"
    ],
    "bot-suite": [
      "Deploy across unlimited channels",
      "Handle 10,000+ concurrent conversations",
      "Multi-language support (50+ languages)",
      "Voice and text conversation modes",
      "Integration with CRM and helpdesk systems",
      "Custom knowledge base training"
    ],
    "the-reporter": [
      "Connect to 100+ data sources",
      "Real-time data streaming and updates",
      "Unlimited custom dashboards",
      "Collaborative report sharing",
      "Mobile-responsive dashboards",
      "White-label reporting capabilities"
    ],
    "bank-statement-analyser": [
      "Process statements from 1000+ banks globally",
      "Support for multiple statement formats",
      "Real-time transaction processing",
      "Historical data analysis and trends",
      "Export to accounting software",
      "Bank-level security and encryption"
    ],
    "statistics-tool": [
      "Handle datasets with millions of rows",
      "50+ statistical methods and tests",
      "Machine learning model integration",
      "Collaborative analysis workspace",
      "Version control for analyses",
      "Export results in multiple formats"
    ]
  };

  return capabilities[productId] || [
    "Scalable architecture for enterprise needs",
    "Real-time processing and updates",
    "Secure and compliant infrastructure",
    "Customizable to your workflow"
  ];
};

const getBenefits = (productId: string): string[] => {
  const benefits: Record<string, string[]> = {
    "doc-processor": [
      "Reduce manual data entry by up to 90%",
      "Process documents 100x faster than manual",
      "Eliminate human errors and inconsistencies",
      "Free up staff for higher-value tasks",
      "Improve compliance and audit readiness",
      "Reduce processing costs by 70%"
    ],
    "inventory-master": [
      "Reduce carrying costs by up to 30%",
      "Eliminate stockouts and overstock situations",
      "Improve order fulfillment rates to 99%+",
      "Reduce inventory write-offs and obsolescence",
      "Optimize cash flow with better planning",
      "Increase inventory turnover by 25%"
    ],
    "bot-suite": [
      "Reduce customer service costs by 70%",
      "Provide 24/7 instant customer support",
      "Improve response time to under 1 second",
      "Increase customer satisfaction scores",
      "Handle peak traffic without scaling staff",
      "Generate insights from customer conversations"
    ],
    "the-reporter": [
      "Make data-driven decisions faster",
      "Identify trends and opportunities instantly",
      "Reduce report generation time by 95%",
      "Improve data accuracy and consistency",
      "Enable self-service analytics for teams",
      "Increase operational efficiency by 40%"
    ],
    "bank-statement-analyser": [
      "Reduce reconciliation time by 80%",
      "Detect fraud and anomalies automatically",
      "Improve financial reporting accuracy",
      "Accelerate month-end closing processes",
      "Ensure regulatory compliance",
      "Save 20+ hours per month on manual work"
    ],
    "statistics-tool": [
      "Make evidence-based decisions confidently",
      "Identify patterns and correlations quickly",
      "Improve forecast accuracy by 30%+",
      "Reduce analysis time from days to minutes",
      "Enable non-technical users to perform analysis",
      "Increase research productivity by 5x"
    ]
  };

  return benefits[productId] || [
    "Reduce manual work by up to 80%",
    "Improve accuracy and consistency",
    "Faster time to insights",
    "Lower operational costs"
  ];
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="section-container pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/products" className="text-primary hover:text-accent">
            Back to Products
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const ProductIcon = product.icon;

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
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Products</span>
            </Link>

            <div className="max-w-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                  <ProductIcon className="w-8 h-8 text-white" />
                </div>
                <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider">
                  Product Detail
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
                {product.title}
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                {product.description}
              </p>
              {product.detailedDescription && (
                <p className="text-lg text-muted-foreground/80 leading-relaxed">
                  {product.detailedDescription}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Image/Visual */}
      {/* Product Image/Visual */}
      <section className="py-12">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto max-w-5xl rounded-3xl overflow-hidden border border-border/30 shadow-2xl"
          >
            <div className="aspect-video relative bg-secondary/10">
              {/* Product Image */}
              <img
                src={getProductImage(product.id)}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
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
                Key <span className="text-gradient">Features</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {product.features.map((feature, index) => (
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
                      <h3 className="text-lg font-semibold text-foreground mb-1">{feature}</h3>
                      <p className="text-sm text-muted-foreground">
                        {getFeatureDescription(product.id, feature)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Additional Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 mb-12"
            >
              <div className="p-8 rounded-2xl bg-card/50 border border-border/30">
                <h3 className="text-xl font-semibold text-foreground mb-4">Capabilities</h3>
                <ul className="space-y-3">
                  {getCapabilities(product.id).map((capability, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-card/50 border border-border/30">
                <h3 className="text-xl font-semibold text-foreground mb-4">Benefits</h3>
                <ul className="space-y-3">
                  {getBenefits(product.id).map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
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
              Ready to Get Started with {product.title}?
            </h2>
            <p className="text-muted-foreground mb-8">
              Schedule a personalized demo to see how {product.title} can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
              >
                Request a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/products"
                className="px-8 py-4 rounded-xl font-semibold text-foreground border border-border/50 bg-secondary/30 hover:bg-secondary/50 hover:border-primary/30 transition-all duration-300"
              >
                View All Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProductDetail;

