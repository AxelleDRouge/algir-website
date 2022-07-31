import styled from "styled-components"

export const Header = styled.div<{ color: string }>`
  color: ${props => props.color};
  font-size: 29px;
  text-align: center;
  font-weight: bold;
  margin: 5vh;
`
