import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  { name: "Microsoft Partner", initial: "MS" },
  { name: "Dell Technologies", initial: "DELL" },
  { name: "Fortinet", initial: "FT" },
  { name: "VMware", initial: "VM" },
  { name: "Cisco", initial: "CS" },
  { name: "ServiceNow", initial: "SN" },
];

export const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6">
              Partners
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our Innovation <span className="text-gradient">Partners</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Partnering with the best in the industry, we bring the most reliable and innovative IT and security solutions to your business. Our strategic partnerships enable us to deliver cutting-edge technology solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-3 gap-6"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card/80 border border-border/50 rounded-2xl p-6 flex items-center justify-center hover:border-accent/30 hover:bg-card transition-all duration-300 group aspect-square"
              >
                <div className="text-center">
                  <span className="text-2xl font-heading font-bold text-foreground/50 group-hover:text-accent transition-colors">
                    {partner.initial}
                  </span>
                  <p className="text-xs text-muted-foreground mt-2">{partner.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
