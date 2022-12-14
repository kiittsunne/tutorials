import React, { MouseEvent, useState } from "react";
import { fetchQuizQuestions } from "./API";
// Components
import Header from "./components/Header";
import Card from "./components/Card";
// Types
import { Difficulty, QuestionState } from "./API";
// Styles
import { GlobalStyle, Wrapper } from "./App.style";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    const startNewQuiz = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(startNewQuiz);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // get user answers
      const answer = e.currentTarget.value;

      // check answer against correct answer
      const correct = questions[number].correct_answer === answer;

      // add score if answer is correct
      if (correct) setScore((prev) => prev + 1);

      // save answer in arr for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />

      <Wrapper>
        <Header title="Trivia Quiz" />
        {(gameOver || userAnswers.length === TOTAL_QUESTIONS) && (
          <button className="start" onClick={startQuiz}>
            Start Quiz
          </button>
        )}
        {!gameOver && (
          <p className="score">
            Score: {score}/{TOTAL_QUESTIONS}
          </p>
        )}
        {loading && <p>Loading Quiz</p>}
        {!loading && !gameOver && (
          <Card
            questionNum={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS - 1 && (
            <button className="next" onClick={nextQuestion}>
              Next Question
            </button>
          )}
      </Wrapper>
    </>
  );
}

export default App;
