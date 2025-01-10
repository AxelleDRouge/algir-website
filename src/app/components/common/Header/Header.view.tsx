import React from "react";
import { Header } from "./Header.styles";
import { DEFAULT_COLOR } from "@/app/config";

interface Props {
  classname?: string;
  color?: string;
  children: JSX.Element | string;
}

export default function HeaderView({
  classname,
  children,
  color = DEFAULT_COLOR,
}: Props) {
  return (
    <Header className={classname} color={color}>
      {children}
    </Header>
  );
}
