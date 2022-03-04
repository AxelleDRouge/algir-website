import styled from "styled-components"

export const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
`
export const Nav = styled.nav`
  a {
    font-family: "Helvetica Neue", Helvetica, sans-serif, Regular;
    font-style: normal;
    text-decoration: none;
    font-size: 29px;
    color: #000000;
  }
  @media screen and (max-width: 428px) {
    display: none;
  }
`
