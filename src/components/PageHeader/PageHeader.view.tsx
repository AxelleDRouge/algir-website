import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import ExpandMore from "../Icons/ExpandMore"
import TrendingDown from "../Icons/TrendingDown"
import TrendingUp from "../Icons/TrendingUp"
import {
  Chiffre,
  ChiffreExplication,
  Clients,
  Header,
  Icon,
  Images,
  LinkButton,
  MainText,
  P,
  Pres,
  Question,
  Questions,
  Reverse,
  ReverseHeader,
  Service,
  ServiceText,
  SubText,
  Titre,
  Wrapper,
} from "./PageHeader.styles"

interface Props {
  className?: string
}

export default function PageHeader({ className }: Props) {
  return (
    <Wrapper className={className}>
      <Pres>
        <MainText>
          Faîtes vos achats autrement, en optimisant vos coûts récurrents ?
        </MainText>
        <SubText>
          « Aucune dépense n’est incompressible, il est toujours possible d’agir
          pour les réduire. »  Sur ce principe je vous propose d’analyser et
          d’optimiser vos dépenses.
        </SubText>
        <LinkButton>Me contacter</LinkButton>
      </Pres>
      <StaticImage
        src="../../images/home-page.jpg"
        width={1920}
        height={845}
        formats={["auto", "webp", "avif"]}
        alt="algir-home-background"
        style={{ gridArea: "1/1" }}
      />
      <Service>
        <Header>Le service</Header>
        <ServiceText>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </P>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </P>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </P>
        </ServiceText>
        <LinkButton>Détail de la prestation</LinkButton>
      </Service>
      <Reverse>
        <ReverseHeader>Chiffres</ReverseHeader>
        <Chiffre>
          <Icon>XX %</Icon>
          <ChiffreExplication>
            Lorem ipsum dolor sit amet, consetetur
          </ChiffreExplication>
        </Chiffre>
        <Chiffre>
          <Icon>
            <TrendingDown width={"20vw"} height={"100%"} />
          </Icon>
          <ChiffreExplication>
            Lorem ipsum dolor sit amet, consetetur
          </ChiffreExplication>
        </Chiffre>
        <Chiffre>
          <Icon>
            <TrendingUp width={"20vw"} height={"100%"} />
          </Icon>
          <ChiffreExplication>
            Lorem ipsum dolor sit amet, consetetur
          </ChiffreExplication>
        </Chiffre>
      </Reverse>
      <Questions>
        <Header>Questions fréquentes</Header>
        <Question>
          <Titre>Question 1</Titre>
          <ExpandMore width={"10vw"} height={"100%"} />
        </Question>
        <Question>
          <Titre>Question 2</Titre>
          <ExpandMore width={"10vw"} height={"100%"} />
        </Question>
        <Question>
          <Titre>Question 3</Titre>
          <ExpandMore width={"10vw"} height={"100%"} />
        </Question>
        <Question>
          <Titre>Question 4</Titre>
          <ExpandMore width={"10vw"} height={"100%"} />
        </Question>
        <Question>
          <Titre>Question 5</Titre>
          <ExpandMore width={"10vw"} height={"100%"} />
        </Question>
        <Question>
          <Titre>Question 6</Titre>
          <ExpandMore width={"10vw"} height={"100%"} />
        </Question>
        <Question>
          <Titre>Question 7</Titre>
          <ExpandMore width={"10vw"} height={"100%"} />
        </Question>
        <Question>
          <Titre>Question 8</Titre>
          <ExpandMore width={"10vw"} height={"100%"} />
        </Question>
      </Questions>
      <Reverse>
        <ReverseHeader>Les clients</ReverseHeader>
        <Images>
          <StaticImage src="../../images/natixis.png" alt="natixis" />
          <StaticImage src="../../images/pierreFabre.png" alt="pierre-fabre" />
          <StaticImage src="../../images/vinci.png" alt="vinci" />
          <StaticImage src="../../images/bricoDepot.png" alt="brico-depot" />
          <StaticImage src="../../images/carrefour.png" alt="carrefour" />
        </Images>
      </Reverse>
    </Wrapper>
  )
}
