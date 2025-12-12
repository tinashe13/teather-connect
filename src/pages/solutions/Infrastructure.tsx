import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { HardDrive, Cpu, Cloud, Database, Monitor, Wifi } from "lucide-react";

const features = [
  { icon: Cpu, title: "Physical Hardware", description: "Enterprise-grade hardware" },
  { icon: Monitor, title: "Software Applications", description: "Business software solutions" },
  { icon: HardDrive, title: "Operating Systems", description: "Optimized OS deployment" },
  { icon: Database, title: "Data Storage", description: "Scalable storage solutions" },
  { icon: Cloud, title: "Cloud Services", description: "Cloud infrastructure" },
  { icon: Wifi, title: "Network Infrastructure", description: "Enterprise networking" },
];

const Infrastructure = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-accent font-medium mb-4 block">Solutions</span>
            <h1 className="text-5xl font-heading font-bold text-primary-foreground mb-6">Infrastructure Solutions</h1>
            <p className="text-xl text-primary-foreground/80">Build the foundation for your digital future.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <p className="text-lg text-muted-foreground max-w-3xl mb-12">IT Infrastructure refers to a combination of hardware, software, the network, and components that support other business operations. It serves as the foundation for delivering IT services and fulfilling the computing, data management, and communication needs of an organization.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-card border rounded-xl p-6 hover:border-accent/50 transition-all">
                <feature.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Infrastructure;
