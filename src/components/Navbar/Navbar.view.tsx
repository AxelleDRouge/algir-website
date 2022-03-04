import { Link } from "gatsby"
import React, { ReactChildren, useState } from "react"
import { PageLink } from "../Header/Header.view"
import { Wrapper } from "./Navbar.styles"

interface Props {
  pageLinks: PageLink[]
}

export default function Navbar({ pageLinks }: Props) {
  return (
    <Wrapper>
      {pageLinks &&
        pageLinks.map(link => <Link to={link.url}>{link.title}</Link>)}
    </Wrapper>
  )
}
