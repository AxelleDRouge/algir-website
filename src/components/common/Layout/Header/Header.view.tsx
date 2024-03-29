import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { ImageLink, Nav, NavbarButton, Wrapper } from "./Header.styles"
import Menu from "../../Icons/MenuIcon"
import Navbar from "../Navbar"
import Close from "../../Icons/Close"

export type PageLink = {
  url: string
  title: string
}

interface Props {
  siteTitle: string
  pageLinks: PageLink[]
}

export default function Header({ siteTitle, pageLinks }: Props) {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <header>
      <Wrapper>
        <ImageLink to="/">
          {
            <StaticImage
              src="../../images/ALGIR-logo.jpg"
              width={118}
              height={61}
              alt={siteTitle}
            />
          }
        </ImageLink>
        {pageLinks &&
          pageLinks.map(link => (
            <Nav>
              <Link to={link.url}>{link.title}</Link>
            </Nav>
          ))}
        {!navbarOpen ? (
          <NavbarButton
            width={"100%"}
            height={"100%"}
            icon={<Menu />}
            onClick={() => {
              setNavbarOpen(true)
            }}
          />
        ) : (
          <NavbarButton
            width={"100%"}
            height={"100%"}
            icon={<Close />}
            onClick={() => setNavbarOpen(false)}
          />
        )}
      </Wrapper>
      <Navbar pageLinks={pageLinks} visible={navbarOpen} />
    </header>
  )
}
