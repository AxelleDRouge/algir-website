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
  margin: 2vh 7vw;

  @media screen and (min-width: 1440px) {
    font-size: 26px;
  }
`

export const DIV = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 26px;

  @media screen and (min-width: 1440px) {
    margin-left: 7vw;
    flex-direction: row;
  }
`
