import teatherLogo from "@/assets/teather-logo.png";

const footerLinks = {
  solutions: [
    "Data Centre Solutions",
    "Information Security",
    "IT Service Management",
    "Infrastructure Solutions"
  ],
  company: [
    "About Us",
    "Careers",
    "Blog",
    "Contact"
  ],
  industries: [
    "Enterprise",
    "Healthcare",
    "Finance",
    "Government"
  ]
};

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img src={teatherLogo} alt="Teather Connect" className="h-12 w-auto" />
            </a>
            <p className="text-muted-foreground max-w-sm mb-6">
              Teather Connect is a trusted IT Solutions and Technology Services company, proudly serving clients worldwide. Built on innovation and reliability, we lead the way in delivering sustainable, future-focused solutions.
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Teather Connect. All rights reserved.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link}>
                  <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Industries</h3>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
