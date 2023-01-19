import React from "react";
import { Link } from "react-router-dom";
import { Head } from "../Head/Head";
import * as S from "./style";

export const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto`)
      .then((response) => response.json())
      .then((json) => setProdutos(json));
  }, []);

  if (produtos === null) return null;
  return (
    <S.ProdutosBox className="animeLeft">
      <Head
        title={`Ranek`}
        description={`Descrição do site Ranek`}
      />
      {produtos.map((produto) => {
        return (
          <Link to={`produto/${produto.id}`} key={produto.id}>
            <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
            <S.ProdutosNomes>{produto.nome}</S.ProdutosNomes>
          </Link>
        );
      })}
    </S.ProdutosBox>
  );
};
