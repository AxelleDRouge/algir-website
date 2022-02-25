import { number } from "prop-types"
import styled from "styled-components"

export const Wrapper = styled.button`
  background: transparent;
  border: none;
`
export const StyledIcon = styled.div<{ width: number; height: number }>`
  height: ${props => props.height};
  width: ${props => props.width};
`
export const StyledText = styled.div``
