"use client";

import React from "react";
import { Header } from "../components/common/Header";
import { Wrapper } from "./styles";
import ExperienceContent from "../components/ExperienceContent/ExperienceContent";
import { DEFAULT_COLOR } from "../config";

export default function MieuxMeConnaitrePage() {
  return (
    <Wrapper>
      <Header>Expériences</Header>
      <ExperienceContent
        backgroundColor={DEFAULT_COLOR}
        textColor={"white"}
        showAllContent={true}
      />
    </Wrapper>
  );
}
