// src/pages/Dashboard.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      {/* Main Content avec Sidebar intégrée */}
      <div className="main-content">
        <div className="content-container">
          
          {/* Sidebar intégrée dans le main content - VERTICALE */}
          <div className="sidebar">
            <div className="sidebar-header">
              <h1 className="sidebar-title">UtopiaHire</h1>
            </div>
            <nav className="sidebar-nav">
              <ul className="nav-links">
                <li className="nav-item active">
                  <a href="#" className="nav-link">
                    <span className="nav-icon">📊</span>
                    <span className="nav-text">Overview</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <span className="nav-icon">📄</span>
                    <span className="nav-text">Resume Review</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <span className="nav-icon">💬</span>
                    <span className="nav-text">Interview Prep</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <span className="nav-icon">🔍</span>
                    <span className="nav-text">Job Matches</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <span className="nav-icon">📈</span>
                    <span className="nav-text">Career Insights</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contenu principal à droite de la sidebar */}
          <div className="content-area">
            
            {/* Section unique regroupant tout le contenu */}
            <section className="dashboard-content">
              
              {/* Welcome Section - COMME AVANT */}
              <div className="welcome-section">
                <h1 className="welcome-title">Welcome back!</h1>
                <p className="welcome-subtitle">
                  Let's continue improving your career prospects
                </p>
              </div>

              {/* Quick Actions Section - Design différent */}
              <div className="quick-actions-section">
                <h2 className="section-title">Quick Actions</h2>
                
                <div className="actions-grid">
                  {/* Upload Resume */}
                  <div className="action-card">
                    <div className="action-icon">📄</div>
                    <div className="action-content">
                      <h3 className="action-title">Upload Resume</h3>
                      <p className="action-description">
                        Get Instant AI analysis and ATS score
                      </p>
                    </div>
                    <button className="action-button">
                      Get Started →
                    </button>
                  </div>

                  {/* Interview Practice */}
                  <div className="action-card">
                    <div className="action-icon">💬</div>
                    <div className="action-content">
                      <h3 className="action-title">Start Interview Practice</h3>
                      <p className="action-description">
                        Simulate real interview scenarios
                      </p>
                    </div>
                    <button className="action-button">
                      Get Started →
                    </button>
                  </div>

                  {/* Browse Jobs */}
                  <div className="action-card">
                    <div className="action-icon">🔍</div>
                    <div className="action-content">
                      <h3 className="action-title">Browse Jobs</h3>
                      <p className="action-description">
                        Find opportunities matched to your skills
                      </p>
                    </div>
                    <button className="action-button">
                      Get Started →
                    </button>
                  </div>
                </div>
              </div>

              {/* Progress Stats Section */}
              <div className="progress-section">
                <h2 className="section-title">Your Progress</h2>
                
                <div className="progress-grid">
                  <div className="progress-item">
                    <div className="progress-header">
                      <span className="progress-label">Resume Score</span>
                      <span className="progress-badge">+15 from last version</span>
                    </div>
                    <div className="progress-value">85</div>
                  </div>

                  <div className="progress-item">
                    <div className="progress-header">
                      <span className="progress-label">Interviews Done</span>
                      <span className="progress-badge">Avg. score: 78%</span>
                    </div>
                    <div className="progress-value">12</div>
                  </div>

                  <div className="progress-item">
                    <div className="progress-header">
                      <span className="progress-label">Job Matches</span>
                      <span className="progress-badge">5 new this week</span>
                    </div>
                    <div className="progress-value">24</div>
                  </div>

                  <div className="progress-item">
                    <div className="progress-header">
                      <span className="progress-label">Improvement</span>
                      <span className="progress-badge">Since you started</span>
                    </div>
                    <div className="progress-value">+32%</div>
                  </div>
                </div>
              </div>

              {/* Recent Activity Section */}
              <div className="activity-section">
                <h2 className="section-title">Recent Activity</h2>
                
                <div className="activity-list">
                  <div className="activity-item">
                    <div className="activity-icon">✔</div>
                    <div className="activity-content">
                      <div className="activity-text">
                        Resume analyzed - Score: 85/100
                      </div>
                      <div className="activity-time">
                        2 hours ago
                      </div>
                    </div>
                  </div>

                  <div className="activity-item">
                    <div className="activity-icon">✔</div>
                    <div className="activity-content">
                      <div className="activity-text">
                        Interview practice completed
                      </div>
                      <div className="activity-time">
                        1 day ago
                      </div>
                    </div>
                  </div>

                  <div className="activity-item">
                    <div className="activity-icon">✔</div>
                    <div className="activity-content">
                      <div className="activity-text">
                        5 new job matches found
                      </div>
                      <div className="activity-time">
                        2 days ago
                      </div>
                    </div>
                    <span className="activity-badge">New</span>
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

export default Dashboard;