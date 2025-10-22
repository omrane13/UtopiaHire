// src/pages/ResumeReview.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ResumeReview.css';

const ResumeReview = () => {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile && (droppedFile.type === 'application/pdf' || 
                        droppedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      setFile(droppedFile);
    }
  };

  const handleUpload = () => {
    if (file) {
      // Ici vous ajouterez la logique d'upload
      console.log('Uploading file:', file.name);
      alert(`Resume "${file.name}" uploaded successfully! AI analysis starting...`);
    }
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
                <li className="nav-item active">
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
                <li className="nav-item">
                  <a href="/career-insights" className="nav-link">
                    <span className="nav-icon">📈</span>
                    <span className="nav-text">Career Insights</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contenu principal de Resume Review */}
          <div className="content-area">
            <section className="resume-review-content">
              
              {/* En-tête */}
              <div className="resume-header">
                <h1 className="resume-title">Resume Reviewer</h1>
                <p className="resume-subtitle">
                  Upload your resume for instant AI analysis and optimization
                </p>
              </div>

              {/* Zone d'upload */}
              <div className="upload-section">
                <h2 className="upload-title">Upload Your Resume</h2>
                
                <div 
                  className={`upload-zone ${isDragging ? 'dragging' : ''} ${file ? 'has-file' : ''}`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div className="upload-icon">📄</div>
                  <div className="upload-text">
                    {file ? (
                      <>
                        <strong>Selected file: {file.name}</strong>
                        <p>File ready for analysis</p>
                      </>
                    ) : (
                      <>
                        <strong>Drag and drop your resume here, or click to browse</strong>
                        <p>We support PDF and DOCX formats</p>
                      </>
                    )}
                  </div>
                  <input
                    type="file"
                    id="resume-upload"
                    className="file-input"
                    accept=".pdf,.docx,.doc"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="resume-upload" className="browse-button">
                    Choose File
                  </label>
                </div>

                <div className="upload-info">
                  <p>Maximum file size: 10MB</p>
                </div>

                {file && (
                  <button className="upload-button" onClick={handleUpload}>
                    Analyze My Resume ✅
                  </button>
                )}
              </div>

              {/* Features Section */}
              <div className="features-section">
                <h3 className="features-title">What you'll get:</h3>
                <div className="features-grid">
                  <div className="feature-item">
                    <div className="feature-icon">🔍</div>
                    <div className="feature-content">
                      <h4>ATS Score</h4>
                      <p>Compatibility with Applicant Tracking Systems</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">✨</div>
                    <div className="feature-content">
                      <h4>AI Optimization</h4>
                      <p>Personalized suggestions for improvement</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">📈</div>
                    <div className="feature-content">
                      <h4>Skill Analysis</h4>
                      <p>Identification of key strengths and gaps</p>
                    </div>
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

export default ResumeReview;