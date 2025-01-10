import styled from "styled-components"

export const Wrapper = styled.button`
  border: none;
  background-color: transparent;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
    transition: background-color 0.2s linear;
    background-color: #00000029;
  }
`
export const StyledIcon = styled.div<{ width?: number | string; height?: number | string }>`
  height: ${props => props.height};
  width: ${props => props.width};
`
export const StyledText = styled.div``
