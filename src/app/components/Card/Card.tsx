"use client";

import {
  CardContent,
  CardMedia,
  Card as MuiCard,
  Modal,
  Typography,
} from "@mui/material";
import * as S from "./Card.styles";
import { StaticImageData } from "next/image";
import { CLEAR_COLOR } from "@/app/config";
import { useState } from "react";

interface Props {
  image: StaticImageData;
  imageAlt: string;
  title: string;
  subTitle?: string;
  content?: JSX.Element;
  backgroundColor?: string;
  textColor?: string;
  showAllContent?: boolean;
}

export default function Card({
  image,
  imageAlt,
  title,
  subTitle,
  content,
  backgroundColor = CLEAR_COLOR,
  textColor = "black",
  showAllContent = false,
}: Props) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <S.StyledCard
      onClick={handleOpenModal}
      sx={{
        maxWidth: showAllContent ? 500 : 250,
        height: "fit-content",
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      <>
        <S.Image>
          <CardMedia
            component="img"
            width={150}
            src={image.src}
            alt={imageAlt}
          />
        </S.Image>
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">{subTitle}</Typography>
          {showAllContent && content}
        </CardContent>
      </>
      {!showAllContent && (
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <MuiCard
            sx={{
              maxWidth: 650,
              height: "fit-content",
              backgroundColor: CLEAR_COLOR,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              boxShadow: 24,
              borderRadius: "10px",
            }}
          >
            <S.Image>
              <CardMedia
                component="img"
                width={150}
                src={image.src}
                alt={imageAlt}
              />
            </S.Image>
            <CardContent>{content}</CardContent>
          </MuiCard>
        </Modal>
      )}
    </S.StyledCard>
  );
}
