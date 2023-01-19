import React from "react";
import { NavLink } from "react-router-dom";
import * as S from "./style";

export const Header = () => {
  return (
    <S.Header className="header">
      <S.ListBox>
        <li>
          <NavLink className="link" to="/" end>
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="contato">
            Contato
          </NavLink>
        </li>
      </S.ListBox>
    </S.Header>
  );
};
