"use client";

import React, { useState } from "react";
import Layout from "./components/common/Layout";
import useWindowDimensions from "./hooks/useWindowDimensions.hook";
import Quote from "./components/common/Icons/Quote";
import {
  Bulle,
  Chiffre,
  ChiffreExplication,
  CloseQuote,
  DirectButton,
  Icon,
  Images,
  LinkButton,
  MainText,
  OpenQuote,
  P,
  Pres,
  Reverse,
  ReverseHeader,
  Row,
  Service,
  ServiceText,
  SubText,
  TrendingDownIcon,
  TrendingUpIcon,
  Wrapper,
} from "./styles";
import { Questions } from "./components/Questions";
import { Header } from "./components/common/Header";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HomePage() {
  const { width } = useWindowDimensions();
  const [focus, setFocus] = useState(false);
  const router = useRouter();

  return (
    <Layout>
      <Wrapper>
        <Pres>
          <MainText>
            Faîtes vos achats autrement, en optimisant vos coûts récurrents ?
          </MainText>
          <SubText>
            « Aucune dépense n’est incompressible, il est toujours possible
            d’agir pour les réduire. »  Sur ce principe je vous propose
            d’analyser et d’optimiser vos dépenses.
          </SubText>
          <Image
            src="../../images/home-page.jpg"
            width={1920}
            height={845}
            alt="algir-home-background"
          />
        </Pres>
        <Service>
          <Header>Le service</Header>
          <ServiceText>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </P>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </P>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </P>
            <DirectButton focus={focus} width={width}>
              <>Détail de la prestation</>
            </DirectButton>
          </ServiceText>
        </Service>
        <Reverse>
          <ReverseHeader color={"white"}>Les chiffres clés</ReverseHeader>
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
          <ReverseHeader color={"white"}>Les clients</ReverseHeader>
          <Images>
            <Image src="../../images/natixis.png" alt="natixis" />
            <Image src="../../images/pierreFabre.png" alt="pierre-fabre" />
            <Image src="../../images/vinci.png" alt="vinci" />
            <Image src="../../images/bricoDepot.png" alt="brico-depot" />
            <Image src="../../images/carrefour.png" alt="carrefour" />
          </Images>
          <OpenQuote />
          <Bulle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat
          </Bulle>
          <CloseQuote>
            <Quote />
          </CloseQuote>
        </Reverse>
      </Wrapper>
      <LinkButton
        width={width}
        focus={focus}
        onClick={() => {
          setFocus(true);
          router.push("/me-contacter");
        }}
      >
        Me contacter
      </LinkButton>
    </Layout>
  );
}
