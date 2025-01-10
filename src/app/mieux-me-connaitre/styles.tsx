import styled from "styled-components";
import { CLEAR_COLOR } from "../config";

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  text-align: center;
  gap: 10px;
  margin: 5vh 7vw;
  background-color: ${CLEAR_COLOR};
`;

export const HeadLine = styled.div`
  display: flex;
  gap: 10vw;
`;

export const P = styled.p`
  display: flex;
  text-align: justify;
  color: black;
  font-size: 18px;

  @media screen and (min-width: 1440px) {
    font-size: 26px;
  }
`;

export const DIV = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 26px;

  @media screen and (min-width: 1440px) {
    margin-left: 7vw;
    flex-direction: row;
  }
`;
