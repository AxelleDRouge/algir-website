import { Typography } from "@mui/material";
import { Card } from "../Card";
import { Cards, P, UL } from "./ExperienceContent.styles";
import ChaussonImage from "../../assets/images/chausson.png";
import NatixisImage from "../../assets/images/natixis.png";
import KingfisherImage from "../../assets/images/kingfisher.png";
import CarrefourImage from "../../assets/images/carrefour.png";
import SavenciaImage from "../../assets/images/savencia.png";
import TaquipneuImage from "../../assets/images/taquipneu.jpg";
import BricodepotImage from "../../assets/images/bricoDepot.png";

interface Props {
  backgroundColor: string;
  textColor: string;
  showAllContent?: boolean;
}

export default function ExperienceContent({
  backgroundColor,
  textColor,
  showAllContent,
}: Props) {
  return (
    <Cards>
      <Card
        image={TaquipneuImage}
        imageAlt={"taquipneu"}
        title={"Responsable Achats et Moyens Généraux"}
        subTitle="Montauban (82) – 5 ans "
        backgroundColor={backgroundColor}
        textColor={textColor}
        showAllContent={showAllContent}
        content={
          <div>
            <Typography variant={"h6"}>Avril 2020- Décembre 2024 : </Typography>
            <Typography variant={"h5"}>
              Responsable Achats & Moyens Généraux, TAQUIPNEU, 1er franchisé
              EUROMASTER de France (Montauban, 82)
            </Typography>
            <Typography variant="subtitle1">
              55 points de vente / 600 collaborateurs
            </Typography>
            <Typography variant={"body2"}>
              <P>
                Création de la fonction Achats dans l’entreprise, recrutement et
                management de 2 collaborateurs, rattachement au Directeur
                Général
              </P>
              <P>
                Chef de projet pour la mise en place d’un logiciel de GMAO & la
                dématérialisation des commandes de Frais Généraux
              </P>
              <P>
                Gestion quotidienne des 280 véhicules, équipements des 55 points
                de vente, consommables, sinistres et relations bailleurs
              </P>
              <P>
                Définition et déploiement d’une Politique Achats pour les Frais
                Généraux
              </P>
            </Typography>
            <Typography variant={"body2"}>
              <UL>
                <li>
                  Energie / 650K€ / plan de réduction des consommation (-30% en
                  1 an), AO en 2022 permettant de réduire l’impact de
                  l’augmentation du prix de l’électricité (budget x2.5 dans un
                  marché à x5)
                </li>
                <li>
                  Pièces détachées automobiles / 3M€ / audit des processus
                  d’achats et de l’application des conditions négociées,
                  remboursement de 10% de trop-perçu
                </li>
                <li>
                  Vêtements de travail / 85K€ / baisse du budget de 18% en
                  achetant le stock et en internalisant la gestion
                </li>
                <li>
                  Optimisation de la fiscalité locale : TLPE, Taxe Foncière, CFE
                </li>
              </UL>
            </Typography>
          </div>
        }
      />
      <Card
        image={ChaussonImage}
        imageAlt={"chausson"}
        title={"Responsable Achats Généraux et Investissements"}
        subTitle="St Alban (31) – 2 ans "
        backgroundColor={backgroundColor}
        textColor={textColor}
        showAllContent={showAllContent}
        content={
          <div>
            <Typography variant={"h6"}>Avril 2018- Avril 2020 : </Typography>
            <Typography variant={"h5"}>
              Responsable Achats Frais Généraux & Investissements, CHAUSSON
              MATERIAUX (St Alban, 31)
            </Typography>
            <Typography variant="subtitle1">
              450 agences / 4.000 collaborateurs
            </Typography>
            <Typography variant={"body2"}>
              <P>
                Manager de 2 équipes : Achats généraux (2 acheteurs et 1
                assistante) et Matériel Roulant (3 gestionnaires, 3 adjoints et
                2 assistantes)
              </P>
              <P>Rattachement au Directeur Général Finance</P>
              <P>
                Périmètre : France (400 agences et 50 sites industriels /
                logistiques)
              </P>

              <P>
                Catégories : énergie, assurances, gestion des déchets,
                téléphonie mobile, bureautique, fournitures de bureau, mobilier,
                vérifications réglementaires, etc.
              </P>
              <P>
                Accompagnement de la Direction Travaux dans le raccordement
                électrique, l’équipement et l’aménagement des points de vente
                créés ou déménagés
              </P>
              <P>
                Gestion quotidienne de la flotte de voitures (1100 cartes
                grises) : commandes, livraisons, suivi des pannes et des
                sinistres, revente aux collaborateurs ou aux enchères
              </P>
              <P>
                Déclaration et optimisation des taxes liées aux catégories
                gérées : TVS, TICPE, CSPE, taxe à l’essieu
              </P>
            </Typography>

            <Typography variant={"h6"}>Faits marquants : </Typography>
            <Typography variant={"body2"}>
              <UL>
                <li>
                  Assurance santé / prévoyance (5M€) : AO visant à sélectionner
                  un nouvel ensemble assureur + courtier + gestionnaire et
                  dématérialiser la gestion
                </li>
                <li>
                  Electricité (3M€) : AO pour renouveler les contrats de
                  fourniture d’électricité pour l’ensemble des sites (sélection
                  de Total Energies), sélection et mise en place d’un outil de
                  pilotage (Ubigreen) pour identifier les anomalies de
                  consommation
                </li>
                <li>
                  Electrification de la flotte : sélection d’un prestataire pour
                  fournir et exploiter des bornes de recharge électriques,
                  sélection d’un modèle de véhicule électrique à déployer pour
                  les responsables d’agence et adaptation de la Car Policy
                </li>
                <li>
                  Audit des pratiques de gestion des déchets pour augmenter le
                  taux de tri et réduire les coûts
                </li>
              </UL>
            </Typography>
          </div>
        }
      />
      <Card
        image={KingfisherImage}
        imageAlt={"kingfisher"}
        title={"Group Purchasing Manager"}
        subTitle="Longpont sur Orge (91) – 2 ans "
        backgroundColor={backgroundColor}
        textColor={textColor}
        showAllContent={showAllContent}
        content={
          <div>
            <Typography variant={"body2"}>
              Avril 2016 - décembre 2017
            </Typography>
            <Typography variant={"h5"}>
              Group Purchasing Manager, catégories Ressources Humaines, Voyages
              et Flotte Automobile, GROUPE KINGFISHER (Templemars, 59)
            </Typography>
            <Typography variant="subtitle1">
              8 pays / 1.200 points de vente / 80.000 collaborateurs
            </Typography>
            <P>
              Mise en application du plan stratégique ONE KINGFISHER, objectif
              de réduction des Achats Non Marchands de £100M en 5 ans
            </P>
            <Typography variant={"h6"}>Faits marquants : </Typography>
            <Typography variant={"body2"}>
              <UL>
                <li>
                  Voyages / £30M / mise au point d’une Politique Voyages Groupe
                  / rationalisation du panel d’agences de voyages et unification
                  des pratiques
                </li>
                <li>
                  Recrutement / £4M / appel d’offres Groupe permettant la
                  réduction de 60% du nombre de fournisseurs / £500K d’économies
                </li>
                <li>
                  Flotte automobile / £13M / mise en place d’accords commerciaux
                  multinationaux avec les constructeurs et les loueurs longue
                  durée
                </li>
              </UL>
            </Typography>
          </div>
        }
      />
      <Card
        image={BricodepotImage}
        imageAlt={"bricodepot"}
        title={"Acheteuse Non Marchand"}
        subTitle="Longpont sur Orge (91) – 2 ans "
        backgroundColor={backgroundColor}
        textColor={textColor}
        showAllContent={showAllContent}
        content={
          <div>
            <Typography variant={"body2"}>
              Septembre 2014 - avril 2016
            </Typography>
            <Typography variant={"h5"}>Acheteuse Non Marchand</Typography>
            <P>Rattachement au Responsable Achats Non Marchands</P>
            <P>
              Périmètre : France (~115 magasins) + projets menés en commun avec
              Castorama France (~100 magasins)
            </P>
            <P></P>
            <Typography variant={"h6"}>Faits marquants : </Typography>
            <Typography variant={"body2"}>
              <UL>
                <li>
                  Intérim : AO en commun avec Castorama pour renouveler les
                  accords cadre Intérim France
                </li>
                <li>
                  Nettoyage & Gardiennage : 2 AO en commun avec Castorama,
                  cahier des charges unique, sélection de prestataires communs
                  par zone géographique
                </li>
                <li>
                  Vêtements de travail : remplacement du fournisseur historique
                  (+15 ans ancienneté, dépendance économique totale) et
                  changement de la gamme de vêtements Brico Dépôt
                </li>
                <li>
                  Flotte automobile : AO pour sélectionner un nouveau loueur
                  (avant, application des conditions du contrat Castorama), avec
                  modification de la Car Policy pour abaisser les loyers
                  maximum, sans impacter la liste des véhicules éligibles
                </li>
                <li>
                  Maintenance des portes automatiques : AO pour sélectionner 2
                  prestataires de maintenance pour les portes automatiques des
                  magasins, et ne plus attribuer systématiquement la maintenance
                  au fabricant
                </li>
                <li>
                  Formations obligatoires : AO commun avec Castorama pour
                  sélectionner 1 prestataire unique pour toutes les formations
                  obligatoires (incendie, SST, habilitation électrique,
                  formation des représentants du personnel)
                </li>
              </UL>
            </Typography>
          </div>
        }
      />
      <Card
        image={CarrefourImage}
        imageAlt={"carrefour"}
        title={"Responsable Achats Investissements & Maintenance"}
        subTitle="Evry (91) – 8 mois "
        backgroundColor={backgroundColor}
        textColor={textColor}
        showAllContent={showAllContent}
        content={
          <div>
            <Typography variant={"body2"}>Octobre 2013 - juin 2014</Typography>
            <Typography variant={"h5"}>
              Responsable Achats Investissements & Maintenance - Carrefour
              Hypermarchés, groupe CARREFOUR, Evry
            </Typography>
            <P>
              Direction Technique, service Achats techniques Remplacement suite
              à départ Responsable Achats techniques & Investissements
              Rattachement au Directeur Achats techniques & Investissements,
              CAPEX / OPEX Périmètre : Carrefour France (hypermarchés,
              supermarchés intégrés, assistance aux franchisés supermarchés et
              proximité)
            </P>
            <Typography variant={"h6"}>Faits marquants : </Typography>
            <Typography variant={"body2"}>
              <UL>
                <li>
                  Rénovation hypermarchés : appels d’offres pour attribuer les
                  marchés de Second Oeuvre (peinture, sols, carrelage)
                </li>
                <li>
                  Accompagnement de la Direction Produits Frais pour
                  sélectionner le matériel en atelier et en rayon : boulangerie,
                  pâtisserie, boucherie, charcuterie, traiteur, fruits &
                  légumes, poissonnerie, fleurs
                </li>
                <li>
                  Suivi application des contrats de maintenance et vérification
                  réglementaire des balances
                </li>
              </UL>
            </Typography>
          </div>
        }
      />
      <Card
        image={NatixisImage}
        imageAlt={"natixis"}
        title={"Acheteuse"}
        subTitle="Charenton-le-Pont (94) – 2 ans "
        backgroundColor={backgroundColor}
        textColor={textColor}
        showAllContent={showAllContent}
        content={
          <div>
            <Typography variant={"body2"}>
              Octobre 2011 - octobre 2013
            </Typography>
            <Typography variant={"h5"}>
              Acheteuse Voyages & Communication - Natixis SA, groupe BPCE,
              Charenton le Pont Direction des Achats, équipe Services &
              Logistique
            </Typography>
            <Typography variant="subtitle1">
              8 pays / 1.200 points de vente / 80.000 collaborateurs
            </Typography>
            <P>
              Rattachement à la Responsable Achats Services & Logistique
              Périmètre : Natixis Monde + groupe BPCE pour la négociation des
              accords cadre avec Air France et la SNCF
            </P>
            <Typography variant={"h6"}>Voyages  (27M€) : </Typography>

            <Typography variant={"body2"}>
              <UL>
                <li>
                  Avant 1 agence de voyages par entité, réservation offline
                </li>
                <li>
                  Appel d’offres Monde pour sélectionner 1 agence de voyages
                  unique (AMEX) avec 1 outil de réservation en ligne (Traveldoo)
                  et paiement par carte logée (Airplus)
                </li>
                <li>
                  Négociation tarifs hôtels conformes à la Politique Voyages
                  dans les principales destinations
                </li>
                <li>
                  Aérien : renégociation du contrat Air France pour le Groupe
                  BPCE, négociation des accords cadre avec les compagnies
                  challengers à Air France
                </li>
                <li>Rail : renégociation du contrat SNCF</li>
              </UL>
            </Typography>
            <Typography variant={"h6"}>Communication (12M€) : </Typography>
            <Typography variant={"body2"}>
              <UL>
                <li>
                  Appel d’offres Imprimés : sélection d’imprimeurs France avec
                  tarifs négociés, intégration de 3 imprimeurs du Secteur Adapté
                  et Protégé
                </li>
                <li>
                  Assemblée Générale 2012 : sélection de prestataires Accueil,
                  Sécurité et Retransmission
                </li>
                <li>
                  Relation actionnaires : sélection d’un prestataire pour créer
                  le site internet dédié aux relations avec les actionnaires
                </li>
                <li>
                  Evénementiel : sélection de lieux pour héberger les événements
                  organisés par la Direction de la Communication
                </li>
              </UL>
            </Typography>
          </div>
        }
      />
      <Card
        image={SavenciaImage}
        imageAlt={"savencia"}
        title={"Acheteuse Pilote Groupe"}
        subTitle="Viroflay (78) – 3 ans "
        backgroundColor={backgroundColor}
        textColor={textColor}
        showAllContent={showAllContent}
        content={
          <div>
            <Typography variant={"body2"}>
              Septembre 2008 - septembre 2021
            </Typography>
            <Typography variant={"h5"}>
              SB Alliance, société de services du siège du groupe SAVENCIA (ex
              SOPARIND BONGRAIN), Viroflay
            </Typography>
            <P>
              Groupe décentralisé “fédération de PME” Direction des Achats,
              équipe “Achats Services”, rattachement au Responsable Achats
              Services Création de poste Acheteuse, dans une équipe avec 1
              responsable, rattaché au Directeur des Achats, 1 autre acheteur
              (dédié énergie) et 1 assistante (en charge de l’informatique et de
              la bureautique)
            </P>
            <P>Périmètre : Europe (15M€)</P>
            <Typography variant={"h6"}>Catégories : </Typography>
            <Typography variant={"body2"}>
              <UL>
                <li>
                  location longue durée (gestion de la flotte pour le Groupe et
                  ses partenaires au sein d’une centrale d’achats dédiée aux
                  frais généraux : Heineken France Boissons, Sodiaal, Yoplait,
                  General Mills) / 1500 véhicules
                </li>
                <li>location courte durée</li>
                <li>voyages & déplacements : catégorie créée en 2010</li>
              </UL>
            </Typography>
          </div>
        }
      />
    </Cards>
  );
}
