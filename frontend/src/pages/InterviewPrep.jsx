// src/pages/InterviewPrep.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './InterviewPrep.css';

const InterviewPrep = () => {
  const [selectedCategory, setSelectedCategory] = useState('behavioral');

  const practiceSessions = [
    {
      id: 1,
      type: 'Behavioral Interview',
      questions: 8,
      time: '2 hours ago',
      score: '82%',
      status: 'completed'
    },
    {
      id: 2,
      type: 'Technical Interview',
      questions: 10,
      time: '1 day ago',
      score: '75%',
      status: 'completed'
    },
    {
      id: 3,
      type: 'Situational Interview',
      questions: 6,
      time: '3 days ago',
      score: '80%',
      status: 'completed'
    }
  ];

  const interviewCategories = [
    { id: 'behavioral', name: 'Behavioral', icon: '💬', description: 'Questions about your experience and behavior' },
    { id: 'technical', name: 'Technical', icon: '💻', description: 'Technical skills and problem-solving' },
    { id: 'situational', name: 'Situational', icon: '🎯', description: 'Hypothetical work scenarios' },
    { id: 'cultural', name: 'Cultural Fit', icon: '🤝', description: 'Company culture and values alignment' }
  ];

  const startPractice = () => {
    alert(`Starting ${selectedCategory} practice session!`);
    // Ici vous ajouterez la logique pour démarrer la simulation
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
                <li className="nav-item active">
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
                <li className="nav-item">
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
            <section className="interview-prep-content">
              
              {/* En-tête */}
              <div className="interview-header">
                <h1 className="interview-title">AI Interview Simulator</h1>
                <p className="interview-subtitle">
                  Practice with realistic questions and get instant feedback
                </p>
              </div>

              {/* Section de démarrage */}
              <div className="start-section">
                <h2 className="section-title">Ready for Your Next Interview?</h2>
                <p className="section-subtitle">
                  Start a new practice session with AI-generated questions tailored to your target role
                </p>
                
                <div className="practice-card">
                  <div className="practice-content">
                    <h3 className="practice-title">Start Practice Interview</h3>
                    
                    <div className="category-selection">
                      <h4 className="category-title">Select Interview Type:</h4>
                      <div className="category-grid">
                        {interviewCategories.map(category => (
                          <div 
                            key={category.id}
                            className={`category-card ${selectedCategory === category.id ? 'selected' : ''}`}
                            onClick={() => setSelectedCategory(category.id)}
                          >
                            <div className="category-icon">{category.icon}</div>
                            <div className="category-info">
                              <h5 className="category-name">{category.name}</h5>
                              <p className="category-desc">{category.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="start-button" onClick={startPractice}>
                      🎤 Start Practice Interview
                    </button>
                  </div>
                </div>
              </div>

              {/* Section Performance */}
              <div className="performance-section">
                <h2 className="section-title">Your Performance</h2>
                
                <div className="performance-grid">
                  <div className="performance-card">
                    <div className="performance-icon">📊</div>
                    <div className="performance-content">
                      <div className="performance-value">78%</div>
                      <div className="performance-label">Avg. Score</div>
                      <div className="performance-badge">+12% from last week</div>
                    </div>
                  </div>

                  <div className="performance-card">
                    <div className="performance-icon">✅</div>
                    <div className="performance-content">
                      <div className="performance-value">12</div>
                      <div className="performance-label">Completed</div>
                      <div className="performance-badge">Practice sessions</div>
                    </div>
                  </div>

                  <div className="performance-card">
                    <div className="performance-icon">🚀</div>
                    <div className="performance-content">
                      <div className="performance-value">+24%</div>
                      <div className="performance-label">Improvement</div>
                      <div className="performance-badge">Since first session</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sessions récentes */}
              <div className="sessions-section">
                <h2 className="section-title">Recent Practice Sessions</h2>
                
                <div className="sessions-grid">
                  {practiceSessions.map(session => (
                    <div key={session.id} className="session-card">
                      <div className="session-header">
                        <h3 className="session-type">{session.type}</h3>
                        <span className="session-questions">{session.questions} questions</span>
                      </div>
                      <div className="session-time">{session.time}</div>
                      
                      <div className="session-performance">
                        <div className="session-score">
                          <div className="score-value">{session.score}</div>
                          <div className="score-label">Score</div>
                        </div>
                        <button className="view-details-btn">
                          View Details →
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

export default InterviewPrep;