/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header/Header.view"
import { Main, Wrapper } from "./Layout.styles"

import { createGlobalStyle } from "styled-components"

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
`

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Main>{children}</Main>
      </Wrapper>
    </>
  )
}
