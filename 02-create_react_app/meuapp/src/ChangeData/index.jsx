
import { useState } from "react";

import styled from "styled-components";

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const Span = styled.span`
  font-weight: bold;
`;

const ativo = {
  color: "#008000",
};

const inativo = {
  color: "#f80000",
};
export const ChangeData = () =>{
    const [dado, setDado] = useState(luana);

  const handleTotal = (array) => {
    let total = 0;
    array.map((item) => {
      total += parseFloat(item.preco.replace("R$ ", ""));
    });
    return total;
  };

  const handleChangeData = () => {
    if (dado.cliente === "Mario") {
      setDado(luana);
    } else if (dado.cliente === "Luana") {
      setDado(mario);
    }
  };
    return(
        <>
        <button onClick={handleChangeData}>Trocar Dados</button>
        <br />
  
        <p>
          Nome: <Span>{dado?.cliente}</Span>
        </p>
        <p>
          Idade: <Span>{dado?.idade}</Span>
        </p>
        <p>
          Situação:{" "}
          <Span style={dado?.ativa ? ativo : inativo}>
            {dado?.ativa ? "Ativo" : "Inativo"}
          </Span>
        </p>
        <p>
          Total: <Span>R$ {handleTotal(dado?.compras)}</Span>
        </p>
        {handleTotal(dado?.compras) > 10000 && (
          <Span>Você está gastando muito</Span>
        )}
      </>
    )
}