import { motion } from 'framer-motion';
import { ArrowRight, FileText, Package, Bot, BarChart3, Receipt, TrendingUp, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id?: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  delay?: number;
}

export const ProductCard = ({ id, icon: Icon, title, description, features, gradient, delay = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="group relative"
    >
      {/* Gradient border effect */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/50 via-transparent to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      
      <div className="relative bg-card rounded-2xl p-8 border border-border/50 h-full flex flex-col transition-all duration-500 group-hover:border-transparent group-hover:bg-card/80">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to={id ? `/products/${id}` : "/products"}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors group/link"
        >
          <span>Explore Product</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export const products = [
  {
    id: "doc-processor",
    icon: FileText,
    title: "Intelligent Doc-Processor",
    description: "AI-driven document processing that transforms unstructured PDFs into actionable structured data.",
    detailedDescription: "Intelligent Doc-Processor leverages cutting-edge machine learning and OCR technology to automatically extract, classify, and structure data from any document format. Whether you're processing invoices, contracts, forms, or reports, our AI engine understands context, learns from your documents, and delivers 99.5% accuracy. Perfect for finance teams automating accounts payable, HR departments digitizing employee records, or legal teams processing contracts at scale. The system integrates seamlessly with your existing workflows and can process thousands of documents per hour, reducing manual data entry by up to 90%.",
    features: [
      "PDF to Structured Data Conversion",
      "Finance & HR Automation",
      "99.5% Accuracy Rate",
      "Multi-format Support (PDF, Images, Scans)",
      "Custom Field Extraction",
      "Batch Processing Capabilities"
    ],
    gradient: "from-blue-600/20 to-indigo-600/20",
  },
  {
    id: "inventory-master",
    icon: Package,
    title: "Inventory Master",
    description: "Real-time cloud inventory management with enterprise-ready dashboards and predictive analytics.",
    detailedDescription: "Inventory Master is a comprehensive cloud-based inventory management system designed for enterprises that need real-time visibility and control over their supply chain. With advanced predictive analytics, the platform forecasts demand, prevents stockouts, and optimizes reorder points automatically. The system supports multi-warehouse operations, tracks inventory across locations in real-time, and provides actionable insights through intuitive dashboards. Features include automated purchase order generation, supplier management, barcode scanning, and integration with major ERP systems. Reduce carrying costs by up to 30% while maintaining optimal stock levels.",
    features: [
      "Real-time Multi-location Sync",
      "Predictive Stock Alerts",
      "Multi-warehouse Support",
      "Automated Reorder Points",
      "Supplier Management",
      "ERP Integration"
    ],
    gradient: "from-emerald-600/20 to-teal-600/20",
  },
  {
    id: "bot-suite",
    icon: Bot,
    title: "Bot-Suite",
    description: "NLP-powered chatbots and voice bots for 24/7 customer engagement across all channels.",
    detailedDescription: "Bot-Suite is an enterprise-grade conversational AI platform that enables businesses to deliver exceptional customer experiences through intelligent chatbots and voice assistants. Built on advanced Natural Language Processing (NLP) and machine learning, our bots understand context, learn from interactions, and handle complex queries with human-like intelligence. Deploy across websites, mobile apps, messaging platforms, and voice channels. The platform includes sophisticated intent recognition, sentiment analysis, and seamless human handoff capabilities. Reduce customer service costs by up to 70% while improving response times and customer satisfaction scores.",
    features: [
      "Natural Language Processing",
      "Multi-channel Support (Web, Mobile, Voice)",
      "Intelligent Human Handoff",
      "Sentiment Analysis",
      "Custom Training & Learning",
      "Analytics & Performance Metrics"
    ],
    gradient: "from-violet-600/20 to-purple-600/20",
  },
  {
    id: "the-reporter",
    icon: BarChart3,
    title: "The Reporter",
    description: "Advanced analytics and BI dashboards delivering executive-level insights in real-time.",
    detailedDescription: "The Reporter transforms raw data into actionable business intelligence through powerful analytics and customizable dashboards. Designed for executives and decision-makers, the platform aggregates data from multiple sources, performs real-time analysis, and presents insights in visually compelling formats. Features include automated report generation, scheduled delivery, drill-down capabilities, and interactive visualizations. Whether tracking KPIs, monitoring sales performance, analyzing customer behavior, or forecasting trends, The Reporter provides the insights you need when you need them. Connect to databases, APIs, spreadsheets, and cloud services for a unified view of your business.",
    features: [
      "Custom Executive Dashboards",
      "Automated Report Generation",
      "Real-time Data Analytics",
      "Interactive Visualizations",
      "Multi-source Data Integration",
      "Scheduled Report Delivery"
    ],
    gradient: "from-amber-600/20 to-orange-600/20",
  },
  {
    id: "bank-statement-analyser",
    icon: Receipt,
    title: "Bank Statement Analyser",
    description: "Intelligent financial document analysis that extracts, categorizes, and analyzes bank statements with precision.",
    detailedDescription: "Bank Statement Analyser is a specialized AI-powered solution designed for financial institutions, accounting firms, and businesses that need to process and analyze bank statements at scale. The system automatically extracts all transaction details including dates, amounts, descriptions, and balances with exceptional accuracy. Advanced categorization algorithms classify transactions by type, merchant, and purpose. Built-in fraud detection identifies anomalies, duplicate transactions, and suspicious patterns. The platform supports multiple bank formats, handles multi-currency transactions, and generates comprehensive financial reports. Perfect for reconciliation, audit preparation, cash flow analysis, and compliance reporting.",
    features: [
      "Automated Transaction Extraction",
      "Intelligent Categorization",
      "Advanced Fraud Detection",
      "Multi-currency Support",
      "Reconciliation Tools",
      "Compliance Reporting"
    ],
    gradient: "from-green-600/20 to-emerald-600/20",
  },
  {
    id: "statistics-tool",
    icon: TrendingUp,
    title: "Statistics Tool",
    description: "Comprehensive statistical analysis platform for data-driven decision making and advanced analytics.",
    detailedDescription: "Statistics Tool is a powerful analytical platform that empowers data scientists, researchers, and business analysts to perform sophisticated statistical analysis without coding expertise. The platform includes a comprehensive suite of statistical methods including regression analysis, hypothesis testing, time series forecasting, clustering, and predictive modeling. Interactive visualizations help you understand patterns, correlations, and trends in your data. Features include automated model selection, A/B testing capabilities, confidence interval calculations, and export to multiple formats. Whether analyzing customer behavior, optimizing marketing campaigns, forecasting sales, or conducting research, Statistics Tool provides the analytical power you need with an intuitive interface.",
    features: [
      "Advanced Data Visualization",
      "Statistical Modeling & Regression",
      "Predictive Analysis & Forecasting",
      "A/B Testing Framework",
      "Automated Model Selection",
      "Export & Integration Capabilities"
    ],
    gradient: "from-cyan-600/20 to-blue-600/20",
  },
];
