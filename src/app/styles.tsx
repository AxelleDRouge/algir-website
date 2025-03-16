import styled from "styled-components";
import { Header } from "./components/common/Header";
import TrendingDown from "./components/common/Icons/TrendingDown";
import { CLEAR_COLOR, DEFAULT_COLOR } from "./config";
import Image from "next/image";

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  color: white;
  background-color: ${CLEAR_COLOR};

  @media screen and (max-width: 796px) {
    top: 80px;
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
  grid-template-rows: auto;
  grid-template-columns: auto auto;
  grid-gap: 5vmin;

  @media screen and (min-width: 1440px) {
    height: 845px;
  }

  @media screen and (max-width: 796px) {
    grid-template-rows: auto auto;
    grid-template-columns: auto;
  }
`;
export const MainText = styled.div`
  font-size: 29px;
  font-weight: bold;
  z-index: 0;

  @media screen and (min-width: 1440px) {
    font-size: 40px;
  }

  @media screen and (max-width: 796px) {
    font-size: 2rem;
  }
`;
export const StyledImage = styled(Image)`
  opacity: 1;
  z-index: 1;
`;

export const Service = styled.div`
  margin: 5vh 7vw;
`;

export const Text = styled.div``;

export const ServiceText = styled.div`
  color: white;
  font-size: 18px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;
export const P = styled.p`
  display: flex;
  text-align: justify;
  padding-bottom: 10px;
`;

export const OL = styled.ol`
  text-align: justify;
  padding: 10px;
`;

export const UL = styled.ul`
  text-align: justify;
  padding: 10px;
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

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Reverse = styled.div`
  background-color: ${DEFAULT_COLOR};
  padding: 5vh 7vw;
  display: grid;
  grid-template-rows: auto auto auto;
`;

export const ReverseHeader = styled(Header)`
  @media screen and (min-width: 1440px) {
    font-size: 40px;
  }
`;
