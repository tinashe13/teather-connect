import { Header } from "@/components/Header";
import { Seo } from "@/components/Seo";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Eye, Shield, Users, Zap } from "lucide-react";

const About = () => {
  const values = [
    { icon: Users, title: "Collaboration", description: "We believe in the power of teamwork and open communication to drive success and develop innovative ideas." },
    { icon: Zap, title: "Agility", description: "We provide technologies that quickly adapt to modern changing trends and clients demands." },
    { icon: Shield, title: "Security & Privacy", description: "We are dedicated to maintaining confidentiality and safeguarding data to facilitate our clients' trust." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo title="About Us | Teather Connect" description="Learn about Teather Connect: our mission, vision and core values as a trusted IT solutions and technology services company." path="/about" />
      <Header />
      <main className="pt-20">
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <h1 className="text-5xl font-heading font-bold text-primary-foreground mb-6">About Teather Connect</h1>
              <p className="text-xl text-primary-foreground/80">Connecting people and ideas through innovative IT solutions.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">Who We Are</h2>
                <p className="text-muted-foreground text-lg mb-6">Teather Connect specializes in delivering comprehensive IT and communications solutions designed for mid-sized and enterprise businesses. Our service portfolio is structured around improving operational efficiency, fostering innovation, mitigating risk, and reducing costs.</p>
                <p className="text-muted-foreground">We emphasize a partnership approach, aiming to build long-term relationships by offering flexible delivery models, tailored technical support, and various options to meet specific organizational needs.</p>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-card rounded-xl border">
                  <Target className="w-8 h-8 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Mission</h3>
                    <p className="text-muted-foreground">To deliver innovative IT solutions that solve real world challenges, creating value and sustainability for our clients and communities.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-card rounded-xl border">
                  <Eye className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Vision</h3>
                    <p className="text-muted-foreground">To enable seamless connectivity and foster collaboration through cutting edge IT services and products.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-heading font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.title} className="bg-card p-8 rounded-2xl border text-center">
                  <value.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
