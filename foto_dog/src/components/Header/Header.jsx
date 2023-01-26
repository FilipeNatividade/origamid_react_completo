import React from "react";
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";
import { useUserStorage } from "../../Providers/UserStorage";
import * as S from "./style";

export const Header = () => {
  const { data } = useUserStorage();

  return (
    <S.HederBox>
      <S.HederNav className="container">
        <S.LogoLink to="/" aria-label="Dogs - Home">
          <Dogs />
        </S.LogoLink>
        {data ? (
          <S.LoginLink to="/conta">{data.nome}</S.LoginLink>
        ) : (
          <S.LoginLink to="/login">Login / Criar</S.LoginLink>
        )}
      </S.HederNav>
    </S.HederBox>
  );
};
