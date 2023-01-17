import React from "react";

export const Produtos = ({ dados }) => {
  React.useEffect(()=>{},[dados])
  return (
    <div>
      <h4>{dados.nome}</h4>
      <p>R$ {dados.preco}</p>
      <img
        style={{ maxWidth: "100px" }}
        src={dados.fotos[0].src}
        alt={dados.fotos[0].titulo}
      />
    </div>
  );
};
