import React, { FC, MouseEvent } from "react";
// types
import { AnswerObject } from "../App";
// styles
import { Wrapper, ButtonWrapper } from "./Card.styles";

type Props = {
  question: string;
  answers: string[];
  callback: (e: MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQuestions: number;
};

const Card: FC<Props> = (props: Props) => {
  return (
    <Wrapper>
      <p className="number">
        Question: {props.questionNum} / {props.totalQuestions}
      </p>
      <h3 dangerouslySetInnerHTML={{ __html: props.question }}></h3>

      <div>
        {props.answers.map((answer) => (
          <ButtonWrapper
            correct={props.userAnswer?.correctAnswer === answer}
            userClicked={props.userAnswer?.answer === answer}
            key={answer}
          >
            <button
              disabled={!!props.userAnswer}
              value={answer}
              onClick={props.callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default Card;
