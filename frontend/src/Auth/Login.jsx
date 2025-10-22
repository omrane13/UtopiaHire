// src/Auth/Auth.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Auth = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 'signup' && formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    
    // Ici vous ajouterez la logique d'authentification
    console.log('Form data:', formData);
    
    // Redirection vers le dashboard après connexion réussie
    window.location.href = '/dashboard';
  };

  const handleSocialAuth = (provider) => {
    // Logique pour l'authentification sociale
    console.log(`Sign in with ${provider}`);
    // Redirection temporaire vers le dashboard
    window.location.href = '/dashboard';
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">UtopiaHire</div>
          <h1 className="auth-title">
            {activeTab === 'login' ? 'Connexion' : 'Inscription'}
          </h1>
          <p className="auth-subtitle">
            {activeTab === 'login' 
              ? 'Content de vous revoir ! Connectez-vous à votre compte.' 
              : 'Commencez votre aventure professionnelle dès aujourd\'hui.'}
          </p>
        </div>

        <div className="auth-tabs">
          <button 
            className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Connexion
          </button>
          <button 
            className={`auth-tab ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => setActiveTab('signup')}
          >
            Inscription
          </button>
        </div>

        <div className="auth-content">
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="votre@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Mot de passe</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="form-input"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <button 
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            {activeTab === 'signup' && (
              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">Confirmer le mot de passe</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="form-input"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
            )}

            <button type="submit" className="submit-button">
              {activeTab === 'login' ? 'Se connecter' : 'Créer un compte'}
            </button>
          </form>

          <div className="auth-divider">
            <span>Ou continuer avec</span>
          </div>

          <div className="social-auth">
            <button 
              type="button" 
              className="social-button google"
              onClick={() => handleSocialAuth('google')}
            >
              <span style={{marginRight: '0.5rem'}}>🔍</span>
              Google
            </button>
            <button 
              type="button" 
              className="social-button linkedin"
              onClick={() => handleSocialAuth('linkedin')}
            >
              <span style={{marginRight: '0.5rem'}}>💼</span>
              LinkedIn
            </button>
          </div>

          <div className="auth-footer">
            <p className="terms-text">
              En continuant, vous acceptez nos{' '}
              <a href="#" className="terms-link">conditions d'utilisation</a>{' '}
              et notre{' '}
              <a href="#" className="terms-link">politique de confidentialité</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;