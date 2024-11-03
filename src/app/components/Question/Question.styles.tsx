import styled from "styled-components";
import ExpandMore from "../common/Icons/ExpandMore";
import Button from "../common/Button";

export const QuestionItem = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr;
  padding: 1vmin;
`;
export const ExpandMoreIcon = styled(ExpandMore)`
  width: 10vw;
  height: 100%;

  @media screen and (min-width: 1440px) {
    width: 7vmin;
    height: 7vmin;
  }
`;
export const ExpandMoreReverseIcon = styled(ExpandMore)`
  width: 10vw;
  height: 100%;
  transform: rotate(180deg);

  @media screen and (min-width: 1440px) {
    width: 7vmin;
    height: 7vmin;
  }
`;

export const QuestionTitre = styled.span`
  flex-grow: 1;
  color: black;
  text-align: justify;
  font-size: 18px;

  @media screen and (min-width: 1440px) {
    font-size: 26px;
  }
`;

export const QuestionContent = styled.div<{ visible: boolean }>`
  color: black;
  text-align: justify;
  font-size: 18px;
  grid-column: span 2;
  display: ${(props) => (props.visible ? "flex" : "none")};
  height: 100%;
  transition: display 0.2s ease-in;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const QuestionButton = styled(Button)`
  &:hover {
    transform: rotate(180deg);
    transition: transform 0.2s ease-in;
  }
`;
