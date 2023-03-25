import React from "react"
import { Header } from "./Header.styles"

const DEFAULT_COLOR = "#e9937e"

interface Props {
  classname?: string
  color?: string
  children: JSX.Element | string
}

export default function HeaderView({
  classname,
  children,
  color = DEFAULT_COLOR,
}: Props) {
  return (
    <Header classname={classname} color={color}>
      {children}
    </Header>
  )
}
