import React from "react";
import { GlobalContext } from "./GlobalContext";

export const Produtos = () => {
  const { produto } = React.useContext(GlobalContext);

  if (produto === null) return null;
  return (
    <div>
      Produtos:
      {produto.map((item) => {
        return <li key={item.id}>{item.nome}</li>;
      })}
    </div>
  );
};
