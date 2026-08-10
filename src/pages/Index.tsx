import { Header } from "@/components/Header";
import { Seo } from "@/components/Seo";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Partners } from "@/components/Partners";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo title="Teather Connect | IT Solutions & Technology Services" description="Data centre, information security, ITSM and infrastructure solutions for enterprise businesses in Zimbabwe and beyond." path="/" />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Partners />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
