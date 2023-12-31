import React, { useState, useEffect } from "react";
import { defaultQuizData } from "./QuizData";
import QuizResult from "./QuizResult";
import "./quiz.css";
import { useDispatch, useSelector } from "react-redux";
import { setUserScore } from "../state";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const userId = useSelector((state) => state.user._id);
  const statescore = useSelector((state) => state.userscore);
  const dispatch = useDispatch();
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const requestBody = JSON.stringify({ userId });
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
    };

    fetch("http://localhost:3001/fetchquiz", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.games.length > 0) {
          setQuizData(data.games);
          console.log("Fetched quizData:", quizData);
          setLoading(false);
        } else {
          console.log("fetched games empty");
          setQuizData(defaultQuizData);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching quiz data:", error);
      });
  }, []);

  useEffect(() => {
    console.log("Updated quizData:", quizData);
  }, [quizData]);

  const handleScore = async () => {
    try {
      const response = await fetch("http://localhost:3001/score", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, score }),
      });
      const data = await response.json();
      console.log("data", data);
      console.log("current score ", data);
      console.log("score state ", statescore);
      if (response.ok) {
        dispatch(
          setUserScore({
            userscore: data,
          })
        );
      }
    } catch (error) {
      alert("Unsuccessful Updation");
    }
  };

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      handleScore();
      setShowResult(true);
    }
  };
  const updateScore = () => {
    if (clickedOption === quizData[currentQuestion].correctOption) {
      setScore(score + 1);
    }
  };
  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
  };
  return (
    <div className="main">
      <div className="container">
        {showResult ? (
          <QuizResult
            score={score}
            totalScore={quizData.length}
            tryAgain={resetAll}
          />
        ) : loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}. </span>
              <span id="question-txt">
                {/* <button onClick={() => console.log(quizData)}>click</button> */}
                {quizData[currentQuestion].question}
              </span>
            </div>
            <div className="option-container">
              <button
                // className="option-btn"
                className={`option-btn ${
                  clickedOption === 1 ? "checked" : null
                }`}
                key={1}
                onClick={() => setClickedOption(1)}
              >
                {quizData[currentQuestion].option1}
              </button>
              <button
                // className="option-btn"
                className={`option-btn ${
                  clickedOption === 2 ? "checked" : null
                }`}
                key={2}
                onClick={() => setClickedOption(2)}
              >
                {quizData[currentQuestion].option2}
              </button>
              <button
                // className="option-btn"
                className={`option-btn ${
                  clickedOption === 3 ? "checked" : null
                }`}
                key={3}
                onClick={() => setClickedOption(3)}
              >
                {quizData[currentQuestion].option3}
              </button>
              <button
                // className="option-btn"
                className={`option-btn ${
                  clickedOption === 4 ? "checked" : null
                }`}
                key={4}
                onClick={() => setClickedOption(4)}
              >
                {quizData[currentQuestion].option4}
              </button>
            </div>
            <input
              type="button"
              value="Next"
              id="next-button"
              className="px-4 py-2 bg-teal-700 text-white rounded-md shadow-md font-bold text-lg font-serif transition duration-200 hover:shadow-none active:scale-97"
              onClick={changeQuestion}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
