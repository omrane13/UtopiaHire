import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features />
        <div id="how-it-works">
          <HowItWorks />
        </div>
      </main>
      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="container px-4 mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 UtopiaHire. Empowering careers with AI.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
