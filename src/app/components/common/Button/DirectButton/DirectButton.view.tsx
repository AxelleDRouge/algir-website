"use client";
import * as S from "./DirectButton.styles";
import useWindowDimensions from "../../../../hooks/useWindowDimensions.hook";

export default function DirectButton() {
  const { width } = useWindowDimensions();

  return (
    <S.DirectButton width={width}>
      <>Détail de la prestation</>
    </S.DirectButton>
  );
}
