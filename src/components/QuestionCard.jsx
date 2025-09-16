import React from 'react';
import '../styles/QuestionCard.css';

const QuestionCard = ({ question, selectedAnswer, onAnswerSelect }) => {
  if (!question) return null;

  const handleAnswerChange = (answer) => {
    onAnswerSelect(question.id, answer);
  };

  return (
    <div className="question-card">
      <div className="question-header">
        <span className="question-type">
          {question.type === 'multiple' ? 'Multiple Choice' : 'True/False'}
        </span>
        <h2 className="question-text">
          {question.question}
        </h2>
      </div>

      <div className="options-container">
        {question.type === 'multiple' ? (
          <MultipleChoiceOptions
            options={question.options}
            questionId={question.id}
            selectedAnswer={selectedAnswer}
            onAnswerChange={handleAnswerChange}
          />
        ) : (
          <BooleanOptions
            questionId={question.id}
            selectedAnswer={selectedAnswer}
            onAnswerChange={handleAnswerChange}
          />
        )}
      </div>
    </div>
  );
};

const MultipleChoiceOptions = ({ options, questionId, selectedAnswer, onAnswerChange }) => {
  return (
    <>
      {options.map((option, index) => (
        <label
          key={index}
          className={`option ${selectedAnswer === index ? 'selected' : ''}`}
        >
          <input
            type="radio"
            name={`question-${questionId}`}
            value={index}
            checked={selectedAnswer === index}
            onChange={() => onAnswerChange(index)}
          />
          <span className="option-text">{option}</span>
        </label>
      ))}
    </>
  );
};

const BooleanOptions = ({ questionId, selectedAnswer, onAnswerChange }) => {
  return (
    <div className="boolean-options">
      <label className={`boolean-option true-option ${selectedAnswer === true ? 'selected' : ''}`}>
        <input
          type="radio"
          name={`question-${questionId}`}
          value="true"
          checked={selectedAnswer === true}
          onChange={() => onAnswerChange(true)}
        />
        <span className="boolean-text">True ✅</span>
      </label>
      <label className={`boolean-option false-option ${selectedAnswer === false ? 'selected' : ''}`}>
        <input
          type="radio"
          name={`question-${questionId}`}
          value="false"
          checked={selectedAnswer === false}
          onChange={() => onAnswerChange(false)}
        />
        <span className="boolean-text">False ❌</span>
      </label>
    </div>
  );
};

export default QuestionCard;
