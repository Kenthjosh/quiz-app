import React from 'react';

const ProgressBar = ({ progress, score, totalQuestions, isResult = false }) => {
  const getProgressFillClass = () => {
    if (isResult) {
      const percentage = (score / totalQuestions) * 100;
      if (percentage >= 80) return 'progress-fill excellent';
      if (percentage >= 60) return 'progress-fill good';
      return 'progress-fill needs-improvement';
    }
    return 'progress-fill';
  };

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div
          className={getProgressFillClass()}
          style={{
            width: `${progress}%`,
            transition: isResult ? 'width 1.5s ease-in-out' : 'width 0.3s ease'
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
