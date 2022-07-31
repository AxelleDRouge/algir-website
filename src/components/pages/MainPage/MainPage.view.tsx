import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Header } from "../../common/Header"
import Quote from "../../common/Icons/Quote"
import {
  Bulle,
  Chiffre,
  ChiffreExplication,
  CloseQuote,
  Icon,
  Images,
  LinkButton,
  MainText,
  OpenQuote,
  P,
  Pres,
  Reverse,
  ReverseHeader,
  Service,
  ServiceText,
  SubText,
  TrendingDownIcon,
  TrendingUpIcon,
  Wrapper,
} from "./MainPage.styles"
import { Questions } from "../../pages/MainPage/Questions"

interface Props {
  className?: string
}

export default function MainPage({ className }: Props) {
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
        <StaticImage
          src="../../images/home-page.jpg"
          width={1920}
          height={845}
          formats={["auto", "webp", "avif"]}
          alt="algir-home-background"
        />
      </Pres>
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
        <ReverseHeader>Les chiffres clés</ReverseHeader>
        <Chiffre>
          <Icon>XX %</Icon>
          <ChiffreExplication>
            Lorem ipsum dolor sit amet, consetetur
          </ChiffreExplication>
        </Chiffre>
        <Chiffre>
          <Icon>
            <TrendingDownIcon />
          </Icon>
          <ChiffreExplication>
            Lorem ipsum dolor sit amet, consetetur
          </ChiffreExplication>
        </Chiffre>
        <Chiffre>
          <Icon>
            <TrendingUpIcon />
          </Icon>
          <ChiffreExplication>
            Lorem ipsum dolor sit amet, consetetur
          </ChiffreExplication>
        </Chiffre>
      </Reverse>
      <Questions
        questions={[
          {
            titre: "Question 1",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat`,
          },
          {
            titre: "Question 2",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat`,
          },
          {
            titre: "Question 3",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat`,
          },
          {
            titre: "Question 4",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat`,
          },
        ]}
      />
      <Reverse>
        <ReverseHeader>Les clients</ReverseHeader>
        <Images>
          <StaticImage src="../../images/natixis.png" alt="natixis" />
          <StaticImage src="../../images/pierreFabre.png" alt="pierre-fabre" />
          <StaticImage src="../../images/vinci.png" alt="vinci" />
          <StaticImage src="../../images/bricoDepot.png" alt="brico-depot" />
          <StaticImage src="../../images/carrefour.png" alt="carrefour" />
        </Images>
        <OpenQuote />
        <Bulle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat
        </Bulle>
        <CloseQuote>
          <Quote />
        </CloseQuote>
      </Reverse>
    </Wrapper>
  )
}
