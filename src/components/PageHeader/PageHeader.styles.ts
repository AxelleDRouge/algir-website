import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  color: white;
  text-align: center;

  .gatsby-image-wrapper {
    height: 845px !important;
    position: absolute;
    z-index: -1;
    @media screen and (min-width: 1440px) {
      width: 1920px !important;
    }
  }
`
export const Pres = styled.div`
  height: 845px !important;
  grid-area: 1/1;
  position: relative;
  place-items: center;
  background: #00000072 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  opacity: 1;

  display: grid;
  justify-content: center;
`
export const MainText = styled.div`
  font-size: 40px;
  font-weight: bold;
  @media screen and (max-width: 425px) {
    font-size: 29px;
  }
`
export const SubText = styled.div`
  font-size: 32px;
  @media screen and (max-width: 425px) {
    font-size: 24px;
  }
`
export const MeContacterButton = styled.div``
