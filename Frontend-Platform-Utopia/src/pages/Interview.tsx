import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Play, Pause, RotateCcw, Mic, Video, MessageSquare, 
  TrendingUp, Award, Target, Sparkles, CheckCircle2, Clock 
} from "lucide-react";
import { useState } from "react";

const Interview = () => {
  const [isActive, setIsActive] = useState(false);

  const interviewTypes = [
    {
      title: "Technical Interview",
      description: "Practice coding questions and technical problem-solving",
      icon: Target,
      difficulty: "Advanced",
      duration: "45 min",
      color: "from-primary to-primary/70"
    },
    {
      title: "Behavioral Interview",
      description: "Work on communication and soft skills responses",
      icon: MessageSquare,
      difficulty: "Intermediate",
      duration: "30 min",
      color: "from-secondary to-secondary/70"
    },
    {
      title: "Leadership Interview",
      description: "Practice management and leadership scenarios",
      icon: Award,
      difficulty: "Expert",
      duration: "40 min",
      color: "from-accent to-accent/70"
    },
  ];

  const pastSessions = [
    { date: "2 days ago", type: "Technical", score: 8.5, feedback: "Strong technical knowledge, improve explanation clarity" },
    { date: "5 days ago", type: "Behavioral", score: 7.8, feedback: "Good STAR method usage, work on confidence" },
    { date: "1 week ago", type: "Technical", score: 8.2, feedback: "Excellent problem-solving approach" },
  ];

  const skillMetrics = [
    { skill: "Technical Knowledge", score: 85, color: "primary" },
    { skill: "Communication", score: 78, color: "secondary" },
    { skill: "Problem Solving", score: 82, color: "accent" },
    { skill: "Confidence", score: 74, color: "primary" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2 text-foreground">
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">AI Interview</span> Coach
            </h1>
            <p className="text-muted-foreground text-lg">Practice with AI-powered mock interviews and get instant feedback</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Active interview card */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 animate-fade-in">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl text-foreground">Interview Session</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {isActive ? "Practice in progress..." : "Select a type below to start"}
                      </CardDescription>
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center">
                      <MessageSquare className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {isActive ? (
                    <div className="space-y-6">
                      {/* Mock interview interface */}
                      <div className="aspect-video rounded-lg bg-gradient-to-br from-background/50 to-background/30 border border-white/10 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
                        <div className="relative z-10 text-center">
                          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mx-auto mb-4 animate-pulse">
                            <Mic className="w-12 h-12 text-white" />
                          </div>
                          <p className="text-lg text-foreground font-medium mb-2">AI Interviewer is listening...</p>
                          <p className="text-sm text-muted-foreground">Question 3 of 10</p>
                        </div>
                      </div>

                      {/* Current question */}
                      <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <p className="text-sm text-muted-foreground mb-2">Current Question:</p>
                        <p className="text-foreground">
                          "Can you describe a challenging technical problem you faced and how you solved it?"
                        </p>
                      </div>

                      {/* Controls */}
                      <div className="flex gap-3">
                        <Button 
                          onClick={() => setIsActive(false)}
                          className="flex-1 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-foreground"
                        >
                          <Pause className="w-4 h-4 mr-2" />
                          Pause Session
                        </Button>
                        <Button variant="outline" className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 text-foreground">
                          <RotateCcw className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Live feedback */}
                      <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                        <div className="flex items-start gap-3">
                          <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-foreground font-medium mb-1">Live AI Feedback</p>
                            <p className="text-xs text-muted-foreground">
                              Good pace and clarity. Try to include specific metrics when describing your achievements.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                        <Video className="w-10 h-10 text-secondary" />
                      </div>
                      <p className="text-muted-foreground mb-6">
                        Choose an interview type below to begin your practice session
                      </p>
                      <Button 
                        onClick={() => setIsActive(true)}
                        size="lg" 
                        className="bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-foreground"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Start Practice Interview
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Interview types */}
              <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                <h3 className="text-xl font-semibold text-foreground mb-4">Choose Interview Type</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {interviewTypes.map((type, index) => (
                    <Card 
                      key={index}
                      className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
                      onClick={() => setIsActive(true)}
                    >
                      <CardContent className="p-6">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-4`}>
                          <type.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold text-foreground mb-2">{type.title}</h4>
                        <p className="text-xs text-muted-foreground mb-4">{type.description}</p>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs border-white/20">{type.difficulty}</Badge>
                          <Badge variant="outline" className="text-xs border-white/20">
                            <Clock className="w-3 h-3 mr-1" />
                            {type.duration}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Past sessions */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 animate-fade-in" style={{ animationDelay: "300ms" }}>
                <CardHeader>
                  <CardTitle className="text-foreground">Past Sessions</CardTitle>
                  <CardDescription className="text-muted-foreground">Your interview practice history</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pastSessions.map((session, index) => (
                      <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="text-sm font-medium text-foreground">{session.type} Interview</p>
                            <p className="text-xs text-muted-foreground">{session.date}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-foreground">{session.score}/10</div>
                            <Badge className="bg-secondary/20 text-secondary border-secondary/30 text-xs">
                              <TrendingUp className="w-3 h-3 mr-1" />
                              Good
                            </Badge>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          <CheckCircle2 className="w-3 h-3 inline mr-1" />
                          {session.feedback}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Performance score */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: "400ms" }}>
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Interview Readiness</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-5xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">
                      8.4/10
                    </div>
                    <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                      <Award className="w-3 h-3 mr-1" />
                      Strong Performance
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    You're well-prepared for most technical interviews
                  </p>
                </CardContent>
              </Card>

              {/* Skill breakdown */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 animate-fade-in" style={{ animationDelay: "500ms" }}>
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Skill Breakdown</CardTitle>
                  <CardDescription className="text-muted-foreground">Your interview strengths</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skillMetrics.map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{metric.skill}</span>
                        <span className="text-foreground font-medium">{metric.score}%</span>
                      </div>
                      <Progress value={metric.score} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick tips */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 animate-fade-in" style={{ animationDelay: "600ms" }}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-foreground">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Quick Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <p className="text-xs text-foreground font-medium mb-1">Use STAR Method</p>
                    <p className="text-xs text-muted-foreground">Situation, Task, Action, Result</p>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20">
                    <p className="text-xs text-foreground font-medium mb-1">Quantify Achievements</p>
                    <p className="text-xs text-muted-foreground">Include specific metrics and numbers</p>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                    <p className="text-xs text-foreground font-medium mb-1">Practice Regularly</p>
                    <p className="text-xs text-muted-foreground">Aim for 2-3 sessions per week</p>
                  </div>
                </CardContent>
              </Card>

              {/* Stats */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 animate-fade-in" style={{ animationDelay: "700ms" }}>
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Sessions</span>
                    <span className="text-lg font-bold text-foreground">24</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Avg. Score</span>
                    <span className="text-lg font-bold text-foreground">8.2/10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">This Month</span>
                    <span className="text-lg font-bold text-foreground">7</span>
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

export default Interview;
