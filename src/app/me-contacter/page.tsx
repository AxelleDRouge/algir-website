"use client";

import React from "react";
import { Header } from "../components/common/Header";
import { Form, Input, SendButton, Textarea, Titre, Wrapper } from "./styles";

export default function MeContacterPage() {
  return (
    <Wrapper>
      <Header>Me contacter</Header>
      <Titre>Mon adresse mail : algir.achats@gmail.com</Titre>
      <Titre>Par mail</Titre>
      <Form
        method="post"
        action="https://getform.io/f/12e11e80-2351-4955-b0ac-648fa3ccea95"
      >
        <Input placeholder={"Nom"} name="lastname" id="lastname" />
        <Input placeholder={"Prénom"} name="firstname" id="firstname" />
        <Input placeholder={"Société"} name="company" id="company" />
        <Input placeholder={"Mail"} type="email" name="email" id="email" />
        <Input placeholder={"Tel"} name="phone" id="phone" />
        <Textarea
          placeholder={"Message"}
          rows={10}
          name="message"
          id="message"
        />
        <SendButton type="submit" text="Envoyer" />
      </Form>
    </Wrapper>
  );
}
