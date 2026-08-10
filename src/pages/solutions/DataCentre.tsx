import { Header } from "@/components/Header";
import { Seo } from "@/components/Seo";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Server, Database, Wifi, Monitor, HardDrive, Shield, Thermometer, Cable, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const dataComponents = [
  { icon: Server, label: "Servers", position: "top-0 left-1/2 -translate-x-1/2" },
  { icon: Database, label: "Storage", position: "top-1/4 right-0" },
  { icon: Wifi, label: "Networking", position: "bottom-1/4 right-0" },
  { icon: HardDrive, label: "Backup", position: "bottom-0 left-1/2 -translate-x-1/2" },
  { icon: Thermometer, label: "Cooling", position: "bottom-1/4 left-0" },
  { icon: Monitor, label: "Monitoring", position: "top-1/4 left-0" },
];

const features = [
  { icon: Server, title: "Enterprise Servers", description: "High-performance computing power for demanding workloads with 99.99% uptime guarantee." },
  { icon: Database, title: "Scalable Storage", description: "From terabytes to petabytes, our storage solutions grow with your business needs." },
  { icon: Wifi, title: "Network Infrastructure", description: "High-speed, redundant networking ensuring seamless connectivity across your organization." },
  { icon: Shield, title: "Physical Security", description: "24/7 surveillance, biometric access, and multi-layered security protocols." },
  { icon: Thermometer, title: "Climate Control", description: "Precision cooling systems maintaining optimal operating temperatures." },
  { icon: Cable, title: "Structured Cabling", description: "Professional cable management for efficient and organized infrastructure." },
];

const DataCentre = () => (
  <div className="min-h-screen bg-background">
    <Seo title="Data Centre Solutions | Teather Connect" description="Dedicated data centre facilities housing servers, storage, networking, cooling and physical security." path="/solutions/data-centre" jsonLd={{ "@context": "https://schema.org", "@type": "Service", name: "Data Centre Solutions", description: "Dedicated facilities housing IT infrastructure like servers, storage, networking, backup, cooling and monitoring.", provider: { "@type": "Organization", name: "Teather Connect" } }} />
    <Header />
    <main className="pt-20">
      {/* Hero with animated data center visualization */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--accent)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
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
                Data Centre <span className="text-accent">Solutions</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-4">Protect Today, Secure Tomorrow.</p>
              <p className="text-primary-foreground/70 mb-8">
                We provide dedicated facilities housing IT infrastructure like servers, storage, and networking gear, 
                acting as the backbone for cloud services, apps, and digital data.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </motion.div>

            {/* Animated Data Center Visualization */}
            <motion.div 
              className="relative h-[400px] hidden lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Central hub */}
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/20 rounded-full flex items-center justify-center border-2 border-accent"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Cloud className="w-12 h-12 text-accent" />
              </motion.div>

              {/* Orbiting components */}
              {dataComponents.map((comp, index) => (
                <motion.div
                  key={comp.label}
                  className={`absolute ${comp.position} w-20 h-20 bg-primary-foreground/10 rounded-xl flex flex-col items-center justify-center border border-primary-foreground/20`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1, borderColor: "hsl(var(--accent))" }}
                >
                  <comp.icon className="w-6 h-6 text-accent mb-1" />
                  <span className="text-xs text-primary-foreground/70">{comp.label}</span>
                </motion.div>
              ))}

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <motion.line
                    key={i}
                    x1="50%" y1="50%"
                    x2={`${50 + 40 * Math.cos((angle * Math.PI) / 180)}%`}
                    y2={`${50 + 40 * Math.sin((angle * Math.PI) / 180)}%`}
                    stroke="hsl(var(--accent))"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                  />
                ))}
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features with staggered animation */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold mb-4">Complete Data Centre Ecosystem</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">From infrastructure to security, we provide end-to-end solutions for your data centre needs.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group relative bg-card border rounded-2xl p-8 hover:shadow-xl transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors"
                />
                <div className="relative z-10">
                  <motion.div 
                    className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors"
                    whileHover={{ rotate: 5 }}
                  >
                    <feature.icon className="w-7 h-7 text-accent" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent/5">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6">Ready to Build Your Data Centre?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Let's discuss how we can help you create a robust, scalable infrastructure.</p>
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default DataCentre;
