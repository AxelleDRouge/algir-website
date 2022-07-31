import React from "react"
import { Header } from "../../common/Header"
import { Input, Tel, Textarea, Titre, Wrapper } from "./MeContacter.styles"

export default function MeContacterView() {
  return (
    <Wrapper>
      <Header>Me contacter</Header>
      <Titre>Par téléphone</Titre>
      <Tel>+ 33 (0)6 67 67 65 45</Tel>
      <Titre>Par mail</Titre>
      <Input placeholder={"Nom"} />
      <Input placeholder={"Prénom"} />
      <Input placeholder={"Société"} />
      <Input placeholder={"Mail"} />
      <Textarea placeholder={"Message"} row={10} />
    </Wrapper>
  )
}
