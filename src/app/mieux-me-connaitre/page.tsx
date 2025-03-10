"use client";

import React from "react";
import { HeadLine, P, Wrapper } from "./styles";
import ExperienceContent from "../components/ExperienceContent/ExperienceContent";
import { DEFAULT_COLOR } from "../config";
import photoPerso from "../assets/images/photoPerso.jpg";
import Image from "next/image";
import { Typography } from "@mui/material";
import { OL } from "../styles";
import { Header } from "../components/common/Header";

export default function MieuxMeConnaitrePage() {
  return (
    <Wrapper>
      <Header>Expérience</Header>

      <HeadLine>
        <Image src={photoPerso} alt="me" width={250} />

        <div>
          <P>
            <Typography variant="h5" component="div">
              Algir c&apos;est :<br />
            </Typography>
          </P>
          <P>
            <Typography variant="body2" sx={{ fontSize: "18px" }}>
              <OL>
                <li>
                  Plus de 15 ans d’expérience dans des entreprises très
                  diverses, spécialisé dans les frais généraux et la gestion des
                  achats dans des environnements multi-sites
                </li>
                <li>
                  La connaissance d’un large spectre de catégories achats, un
                  réseau de fournisseurs qualifiés
                </li>
                <li>
                  Un regard extérieur et objectif sur votre organisation, avec
                  une vision transversale et “Projet”, qui intègre au processus
                  Achats les autres fonctions de l’entreprise (opérationnels,
                  comptabilité, ressources humaines, etc.)
                </li>
                <li>
                  Une offre centrée sur l’analyse de vos données et l’audit des
                  processus, pour vous proposer des recommandations établies
                  selon vos besoins
                </li>
                <li>
                  Une prestation externalisée, qui vous permet de bénéficier des
                  compétences d’une Acheteuse expérimentée, quand vous en avez
                  besoin, et qui reste disponible jusqu’à la fin du projet.
                </li>
              </OL>
            </Typography>
          </P>
        </div>
      </HeadLine>

      <ExperienceContent
        backgroundColor={DEFAULT_COLOR}
        textColor={"white"}
        showAllContent={true}
      />
    </Wrapper>
  );
}
