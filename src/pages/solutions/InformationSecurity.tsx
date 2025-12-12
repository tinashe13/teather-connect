import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Cloud, AlertTriangle, Lock, Bug, Server } from "lucide-react";

const features = [
  { icon: Cloud, title: "Cloud Security", description: "Secure cloud infrastructure" },
  { icon: AlertTriangle, title: "Incident Response", description: "Rapid threat response" },
  { icon: Shield, title: "Disaster Recovery", description: "Business continuity planning" },
  { icon: Lock, title: "Application Security", description: "Secure application development" },
  { icon: Bug, title: "Vulnerability Management", description: "Proactive threat detection" },
  { icon: Server, title: "Infrastructure Security", description: "Network protection" },
];

const InformationSecurity = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-accent font-medium mb-4 block">Solutions</span>
            <h1 className="text-5xl font-heading font-bold text-primary-foreground mb-6">Information Security</h1>
            <p className="text-xl text-primary-foreground/80">Protect Today, Secure Tomorrow.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <p className="text-lg text-muted-foreground max-w-3xl mb-12">We emphasize on the practice of protecting information and systems from unauthorized access, use, disclosure, or destruction to ensure confidentiality, integrity, and availability. It includes a combination of technologies, processes, and physical and administrative controls.</p>
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

export default InformationSecurity;
