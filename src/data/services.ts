import { Palette, Brain, Code2, LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  detailedDescription: string;
  items: string[];
  capabilities: string[];
  benefits: string[];
  useCases: string[];
}

export const services: Service[] = [
  {
    id: "enterprise-design",
    icon: Palette,
    title: "Enterprise Design",
    description: "Beautiful, functional digital experiences that drive engagement and conversion.",
    detailedDescription: "Our Enterprise Design service transforms your business vision into compelling digital experiences that users love. We combine strategic thinking with exceptional design craftsmanship to create interfaces that not only look stunning but drive measurable business results. Our design process is rooted in user research, ensuring every pixel serves a purpose. From initial concept to final implementation, we work closely with your team to understand your brand, your users, and your business goals. Whether you need a complete design system, a mobile app interface, or a dashboard that makes complex data accessible, we deliver designs that are both beautiful and functional.",
    items: [
      "Custom Web Applications",
      "Learning Management Systems",
      "Internal Tools & Dashboards",
      "Mobile-responsive Interfaces",
      "Design Systems & Component Libraries",
    ],
    capabilities: [
      "User research and persona development",
      "Information architecture and wireframing",
      "High-fidelity UI/UX design",
      "Design system creation and documentation",
      "Prototyping and user testing",
      "Design-to-development handoff",
    ],
    benefits: [
      "Increase user engagement by up to 40%",
      "Improve conversion rates with optimized UX",
      "Reduce development time with clear design specs",
      "Enhance brand consistency across platforms",
      "Improve accessibility and compliance",
      "Create scalable design systems for growth",
    ],
    useCases: [
      "Redesigning legacy enterprise applications",
      "Building new customer-facing web platforms",
      "Creating internal tools and dashboards",
      "Developing mobile-first experiences",
      "Establishing design systems for large organizations",
    ],
  },
  {
    id: "ai-machine-learning",
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent systems that learn, adapt, and automate your most complex processes.",
    detailedDescription: "Our AI & Machine Learning service empowers your business with intelligent automation and data-driven insights. We build custom AI solutions that understand your unique business context and continuously improve from your data. From predictive analytics that forecast trends to natural language processing that understands customer intent, we leverage cutting-edge ML technologies to solve your most challenging problems. Our team of data scientists and ML engineers work with you to identify opportunities, build models, and deploy solutions that deliver real business value. Whether you need to automate document processing, predict customer behavior, or extract insights from unstructured data, we create AI systems that work seamlessly with your existing infrastructure.",
    items: [
      "Predictive Analytics Models",
      "Intelligent Process Automation",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Decision Support Engines",
    ],
    capabilities: [
      "Custom ML model development and training",
      "Data pipeline design and implementation",
      "Model deployment and MLOps",
      "Real-time inference systems",
      "Model monitoring and optimization",
      "Integration with existing systems",
    ],
    benefits: [
      "Automate repetitive tasks and reduce costs by 60%",
      "Improve decision-making with predictive insights",
      "Enhance customer experience with intelligent automation",
      "Extract value from unstructured data",
      "Scale operations without proportional cost increase",
      "Stay competitive with AI-powered capabilities",
    ],
    useCases: [
      "Automating document processing and data extraction",
      "Building recommendation engines for e-commerce",
      "Creating chatbots and virtual assistants",
      "Predictive maintenance for manufacturing",
      "Fraud detection and risk assessment",
    ],
  },
  {
    id: "custom-development",
    icon: Code2,
    title: "Custom Software Development",
    description: "Scalable, secure software built with modern architecture and best practices.",
    detailedDescription: "Our Custom Software Development service delivers enterprise-grade applications built to scale with your business. We use modern technologies and proven architectures to create software that's not just functional, but maintainable, secure, and performant. Our development process emphasizes clean code, comprehensive testing, and continuous integration. From initial requirements gathering to deployment and maintenance, we work as an extension of your team, ensuring transparency and collaboration throughout the project. Whether you need a new application from scratch, modernization of legacy systems, or integration of third-party services, we deliver solutions that meet your technical requirements and business objectives.",
    items: [
      "React & TypeScript Applications",
      "Python & Node.js Backends",
      "Cloud-native Architectures",
      "Secure API Development",
      "Database Design & Optimization",
    ],
    capabilities: [
      "Full-stack application development",
      "Microservices and serverless architecture",
      "API design and development",
      "Database design and optimization",
      "DevOps and CI/CD pipeline setup",
      "Legacy system modernization",
    ],
    benefits: [
      "Build exactly what you need, no compromises",
      "Scale from startup to enterprise seamlessly",
      "Reduce technical debt with clean architecture",
      "Improve security with best practices",
      "Faster time to market with agile development",
      "Ongoing support and maintenance",
    ],
    useCases: [
      "Building new business applications",
      "Modernizing legacy systems",
      "Creating API-first platforms",
      "Developing microservices architectures",
      "Building cloud-native applications",
    ],
  },
];

