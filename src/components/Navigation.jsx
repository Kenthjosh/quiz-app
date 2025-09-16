import React from 'react';
import '../styles/Navigation.css';

const Navigation = ({
  onPrevious,
  onNext,
  onSubmit,
  isFirstQuestion,
  isLastQuestion
}) => {
  return (
    <div className="navigation">
      <button
        onClick={onPrevious}
        disabled={isFirstQuestion}
        className="nav-button previous"
      >
        ← Previous
      </button>

      <div className="nav-right">
        {isLastQuestion ? (
          <button onClick={onSubmit} className="submit-button">
            Submit Quiz 🎯
          </button>
        ) : (
          <button onClick={onNext} className="nav-button next">
            Next →
          </button>
        )}
      </div>
    </div>
  );
};

export default Navigation;
