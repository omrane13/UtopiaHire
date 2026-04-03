import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award, Target, Clock } from "lucide-react";

const DashboardPreview = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Your <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Career Command Center</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Personalized insights, AI recommendations, and real-time progress tracking in one beautiful dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main card - Resume Score */}
          <Card className="lg:col-span-2 backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl text-foreground">Resume Strength</CardTitle>
                  <CardDescription className="text-muted-foreground">AI-powered analysis of your resume</CardDescription>
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  87%
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">ATS Compatibility</span>
                  <span className="text-foreground font-medium">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Keyword Optimization</span>
                  <span className="text-foreground font-medium">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Skill Representation</span>
                  <span className="text-foreground font-medium">79%</span>
                </div>
                <Progress value={79} className="h-2" />
              </div>
              <div className="flex gap-2 flex-wrap mt-4">
                <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Improving
                </Badge>
                <Badge variant="outline" className="border-white/20 text-muted-foreground">
                  3 suggestions available
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Sidebar cards */}
          <div className="space-y-6">
            <Card className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2 text-foreground">
                  <Award className="w-5 h-5 text-primary" />
                  Interview Readiness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground mb-2">8.4/10</div>
                <p className="text-sm text-muted-foreground">Strong technical skills. Work on soft skills for Senior roles.</p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2 text-foreground">
                  <Target className="w-5 h-5 text-secondary" />
                  Job Matches
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground mb-2">12 new</div>
                <p className="text-sm text-muted-foreground">87% match rate with your profile and preferences</p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2 text-foreground">
                  <Clock className="w-5 h-5 text-accent" />
                  Active Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground mb-2">5</div>
                <p className="text-sm text-muted-foreground">2 interviews scheduled, 3 under review</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom cards - Skills */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: "500ms" }}>
            <CardHeader>
              <CardTitle className="text-foreground">Top Skills</CardTitle>
              <CardDescription className="text-muted-foreground">Your strongest competencies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 flex-wrap">
                <Badge className="bg-gradient-to-r from-primary to-primary/70 border-primary/30">React.js</Badge>
                <Badge className="bg-gradient-to-r from-secondary to-secondary/70 border-secondary/30">TypeScript</Badge>
                <Badge className="bg-gradient-to-r from-accent to-accent/70 border-accent/30">Node.js</Badge>
                <Badge className="bg-gradient-to-r from-primary to-secondary border-primary/30">UI/UX Design</Badge>
                <Badge className="bg-gradient-to-r from-secondary to-accent border-secondary/30">Project Management</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <CardHeader>
              <CardTitle className="text-foreground">Skill Gaps</CardTitle>
              <CardDescription className="text-muted-foreground">Recommended areas for growth</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="border-white/20 text-muted-foreground">Docker</Badge>
                <Badge variant="outline" className="border-white/20 text-muted-foreground">AWS</Badge>
                <Badge variant="outline" className="border-white/20 text-muted-foreground">Python</Badge>
                <Badge variant="outline" className="border-white/20 text-muted-foreground">Data Analysis</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
