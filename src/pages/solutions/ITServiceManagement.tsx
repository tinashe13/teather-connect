import { Header } from "@/components/Header";
import { Seo } from "@/components/Seo";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Settings, Package, GitBranch, Headphones, AlertCircle, FileText, ArrowRight, Check, Users, Workflow, Gauge } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const processSteps = [
  { icon: AlertCircle, title: "Incident Detection", description: "Identify issues quickly with advanced monitoring" },
  { icon: Workflow, title: "Workflow Automation", description: "Streamline processes with intelligent automation" },
  { icon: Settings, title: "Problem Resolution", description: "Root cause analysis and permanent fixes" },
  { icon: Check, title: "Continuous Improvement", description: "Learn and optimize from every incident" },
];

const services = [
  { icon: Package, title: "Asset Management", description: "Track, manage, and optimize your IT assets throughout their lifecycle.", features: ["Inventory tracking", "License management", "Depreciation tracking"] },
  { icon: GitBranch, title: "Change Management", description: "Controlled change processes to minimize risk and maximize success.", features: ["Change requests", "Impact assessment", "Rollback plans"] },
  { icon: Headphones, title: "Service Desk", description: "24/7 support services with multi-channel accessibility.", features: ["Ticket management", "SLA tracking", "Knowledge base"] },
  { icon: FileText, title: "Service Catalog", description: "Streamlined service delivery with clear offerings.", features: ["Self-service portal", "Request fulfillment", "Service bundles"] },
];

const ITServiceManagement = () => (
  <div className="min-h-screen bg-background">
    <Seo title="IT Service Management | Teather Connect" description="Design, deliver, manage and improve IT services to meet business goals and end-user experience." path="/solutions/it-service-management" jsonLd={{ "@context": "https://schema.org", "@type": "Service", name: "IT Service Management", description: "Designing, delivering, managing and improving IT services to meet business goals.", provider: { "@type": "Organization", name: "Teather Connect" } }} />
    <Header />
    <main className="pt-20">
      {/* Hero with Process Flow */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <motion.span 
              className="text-accent font-medium mb-4 block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Solutions
            </motion.span>
            <motion.h1 
              className="text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              IT Service <span className="text-accent">Management</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-primary-foreground/80"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Design, deliver, manage, and improve IT services to meet business goals while focusing on the end-user experience.
            </motion.p>
          </div>

          {/* Animated Process Flow */}
          <div className="grid md:grid-cols-4 gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.15 }}
              >
                <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 h-full">
                  <motion.div 
                    className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <step.icon className="w-6 h-6 text-accent" />
                  </motion.div>
                  <span className="text-accent text-sm font-medium">Step {index + 1}</span>
                  <h3 className="text-lg font-semibold text-primary-foreground mt-1 mb-2">{step.title}</h3>
                  <p className="text-primary-foreground/60 text-sm">{step.description}</p>
                </div>
                
                {/* Arrow connector */}
                {index < processSteps.length - 1 && (
                  <motion.div 
                    className="hidden md:flex absolute top-1/2 -right-4 z-10"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.15 }}
                  >
                    <ArrowRight className="w-8 h-8 text-accent" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Gauge, value: "40%", label: "Faster Resolution" },
              { icon: Users, value: "95%", label: "User Satisfaction" },
              { icon: Workflow, value: "60%", label: "Process Automation" },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div 
                  className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  <stat.icon className="w-10 h-10 text-accent" />
                </motion.div>
                <motion.p 
                  className="text-4xl font-heading font-bold text-foreground"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.2 + index * 0.1 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Alternating Layout */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold mb-4">ITSM Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive IT service management capabilities tailored to your needs.</p>
          </motion.div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex-1">
                  <motion.div 
                    className="bg-card border rounded-2xl p-8 h-full hover:shadow-xl transition-shadow"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: 10 }}
                      >
                        <service.icon className="w-7 h-7 text-accent" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm">
                              <Check className="w-4 h-4 text-accent" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="flex-1 hidden md:flex items-center justify-center">
                  <motion.div 
                    className="w-48 h-48 bg-accent/5 rounded-full flex items-center justify-center"
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <service.icon className="w-20 h-20 text-accent/30" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div 
            className="bg-card border rounded-3xl p-12 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Settings className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-heading font-bold mb-4">Ready to Transform Your IT Operations?</h2>
            <p className="text-muted-foreground mb-8">Let us help you build an efficient, user-focused IT service management framework.</p>
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default ITServiceManagement;
