import React from "react";
import { Link } from "react-router-dom";

function Report({ score, correctAnswers, incorrectAnswers }) {
  return (
    <div>
      <h2>Quiz Report</h2>
      <p>Total Score: {score}</p>
      <p>Correct Answers: {correctAnswers}</p>
      <p>Incorrect Answers: {incorrectAnswers}</p>
      <Link to="/">
        <button>Start Again</button>
      </Link>
    </div>
  );
}

export default Report;
