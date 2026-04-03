import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { 
  Download, Upload, Wand2, CheckCircle2, AlertCircle, 
  TrendingUp, FileText, Sparkles, Copy, Eye 
} from "lucide-react";
import { useState } from "react";

const Resume = () => {
  const [activeTab, setActiveTab] = useState<"editor" | "analysis">("editor");

  const suggestions = [
    {
      type: "critical",
      title: "Add quantifiable achievements",
      description: "Include metrics like '25% performance improvement' or 'Led team of 5 developers'",
      impact: "+12% match rate"
    },
    {
      type: "important",
      title: "Optimize for ATS",
      description: "Add keywords: 'React', 'TypeScript', 'Agile' to improve scanning",
      impact: "+8% visibility"
    },
    {
      type: "suggestion",
      title: "Update format",
      description: "Use bullet points instead of paragraphs in experience section",
      impact: "+5% readability"
    }
  ];

  const aiInsights = [
    { label: "ATS Compatibility", score: 92, color: "primary" },
    { label: "Keyword Optimization", score: 85, color: "secondary" },
    { label: "Skill Representation", score: 79, color: "accent" },
    { label: "Format & Structure", score: 88, color: "primary" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2 text-foreground">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AI Resume</span> Reviewer
            </h1>
            <p className="text-muted-foreground text-lg">Optimize your resume with real-time AI feedback</p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-foreground">
              <Upload className="w-4 h-4 mr-2" />
              Upload Resume
            </Button>
            <Button variant="outline" className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 text-foreground">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Button variant="outline" className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 text-foreground">
              <Wand2 className="w-4 h-4 mr-2" />
              AI Rewrite
            </Button>
            <Button variant="outline" className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 text-foreground">
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Button
              variant={activeTab === "editor" ? "default" : "outline"}
              onClick={() => setActiveTab("editor")}
              className={activeTab === "editor" 
                ? "bg-gradient-to-r from-primary to-primary/80 text-foreground" 
                : "backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 text-foreground"
              }
            >
              <FileText className="w-4 h-4 mr-2" />
              Editor
            </Button>
            <Button
              variant={activeTab === "analysis" ? "default" : "outline"}
              onClick={() => setActiveTab("analysis")}
              className={activeTab === "analysis" 
                ? "bg-gradient-to-r from-primary to-primary/80 text-foreground" 
                : "backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 text-foreground"
              }
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Analysis
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main content area */}
            <div className="lg:col-span-2 space-y-6">
              {activeTab === "editor" ? (
                <Card className="backdrop-blur-xl bg-white/5 border-white/10 animate-fade-in">
                  <CardHeader>
                    <CardTitle className="text-foreground">Resume Editor</CardTitle>
                    <CardDescription className="text-muted-foreground">Edit your resume content with real-time AI feedback</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Professional Summary</label>
                      <Textarea 
                        className="min-h-[120px] backdrop-blur-xl bg-white/5 border-white/10 text-foreground resize-none"
                        placeholder="Experienced software engineer with 5+ years..."
                        defaultValue="Experienced software engineer with 5+ years of expertise in full-stack development. Specialized in React, TypeScript, and Node.js. Led multiple high-impact projects resulting in 30% performance improvements."
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Work Experience</label>
                      <Textarea 
                        className="min-h-[200px] backdrop-blur-xl bg-white/5 border-white/10 text-foreground resize-none"
                        placeholder="Senior Developer at Company..."
                        defaultValue="Senior Frontend Developer | TechCorp Africa | 2021 - Present
• Led development of customer-facing dashboard using React and TypeScript
• Improved application performance by 40% through code optimization
• Mentored team of 3 junior developers

Full Stack Developer | Digital Solutions | 2019 - 2021
• Built RESTful APIs using Node.js and Express
• Implemented responsive UI components with React
• Collaborated with cross-functional teams in Agile environment"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Skills</label>
                      <Textarea 
                        className="min-h-[100px] backdrop-blur-xl bg-white/5 border-white/10 text-foreground resize-none"
                        placeholder="React, TypeScript, Node.js..."
                        defaultValue="Technical: React.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL, REST APIs, Git
Soft Skills: Team Leadership, Agile/Scrum, Problem Solving, Communication, Project Management"
                      />
                    </div>

                    <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-foreground">
                      <Wand2 className="w-4 h-4 mr-2" />
                      Apply AI Suggestions
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="backdrop-blur-xl bg-white/5 border-white/10 animate-fade-in">
                  <CardHeader>
                    <CardTitle className="text-foreground">AI Analysis</CardTitle>
                    <CardDescription className="text-muted-foreground">Comprehensive resume evaluation</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {aiInsights.map((insight, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{insight.label}</span>
                          <span className="text-foreground font-medium">{insight.score}%</span>
                        </div>
                        <Progress value={insight.score} className="h-2" />
                      </div>
                    ))}

                    <div className="pt-4 border-t border-white/10">
                      <h4 className="text-lg font-semibold text-foreground mb-4">Detailed Feedback</h4>
                      <div className="space-y-3">
                        <div className="flex gap-3 p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                          <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-foreground font-medium">Strong Points</p>
                            <p className="text-xs text-muted-foreground mt-1">Clear structure, quantifiable achievements, relevant keywords</p>
                          </div>
                        </div>
                        <div className="flex gap-3 p-3 rounded-lg bg-accent/10 border border-accent/20">
                          <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-foreground font-medium">Areas to Improve</p>
                            <p className="text-xs text-muted-foreground mt-1">Add more technical keywords, expand on leadership experience</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Overall Score */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: "300ms" }}>
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Overall Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                      87%
                    </div>
                    <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Excellent
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Your resume is well-optimized and ready for 92% of ATS systems
                  </p>
                </CardContent>
              </Card>

              {/* AI Suggestions */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 animate-fade-in" style={{ animationDelay: "400ms" }}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-foreground">
                    <Sparkles className="w-5 h-5 text-primary" />
                    AI Suggestions
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">Quick wins to improve your resume</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {suggestions.map((suggestion, index) => (
                    <div 
                      key={index}
                      className={`p-3 rounded-lg border ${
                        suggestion.type === "critical" 
                          ? "bg-accent/10 border-accent/20" 
                          : suggestion.type === "important"
                          ? "bg-primary/10 border-primary/20"
                          : "bg-secondary/10 border-secondary/20"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <p className="text-sm font-medium text-foreground">{suggestion.title}</p>
                        <Badge variant="outline" className="text-xs border-white/20">
                          {suggestion.impact}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">{suggestion.description}</p>
                      <Button size="sm" variant="outline" className="w-full border-white/20 hover:bg-white/5">
                        <Copy className="w-3 h-3 mr-1" />
                        Apply
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Keywords */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 animate-fade-in" style={{ animationDelay: "500ms" }}>
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Trending Keywords</CardTitle>
                  <CardDescription className="text-muted-foreground">Popular in your industry</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 flex-wrap">
                    <Badge className="bg-gradient-to-r from-primary to-primary/70">Cloud Computing</Badge>
                    <Badge className="bg-gradient-to-r from-secondary to-secondary/70">DevOps</Badge>
                    <Badge className="bg-gradient-to-r from-accent to-accent/70">Microservices</Badge>
                    <Badge variant="outline" className="border-white/20">CI/CD</Badge>
                    <Badge variant="outline" className="border-white/20">Kubernetes</Badge>
                    <Badge variant="outline" className="border-white/20">Terraform</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
