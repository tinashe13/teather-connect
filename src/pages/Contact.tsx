import { Header } from "@/components/Header";
import { Seo } from "@/components/Seo";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";

const Contact = () => (
  <div className="min-h-screen bg-background">
    <Seo title="Contact Us | Teather Connect" description="Get in touch with Teather Connect to discuss data centre, security, ITSM and infrastructure projects." path="/contact" jsonLd={{ "@context": "https://schema.org", "@type": "LocalBusiness", name: "Teather Connect", url: "https://teatherconnect.net/contact", telephone: "+263242123456", email: "info@teatherconnect.com" }} />
    <Header />
    <main className="pt-20">
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Contact;
