import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Shield, Users, Zap } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and open communication to drive success."
  },
  {
    icon: Zap,
    title: "Agility",
    description: "We provide technologies that quickly adapt to modern changing trends."
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description: "We are dedicated to maintaining confidentiality and safeguarding data."
  }
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left column - Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6">
              About Teather Connect
            </span>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Redefining Enterprise Technology{" "}
              <span className="text-gradient">for the Future</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Teather Connect specializes in delivering comprehensive IT and communications solutions designed for mid-sized and enterprise businesses. Our service portfolio is structured around improving operational efficiency, fostering innovation, mitigating risk, and reducing costs.
            </p>

            <div className="space-y-6">
              <motion.div 
                className="flex gap-4 items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To deliver innovative IT solutions that solve real world challenges, creating value and sustainability for our clients and communities.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex gap-4 items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">
                    Connecting people and ideas: To enable seamless connectivity and foster collaboration through cutting edge IT services and products.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-card-gradient border border-border/50 rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <value.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
