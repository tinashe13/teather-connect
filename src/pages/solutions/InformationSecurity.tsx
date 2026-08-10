import { Header } from "@/components/Header";
import { Seo } from "@/components/Seo";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Cloud, AlertTriangle, Lock, Bug, Server, Eye, FileWarning, KeyRound, ShieldCheck, Fingerprint, Scan } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const securityTypes = [
  { icon: Cloud, title: "Cloud Security", description: "Protect your cloud infrastructure with advanced security measures and monitoring." },
  { icon: AlertTriangle, title: "Incident Response", description: "Rapid threat detection and response to minimize damage from security breaches." },
  { icon: FileWarning, title: "Disaster Recovery", description: "Comprehensive business continuity planning and disaster recovery solutions." },
  { icon: Lock, title: "Application Security", description: "Secure your applications from vulnerabilities throughout the development lifecycle." },
  { icon: Bug, title: "Vulnerability Management", description: "Proactive identification and remediation of security vulnerabilities." },
  { icon: Server, title: "Infrastructure Security", description: "End-to-end protection for your network and infrastructure." },
];

const threatStats = [
  { label: "Threats Blocked Daily", value: "10K+", icon: Shield },
  { label: "Response Time", value: "<5min", icon: AlertTriangle },
  { label: "Uptime Guarantee", value: "99.99%", icon: ShieldCheck },
  { label: "Security Audits", value: "24/7", icon: Eye },
];

const InformationSecurity = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Seo title="Information Security | Teather Connect" description="Protect information and systems from unauthorized access, use, disclosure or destruction." path="/solutions/information-security" jsonLd={{ "@context": "https://schema.org", "@type": "Service", name: "Information Security", description: "Protecting information and systems from unauthorized access, use, disclosure or destruction.", provider: { "@type": "Organization", name: "Teather Connect" } }} />
      <Header />
      <main className="pt-20">
        {/* Hero with Shield Animation */}
        <section className="py-24 bg-primary relative overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-accent/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-accent font-medium mb-4 block">Solutions</span>
                <h1 className="text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
                  Information <span className="text-accent">Security</span>
                </h1>
                <p className="text-xl text-primary-foreground/80 mb-4">Protect Today, Secure Tomorrow.</p>
                <p className="text-primary-foreground/70 mb-8">
                  We emphasize on protecting information and systems from unauthorized access, 
                  ensuring confidentiality, integrity, and availability.
                </p>
                <div className="flex gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact">Get Protected</Link>
                  </Button>
                  <Button variant="heroOutline" size="lg">
                    Security Audit
                  </Button>
                </div>
              </motion.div>

              {/* Animated Shield */}
              <motion.div 
                className="relative h-[400px] hidden lg:flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {/* Outer ring */}
                <motion.div 
                  className="absolute w-80 h-80 border-2 border-accent/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Middle ring */}
                <motion.div 
                  className="absolute w-60 h-60 border border-accent/20 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                {/* Inner shield */}
                <motion.div 
                  className="relative w-40 h-40 bg-accent/20 rounded-3xl flex items-center justify-center border-2 border-accent"
                  animate={{ 
                    boxShadow: ["0 0 20px hsl(var(--accent) / 0.3)", "0 0 40px hsl(var(--accent) / 0.5)", "0 0 20px hsl(var(--accent) / 0.3)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Shield className="w-20 h-20 text-accent" />
                </motion.div>

                {/* Floating security icons */}
                {[Fingerprint, KeyRound, Scan, Eye].map((Icon, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center"
                    style={{
                      left: `${50 + 45 * Math.cos((i * 90 * Math.PI) / 180)}%`,
                      top: `${50 + 45 * Math.sin((i * 90 * Math.PI) / 180)}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    <Icon className="w-5 h-5 text-accent" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-accent/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {threatStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <stat.icon className="w-8 h-8 text-accent" />
                  </motion.div>
                  <motion.p 
                    className="text-3xl font-heading font-bold text-foreground"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.3 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Types - Interactive Cards */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold mb-4">Types of Information Security</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive security solutions to protect every aspect of your digital infrastructure.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  className={`relative bg-card border-2 rounded-2xl p-8 cursor-pointer transition-all duration-300 ${
                    activeCard === index ? 'border-accent shadow-lg shadow-accent/20' : 'border-border hover:border-accent/50'
                  }`}
                  initial={{ opacity: 0, rotateY: -15 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => setActiveCard(index)}
                  onHoverEnd={() => setActiveCard(null)}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                      activeCard === index ? 'bg-accent text-accent-foreground' : 'bg-accent/10'
                    }`}
                    animate={activeCard === index ? { rotate: [0, 10, -10, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <type.icon className={`w-8 h-8 ${activeCard === index ? 'text-accent-foreground' : 'text-accent'}`} />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                  <p className="text-muted-foreground">{type.description}</p>
                  
                  <motion.div 
                    className="absolute bottom-4 right-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeCard === index ? 1 : 0 }}
                  >
                    <Link to="/contact" className="text-accent text-sm font-medium">Talk to us about {type.title.toLowerCase()} →</Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Shield className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-4xl font-heading font-bold text-primary-foreground mb-6">Don't Wait for a Breach</h2>
              <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">Proactive security is always more cost-effective than reactive measures.</p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Start Your Security Assessment</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InformationSecurity;
