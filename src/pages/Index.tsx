import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
    return <Dashboard onBackToHome={() => setShowDashboard(false)} />;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero onGetStarted={() => setShowDashboard(true)} />
      <Features />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
