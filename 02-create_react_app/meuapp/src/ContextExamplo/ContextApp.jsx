import React from "react";
import { GlobalStorage } from "./GlobalContext";
import { LimparProdutos } from "./LimparProdutos";
import { Produtos } from "./Produtos";

export const ContextApp = () => {
  return (
      <GlobalStorage>
        <Produtos />
        <LimparProdutos/>
      </GlobalStorage>
  );
};
