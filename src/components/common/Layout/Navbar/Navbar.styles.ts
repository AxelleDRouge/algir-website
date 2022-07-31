import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled.div<{ visible: boolean }>`
  position: absolute;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;

  background-color: white;
  z-index: 1;

  right: ${props => (props.visible ? 0 : "-100%")};
  transition: right 0.5s ease-in;

  @media screen and (min-width: 428px) {
    display: none;
  }
`

export const MenuLink = styled(Link)`
  font-family: "Helvetica Neue", Helvetica, sans-serif, Regular;
  font-style: normal;
  text-decoration: none;
  font-size: 29px;
  color: #000000;
  padding: 2vmin;
  border: 1px solid #000000;
`
