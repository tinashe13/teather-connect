import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Server, Shield, Settings, HardDrive, ArrowRight } from "lucide-react";

const services = [
  { icon: Server, title: "Data Centre Solutions", description: "Dedicated facilities housing IT infrastructure like servers, storage, and networking gear.", href: "/solutions/data-centre" },
  { icon: Shield, title: "Information Security", description: "Protecting information and systems from unauthorized access, use, disclosure, or destruction.", href: "/solutions/information-security" },
  { icon: Settings, title: "IT Service Management", description: "Designing, delivering, managing, and improving IT services to meet business goals.", href: "/solutions/it-service-management" },
  { icon: HardDrive, title: "Infrastructure Solutions", description: "Combination of hardware, software, network and components that support business operations.", href: "/solutions/infrastructure" },
];

const Solutions = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-5xl font-heading font-bold text-primary-foreground mb-6">Our Solutions</h1>
            <p className="text-xl text-primary-foreground/80">Comprehensive IT solutions designed to transform your business.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-card border rounded-2xl p-8 hover:border-accent/50 transition-all group">
                <service.icon className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Link to={service.href} className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all">Learn more <ArrowRight className="w-4 h-4" /></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Solutions;
