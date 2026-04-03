import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-pulse" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 md:p-16 hover:bg-white/10 transition-all duration-500 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-white/10">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm text-foreground">Limited Time Offer</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Start Building Your <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Dream Career</span> Today
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals in Sub-Saharan Africa and MENA who are already using AI to accelerate their career growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-foreground shadow-[0_0_30px_hsl(260,70%,58%,0.3)] hover:shadow-[0_0_40px_hsl(260,70%,58%,0.5)] transition-all duration-300 text-lg px-8">
              Create Free Account
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 text-foreground text-lg px-8">
              Book a Demo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • Get started in 2 minutes • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
