import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FileText } from 'lucide-react';

const TermsOfService = () => {
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
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider">
                Legal
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
              Terms of <span className="text-gradient">Service</span>
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
                <h2 className="text-2xl font-bold text-foreground">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using CoWorkers' services, products, or website, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from 
                  using or accessing our services.
                </p>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">2. Services Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  CoWorkers provides enterprise software solutions, including but not limited to AI-powered automation, 
                  intelligent document processing, custom software development, enterprise design, and machine learning services. 
                  We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
                </p>
              </div>

              {/* User Obligations */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">3. User Obligations</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When using our services, you agree to:
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Provide accurate and complete information when requested</li>
                  <li>Use our services only for lawful purposes and in accordance with these terms</li>
                  <li>Not attempt to gain unauthorized access to our systems or networks</li>
                  <li>Not interfere with or disrupt the integrity or performance of our services</li>
                  <li>Not use our services to transmit any harmful code, viruses, or malicious software</li>
                  <li>Respect intellectual property rights and not infringe upon the rights of others</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content, features, and functionality of our services, including but not limited to text, graphics, logos, 
                  icons, images, audio clips, digital downloads, and software, are the exclusive property of CoWorkers or its 
                  licensors and are protected by international copyright, trademark, patent, trade secret, and other intellectual 
                  property laws.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, 
                  republish, download, store, or transmit any of our material without our prior written consent.
                </p>
              </div>

              {/* Payment Terms */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">5. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Payment terms for our services will be specified in individual service agreements or contracts. All fees are 
                  non-refundable unless otherwise stated in writing. We reserve the right to change our pricing at any time, 
                  but such changes will not affect services already contracted.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">6. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, CoWorkers shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, 
                  or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
                </p>
              </div>

              {/* Warranty Disclaimer */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">7. Warranty Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are provided "as is" and "as available" without warranties of any kind, either express or implied, 
                  including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. 
                  We do not warrant that our services will be uninterrupted, secure, or error-free.
                </p>
              </div>

              {/* Termination */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">8. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to terminate or suspend your access to our services immediately, without prior notice or 
                  liability, for any reason, including if you breach these Terms of Service. Upon termination, your right to use 
                  our services will cease immediately.
                </p>
              </div>

              {/* Changes to Terms */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">9. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify or replace these Terms of Service at any time. If a revision is material, we will 
                  provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be 
                  determined at our sole discretion.
                </p>
              </div>

              {/* Governing Law */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">10. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with applicable laws, without regard to 
                  its conflict of law provisions. Any disputes arising from these terms shall be resolved through appropriate legal 
                  channels.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 pt-8 border-t border-border/30">
                <h2 className="text-2xl font-bold text-foreground">11. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
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

export default TermsOfService;

