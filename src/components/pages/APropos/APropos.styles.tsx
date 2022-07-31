import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  text-align: center;
`

export const P = styled.p`
  display: flex;
  text-align: justify;
  color: black;
  font-size: 18px;
  margin: 5vh 7vw;

  @media screen and (min-width: 1440px) {
    font-size: 26px;
    margin: 2vh 7vw;
  }
`
