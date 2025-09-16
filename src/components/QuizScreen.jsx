import React from 'react';
import Timer from './Timer';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import Navigation from './Navigation';
import '../styles/QuizScreen.css';

const QuizScreen = ({
  currentQuestionData,
  currentQuestion,
  totalQuestions,
  selectedAnswers,
  timeLeft,
  progress,
  formatTime,
  handleAnswerSelect,
  goToPrevious,
  goToNext,
  submitQuiz,
  isFirstQuestion,
  isLastQuestion
}) => {
  return (
    <div className="quiz-container">
      <div className="quiz-wrapper">
        {/* Header */}
        <div className="quiz-header">
          <div className="header-content">
            <h1 className="quiz-title">JavaScript Quiz</h1>
            <div className="timer-info">
              <Timer timeLeft={timeLeft} formatTime={formatTime} />
              <div className="question-counter">
                {currentQuestion + 1} / {totalQuestions}
              </div>
            </div>
          </div>

          <ProgressBar progress={progress} />
        </div>

        {/* Question Card */}
        <QuestionCard
          question={currentQuestionData}
          selectedAnswer={selectedAnswers[currentQuestionData?.id]}
          onAnswerSelect={handleAnswerSelect}
        />

        {/* Navigation */}
        <Navigation
          onPrevious={goToPrevious}
          onNext={goToNext}
          onSubmit={submitQuiz}
          isFirstQuestion={isFirstQuestion}
          isLastQuestion={isLastQuestion}
        />
      </div>
    </div>
  );
};

export default QuizScreen;
