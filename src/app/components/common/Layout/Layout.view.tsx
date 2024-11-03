/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";

import Header from "./Header/Header.view";
import { Facebook, Footer, Instagram, Main, Wrapper } from "./Layout.styles";

import { createGlobalStyle } from "styled-components";
import Link from "next/link";

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, sans-serif, Regular;
    overflow-x: hidden; 
  }
`;

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header
          siteTitle={`Algir`}
          pageLinks={[
            {
              url: "/a-propos",
              title: "A Propos de ALGIR",
            },
            {
              url: "/deroule",
              title: "Le déroulé de la prestation",
            },
            {
              url: "/mieux-me-connaitre",
              title: "Mieux me connaître",
            },
            {
              url: "/me-contacter",
              title: "Me contacter",
            },
          ]}
        />
        <Main>{children}</Main>
        <Footer>
          <Link href="/mentions-legales">Mentions Légales</Link>
        </Footer>
      </Wrapper>
    </>
  );
}
