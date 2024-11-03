import styled from "styled-components";
import { Header } from "./components/common/Header";
import Quote from "./components/common/Icons/Quote";
import TrendingDown from "./components/common/Icons/TrendingDown";
import { ReactNode } from "react";

const DEFAULT_COLOR = "#e9937e";
const CLEAR_COLOR = "#FFCEC3";

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  color: white;
  text-align: center;

  .gatsby-image-wrapper {
    height: 549px;
    position: absolute;
    z-index: -1;

    @media screen and (min-width: 1440px) {
      height: 845px;
    }
  }
`;
export const Pres = styled.div`
  height: 549px;
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

  @media screen and (min-width: 1440px) {
    height: 845px;
  }
`;
export const MainText = styled.div`
  font-size: 29px;
  font-weight: bold;

  @media screen and (min-width: 1440px) {
    font-size: 40px;
  }
`;
export const SubText = styled.div`
  font-size: 24px;

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`;

export const Service = styled.div`
  margin: 5vh 7vw;
`;

export const Text = styled.div``;
export const LinkButton = styled.div<{ width: number; focus: boolean }>`
  position: absolute;
  z-index: 2;
  bottom: 80px;
  left: ${(props) => `${props.width / 2 - 130}px`};
  cursor: pointer;
  background-color: ${DEFAULT_COLOR};
  border-radius: 30px;
  margin: auto;
  padding: 15px;
  display: flex;
  width: 200px;
  justify-content: center;
  color: white;
  box-shadow: ${(props) =>
    props.focus
      ? `rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;`
      : `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset`};

  @media screen and (min-width: 1440px) {
    &:hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
  }
`;
export const DirectButton = styled.div<{
  width: number;
  focus: boolean;
  children: ReactNode;
}>`
  position: relative;
  z-index: 2;
  bottom: 5px;
  left: ${(props) => `${props.width / 2 - 130}px`};
  cursor: pointer;
  background-color: ${DEFAULT_COLOR};
  border-radius: 30px;
  margin: auto;
  padding: 15px;
  display: flex;
  width: 200px;
  justify-content: center;
  color: white;
  box-shadow: ${(props) =>
    props.focus
      ? `rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;`
      : `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset`};

  @media screen and (min-width: 1440px) {
    &:hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
  }
`;

export const ServiceText = styled.div`
  color: black;
  font-size: 18px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;
export const P = styled.p`
  display: flex;
  text-align: justify;
`;
export const Chiffre = styled.div`
  color: white;
`;
export const Icon = styled.div`
  font-size: 44px;
  color: white;
`;

export const TrendingDownIcon = styled(TrendingDown)`
  width: 20vw;
  height: 100%;

  @media screen and (min-width: 1440px) {
    width: 7vw;
    height: 100%;
  }
`;

export const TrendingUpIcon = styled(TrendingDown)`
  width: 20vw;
  height: 100%;
  transform: rotateX(180deg);

  @media screen and (min-width: 1440px) {
    width: 7vw;
    height: 100%;
  }
`;
export const ChiffreExplication = styled.div`
  margin: 2vh;

  @media screen and (min-width: 1440px) {
    font-size: 26px;
  }
`;

export const Clients = styled.div`
  background-color: ${DEFAULT_COLOR};
  padding: 7vmin;
`;
export const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: fit-content;

  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: 200px 200px 200px;
    grid-template-rows: 200px 200px;
    grid-gap: 5vmin;
  }

  .gatsby-image-wrapper {
    height: 100%;
    width: 45%;
    position: relative;
    z-index: unset;
    margin: 8px;

    @media screen and (min-width: 1440px) {
      height: unset;
      width: unset;
      position: relative;
      z-index: unset;
      margin: 8px;
    }
  }
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Reverse = styled.div`
  background-color: ${DEFAULT_COLOR};
  padding: 7vmin;
  display: grid;
  grid-template-rows: auto auto auto;
`;

export const ReverseHeader = styled(Header)`
  @media screen and (min-width: 1440px) {
    font-size: 40px;
  }
`;
export const Bulle = styled.div`
  background-color: ${CLEAR_COLOR};
  border-radius: 10%;
  padding: 5vmin;
  margin: 0 7vmin;

  @media screen and (min-width: 1440px) {
    font-size: 26px;
    border-radius: 25px;
  }
`;
export const OpenQuote = styled(Quote)`
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  position: relative;
  bottom: -35px;
`;
export const CloseQuote = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  top: -35px;
`;
