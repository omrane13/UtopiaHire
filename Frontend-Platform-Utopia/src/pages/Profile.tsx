import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Github, Linkedin, Globe, Mail, MapPin, Calendar,
  Code2, GitBranch, Star, Award, TrendingUp, 
  FileText, MessageSquare, ExternalLink, Sparkles 
} from "lucide-react";

const Profile = () => {
  const [socialAccounts, setSocialAccounts] = useState<any[]>([]);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isSocialsModalOpen, setIsSocialsModalOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [githubStats, setGithubStats] = useState<any>(null);
  const [githubActivity, setGithubActivity] = useState<any[]>([]);
  const [skills, setSkills] = useState<any[]>([]);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('access_token');
      const storedUser = localStorage.getItem('user');

      if (!token || !storedUser) {
        // Handle case where user is not logged in
        return;
      }

      try {
        const response = await axios.get('http://127.0.0.1:8000/api/profile/', {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        const currentUser = JSON.parse(storedUser);
        const updatedUser = { ...currentUser, profile: response.data };

        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
      } catch (error) {
        console.error('Failed to fetch profile:', error);
        // If profile fetch fails, fallback to stored user
        setUser(JSON.parse(storedUser));
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    const fetchGithubStats = async () => {
      if (user?.profile?.github_username) {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/github-stats/${user.profile.github_username}/`);
          setGithubStats(response.data);
        } catch (error) {
          console.error('Failed to fetch GitHub stats:', error);
          // Set to default or error state if fetch fails
          setGithubStats({ contributions: 0, pull_requests: 0, stars_earned: 0 });
        }
      }
    };

    fetchGithubStats();

    const fetchGithubActivity = async () => {
      if (user?.profile?.github_username) {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/github-activity/${user.profile.github_username}/`);
          setGithubActivity(response.data);
        } catch (error) {
          console.error('Failed to fetch GitHub activity:', error);
        }
      }
    };

    fetchGithubActivity();

    const fetchSkills = async () => {
      if (user?.profile?.github_username) {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/github-skills/${user.profile.github_username}/`);
          setSkills(response.data);
        } catch (error) {
          console.error('Failed to fetch skills:', error);
        }
      }
    };

    fetchSkills();
  }, [user]);

  if (!user) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  const supportedProviders = [
    { id: 'github', name: 'GitHub', icon: Github, url: 'http://127.0.0.1:8000/accounts/github/login/' },
    { id: 'linkedin_oauth2', name: 'LinkedIn', icon: Linkedin, url: 'http://127.0.0.1:8000/accounts/linkedin_oauth2/login/' },
    // { id: 'google', name: 'Google', icon: Globe, url: 'http://127.0.0.1:8000/accounts/google/login/' },
  ];



  const achievements = [
    { title: "Top Contributor", description: "50+ merged PRs this month", icon: GitBranch, color: "from-primary to-primary/70" },
    { title: "Code Reviewer", description: "Reviewed 100+ pull requests", icon: Code2, color: "from-secondary to-secondary/70" },
    { title: "Open Source Hero", description: "Contributed to 10+ projects", icon: Star, color: "from-accent to-accent/70" },
  ];



  const certifications = [
    { name: "AWS Certified Developer", issuer: "Amazon Web Services", date: "2024" },
    { name: "React Advanced Patterns", issuer: "Frontend Masters", date: "2023" },
    { name: "Agile Scrum Master", issuer: "Scrum Alliance", date: "2023" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2 text-foreground">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Digital Footprint</span> Scanner
            </h1>
            <p className="text-muted-foreground text-lg">Showcase your contributions and build your professional brand</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left sidebar */}
            <div className="space-y-6">
              {/* Profile card */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 animate-fade-in">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-primary/20">
                      <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <h2 className="text-2xl font-bold text-foreground mb-1">{user.first_name} {user.last_name}</h2>
                    <p className="text-muted-foreground">{user.profile?.job_title || 'No job title set'}</p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {user.profile?.location || 'Not set'}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      {user.email}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      Joined {new Date(user.date_joined).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </div>

                    {/* Security Section Placeholder */}
                    <Card className="mt-6 backdrop-blur-xl bg-white/5 border-white/10">
                      <CardHeader>
                        <CardTitle className="text-lg text-foreground">Security</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-muted-foreground">Fingerprint Enabled</p>
                          <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">Active</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Dialog open={isProfileModalOpen} onOpenChange={setIsProfileModalOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full mt-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-foreground">
                        Edit Profile
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Profile</DialogTitle>
                      </DialogHeader>
                      <EditProfileForm user={user} setUser={setUser} setIsOpen={setIsProfileModalOpen} />
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>

              {/* Social links */}
              <Dialog open={isSocialsModalOpen} onOpenChange={setIsSocialsModalOpen}>
                <Card className="backdrop-blur-xl bg-white/5 border-white/10 animate-fade-in" style={{ animationDelay: "100ms" }}>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg text-foreground">Social Profiles</CardTitle>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">Edit</Button>
                    </DialogTrigger>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <a href={user.profile?.github_username ? `https://github.com/${user.profile.github_username}` : '#'} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
                      <Github className="w-5 h-5 text-primary" />
                      <span>{user.profile?.github_username || 'Not Set'}</span>
                    </a>
                    <a href={user.profile?.linkedin_url || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
                      <Linkedin className="w-5 h-5 text-primary" />
                      <span>{user.profile?.linkedin_url ? 'View Profile' : 'Not Set'}</span>
                    </a>
                    <a href={user.profile?.website_url || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
                      <Globe className="w-5 h-5 text-primary" />
                      <span>{user.profile?.website_url || 'Not Set'}</span>
                    </a>
                    <a href={user.profile?.additional_website_url || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
                      <Globe className="w-5 h-5 text-secondary" />
                      <span>{user.profile?.additional_website_url || 'Not Set'}</span>
                    </a>
                  </CardContent>
                </Card>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Social Profiles</DialogTitle>
                  </DialogHeader>
                  <EditSocialsForm user={user} setUser={setUser} setIsOpen={setIsSocialsModalOpen} />
                </DialogContent>
              </Dialog>

              {/* Profile strength */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Profile Strength</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">
                      92%
                    </div>
                    <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Excellent
                    </Badge>
                  </div>
                  <Progress value={92} className="h-2 mb-4" />
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Profile completeness</span>
                      <span className="text-foreground">95%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Activity level</span>
                      <span className="text-foreground">88%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Engagement</span>
                      <span className="text-foreground">93%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Activity overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
                <Card className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Code2 className="w-8 h-8 text-primary" />
                      <TrendingUp className="w-4 h-4 text-secondary" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">{githubStats ? githubStats.contributions : '...'}</div>
                    <p className="text-sm text-muted-foreground">Contributions</p>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <GitBranch className="w-8 h-8 text-secondary" />
                      <TrendingUp className="w-4 h-4 text-secondary" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">{githubStats ? githubStats.pull_requests : '...'}</div>
                    <p className="text-sm text-muted-foreground">Pull Requests</p>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Star className="w-8 h-8 text-accent" />
                      <TrendingUp className="w-4 h-4 text-secondary" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">{githubStats ? githubStats.stars_earned : '...'}</div>
                    <p className="text-sm text-muted-foreground">Stars Earned</p>
                  </CardContent>
                </Card>
              </div>

              {/* GitHub activity */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 animate-fade-in" style={{ animationDelay: "400ms" }}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-foreground">GitHub Activity</CardTitle>
                      <CardDescription className="text-muted-foreground">Your recent contributions and projects</CardDescription>
                    </div>
                    <Github className="w-8 h-8 text-foreground" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {githubActivity.length > 0 ? githubActivity.map((repo, index) => (
                    <a href={repo.url} target="_blank" rel="noopener noreferrer" key={index} className="block p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{repo.repo}</h4>
                          <p className="text-xs text-muted-foreground mb-2">{repo.description || 'No description'}</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        {repo.language && <Badge variant="outline" className="border-white/20">{repo.language}</Badge>}
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          {repo.stars}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          Updated {new Date(repo.pushed_at).toLocaleDateString()}
                        </span>
                      </div>
                    </a>
                  )) : (
                    <p className="text-sm text-muted-foreground">No recent repository activity to display.</p>
                  )}
                </CardContent>
              </Card>

              {/* Skills breakdown */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 animate-fade-in" style={{ animationDelay: "500ms" }}>
                <CardHeader>
                  <CardTitle className="text-foreground">Skills Analysis</CardTitle>
                  <CardDescription className="text-muted-foreground">Based on your public contributions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills.length > 0 ? skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-2">
                        <div>
                          <span className="text-foreground font-medium">{skill.name}</span>
                          <span className="text-muted-foreground ml-2">• {skill.projects} projects</span>
                        </div>
                        <span className="text-foreground font-medium">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  )) : (
                    <p className="text-sm text-muted-foreground">No skills data to display. Analysis is based on public repositories.</p>
                  )}
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 animate-fade-in" style={{ animationDelay: "600ms" }}>
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <Award className="w-5 h-5 text-accent" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {achievements.map((achievement, index) => (
                      <div 
                        key={index}
                        className="p-4 rounded-lg bg-white/5 border border-white/10 hover:scale-105 transition-transform text-center"
                      >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mx-auto mb-3`}>
                          <achievement.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold text-foreground text-sm mb-1">{achievement.title}</h4>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 animate-fade-in" style={{ animationDelay: "700ms" }}>
                <CardHeader>
                  <CardTitle className="text-foreground">Certifications</CardTitle>
                  <CardDescription className="text-muted-foreground">Professional credentials</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <FileText className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{cert.name}</p>
                          <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.date}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-secondary/30 text-secondary">
                        Verified
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* AI recommendations */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 animate-fade-in" style={{ animationDelay: "800ms" }}>
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    AI Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <p className="text-sm text-foreground mb-1 font-medium">Boost Visibility</p>
                    <p className="text-xs text-muted-foreground">
                      Add a featured project to your portfolio to increase profile views by 45%
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20">
                    <p className="text-sm text-foreground mb-1 font-medium">Complete Profile</p>
                    <p className="text-xs text-muted-foreground">
                      Add 2 more certifications to reach 100% profile completion
                    </p>
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

const EditSocialsForm = ({ user, setUser, setIsOpen }) => {
  const [githubUsername, setGithubUsername] = useState(user.profile?.github_username || '');
  const [linkedinUrl, setLinkedinUrl] = useState(user.profile?.linkedin_url || '');
  const [websiteUrl, setWebsiteUrl] = useState(user.profile?.website_url || '');
  const [additionalWebsiteUrl, setAdditionalWebsiteUrl] = useState(user.profile?.additional_website_url || '');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const token = localStorage.getItem('access_token');
      const response = await axios.patch('http://127.0.0.1:8000/api/profile/', {
        github_username: githubUsername,
        linkedin_url: linkedinUrl,
        website_url: websiteUrl,
        additional_website_url: additionalWebsiteUrl,
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const updatedUser = { ...user, profile: { ...(user.profile || {}), ...response.data } };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setIsOpen(false);
    } catch (err) {
      setError('Failed to update social profiles.');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="githubUsername">GitHub Username</Label>
        <Input id="githubUsername" value={githubUsername} onChange={(e) => setGithubUsername(e.target.value)} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="linkedinUrl">LinkedIn URL</Label>
        <Input id="linkedinUrl" value={linkedinUrl} onChange={(e) => setLinkedinUrl(e.target.value)} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="websiteUrl">Website URL</Label>
        <Input id="websiteUrl" value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="additionalWebsiteUrl">Additional Website URL</Label>
        <Input id="additionalWebsiteUrl" value={additionalWebsiteUrl} onChange={(e) => setAdditionalWebsiteUrl(e.target.value)} />
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <DialogFooter>
        <Button type="submit">Save Changes</Button>
      </DialogFooter>
    </form>
  );
};

const EditProfileForm = ({ user, setUser, setIsOpen }) => {
  const [location, setLocation] = useState(user.profile?.location || '');
  const [jobTitle, setJobTitle] = useState(user.profile?.job_title || '');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const token = localStorage.getItem('access_token');
      const response = await axios.patch('http://127.0.0.1:8000/api/profile/', {
        location: location,
        job_title: jobTitle,
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      // Update user state locally
      const updatedUser = { ...user, profile: { ...user.profile, location: response.data.location, job_title: response.data.job_title } };
      setUser(updatedUser);
      // Update user in localStorage
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setIsOpen(false);
    } catch (err) {
      setError('Failed to update profile.');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="e.g., Lagos, Nigeria"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="jobTitle">Job Title</Label>
        <Input
          id="jobTitle"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          placeholder="e.g., Senior Full Stack Engineer"
        />
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <DialogFooter>
        <Button type="submit">Save Changes</Button>
      </DialogFooter>
    </form>
  );
};

export default Profile;
