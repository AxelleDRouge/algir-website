import { DEFAULT_COLOR } from "@/app/config";
import styled from "styled-components";

export const Link = styled.div<{ width: number; focus: boolean }>`
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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  @media screen and (min-width: 1440px) {
    &:hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
  }
`;
