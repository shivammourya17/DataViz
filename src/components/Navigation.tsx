import { Button } from "@/components/ui/button";
import { BarChart3 } from "lucide-react";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass animate-fade-in">{/* Updated with glass effect */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={scrollToTop}
          >
            <BarChart3 className="w-8 h-8 text-primary mr-3 animate-glow" />
            <h1 className="text-2xl font-bold text-white font-heading tracking-wider">DataViz</h1>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-primary transition-all duration-300 font-medium"
              onClick={() => scrollToSection('features')}
            >
              Features
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-primary transition-all duration-300 font-medium"
              onClick={() => scrollToSection('faq')}
            >
              FAQ
            </Button>
            <Button
              className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 glow"
              onClick={() => scrollToSection('get-started')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;