import Image from "next/image";
import styled from "styled-components";

export const StyledImage = styled(Image)`
  height: 549px;
  width: 1920px;
  position: absolute;
  opacity: 0.7;

  @media screen and (min-width: 1440px) {
    height: 845px;
  }
`;
