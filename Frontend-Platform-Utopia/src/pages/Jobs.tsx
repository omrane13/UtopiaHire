import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, MapPin, Briefcase, Clock, DollarSign, 
  Heart, ExternalLink, Filter, TrendingUp, Building2, Sparkles 
} from "lucide-react";
import { useState } from "react";

const Jobs = () => {
  const [savedJobs, setSavedJobs] = useState<number[]>([]);

  const toggleSave = (id: number) => {
    setSavedJobs(prev => 
      prev.includes(id) ? prev.filter(jobId => jobId !== id) : [...prev, id]
    );
  };

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Africa",
      location: "Lagos, Nigeria",
      type: "Full-time",
      salary: "$45k - $65k",
      posted: "2 days ago",
      match: 92,
      description: "Looking for an experienced React developer to lead our frontend team...",
      skills: ["React", "TypeScript", "Node.js", "UI/UX"],
      remote: true
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "Digital Solutions MENA",
      location: "Dubai, UAE",
      type: "Full-time",
      salary: "$55k - $75k",
      posted: "1 week ago",
      match: 87,
      description: "Join our dynamic team building scalable cloud applications...",
      skills: ["React", "Node.js", "AWS", "MongoDB"],
      remote: false
    },
    {
      id: 3,
      title: "Lead Software Architect",
      company: "Innovation Hub Kenya",
      location: "Nairobi, Kenya",
      type: "Full-time",
      salary: "$70k - $90k",
      posted: "3 days ago",
      match: 85,
      description: "Drive technical strategy and mentor engineering teams...",
      skills: ["System Design", "Leadership", "Microservices", "DevOps"],
      remote: true
    },
    {
      id: 4,
      title: "React Native Developer",
      company: "Mobile First SA",
      location: "Cape Town, South Africa",
      type: "Contract",
      salary: "$50k - $65k",
      posted: "5 days ago",
      match: 78,
      description: "Build mobile apps for fintech clients across Africa...",
      skills: ["React Native", "TypeScript", "Mobile UX", "REST API"],
      remote: true
    },
    {
      id: 5,
      title: "Frontend Team Lead",
      company: "E-Commerce Egypt",
      location: "Cairo, Egypt",
      type: "Full-time",
      salary: "$40k - $55k",
      posted: "1 week ago",
      match: 82,
      description: "Lead a team of 5 developers building e-commerce platform...",
      skills: ["React", "Team Management", "CI/CD", "Agile"],
      remote: false
    },
  ];

  const filters = ["Remote", "Full-time", "Contract", "Senior Level", "Leadership"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2 text-foreground">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Smart Job</span> Matcher
            </h1>
            <p className="text-muted-foreground text-lg">AI-curated opportunities matching your skills and goals</p>
          </div>

          {/* Search and filters */}
          <Card className="backdrop-blur-xl bg-white/5 border-white/10 mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    placeholder="Search jobs, skills, or companies..." 
                    className="pl-10 backdrop-blur-xl bg-white/5 border-white/10 text-foreground"
                  />
                </div>
                <Button variant="outline" className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 text-foreground">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>
              <div className="flex gap-2 flex-wrap mt-4">
                {filters.map((filter) => (
                  <Badge 
                    key={filter}
                    variant="outline" 
                    className="cursor-pointer border-white/20 hover:bg-white/5 text-muted-foreground"
                  >
                    {filter}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Job listings */}
            <div className="lg:col-span-2 space-y-4">
              {jobs.map((job, index) => (
                <Card 
                  key={job.id}
                  className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] animate-fade-in"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <CardTitle className="text-xl text-foreground mb-1">{job.title}</CardTitle>
                            <CardDescription className="flex items-center gap-2 text-muted-foreground">
                              <Building2 className="w-4 h-4" />
                              {job.company}
                            </CardDescription>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toggleSave(job.id)}
                            className={savedJobs.includes(job.id) ? "text-accent" : "text-muted-foreground"}
                          >
                            <Heart className="w-5 h-5" fill={savedJobs.includes(job.id) ? "currentColor" : "none"} />
                          </Button>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            {job.salary}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.posted}
                          </span>
                        </div>

                        {/* Match score */}
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex-1 bg-white/5 rounded-full h-2 overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                              style={{ width: `${job.match}%` }}
                            />
                          </div>
                          <Badge className="bg-gradient-to-r from-primary to-secondary border-primary/30">
                            {job.match}% match
                          </Badge>
                        </div>

                        {job.remote && (
                          <Badge variant="outline" className="border-secondary/30 text-secondary mb-3">
                            Remote
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                    
                    <div className="flex gap-2 flex-wrap mb-4">
                      {job.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="border-white/20 text-muted-foreground">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-foreground">
                        Apply Now
                      </Button>
                      <Button variant="outline" className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 text-foreground">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Application stats */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: "300ms" }}>
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Your Applications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Active</span>
                    <span className="text-2xl font-bold text-foreground">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Interviews</span>
                    <span className="text-2xl font-bold text-foreground">2</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Saved</span>
                    <span className="text-2xl font-bold text-foreground">{savedJobs.length}</span>
                  </div>
                </CardContent>
              </Card>

              {/* AI recommendations */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 animate-fade-in" style={{ animationDelay: "400ms" }}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-foreground">
                    <Sparkles className="w-5 h-5 text-primary" />
                    AI Insights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <p className="text-sm text-foreground mb-1 font-medium">High Match Alert</p>
                    <p className="text-xs text-muted-foreground">
                      TechCorp position aligns 92% with your profile. Apply soon!
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20">
                    <p className="text-sm text-foreground mb-1 font-medium">Skill Suggestion</p>
                    <p className="text-xs text-muted-foreground">
                      Learning AWS could unlock 8 more job matches
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                    <p className="text-sm text-foreground mb-1 font-medium">Application Tip</p>
                    <p className="text-xs text-muted-foreground">
                      Companies respond 40% faster on weekday mornings
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Market trends */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 animate-fade-in" style={{ animationDelay: "500ms" }}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-foreground">
                    <TrendingUp className="w-5 h-5 text-secondary" />
                    Market Trends
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">In your region</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Remote Jobs</span>
                      <span className="text-foreground font-medium">+23%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-secondary to-secondary/70 w-3/4" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Tech Demand</span>
                      <span className="text-foreground font-medium">+18%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-primary/70 w-2/3" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Avg. Salary</span>
                      <span className="text-foreground font-medium">+12%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-accent to-accent/70 w-1/2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Top companies hiring */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 animate-fade-in" style={{ animationDelay: "600ms" }}>
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Top Hiring Companies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {["TechCorp Africa", "Digital Solutions", "Innovation Hub", "Mobile First"].map((company) => (
                      <div key={company} className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                            <Building2 className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm text-foreground">{company}</span>
                        </div>
                        <Badge variant="outline" className="border-white/20 text-xs">3 jobs</Badge>
                      </div>
                    ))}
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

export default Jobs;
