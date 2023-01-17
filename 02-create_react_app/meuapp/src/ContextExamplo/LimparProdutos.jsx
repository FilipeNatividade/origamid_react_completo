import React from "react";
import { GlobalContext } from "./GlobalContext";

export const LimparProdutos = () => {
const {limparDados} = React.useContext(GlobalContext)

  return <button onClick={limparDados}>Limpar</button>;
};
