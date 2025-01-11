import styled from "styled-components";
import { DefaultButton } from "../../Button/DefaultButton";
import Link from "next/link";
import { CLEAR_COLOR } from "@/app/config";

export const Wrapper = styled.header`
  height: 125px;
  width: 100%;
  box-shadow: 0px 3px 6px #00000029;
  display: grid;
  align-items: center;
  background-color: ${CLEAR_COLOR};
  padding: 2vh 7vw;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr auto;
    padding: 1vh 7vw;
    height: 80px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: auto auto auto auto 1fr;
    grid-gap: 45px;
  }
`;

export const NavbarButton = styled(DefaultButton)`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  a {
    font-family: "Helvetica Neue", Helvetica, sans-serif, Regular;
    font-style: normal;
    text-decoration: none;
    font-size: 29px;
    color: #000000;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const ImageLink = styled(Link)``;
