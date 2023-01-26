import React from "react";
import * as S from "./style";

export const ButtonCustom = ({ children, ...props }) => {
  return <S.ButtonBox {...props}>{children}</S.ButtonBox>;
};
