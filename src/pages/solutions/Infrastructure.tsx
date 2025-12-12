import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { HardDrive, Cpu, Cloud, Database, Monitor, Wifi, Server, Layers, Box } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const layers = [
  { 
    title: "Cloud Services", 
    icon: Cloud, 
    color: "from-blue-500/20 to-blue-600/20",
    items: ["Public Cloud", "Private Cloud", "Hybrid Solutions", "Multi-cloud Management"]
  },
  { 
    title: "Software Applications", 
    icon: Monitor, 
    color: "from-accent/20 to-accent/30",
    items: ["Enterprise Applications", "Productivity Suites", "Custom Software", "SaaS Integration"]
  },
  { 
    title: "Operating Systems", 
    icon: Layers, 
    color: "from-green-500/20 to-green-600/20",
    items: ["Windows Server", "Linux Distributions", "Virtualization", "Container Platforms"]
  },
  { 
    title: "Data Storage", 
    icon: Database, 
    color: "from-purple-500/20 to-purple-600/20",
    items: ["SAN/NAS", "Object Storage", "Backup Solutions", "Data Replication"]
  },
  { 
    title: "Physical Hardware", 
    icon: Cpu, 
    color: "from-orange-500/20 to-orange-600/20",
    items: ["Servers", "Workstations", "Networking Equipment", "Storage Arrays"]
  },
];

const Infrastructure = () => {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero with 3D Stack Visualization */}
        <section className="py-24 bg-primary relative overflow-hidden">
          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-20">
            <motion.div 
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}
              animate={{ 
                backgroundPosition: ["0px 0px", "50px 50px"]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
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
                  Infrastructure <span className="text-accent">Solutions</span>
                </h1>
                <p className="text-xl text-primary-foreground/80 mb-4">Build the foundation for your digital future.</p>
                <p className="text-primary-foreground/70 mb-8">
                  IT Infrastructure combines hardware, software, network, and components that support business operations, 
                  serving as the foundation for delivering IT services.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Build Your Infrastructure</Link>
                </Button>
              </motion.div>

              {/* 3D Stack Visualization */}
              <motion.div 
                className="relative h-[500px] hidden lg:block perspective-1000"
                initial={{ opacity: 0, rotateY: -20 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="relative h-full flex flex-col justify-center items-center">
                  {layers.map((layer, index) => (
                    <motion.div
                      key={layer.title}
                      className={`absolute w-72 h-16 bg-gradient-to-r ${layer.color} border border-primary-foreground/20 rounded-xl flex items-center px-4 cursor-pointer backdrop-blur-sm`}
                      style={{
                        top: `${index * 80 + 40}px`,
                        zIndex: layers.length - index,
                      }}
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ 
                        x: activeLayer === index ? -20 : 0, 
                        opacity: 1,
                        scale: activeLayer === index ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onHoverStart={() => setActiveLayer(index)}
                      onHoverEnd={() => setActiveLayer(null)}
                      whileHover={{ 
                        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                      }}
                    >
                      <layer.icon className="w-8 h-8 text-accent mr-4" />
                      <span className="text-primary-foreground font-medium">{layer.title}</span>
                    </motion.div>
                  ))}
                  
                  {/* Floating detail panel */}
                  <motion.div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-48 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-4"
                    animate={{ 
                      opacity: activeLayer !== null ? 1 : 0,
                      x: activeLayer !== null ? 0 : 20,
                    }}
                  >
                    {activeLayer !== null && (
                      <>
                        <h4 className="text-accent font-semibold mb-2">{layers[activeLayer].title}</h4>
                        <ul className="space-y-1">
                          {layers[activeLayer].items.map((item) => (
                            <li key={item} className="text-primary-foreground/70 text-sm flex items-center gap-2">
                              <Box className="w-3 h-3 text-accent" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Digital Infrastructure Components */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold mb-4">Digital Infrastructure Includes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">A comprehensive ecosystem of technology components working together.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {layers.map((layer, index) => (
                <motion.div
                  key={layer.title}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div 
                    className="relative bg-card border rounded-2xl p-8 h-full overflow-hidden"
                    whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  >
                    {/* Background gradient on hover */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${layer.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                    />
                    
                    <div className="relative z-10">
                      <motion.div 
                        className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <layer.icon className="w-8 h-8 text-accent" />
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-4">{layer.title}</h3>
                      <ul className="space-y-2">
                        {layer.items.map((item, i) => (
                          <motion.li 
                            key={item} 
                            className="flex items-center gap-2 text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.05 }}
                          >
                            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-heading font-bold mb-6">Why Choose Our Infrastructure Solutions?</h2>
                <p className="text-muted-foreground mb-8">
                  We design and implement infrastructure that scales with your business, ensuring reliability, 
                  performance, and cost-effectiveness.
                </p>
                <ul className="space-y-4">
                  {[
                    "Scalable architecture for future growth",
                    "99.99% uptime guarantee",
                    "24/7 monitoring and support",
                    "Cost-optimized solutions",
                    "Seamless integration with existing systems",
                  ].map((benefit, index) => (
                    <motion.li 
                      key={benefit}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                        <Server className="w-3 h-3 text-accent-foreground" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="bg-card border rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {[HardDrive, Cpu, Wifi, Cloud].map((Icon, index) => (
                      <motion.div 
                        key={index}
                        className="aspect-square bg-accent/5 rounded-2xl flex items-center justify-center"
                        whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--accent) / 0.1)" }}
                        animate={{ 
                          y: [0, -5, 0],
                        }}
                        transition={{ 
                          y: { duration: 2, repeat: Infinity, delay: index * 0.2 },
                        }}
                      >
                        <Icon className="w-12 h-12 text-accent" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
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
              <Layers className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-4xl font-heading font-bold text-primary-foreground mb-6">Ready to Build Your Digital Foundation?</h2>
              <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">Let's design an infrastructure that powers your business growth.</p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Infrastructure;
