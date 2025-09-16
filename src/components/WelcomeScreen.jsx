import React, { useState } from 'react';
import '../styles/WelcomeScreen.css';

const WelcomeScreen = ({ onStartQuiz }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    onStartQuiz(trimmed);
  };

  return (
    <div className="quiz-container">
      <div className="welcome-card">
        <h1 className="main-title">JavaScript Quiz</h1>
        <div className="title-underline"></div>

        <p className="welcome-text">
          Test your JavaScript knowledge with 20 randomized questions covering various topics
          from the TutorialsPoint JavaScript tutorial.
        </p>

        <div className="info-grid">
          <h2 className="info-title">Quiz Information</h2>
          <div className="info-items">
            <div className="info-item">
              <span>📝 Total Questions: 20</span>
            </div>
            <div className="info-item">
              <span>⏱️ Time Limit: 10 minutes</span>
            </div>
            <div className="info-item">
              <span>🎯 Multiple Choice: 10</span>
            </div>
            <div className="info-item">
              <span>✅ True/False: 10</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="start-form">
          <label htmlFor="participantName" className="name-label">Your Name</label>
          <input
            id="participantName"
            type="text"
            className="name-input"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
          <button
            type="submit"
            className="start-button"
            disabled={!name.trim()}
            title={!name.trim() ? 'Please enter your name to start' : 'Start the quiz'}
          >
            Start Quiz 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default WelcomeScreen;
