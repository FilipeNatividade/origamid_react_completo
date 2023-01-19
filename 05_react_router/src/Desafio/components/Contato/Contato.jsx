import React from "react";
import * as S from "./style";
import srcImage from "../../../img/contato.jpg";
import { Head } from "../Head/Head";

export const Contato = () => {
  return (
    <S.ContatoBox className="animeLeft ">
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={srcImage} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <S.ListContact>
          <S.List>email@email.com</S.List>
          <S.List>999-999-999</S.List>
          <S.List>rua ali perto, 666</S.List>
        </S.ListContact>
      </div>
    </S.ContatoBox>
  );
};
