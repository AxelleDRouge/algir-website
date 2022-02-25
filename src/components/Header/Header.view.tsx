import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Nav, Navbar, NavbarButton, Wrapper } from "./Header.styles"
import Menu from "../Icons/MenuIcon"

interface Props {
  siteTitle: string
}

export default function Header({ siteTitle }: Props) {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <header>
      <Wrapper>
        <Link to="/">
          {
            <StaticImage
              src="../../images/ALGIR-logo.jpg"
              width={118}
              height={61}
              alt={siteTitle}
            />
          }
        </Link>
        {navbarOpen && (
          <Navbar>
            <Nav>
              <Link to="/APropos">A Propos de ALGIR</Link>
            </Nav>
            <Nav>
              <Link to="/Deroule">Le déroulé de la prestation</Link>
            </Nav>
            <Nav>
              <Link to="/MieuxMeConnaitre">Mieux me connaître</Link>
            </Nav>
            <Nav>
              <Link to="/MeContacter">Me contacter</Link>
            </Nav>
          </Navbar>
        )}
        <NavbarButton icon={<Menu />} onClick={setNavbarOpen} />
      </Wrapper>
    </header>
  )
}
