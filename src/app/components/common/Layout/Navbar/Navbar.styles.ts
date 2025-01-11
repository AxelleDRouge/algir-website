import styled from "styled-components";
import Link from "next/link";
import { CLEAR_COLOR, DEFAULT_COLOR } from "@/app/config";

export const Wrapper = styled.div<{ visible: boolean }>`
  position: absolute;

  display: flex;
  flex-direction: column;

  background-color: white;
  z-index: 3;

  left: ${(props) => (props.visible ? 0 : "-100%")};
  transition: left 0.5s ease-in;
  animation: 3s ease-in 1s infinite reverse both running slidein;
  top: 80px;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const MenuLink = styled(Link)`
  font-family: "Helvetica Neue", Helvetica, sans-serif, Regular;
  font-style: normal;
  text-decoration: none;
  font-size: 29px;
  color: ${DEFAULT_COLOR};
  padding: 2vmin;
  border: 1px solid ${DEFAULT_COLOR};
  border-radius: 5px;
`;
