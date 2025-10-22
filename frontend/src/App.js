// App.js 
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ResumeReview from './pages/ResumeReview';
import InterviewPrep from './pages/InterviewPrep';
import JobMatches from './pages/JobMatches';
import CareerInsights from './pages/CareerInsights';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Route pour la page d'accueil */}
          <Route path="/" element={<HomePage />} />
          
          {/* Route pour le dashboard - SANS header */}
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Route pour Resume Review - AVEC header minimal */}
          <Route path="/resume-review" element={<ResumeReviewWithHeader />} />

          <Route path="/interview-prep" element={<InterviewPrepWithHeader />} />

          <Route path="/job-matches" element={<JobMatchesWithHeader />} />

          <Route path="/career-insights" element={<CareerInsightsWithHeader />} />
        </Routes>
      </div>
    </Router>
  );
}

// Composant pour les pages avec header MINIMAL
const WithHeader = ({ children }) => {
  return (
    <>
      <header className="header-minimal">
        <nav className="navbar-minimal">
          <div className="nav-brand-mini">UtopiaHire</div>
          <div className="nav-links-mini">
            <button 
              className="btn-mini"
              onClick={() => window.location.href = '/'}
            >
              ← Home
            </button>
            <button 
              className="btn-mini"
              onClick={() => window.location.href = '/dashboard'}
            >
              Dashboard
            </button>
          </div>
        </nav>
      </header>
      {children}
    </>
  );
};

// Wrapper pour ResumeReview avec header minimal
const ResumeReviewWithHeader = () => (
  <WithHeader>
    <ResumeReview />
  </WithHeader>
);
const InterviewPrepWithHeader = () => (
  <WithHeader>
    <InterviewPrep />
  </WithHeader>
);

const JobMatchesWithHeader = () => (
  <WithHeader>
    <JobMatches />
  </WithHeader>
);
const CareerInsightsWithHeader = () => (
  <WithHeader>
    <CareerInsights />
  </WithHeader>
);

// Composant HomePage (votre page d'accueil actuelle)
const HomePage = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Header - Seulement sur la page d'accueil (complet) */}
       <header className="header">
        <nav className="navbar">
          <div className="nav-left">
            <div className="nav-brand">UtopiaHire</div>
          </div>
          <div className="nav-center">
            <button 
              className="nav-link"
              onClick={() => scrollToSection('features')}
            >
              Features
            </button>
            <button 
              className="nav-link"
              onClick={() => scrollToSection('process')}
            >
              How It Works
            </button>
          </div>
          <div className="nav-right">
            <button 
              className="btn-primary"
              onClick={() => window.location.href = '/dashboard'}
            >
              Get Started
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Transform Your Career with UtopiaHire
          </h1>
          <p className="hero-subtitle">
            AI-powered resume analysis, interview simulation, and job matching designed to help you land your dream job. Get expert insights and actionable recommendations instantly.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn-primary"
              onClick={() => window.location.href = '/dashboard'}
            >
              Get Started Free
            </button>
            <button 
              className="btn-secondary"
              onClick={() => scrollToSection('process')}
            >
              See How It Works
            </button>
          </div>
          
          {/* Stats Section */}
          <div className="stats-section">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Resume Score Improvement</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2.5x</div>
                <div className="stat-label">Interview Success Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10k+</div>
                <div className="stat-label">Jobs Matched Daily</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2 className="features-title">Everything You Need to Succeed</h2>
        <p className="features-subtitle">
          Comprehensive AI tools that work together to accelerate your career growth
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <h3 className="feature-title">Resume Reviewer & Rewriter</h3>
            <p className="feature-description">
              AI analyzes your resume, provides an ATS score, and generates optimized versions that get you noticed by recruiters.
            </p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">AI Interview Simulator</h3>
            <p className="feature-description">
              Practice with realistic interview questions, get instant feedback, and build confidence before the real thing.
            </p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Smart Job Matcher</h3>
            <p className="feature-description">
              Discover local opportunities that match your skills and experience with explainable AI recommendations.
            </p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Career Insights Report</h3>
            <p className="feature-description">
              Get actionable insights and a personalized 3-month plan to improve your employability and land better roles.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="process">
        <div className="process-content">
          <h2 className="process-title">Simple Process, Powerful Results</h2>
          <p className="process-subtitle">
            Get from career uncertainty to your dream job in four easy steps
          </p>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">Upload Your Resume</h3>
                <p className="step-description">
                  Simply upload your current resume in PDF or DOCX format
                </p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">AI Analysis & Simulation</h3>
                <p className="step-description">
                  Our AI analyzes your profile and simulates real interview scenarios
                </p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Get Matched to Jobs</h3>
                <p className="step-description">
                  Receive personalized job recommendations based on your strengths
                </p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="step-title">Download Your Report</h3>
                <p className="step-description">
                  Get a comprehensive career insights report with actionable steps
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Career?</h2>
          <p className="cta-subtitle">
            Join thousands of job seekers landing better roles with UtopiaHire
          </p>
          <button 
            className="btn-primary btn-large"
            onClick={() => window.location.href = '/dashboard'}
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            © 2025 UtopiaHire. Empowering careers with AI. All rights reserved. Built with privacy in mind.
          </p>
        </div>
      </footer>
    </>
  );
};

export default App;
