import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Shield } from 'lucide-react';

const PrivacyPolicy = () => {
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
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider">
                Privacy
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Introduction */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At CoWorkers, we are committed to protecting your privacy and ensuring the security of your personal information.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our
                  services, website, or interact with us.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect the following types of information:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">2.1 Personal Information</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      When you contact us, request services, or use our website, we may collect personal information such as your
                      name, email address, phone number, company name, job title, and any other information you voluntarily provide.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">2.2 Usage Data</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We automatically collect information about how you interact with our website and services, including IP address,
                      browser type, device information, pages visited, time spent on pages, and referring website addresses.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">2.3 Cookies and Tracking Technologies</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and
                      improve our services. You can control cookie preferences through your browser settings.
                    </p>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the collected information for the following purposes:
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To process your requests and respond to your inquiries</li>
                  <li>To send you updates, newsletters, and marketing communications (with your consent)</li>
                  <li>To analyze usage patterns and improve user experience</li>
                  <li>To detect, prevent, and address technical issues and security threats</li>
                  <li>To comply with legal obligations and enforce our terms</li>
                  <li>To personalize your experience and provide relevant content</li>
                </ul>
              </div>

              {/* Information Sharing */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">4. Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in
                  the following circumstances:
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our
                    business, conducting our operations, or serving our users, provided they agree to keep your information confidential</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, where your
                    information may be transferred as part of the transaction</li>
                  <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                </ul>
              </div>

              {/* Data Security */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, access
                  controls, and regular security assessments. However, no method of transmission over the internet or electronic
                  storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              {/* Data Retention */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">6. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy
                  Policy, unless a longer retention period is required or permitted by law. When we no longer need your information,
                  we will securely delete or anonymize it.
                </p>
              </div>

              {/* Your Rights */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">7. Your Rights and Choices</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li><strong>Access:</strong> Request access to your personal information we hold</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Objection:</strong> Object to processing of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                </p>
              </div>

              {/* Third-Party Links */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">8. Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites or services. We are not responsible for the privacy practices
                  or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>

              {/* Children's Privacy */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">9. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information
                  from children. If we become aware that we have collected information from a child without parental consent, we will
                  take steps to delete such information promptly.
                </p>
              </div>

              {/* International Data Transfers */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">10. International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your information may be transferred to and processed in countries other than your country of residence. These countries
                  may have data protection laws that differ from those in your country. By using our services, you consent to the transfer
                  of your information to these countries.
                </p>
              </div>

              {/* Changes to Privacy Policy */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">11. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational,
                  legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page
                  and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 pt-8 border-t border-border/30">
                <h2 className="text-2xl font-bold text-foreground">12. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
                </p>
                <p className="text-muted-foreground">
                  Email: <a href="mailto:coworkers946@gmail.com" className="text-primary hover:text-accent transition-colors">coworkers946@gmail.com</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PrivacyPolicy;

