"use client";
import React, { useState } from "react";
import {
  QuestionTitre,
  ExpandMoreIcon,
  QuestionItem,
  QuestionContent,
  QuestionButton,
  ExpandMoreReverseIcon,
} from "./Question.styles";
import { QuestionType } from "./Question.types";

interface Props {
  question: QuestionType;
}

export default function Question({ question }: Props) {
  const [show, setShow] = useState(false);

  return (
    <QuestionItem>
      <QuestionTitre>{question.titre}</QuestionTitre>
      <QuestionButton
        icon={show ? <ExpandMoreReverseIcon /> : <ExpandMoreIcon />}
        onClick={() => setShow(!show)}
      ></QuestionButton>
      <QuestionContent
        visible={show}
        dangerouslySetInnerHTML={{ __html: question.content }}
      ></QuestionContent>
    </QuestionItem>
  );
}
