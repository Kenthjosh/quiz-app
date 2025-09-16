import { useState, useEffect } from 'react';
import { questionData, shuffleQuestions } from '../data/questions';

export const useQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [quizStarted, setQuizStarted] = useState(false);
  const [userName, setUserName] = useState('');
  const [scoreHistory, setScoreHistory] = useState([]);

  // Initialize quiz with shuffled questions
  useEffect(() => {
    const shuffledQuestions = shuffleQuestions(questionData);
    setQuestions(shuffledQuestions);
    const savedHistory = localStorage.getItem('quizScoreHistory');
    if (savedHistory) {
      try {
        setScoreHistory(JSON.parse(savedHistory));
      } catch (_) {
        setScoreHistory([]);
      }
    }
    const savedName = localStorage.getItem('quizUserName');
    if (savedName) {
      setUserName(savedName);
    }
  }, []);

  // Timer effect
  useEffect(() => {
    if (quizStarted && timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      submitQuiz();
    }
  }, [timeLeft, quizStarted, showResult]);

  const startQuiz = (name) => {
    const trimmedName = (name || '').trim();
    if (trimmedName) {
      setUserName(trimmedName);
      try {
        localStorage.setItem('quizUserName', trimmedName);
      } catch (_) {}
    }
    setQuizStarted(true);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResult(false);
    setScore(0);
    setTimeLeft(600);
  };

  const handleAnswerSelect = (questionId, answer) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const goToNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    questions.forEach(question => {
      const userAnswer = selectedAnswers[question.id];
      if (userAnswer === question.answer) {
        correctAnswers++;
      }
    });
    return correctAnswers;
  };

  const submitQuiz = () => {
    const finalScore = calculateScore();
    setScore(finalScore);
    setShowResult(true);
    const record = {
      id: Date.now(),
      name: (userName || 'Anonymous'),
      score: finalScore,
      total: questions.length,
      percentage: Number(((finalScore / questions.length) * 100).toFixed(1)),
      dateIso: new Date().toISOString()
    };
    const updatedHistory = [record, ...scoreHistory];
    setScoreHistory(updatedHistory);
    try {
      localStorage.setItem('quizScoreHistory', JSON.stringify(updatedHistory));
    } catch (_) {}
  };

  const restartQuiz = () => {
    const shuffledQuestions = shuffleQuestions(questionData);
    setQuestions(shuffledQuestions);
    setQuizStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResult(false);
    setScore(0);
    setTimeLeft(600);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return 'Excellent! 🎉';
    if (percentage >= 80) return 'Great job! 👏';
    if (percentage >= 70) return 'Good work! 👍';
    if (percentage >= 60) return 'Not bad! 👌';
    return 'Keep practicing! 📚';
  };

  const progress = questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  return {
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
    currentQuestionData: questions[currentQuestion],
    isLastQuestion: currentQuestion === questions.length - 1,
    isFirstQuestion: currentQuestion === 0
  };
};
