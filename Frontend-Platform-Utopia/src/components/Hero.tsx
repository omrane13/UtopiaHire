import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(240,25%,10%)] via-[hsl(260,30%,15%)] to-[hsl(280,25%,12%)]" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: "4s" }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center animate-fade-in-up">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full backdrop-blur-xl bg-white/5 border border-white/10">
          <Sparkles className="w-4 h-4 text-secondary" />
          <span className="text-sm text-muted-foreground">AI-Powered Career Intelligence</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Build Your Career
          </span>
          <br />
          <span className="text-foreground">With AI Precision</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          UtopiaHire empowers job seekers in emerging markets with AI-driven insights, 
          personalized career guidance, and professional tools to land your dream job.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-foreground shadow-[0_0_30px_hsl(260,70%,58%,0.3)] hover:shadow-[0_0_40px_hsl(260,70%,58%,0.5)] transition-all duration-300">
            Get Started Free
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 text-foreground">
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <Target className="w-8 h-8 text-primary mb-3 mx-auto" />
            <div className="text-3xl font-bold text-foreground mb-1">95%</div>
            <div className="text-sm text-muted-foreground">Match Accuracy</div>
          </div>
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <Zap className="w-8 h-8 text-secondary mb-3 mx-auto" />
            <div className="text-3xl font-bold text-foreground mb-1">10k+</div>
            <div className="text-sm text-muted-foreground">Careers Launched</div>
          </div>
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <Sparkles className="w-8 h-8 text-accent mb-3 mx-auto" />
            <div className="text-3xl font-bold text-foreground mb-1">AI-First</div>
            <div className="text-sm text-muted-foreground">Smart Insights</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
