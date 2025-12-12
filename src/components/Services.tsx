import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Server, Shield, Settings, HardDrive, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Data Centre Solutions",
    description: "Dedicated facilities housing IT infrastructure like servers, storage, and networking gear, providing centralized, secure, and reliable computing power.",
    features: ["Software & Servers", "Storage & Backup", "Networking Infrastructure", "Environment Monitoring"],
    href: "/solutions/data-centre"
  },
  {
    icon: Shield,
    title: "Information Security",
    description: "Protecting information and systems from unauthorized access with a combination of technologies, processes, and administrative controls.",
    features: ["Cloud Security", "Incident Response", "Vulnerability Management", "Cryptography"],
    href: "/solutions/information-security"
  },
  {
    icon: Settings,
    title: "IT Service Management",
    description: "Designing, delivering, managing, and improving IT services to meet business goals while focusing on end-user experience.",
    features: ["Asset Management", "Change Management", "Service Desk", "Problem Management"],
    href: "/solutions/it-service-management"
  },
  {
    icon: HardDrive,
    title: "Infrastructure Solutions",
    description: "Combination of hardware, software, network and components that support business operations and serve as the foundation for IT services.",
    features: ["Physical Hardware", "Software Applications", "Cloud Services", "Data Storage"],
    href: "/solutions/infrastructure"
  }
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-primary">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary-foreground">
            What We <span className="text-accent">Offer</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Comprehensive IT solutions designed to transform your business operations and drive sustainable growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 hover:border-accent/50 hover:bg-primary-foreground/10 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                <service.icon className="w-8 h-8 text-accent" />
              </div>

              <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-foreground">{service.title}</h3>
              <p className="text-primary-foreground/70 mb-6 leading-relaxed">{service.description}</p>

              <ul className="grid grid-cols-2 gap-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-primary-foreground/60">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                to={service.href}
                className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all group/link"
              >
                Learn more 
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
