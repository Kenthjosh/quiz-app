import React from 'react';
import { useQuiz } from './hooks/useQuiz';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import './index.css';

function App() {
  const {
    // State
    questions,
    currentQuestion,
    selectedAnswers,
    showResult,
    score,
    timeLeft,
    quizStarted,
    progress,
    userName,
    scoreHistory,

    // Actions
    startQuiz,
    handleAnswerSelect,
    goToNext,
    goToPrevious,
    submitQuiz,
    restartQuiz,

    // Utilities
    formatTime,
    getScoreMessage,

    // Computed
    currentQuestionData,
    isLastQuestion,
    isFirstQuestion
  } = useQuiz();

  // Show welcome screen if quiz hasn't started
  if (!quizStarted) {
    return <WelcomeScreen onStartQuiz={startQuiz} />;
  }

  // Show result screen if quiz is complete
  if (showResult) {
    return (
      <ResultScreen
        score={score}
        totalQuestions={questions.length}
        getScoreMessage={getScoreMessage}
        onRestartQuiz={restartQuiz}
        userName={userName}
        scoreHistory={scoreHistory}
      />
    );
  }

  // Show quiz screen
  return (
    <QuizScreen
      currentQuestionData={currentQuestionData}
      currentQuestion={currentQuestion}
      totalQuestions={questions.length}
      selectedAnswers={selectedAnswers}
      timeLeft={timeLeft}
      progress={progress}
      formatTime={formatTime}
      handleAnswerSelect={handleAnswerSelect}
      goToPrevious={goToPrevious}
      goToNext={goToNext}
      submitQuiz={submitQuiz}
      isFirstQuestion={isFirstQuestion}
      isLastQuestion={isLastQuestion}
    />
  );
}

export default App;
