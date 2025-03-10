import styled, { css } from "styled-components";
import Card from "@mui/material/Card";

export const StyledCard = styled(Card)``;

export const Image = styled.div<{ showAllContent: boolean }>(
  ({ showAllContent }) => css`
    display: flex;
    object-fit: contain;
    padding: 5px;

    ${showAllContent
      ? css`
          height: fit-content;
          width: 400px;
        `
      : css`
          height: fit-content;
          width: fit-content;
        `}
  `
);
