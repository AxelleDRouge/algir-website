import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import {
  MainText,
  MeContacterButton,
  Pres,
  SubText,
  Wrapper,
} from "./PageHeader.styles"

interface Props {
  className?: string
}

export default function PageHeader({ className }: Props) {
  return (
    <Wrapper className={className}>
      <Pres>
        <MainText>
          Faîtes vos achats autrement, en optimisant vos coûts récurrents ?
        </MainText>
        <SubText>
          « Aucune dépense n’est incompressible, il est toujours possible d’agir
          pour les réduire. »  Sur ce principe je vous propose d’analyser et
          d’optimiser vos dépenses.
        </SubText>
        <MeContacterButton />
      </Pres>
      <StaticImage
        src="../../images/home-page.jpg"
        width={1920}
        height={845}
        formats={["auto", "webp", "avif"]}
        alt="algir-home-background"
        style={{ gridArea: "1/1" }}
      />
    </Wrapper>
  )
}
