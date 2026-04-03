import { FileText, MessageSquare, Briefcase, TrendingUp, Shield, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: FileText,
    title: "AI Resume Reviewer",
    description: "Real-time NLP analysis optimizes your resume with keyword suggestions, formatting fixes, and ATS compatibility.",
    gradient: "from-primary to-primary/70"
  },
  {
    icon: MessageSquare,
    title: "Virtual AI Interviewer",
    description: "Practice interviews with AI-generated questions and receive personalized feedback on communication and skills.",
    gradient: "from-secondary to-secondary/70"
  },
  {
    icon: Briefcase,
    title: "Smart Job Matcher",
    description: "Discover regionally relevant opportunities matched to your skills, experience, and career goals.",
    gradient: "from-accent to-accent/70"
  },
  {
    icon: TrendingUp,
    title: "Career Intelligence",
    description: "Track skill demand trends, marketability scores, and actionable insights for career growth.",
    gradient: "from-primary to-secondary"
  },
  {
    icon: Sparkles,
    title: "Digital Footprint Scanner",
    description: "Showcase your GitHub, LinkedIn, and StackOverflow contributions with interactive visualizations.",
    gradient: "from-secondary to-accent"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Ethical AI with full transparency, data encryption, and optional anonymous mode for peace of mind.",
    gradient: "from-accent to-primary"
  }
];

const Features = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full backdrop-blur-xl bg-white/5 border border-white/10">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground">Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Everything You Need to <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-driven tools designed for job seekers in Sub-Saharan Africa and MENA regions
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(260,70%,58%,0.2)] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
