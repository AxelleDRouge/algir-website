import styled from "styled-components"
import Button from "../Button"

export const Wrapper = styled.div`
  height: 125px;
  width: 100%;
  box-shadow: 0px 3px 6px #00000029;
  display: grid;
  align-items: center;
  padding-left: 13px;

  @media screen and (max-width: 428px) {
    grid-template-columns: auto 1fr;
  }

  @media screen and (min-width: 428px) {
    grid-template-columns: auto auto auto auto 1fr;
    grid-gap: 45px;
  }
`

export const Navbar = styled.div``
export const NavbarButton = styled(Button)`
  @media screen and (min-width: 428px) {
    display: none;
  }
`

export const Nav = styled.nav`
  a {
    font-family: "Helvetica Neue", Helvetica, sans-serif, Regular;
    font-style: normal;
    text-decoration: none;
    font-size: 29px;
    color: #000000;
  }
`
