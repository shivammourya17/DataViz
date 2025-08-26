import { BarChart3, Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-card to-muted text-foreground py-16">{/* Updated styling */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <BarChart3 className="w-8 h-8 mr-3 text-primary animate-glow" />
              <h3 className="text-2xl font-bold font-heading text-gradient">DataViz</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md font-body">
              Empowering data-driven decisions through intelligent visualization and analytics. 
              Transform your data into actionable insights with our AI-powered platform.
            </p>
           <div className="flex space-x-4">
  <a
    href="https://github.com/shivammourya17"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Github className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
  </a>

  <a
    href="https://twitter.com" 
    target="_blank"
    rel="noopener noreferrer"
  >
    <Twitter className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
  </a>

  <a
    href="https://www.linkedin.com/in/shivam-mourya-57803824a"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
  </a>

  <a href="mailto:shivammourya1704@gmail.com">
    <Mail className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
  </a>
</div>

          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="hover:text-primary-foreground cursor-pointer transition-colors">Data Upload</li>
              <li className="hover:text-primary-foreground cursor-pointer transition-colors">AI Analytics</li>
              <li className="hover:text-primary-foreground cursor-pointer transition-colors">Visualizations</li>
              <li className="hover:text-primary-foreground cursor-pointer transition-colors">Chat Interface</li>
              <li className="hover:text-primary-foreground cursor-pointer transition-colors">Report Downloads</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="hover:text-primary-foreground cursor-pointer transition-colors">Documentation</li>
              <li className="hover:text-primary-foreground cursor-pointer transition-colors">API Reference</li>
              <li className="hover:text-primary-foreground cursor-pointer transition-colors">Community</li>
              <li className="hover:text-primary-foreground cursor-pointer transition-colors">Contact Us</li>
              <li className="hover:text-primary-foreground cursor-pointer transition-colors">Status Page</li>
            </ul>
          </div>
        </div>

        {/* Acknowledgments */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3">Acknowledgments</h4>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                Built with modern technologies including React, TypeScript, and Tailwind CSS. 
                Special thanks to the open-source community for their invaluable contributions 
                to data visualization and analytics tools.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Powered By</h4>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                Advanced AI models for intelligent data analysis, secure authentication systems, 
                and cutting-edge visualization libraries. DataViz combines the best of modern 
                web technologies with powerful analytics capabilities.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 mt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} DataViz. All rights reserved. 
            <span className="ml-4">
              Made with ❤️ for data enthusiasts everywhere
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;