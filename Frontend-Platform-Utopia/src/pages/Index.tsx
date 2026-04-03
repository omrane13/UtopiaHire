import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DashboardPreview from "@/components/DashboardPreview";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section id="career-intelligence">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="command-center">
        <DashboardPreview />
      </section>
      <section id="offer">
        <CTA />
      </section>
    </div>
  );
};

export default Index;
