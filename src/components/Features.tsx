import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Smartphone, 
  Users, 
  Clock, 
  RotateCcw, 
  Database,
  Upload,
  Search,
  BarChart3,
  Download,
  MessageCircle,
  Save
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Enterprise-grade security with session management, multi-factor authentication, and role-based access control"
    },
    {
      icon: Smartphone,
      title: "Multi-Factor Authentication",
      description: "TOTP-based 2FA with QR code generation for enhanced account protection"
    },
    {
      icon: BarChart3,
      title: "AI-Powered Analytics",
      description: "Intelligent data analysis with automated insights, pattern recognition, and predictive modeling"
    },
    {
      icon: MessageCircle,
      title: "Smart AI Assistant",
      description: "Interactive chat interface powered by AI to query data, generate insights, and answer complex questions"
    },
    {
      icon: Database,
      title: "Secure Data Processing",
      description: "Postgres database with connection pooling, encrypted storage, and automated backup systems"
    },
    {
      icon: Search,
      title: "Intelligent Discovery",
      description: "AI-driven data exploration with automatic pattern detection and anomaly identification"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/20 animate-fade-in">{/* Updated background */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient font-heading">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            Advanced security and AI-powered analytics for intelligent data visualization
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl group">
              <CardHeader className="text-center">
                <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 group-hover:text-secondary transition-all duration-300 mx-auto animate-glow" />
                <CardTitle className="text-xl font-heading">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed font-body">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="glass rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 font-heading">🚀 Why Choose DataViz?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="glass rounded-xl p-4 hover:bg-primary/10 transition-all duration-300 card-hover">
                <strong className="text-primary">🛡️ Enterprise Security</strong><br />
                <span className="font-body">Multi-factor authentication and protection</span>
              </div>
              <div className="glass rounded-xl p-4 hover:bg-secondary/10 transition-all duration-300 card-hover">
                <strong className="text-secondary">🤖 AI-First Approach</strong><br />
                <span className="font-body">Cutting-edge machine learning insights</span>
              </div>
              <div className="glass rounded-xl p-4 hover:bg-accent/10 transition-all duration-300 card-hover">
                <strong className="text-accent">⚡ Lightning Fast</strong><br />
                <span className="font-body">Optimized performance for large datasets</span>
              </div>
              <div className="glass rounded-xl p-4 hover:bg-primary/10 transition-all duration-300 card-hover">
                <strong className="text-primary">🎨 Beautiful Design</strong><br />
                <span className="font-body">Intuitive interface for all users</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;