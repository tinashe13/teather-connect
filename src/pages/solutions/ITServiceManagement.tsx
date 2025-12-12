import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Settings, Package, GitBranch, Headphones, AlertCircle, FileText } from "lucide-react";

const features = [
  { icon: Package, title: "Asset Management", description: "Track and manage IT assets" },
  { icon: GitBranch, title: "Change Management", description: "Controlled change processes" },
  { icon: Headphones, title: "Service Desk", description: "24/7 support services" },
  { icon: AlertCircle, title: "Incident Management", description: "Rapid incident resolution" },
  { icon: Settings, title: "Problem Management", description: "Root cause analysis" },
  { icon: FileText, title: "Service Catalog", description: "Streamlined service delivery" },
];

const ITServiceManagement = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-accent font-medium mb-4 block">Solutions</span>
            <h1 className="text-5xl font-heading font-bold text-primary-foreground mb-6">IT Service Management</h1>
            <p className="text-xl text-primary-foreground/80">Streamline your IT operations.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <p className="text-lg text-muted-foreground max-w-3xl mb-12">IT Service Management (ITSM) is the practice of designing, delivering, managing, and improving IT services to meet business goals, focusing on the end-user experience and aligning technology with overall organizational strategy.</p>
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

export default ITServiceManagement;
