import React from "react";
import { Header } from "../common/Header";
import { Question } from "../Question";
import { QuestionsList } from "./Questions.styles";

interface Props {
  questions: Question[];
}

export default function Questions({ questions }: Props) {
  return (
    <QuestionsList>
      <Header>Questions Fréquentes</Header>
      {questions.map((question) => (
        <Question key={question.titre} question={question} />
      ))}
    </QuestionsList>
  );
}
