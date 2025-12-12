import { Link } from "react-router-dom";
import teatherLogo from "@/assets/teather-logo.png";

const footerLinks = {
  solutions: [
    { label: "Data Centre Solutions", href: "/solutions/data-centre" },
    { label: "Information Security", href: "/solutions/information-security" },
    { label: "IT Service Management", href: "/solutions/it-service-management" },
    { label: "Infrastructure Solutions", href: "/solutions/infrastructure" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Solutions", href: "/solutions" },
    { label: "Contact", href: "/contact" },
  ],
  industries: [
    { label: "Enterprise", href: "/solutions" },
    { label: "Healthcare", href: "/solutions" },
    { label: "Finance", href: "/solutions" },
    { label: "Government", href: "/solutions" },
  ]
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={teatherLogo} alt="Teather Connect" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-primary-foreground/80 max-w-sm mb-6">
              Teather Connect is a trusted IT Solutions and Technology Services company. Built on innovation and reliability, we lead the way in delivering sustainable, future-focused solutions.
            </p>
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Teather Connect. All rights reserved.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Industries</h3>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
