import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import Question from "./Question";

const Render = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([
    "Question 1",
    "Question 2",
    "Question 3",
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleQuestionChange = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // All questions answered
      // You can save the voice recordings to the backend here
      console.log("All questions completed");
    }
  };

  useEffect(() => {
    const timer = setTimeout(handleQuestionChange, 25000); // 25 seconds (5 sec prep + 20 sec recording)
    return () => clearTimeout(timer);
  }, [currentQuestionIndex]);

  return (
    <div className="App">
      {currentQuestionIndex < questions.length ? (
        <Question
          question={questions[currentQuestionIndex]}
          onNext={handleQuestionChange}
        />
      ) : (
        navigate("/thank")
      )}
    </div>
  );
};

export default Render;
