import React from "react";
import { Titulo } from "./Titulo";

const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

export const Produtos = () => {
  return (
    <section>
      <Titulo texto="Produtos" />
      {produtos.map(({ nome, propriedades }) => {
        return (
          <div
            key={nome}
            style={{
              border: "1px solid black",
              marginBottom: "10px",
              padding: "10px",
            }}
          >
            <p>{nome}</p>
            <ul>
              {propriedades.map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
};
