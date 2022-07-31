import React from "react"
import { StyledIcon, StyledText, Wrapper } from "./Button.styles"

interface Props {
  className?: string
  icon?: JSX.Element
  text?: string
  width?: number | string
  height?: number | string
  onClick: () => void
}

export default function Button({
  className,
  icon,
  text,
  width,
  height,
  onClick,
}: Props) {
  return (
    <Wrapper className={className} onClick={onClick}>
      {icon && (
        <StyledIcon width={width} height={height}>
          {icon}
        </StyledIcon>
      )}
      {text && <StyledText>{text}</StyledText>}
    </Wrapper>
  )
}
