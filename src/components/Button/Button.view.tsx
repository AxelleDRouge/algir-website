import React from "react"
import { StyledIcon, StyledText, Wrapper } from "./Button.styles"

interface Props {
  className?: string
  icon?: JSX.Element
  text?: string
  width?: number
  height?: number
}

export default function Button({
  className,
  icon,
  text,
  width,
  height,
}: Props) {
  return (
    <Wrapper className={className}>
      {icon && (
        <StyledIcon width={width} height={height}>
          {icon}
        </StyledIcon>
      )}
      {text && <StyledText>{text}</StyledText>}
    </Wrapper>
  )
}
