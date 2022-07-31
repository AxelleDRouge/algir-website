import React from "react"
import { Header } from "./Header.styles"

const DEFAULT_COLOR = "#e9937e"

interface Props {
  color?: string
  children: JSX.Element | string
}

export default function HeaderView({ children, color = DEFAULT_COLOR }: Props) {
  return <Header color={color}>{children}</Header>
}
