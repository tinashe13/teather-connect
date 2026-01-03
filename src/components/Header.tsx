import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import teatherLogo from "@/assets/teather-logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { 
    label: "Solutions", 
    href: "/solutions",
    dropdown: [
      { label: "Data Centre Solutions", href: "/solutions/data-centre" },
      { label: "Information Security", href: "/solutions/information-security" },
      { label: "IT Service Management", href: "/solutions/it-service-management" },
      { label: "Infrastructure Solutions", href: "/solutions/infrastructure" },
    ]
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || !isHomePage 
        ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo with frosted glass effect */}
          <Link to="/" className="flex items-center">
            <div className="relative p-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
              <img src={teatherLogo} alt="Teather Connect" className="h-8 md:h-10 w-auto" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div 
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  to={item.href}
                  className={`flex items-center gap-1 font-medium transition-colors ${
                    isScrolled || !isHomePage 
                      ? "text-foreground/80 hover:text-accent" 
                      : "text-primary-foreground/90 hover:text-primary-foreground"
                  }`}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-xl p-4 shadow-lg"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block px-4 py-3 text-foreground/70 hover:text-accent hover:bg-accent/5 rounded-lg transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+1234567890" 
              className={`flex items-center gap-2 transition-colors ${
                isScrolled || !isHomePage 
                  ? "text-foreground/80 hover:text-accent" 
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">Enquiries</span>
            </a>
            <Button variant="accent" size="default" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden p-2 ${isScrolled || !isHomePage ? "text-foreground" : "text-primary-foreground"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-background border-t border-border"
            >
              <nav className="py-6 space-y-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      to={item.href}
                      className="block px-4 py-3 text-foreground/80 hover:text-accent transition-colors font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.dropdown && (
                      <div className="pl-8 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-foreground/60 hover:text-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 px-4">
                  <Button variant="accent" className="w-full" asChild>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
