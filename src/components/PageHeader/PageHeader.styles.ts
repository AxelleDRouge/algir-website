import styled from "styled-components"

const DEFAULT_COLOR = "#e9937e"

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
  padding: 0 7vw;
  display: grid;
  justify-content: center;
  grid-template-rows: auto auto auto;
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

export const Service = styled.div`
  margin: 5vh 7vw;
`
export const Header = styled.div`
  color: ${DEFAULT_COLOR};
  font-size: 29px;
  text-align: center;
  font-weight: bold;
  margin: 5vh;
`
export const Text = styled.div``
export const LinkButton = styled.div`
  cursor: pointer;
  background-color: ${DEFAULT_COLOR};
  border-radius: 30px;
  margin: 5vh 7vw;
  padding: 15px;
  display: flex;
  width: 300px;
  justify-content: center;
`
export const ServiceText = styled.div`
  color: black;
  font-size: 18px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`
export const P = styled.p`
  display: flex;
  text-align: justify;
`

export const Reverse = styled.div`
  background-color: ${DEFAULT_COLOR};
  padding: 7vmin;
`

export const ReverseHeader = styled(Header)`
  color: white;
`
export const Chiffre = styled.div`
  color: white;
`
export const Icon = styled.div`
  font-size: 44px;
  color: white;
`
export const ChiffreExplication = styled.div`
  margin: 2vh;
`
export const Questions = styled.div`
  margin: 5vh 7vw;
`
export const Question = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`
export const Titre = styled.span`
  flex-grow: 1;
  color: black;
  text-align: justify;
  font-size: 18px;
`

export const Clients = styled.div`
  background-color: ${DEFAULT_COLOR};
  padding: 7vmin;
`
export const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .gatsby-image-wrapper {
    height: 100% !important;
    width: 45%;
    position: relative;
    z-index: unset;
    margin: 8px;
    @media screen and (min-width: 1440px) {
      width: unset;
    }
  }
`
