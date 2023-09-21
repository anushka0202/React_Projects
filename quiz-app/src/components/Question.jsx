import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Question() {
  const { questionId } = useParams();
  const navigate = useNavigate();

  const [question, setQuestion] = useState({});
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [timer, setTimer] = useState(0);

  // Fetch question based on questionId from the API
  useEffect(() => {
    // Implement API call to fetch the question here
    // Update the question state
    fetch(`http://localhost:3001/questions/${questionId}`)
      .then((response) => response.json())
      .then((data) => {
        setQuestion(data);
      })
      .catch((error) => {
        console.error("Error fetching question:", error);
      });
  }, [questionId]);

  const handleOptionSelect = (optionId) => {
    // Update selectedOptions state when the user selects an option
    if (selectedOptions.includes(optionId)) {
      // If the option is already selected, remove it
      setSelectedOptions((prevSelectedOptions) =>
        prevSelectedOptions.filter((id) => id !== optionId)
      );
    } else {
      // If the option is not selected, add it
      setSelectedOptions((prevSelectedOptions) => [
        ...prevSelectedOptions,
        optionId,
      ]);
    }
  };

  const handleSubmit = () => {
    // Implement API call to submit user's selected options and timer
    // Redirect to the next question or the report screen
    fetch(`http://localhost:3001/questions/${questionId}`, {
      method: "GET",
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // selectedOptions,
        // timer,
      }),
    })
      .then((response) => {
        console.log("API response:", response);
        response.json();
      })
      // .then((data) => {
      //   // Check if there is a next question
      //   console.log("API data:", data);
      //   if (data.nextQuestionId !== null) {
      //     // Redirect to the next question
      //     navigate(`/questions/${data.nextQuestionId}`);
      //   } else {
      //     // No more questions, redirect to the report screen
      //     navigate("/report");
      //   }
      // })
      .catch((error) => {
        console.error("Error submitting answer:", error);
      });
  };

  return (
    <div className="question-page">
      <div className="question-container">
        <h2>Question {questionId}</h2>
        <p>{question.text}</p>
        {question.image && <img src={question.image} alt="Question" />}
        <ul style={{ textDecoration: "none" }}>
          {question.options &&
            question.options.map((option) => (
              <li key={option.id}>
                <label>
                  <input
                    type="radio"
                    id={option.text}
                    value={option.text}
                    name="options"
                    checked={selectedOptions.includes(option.id)}
                    onChange={() => handleOptionSelect(option.id)}
                  />
                  {option.text}
                </label>
              </li>
            ))}
        </ul>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "2%",
            position: "sticky",
          }}
        >
          <button className="start-button" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Question;
