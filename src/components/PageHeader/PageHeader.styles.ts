import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  color: white;
  text-align: center;

  .gatsby-image-wrapper {
    position: absolute;
    z-index: -1;
  }
`
export const Pres = styled.div`
  grid-area: 1/1;
  position: relative;
  place-items: center;
  background: #00000072 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  opacity: 1;
`
export const MainText = styled.div`
  font-size: 40px;
  font-weight: bold;
`
export const SubText = styled.div`
  font-size: 32px;
`
export const MeContacterButton = styled.div``
