"use client";
import React from "react";

import Header from "./Header/Header.view";
import { Footer, Main, Wrapper } from "./Layout.styles";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Wrapper>
      <Header
        siteTitle={`Algir`}
        pageLinks={[
          {
            url: "/mieux-me-connaitre",
            title: "Mieux me connaitre",
          },
          {
            url: "/me-contacter",
            title: "Me contacter",
          },
        ]}
      />
      <Main>{children}</Main>
      <Footer>
        <Link href="https://www.linkedin.com/in/alice-girard-b542703">
          LinkedIn
        </Link>
        <Link href="/mentions-legales">Mentions Légales</Link>
      </Footer>
    </Wrapper>
  );
}
