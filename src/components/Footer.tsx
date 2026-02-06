import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const footerLinks = {
  solutions: [
    { name: 'Doc-Processor', href: '/products' },
    { name: 'Inventory Master', href: '/products' },
    { name: 'Bot-Suite', href: '/products' },
    { name: 'The Reporter', href: '/products' },
  ],
  services: [
    { name: 'Enterprise Design', href: '/services' },
    { name: 'AI & ML', href: '/services' },
    { name: 'Custom Development', href: '/services' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' },
  ],
};

// const socialLinks = [
//   { icon: Linkedin, href: '#', label: 'LinkedIn' },
//   { icon: Github, href: '#', label: 'GitHub' },
//   { icon: Twitter, href: '#', label: 'Twitter' },
// ];

export const Footer = () => {
  return (
    <footer className="relative bg-card/30 border-t border-border/50">
      <div className="section-container py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Brand */}
          <div className="flex-1 max-w-md">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="/weblogo.png"
                alt="Logo"
                className="h-16 w-auto object-contain"
              />
              <span className="text-xl font-semibold text-foreground">
                CoWorkers
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              CoWorkers is a group of software experts, each specialized in their respective domains. Our diverse team of domain experts collaborates to deliver solutions that transform how enterprises operate, combining deep technical expertise with innovative thinking to help businesses scale efficiently and achieve their goals.
            </p>
            {/* <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Links Section - Right Side */}
          <div className="flex flex-col sm:flex-row gap-10 lg:gap-20 xl:gap-28">
            {/* Solutions */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">soliutions</h4>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a
                  href="mailto:coworkers946@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  coworkers946@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CoWorkers. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
