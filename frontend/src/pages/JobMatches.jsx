// src/pages/JobMatches.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './JobMatches.css';

const JobMatches = () => {
  const [savedJobs, setSavedJobs] = useState([]);

  const jobMatches = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      type: "Full-time",
      posted: "2 days ago",
      match: "95%",
      skills: ["React", "TypeScript", "Node.js"],
      matchReason: "Your skills in React and TypeScript align perfectly with this role's requirements.",
      salary: "$140,000 - $180,000",
      experience: "5+ years"
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "Analytics Inc",
      location: "New York, NY",
      type: "Full-time",
      posted: "3 days ago",
      match: "82%",
      skills: ["Python", "ML", "SQL"],
      matchReason: "Your skills in Python and ML align perfectly with this role's requirements.",
      salary: "$120,000 - $150,000",
      experience: "3+ years"
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "StartUp Labs",
      location: "Austin, TX",
      type: "Contract",
      posted: "5 days ago",
      match: "78%",
      skills: ["React", "CSS", "JavaScript"],
      matchReason: "Your skills in React and CSS align perfectly with this role's requirements.",
      salary: "$90,000 - $120,000",
      experience: "2+ years"
    },
    {
      id: 4,
      title: "Product Designer",
      company: "Design Studio",
      location: "Remote",
      type: "Full-time",
      posted: "1 week ago",
      match: "88%",
      skills: ["Figma", "UI/UX", "Prototyping"],
      matchReason: "Your design portfolio and UI/UX experience match this role's requirements.",
      salary: "$100,000 - $130,000",
      experience: "4+ years"
    },
    {
      id: 5,
      title: "Backend Engineer",
      company: "Cloud Systems",
      location: "Remote",
      type: "Full-time",
      posted: "1 day ago",
      match: "91%",
      skills: ["Java", "Spring", "AWS"],
      matchReason: "Your experience with Java and cloud services matches our backend requirements.",
      salary: "$130,000 - $160,000",
      experience: "4+ years"
    },
    {
      id: 6,
      title: "DevOps Specialist",
      company: "Infra Tech",
      location: "Boston, MA",
      type: "Full-time",
      posted: "4 days ago",
      match: "85%",
      skills: ["Docker", "Kubernetes", "CI/CD"],
      matchReason: "Your DevOps skills align with our infrastructure automation needs.",
      salary: "$125,000 - $155,000",
      experience: "3+ years"
    }
  ];

  const stats = {
    totalMatches: 24,
    newThisWeek: 5,
    applicationsSent: 12
  };

  const toggleSaveJob = (jobId) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter(id => id !== jobId));
    } else {
      setSavedJobs([...savedJobs, jobId]);
    }
  };

  const handleApply = (jobTitle, company) => {
    alert(`Applying to ${jobTitle} at ${company}!`);
    // Ici vous ajouterez la logique de candidature
  };

  return (
    <div className="dashboard-wrapper">
      <div className="main-content">
        <div className="content-container">
          
          {/* Sidebar identique */}
          <div className="sidebar">
            <nav className="sidebar-nav">
              <ul className="nav-links">
                <li className="nav-item">
                  <a href="/dashboard" className="nav-link">
                    <span className="nav-icon">📊</span>
                    <span className="nav-text">Overview</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/resume-review" className="nav-link">
                    <span className="nav-icon">📄</span>
                    <span className="nav-text">Resume Review</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/interview-prep" className="nav-link">
                    <span className="nav-icon">💬</span>
                    <span className="nav-text">Interview Prep</span>
                  </a>
                </li>
                <li className="nav-item active">
                  <a href="/job-matches" className="nav-link">
                    <span className="nav-icon">🔍</span>
                    <span className="nav-text">Job Matches</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/career-insights" className="nav-link">
                    <span className="nav-icon">📈</span>
                    <span className="nav-text">Career Insights</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contenu principal - Pleine largeur */}
          <div className="content-area full-width">
            <section className="job-matches-content full-width">
              
              {/* En-tête centré */}
              <div className="jobs-header">
                <h1 className="jobs-title">Job Matches</h1>
                <p className="jobs-subtitle">
                  Opportunities matched to your skills and preferences
                </p>
              </div>

              {/* Statistiques en ligne */}
              <div className="stats-section">
                <div className="stats-grid">
                  <div className="stat-card">
                    <div className="stat-content">
                      <div className="stat-value">{stats.totalMatches}</div>
                      <div className="stat-label">Total Matches</div>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-content">
                      <div className="stat-value">{stats.newThisWeek}</div>
                      <div className="stat-label">New This Week</div>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-content">
                      <div className="stat-value">{stats.applicationsSent}</div>
                      <div className="stat-label">Applications Sent</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section principale avec grille */}
              <div className="main-jobs-section">
                <div className="jobs-header-section">
                  <h2 className="section-title-large">Recommended for You</h2>
                  <div className="results-count">{jobMatches.length} jobs found</div>
                </div>
                
                <div className="jobs-grid">
                  {jobMatches.map(job => (
                    <div key={job.id} className="job-card">
                      <div className="job-header">
                        <div className="job-main-info">
                          <div className="job-title-section">
                            <h3 className="job-title">{job.title}</h3>
                            <div className={`match-badge match-${job.match.replace('%', '')}`}>
                              {job.match} Match
                            </div>
                          </div>
                          <div className="company-info">
                            <span className="company-name">{job.company}</span>
                            <span className="job-details-combined">
                              <span className="job-location">{job.location}</span>
                              <span className="separator">•</span>
                              <span className="job-type">{job.type}</span>
                              <span className="separator">•</span>
                              <span className="job-posted">{job.posted}</span>
                            </span>
                          </div>
                        </div>
                        <button 
                          className={`save-btn ${savedJobs.includes(job.id) ? 'saved' : ''}`}
                          onClick={() => toggleSaveJob(job.id)}
                          title={savedJobs.includes(job.id) ? 'Remove from saved' : 'Save job'}
                        >
                          {savedJobs.includes(job.id) ? '❤️' : '🤍'}
                        </button>
                      </div>

                      <div className="job-skills">
                        {job.skills.map((skill, index) => (
                          <span key={index} className="skill-tag">{skill}</span>
                        ))}
                      </div>

                      <div className="job-meta-info">
                        <div className="meta-item">
                          <span className="meta-icon">💰</span>
                          <span className="meta-text">{job.salary}</span>
                        </div>
                        <div className="meta-item">
                          <span className="meta-icon">📅</span>
                          <span className="meta-text">{job.experience}</span>
                        </div>
                      </div>

                      <div className="match-reason">
                        <div className="reason-icon">🎯</div>
                        <div className="reason-text">
                          <strong>Why this matches:</strong> {job.matchReason}
                        </div>
                      </div>

                      <div className="job-actions">
                        <button 
                          className="apply-btn primary-btn"
                          onClick={() => handleApply(job.title, job.company)}
                        >
                          Apply Now
                        </button>
                        <button className="details-btn secondary-btn">
                          View Details
                        </button>
                        <button className="save-btn-text">
                          {savedJobs.includes(job.id) ? 'Saved' : 'Save'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobMatches;