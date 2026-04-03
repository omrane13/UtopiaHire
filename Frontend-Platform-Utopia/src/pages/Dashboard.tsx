import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navigation from "@/components/Navigation";
import DarkModeToggle from '@/components/DarkModeToggle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, Award, Target, Clock, CheckCircle2, AlertCircle, 
  Calendar, Sparkles, ArrowUpRight, FileText, MessageSquare, Briefcase 
} from "lucide-react";

const Dashboard = () => {
  const [user, setUser] = React.useState({ first_name: 'User' });
  const navigate = useNavigate();

  React.useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
    axios.defaults.headers.common['Authorization'] = null;
    navigate('/signin');
  };
  const recentActivities = [
    { icon: FileText, text: "Resume updated", time: "2 hours ago", color: "text-primary" },
    { icon: MessageSquare, text: "Completed AI interview practice", time: "1 day ago", color: "text-secondary" },
    { icon: Briefcase, text: "Applied to Senior Developer role", time: "2 days ago", color: "text-accent" },
    { icon: CheckCircle2, text: "Interview scheduled with TechCorp", time: "3 days ago", color: "text-secondary" },
  ];

  const upcomingInterviews = [
    { company: "TechCorp Africa", role: "Senior Frontend Developer", date: "Tomorrow, 10:00 AM", status: "confirmed" },
    { company: "Digital Solutions MENA", role: "Full Stack Engineer", date: "Feb 28, 2:00 PM", status: "pending" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8 animate-fade-in">
            <div>
              <h1 className="text-4xl font-bold mb-2 text-foreground">
                Welcome back, <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{user.first_name}</span>
              </h1>
              <p className="text-muted-foreground text-lg">Here's your career progress overview</p>
            </div>
            <div className="flex items-center space-x-4">
              <DarkModeToggle />
              <Button onClick={handleLogout} variant="outline">Log Out</Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Resume Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground mb-2">87%</div>
                <Progress value={87} className="h-2 mb-2" />
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +5% from last week
                </p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Interview Readiness</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground mb-2">8.4/10</div>
                <div className="flex items-center gap-1 mb-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-xs text-muted-foreground">Strong performance</span>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Job Matches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground mb-2">12</div>
                <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                  New this week
                </Badge>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground mb-2">5</div>
                <p className="text-xs text-muted-foreground">2 interviews scheduled</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left column - Main cards */}
            <div className="lg:col-span-2 space-y-6">
              {/* Resume Analysis */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: "400ms" }}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl text-foreground">Resume Analysis</CardTitle>
                      <CardDescription className="text-muted-foreground">AI-powered insights and recommendations</CardDescription>
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                      <FileText className="w-8 h-8 text-white" />
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
                  <div className="flex gap-2 flex-wrap pt-2">
                    <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Well structured
                    </Badge>
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      3 improvements suggested
                    </Badge>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-foreground">
                    View Full Analysis
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Skills Overview */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: "500ms" }}>
                <CardHeader>
                  <CardTitle className="text-foreground">Skills Overview</CardTitle>
                  <CardDescription className="text-muted-foreground">Your expertise and growth opportunities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-3">Top Skills</h4>
                    <div className="flex gap-2 flex-wrap">
                      <Badge className="bg-gradient-to-r from-primary to-primary/70 border-primary/30">React.js</Badge>
                      <Badge className="bg-gradient-to-r from-secondary to-secondary/70 border-secondary/30">TypeScript</Badge>
                      <Badge className="bg-gradient-to-r from-accent to-accent/70 border-accent/30">Node.js</Badge>
                      <Badge className="bg-gradient-to-r from-primary to-secondary border-primary/30">UI/UX Design</Badge>
                      <Badge className="bg-gradient-to-r from-secondary to-accent border-secondary/30">Agile</Badge>
                      <Badge className="bg-gradient-to-r from-accent to-primary border-accent/30">Leadership</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-3">Skills to Develop</h4>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline" className="border-white/20 text-muted-foreground hover:bg-white/5">Docker</Badge>
                      <Badge variant="outline" className="border-white/20 text-muted-foreground hover:bg-white/5">AWS</Badge>
                      <Badge variant="outline" className="border-white/20 text-muted-foreground hover:bg-white/5">Python</Badge>
                      <Badge variant="outline" className="border-white/20 text-muted-foreground hover:bg-white/5">Data Analysis</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: "600ms" }}>
                <CardHeader>
                  <CardTitle className="text-foreground">Recent Activity</CardTitle>
                  <CardDescription className="text-muted-foreground">Your latest actions and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br from-${activity.color.split('-')[1]}/20 to-${activity.color.split('-')[1]}/10 flex items-center justify-center`}>
                          <activity.icon className={`w-4 h-4 ${activity.color}`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-foreground">{activity.text}</p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right column - Sidebar */}
            <div className="space-y-6">
              {/* AI Recommendations */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: "700ms" }}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-foreground">
                    <Sparkles className="w-5 h-5 text-primary" />
                    AI Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <p className="text-sm text-foreground mb-2">Update your resume</p>
                    <p className="text-xs text-muted-foreground mb-3">Add your recent project to increase match rate by 12%</p>
                    <Button size="sm" variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/10">
                      Update Now
                    </Button>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20">
                    <p className="text-sm text-foreground mb-2">Practice interview</p>
                    <p className="text-xs text-muted-foreground mb-3">Prepare for your TechCorp interview tomorrow</p>
                    <Button size="sm" variant="outline" className="w-full border-secondary/30 text-secondary hover:bg-secondary/10">
                      Start Practice
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Interviews */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: "800ms" }}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-foreground">
                    <Calendar className="w-5 h-5 text-secondary" />
                    Upcoming Interviews
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingInterviews.map((interview, index) => (
                    <div key={index} className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-start justify-between mb-2">
                        <p className="text-sm font-medium text-foreground">{interview.company}</p>
                        <Badge 
                          variant={interview.status === "confirmed" ? "default" : "outline"}
                          className={interview.status === "confirmed" ? "bg-secondary/20 text-secondary border-secondary/30" : "border-white/20"}
                        >
                          {interview.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{interview.role}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {interview.date}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Career Metrics */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: "900ms" }}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-foreground">
                    <Target className="w-5 h-5 text-accent" />
                    Career Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Profile Views</span>
                      <span className="text-foreground font-medium">127</span>
                    </div>
                    <Progress value={75} className="h-1.5" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Application Rate</span>
                      <span className="text-foreground font-medium">68%</span>
                    </div>
                    <Progress value={68} className="h-1.5" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Interview Success</span>
                      <span className="text-foreground font-medium">82%</span>
                    </div>
                    <Progress value={82} className="h-1.5" />
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

export default Dashboard;
