"use client";
import React from "react";
import { StyledIcon, StyledText, Wrapper } from "./DefaultButton.styles";

interface Props {
  className?: string;
  icon?: JSX.Element;
  text?: string;
  width?: number | string;
  height?: number | string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}

export default function DefaultButton({
  className,
  icon,
  text,
  width,
  height,
  onClick,
  type,
}: Props) {
  return (
    <Wrapper className={className} onClick={onClick} type={type}>
      {icon && (
        <StyledIcon width={width} height={height}>
          {icon}
        </StyledIcon>
      )}
      {text && <StyledText>{text}</StyledText>}
    </Wrapper>
  );
}
