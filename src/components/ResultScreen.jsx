import React from 'react';
import ProgressBar from './ProgressBar';
import '../styles/ResultScreen.css';

const ResultScreen = ({
  score,
  totalQuestions,
  getScoreMessage,
  onRestartQuiz,
  userName,
  scoreHistory
}) => {
  const percentage = (score / totalQuestions) * 100;

  return (
    <div className="quiz-container result-container">
      <div className="result-card">
        <div className="result-emoji">
          🎉
        </div>
        <h1 className="result-title">Quiz Complete!</h1>
        {userName ? (
          <p className="participant-name">Great job, <strong>{userName}</strong>!</p>
        ) : null}
        <p className="result-message">{getScoreMessage()}</p>

        <div className="score-grid">
          <div className="score-item correct">
            <div className="score-number">{score}</div>
            <div className="score-label">Correct</div>
          </div>
          <div className="score-item incorrect">
            <div className="score-number">{totalQuestions - score}</div>
            <div className="score-label">Incorrect</div>
          </div>
          <div className="score-item percentage">
            <div className="score-number">{percentage.toFixed(1)}%</div>
            <div className="score-label">Score</div>
          </div>
        </div>

        <ProgressBar
          progress={percentage}
          score={score}
          totalQuestions={totalQuestions}
          isResult={true}
        />

        <button className="restart-button" onClick={onRestartQuiz}>
          Take Quiz Again
        </button>

        {Array.isArray(scoreHistory) && scoreHistory.length > 0 && (
          <div className="history-section">
            <h2 className="history-title">Score History</h2>
            <div className="history-list">
              {scoreHistory.map((record) => (
                <div key={record.id} className="history-item">
                  <div className="history-main">
                    <span className="history-name">{record.name}</span>
                    <span className="history-score">{record.score}/{record.total} ({record.percentage}%)</span>
                  </div>
                  <div className="history-date">
                    {new Date(record.dateIso).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultScreen;
