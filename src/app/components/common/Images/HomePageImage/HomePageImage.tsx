import HomePageImage from "../../../../assets/images/home-page.jpg";
import useWindowDimensions from "../../../../hooks/useWindowDimensions.hook";
import * as S from "./HomePageImage.styles";

export default function HomeImage() {
  const { width } = useWindowDimensions();
  return (
    <S.StyledImage
      src={HomePageImage}
      width={width ?? 1920}
      height={845}
      alt="algir-home-background"
    />
  );
}
