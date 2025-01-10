"use client";

import {
  MainText,
  OL,
  P,
  Pres,
  Reverse,
  ReverseHeader,
  Service,
  ServiceText,
  SubText,
  UL,
  Wrapper,
} from "./styles";
import { Questions } from "./components/Questions";
import LinkButton from "./components/common/Button/LinkButton";
import { DirectButton } from "./components/common/Button/DirectButton";
import HomeImage from "./components/common/Images/HomePageImage/HomePageImage";
import ExperienceContent from "./components/ExperienceContent/ExperienceContent";
import { CLEAR_COLOR } from "./config";

export default function HomePage() {
  return (
    <>
      <Wrapper>
        <Pres>
          <HomeImage />
          <MainText>Optimisation des dépenses externes des PME</MainText>
          <div></div>
          <SubText>
            Selon le baromètre Stratégie Achats / PhD Business Solution 2021,{" "}
            <br /> 3 PME sur 5 ne disposent pas de Service Achats, et 1 PME sur
            10 emploie un Responsable des Achats.
          </SubText>
        </Pres>
        <Service>
          <ServiceText>
            <P>
              Et pourtant, les achats représentent en moyenne 60% du chiffre
              d’affaires d’une PME, dont 15% à 40% uniquement pour les frais
              généraux, rendant cruciale une gestion efficace pour améliorer la
              performance globale de l’entreprise.
            </P>
            <P>
              La charge des Achats repose bien souvent sur le chef d’entreprise,
              ou ses proches collaborateurs. Mais ce n’est pas leur métier, ils
              ont d’autres priorités et peu de temps à y consacrer.
            </P>
            <P>
              C’est pour alléger cette charge et améliorer leur performance que
              j’ai créé ALGIR. ALGIR est une structure de conseil en achats et
              gestion des dépenses externes, totalement indépendante, à
              destination des PME. Je pose un regard extérieur sur vos dépenses,
              pour identifier et mettre en œuvre toutes les pistes
              d’optimisation des coûts et des processus.
            </P>
            <P>
              Mon objectif est de permettre aux dirigeants de gagner les “3T” :
            </P>
            <P>
              <br />
              <UL>
                <li>Trésorerie</li>
                <li>Temps</li>
                <li>
                  Tranquillité d’esprit pour se concentrer sur leur activité
                </li>
              </UL>
            </P>
          </ServiceText>
        </Service>
        <Reverse>
          <ReverseHeader color={"white"}>
            En quoi consiste la prestation ?
          </ReverseHeader>
          <P>
            Algir c&apos;est :<br />
          </P>
          <P>
            <OL>
              <li>
                Plus de 15 ans d’expérience dans des entreprises très diverses,
                spécialisé dans les frais généraux et la gestion des achats dans
                des environnements multi-sites
              </li>
              <li>
                La connaissance d’un large spectre de catégories achats, un
                réseau de fournisseurs qualifiés
              </li>
              <li>
                Un regard extérieur et objectif sur votre organisation, avec une
                vision transversale et “Projet”, qui intègre au processus Achats
                les autres fonctions de l’entreprise (opérationnels,
                comptabilité, ressources humaines, etc.)
              </li>
              <li>
                Une offre centrée sur l’analyse de vos données et l’audit des
                processus, pour vous proposer des recommandations établies selon
                vos besoins
              </li>
              <li>
                Une prestation externalisée, qui vous permet de bénéficier des
                compétences d’une Acheteuse expérimentée, quand vous en avez
                besoin, et qui reste disponible jusqu’à la fin du projet.
              </li>
            </OL>
          </P>
        </Reverse>
        <Questions
          questions={[
            {
              titre:
                "Mon entreprise est petite et nous sommes des prestataires de services. Nous ne faisons pas d’achats. Que peux-tu optimiser chez nous ?",
              content: `Si vous payez des factures, vous faites des achats.<br />
              <br />
              Quels que soient la taille de l’entreprise et le secteur d’activité, il y a des sujets incontournables :<br />
              <ul>
              <li>l’énergie</li>
              <li>les assurances</li>
              <li>le loyer et l’entretien des locaux professionnels</li>
              <li>la téléphonie, la bureautique et l’informatique</li>
              <li>la protection sociale des salariés (santé, prévoyance, etc.)</li>
              <li>taxes diverses</li>
              <li>…</li>
              </ul>
              <br />
              Si vous avez des équipes sur le terrain, il leur faut :<br />
              <ul>
              <li>s’équiper : matériel, entretien , pièces détachées, vérifications réglementaires</li>
              <li>communiquer : téléphone / tablette / ordinateur, protection anti-chocs et anti-vol, accès internet mobile</li>
              <li>se déplacer : véhicule, carburant, hôtel, restaurant, avion/train</li>
              <li>être protégés : EPI, dispositifs de protection du travailleur isolé</li>
              <li>etc.</li>
              </ul>
              <br />
              <br />

              Sur tous ces postes, sans exception, il est possible d’optimiser les dépenses et les organisations.

              `,
            },
            {
              titre: "Comment tu te rémunères ?",
              content: `La prestation est facturée au forfait, en fonction du temps passé. <br />
D’autres modes de facturation peuvent être envisagés, selon la typologie de mission.
`,
            },
            {
              titre: "Est-ce qu’il y a un engagement de durée à respecter ?",
              content: `Aucun engagement.  <br />
Chaque mission est différente, elle peut durer ½ journée, comme 2 jours par semaine, ou plusieurs mois.  <br />
L’offre de services est établie sur mesure, en fonction de la problématique du client.
`,
            },
            {
              titre:
                "Les fournisseurs que tu recommandes, ils te reversent combien ?",
              content: `Rien.  <br />
Je ne passe aucun accord d’apport d’affaires avec les fournisseurs que je recommande. Si je les recommande, c’est que je crois en leurs capacités à répondre aux besoins des clients.
`,
            },
          ]}
        />
        <Reverse>
          <ReverseHeader color={"white"}>Expérience</ReverseHeader>
          <ExperienceContent
            backgroundColor={CLEAR_COLOR}
            textColor={"black"}
          />
        </Reverse>
      </Wrapper>
      <LinkButton />
    </>
  );
}
