import styled, { css } from "styled-components";

export const Cards = styled.div<{ showAllContent?: boolean }>(
  ({ showAllContent }) => css`
    display: ${showAllContent ? "grid" : "flex"};
    flex-wrap: wrap;
    gap: 10px;
    padding-bottom: 2vh;
  `
);

export const OL = styled.ol`
  text-align: justify;
  padding: 10px;
`;

export const UL = styled.ul`
  text-align: justify;
  padding: 10px;
`;
export const P = styled.p`
  display: flex;
  text-align: justify;
  padding-bottom: 10px;
`;
