import React from 'react';

const Timer = ({ timeLeft, formatTime }) => {
  const isLowTime = timeLeft <= 60; // Last minute warning

  return (
    <div className={`timer ${isLowTime ? 'timer-warning' : ''}`}>
      ⏱️ {formatTime(timeLeft)}
    </div>
  );
};

export default Timer;
