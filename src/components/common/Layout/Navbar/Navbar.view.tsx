import React from "react"
import { PageLink } from "../Header/Header.view"
import { Wrapper, MenuLink } from "./Navbar.styles"

interface Props {
  pageLinks: PageLink[]
  visible: boolean
}

export default function Navbar({ pageLinks, visible }: Props) {
  return (
    <Wrapper visible={visible}>
      {pageLinks &&
        pageLinks.map(link => <MenuLink to={link.url}>{link.title}</MenuLink>)}
    </Wrapper>
  )
}
