import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-bg-rich.jpg";

const Hero = ({ onGetStarted }: { onGetStarted: () => void }) => {
  return (
    <section id="get-started" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">{/* Added pt-20 for navigation space */}
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />{/* Updated overlay */}
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-foreground animate-slide-up">
        <div className="flex items-center justify-center mb-8 animate-scale-in">
          <BarChart3 className="w-16 h-16 mr-4 text-primary animate-glow" />
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight font-heading text-gradient">
            DataViz
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-muted-foreground font-body animate-fade-in">
          AI-powered data visualization and analytics tool. Upload datasets, generate insights, 
          and interact with your data through intelligent visualizations and chat.
        </p>
        
        <div className="flex justify-center animate-fade-in">
          <Button 
            onClick={onGetStarted}
            size="lg" 
            className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 text-lg px-8 py-6 glow font-medium"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;