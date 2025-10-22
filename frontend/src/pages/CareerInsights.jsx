// src/pages/CareerInsights.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CareerInsights.css';

const CareerInsights = () => {
  const strengths = [
    {
      category: "Technical Skills",
      icon: "💻",
      items: [
        "Strong proficiency in key technologies aligned with market demand",
        "Advanced problem-solving abilities",
        "Up-to-date with latest industry trends"
      ]
    },
    {
      category: "Interview Performance",
      icon: "🎯",
      items: [
        "Consistent improvement in behavioral and technical interview responses",
        "Excellent communication skills",
        "Strong presence and confidence"
      ]
    }
  ];

  const priorityJobs = [
    {
      title: "Senior UX Designer",
      company: "TechInnovate",
      match: "95%",
      description: "Your portfolio aligns perfectly with their design system and product vision."
    },
    {
      title: "Lead Product Manager",
      company: "FutureLabs",
      match: "88%",
      description: "Your strategic experience and leadership skills are a key asset for this role."
    }
  ];

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
                <li className="nav-item">
                  <a href="/job-matches" className="nav-link">
                    <span className="nav-icon">🔍</span>
                    <span className="nav-text">Job Matches</span>
                  </a>
                </li>
                <li className="nav-item active">
                  <a href="/career-insights" className="nav-link">
                    <span className="nav-icon">📈</span>
                    <span className="nav-text">Career Insights</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contenu principal */}
          <div className="content-area">
            <section className="career-insights-content">
              
              {/* En-tête */}
              <div className="insights-header">
                <h1 className="insights-title">Career Insights</h1>
                <p className="insights-subtitle">
                  Your personalized career development roadmap
                </p>
              </div>

              {/* Profile Section */}
              <div className="profile-section">
                <div className="profile-header">
                  <h2 className="profile-title">Strong Career Profile</h2>
                  <div className="improvement-badge">+32% improvement since start</div>
                </div>
                <div className="profile-description">
                  You're on track! Your resume is well-optimized, interview skills are improving, 
                  and you have strong job matches.
                </div>
              </div>

              {/* Strengths Section */}
              <div className="strengths-section">
                <h3 className="strengths-title">Your Strengths</h3>
                {strengths.map((strength, index) => (
                  <div key={index} className="strength-category">
                    <div className="category-header">
                      <div className="category-icon">{strength.icon}</div>
                      <h4 className="category-name">{strength.category}</h4>
                    </div>
                    <ul className="strength-items">
                      {strength.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="strength-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Action Plan Section */}
              <div className="action-plan-section">
                <h3 className="action-plan-title">Your Action Plan</h3>
                <p className="profile-description" style={{textAlign: 'center', marginBottom: '2rem'}}>
                  Stay ahead of your career goals with these recommended next steps.
                </p>

                {/* Priority Applications */}
                <div className="priority-applications">
                  <h4 className="subsection-title">
                    <span>🎯</span>
                    Priority Applications
                  </h4>
                  <div className="job-recommendations">
                    {priorityJobs.map((job, index) => (
                      <div key={index} className="job-recommendation">
                        <div className="job-header">
                          <div className="job-main">
                            <h5 className="job-title">{job.title}</h5>
                            <p className="job-company">at {job.company}</p>
                          </div>
                          <div className="job-match">{job.match} match</div>
                        </div>
                        <p className="job-description">{job.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skill Development */}
                <div className="skill-development">
                  <h4 className="subsection-title">
                    <span>📚</span>
                    Skill to Develop
                  </h4>
                  <div className="skill-card">
                    <div className="skill-header">
                      <div className="skill-icon">📊</div>
                      <h5 className="skill-name">Advanced Data Storytelling</h5>
                    </div>
                    <p className="skill-description">
                      Master the art of presenting data insights in compelling narratives that drive business decisions.
                    </p>
                    <a href="#" className="resource-link">
                      "Storytelling with Data" course ↗
                    </a>
                    <div className="impact-badge">
                      Increases match rate for leadership roles by up to 15%
                    </div>
                  </div>
                </div>

                {/* Next Review */}
                <div className="next-review">
                  <h4 className="subsection-title">
                    <span>🔄</span>
                    Next Review Milestone
                  </h4>
                  <div className="review-header">
                    <div className="review-icon">📅</div>
                    <p className="review-text">
                      Schedule your next resume and strategy check-in for <span className="review-date">2 weeks</span> to capitalize on your current momentum.
                    </p>
                  </div>
                </div>
              </div>

            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerInsights;