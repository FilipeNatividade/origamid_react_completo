import React from "react";
import { Input } from "./Input";
import useForm  from "./useForm";

export const ValidacaoUseForm = () => {
  const cep = useForm("cep");
  const email = useForm("email");

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate()) {
      console.log("enviar");
    } else {
      console.log("não enviar");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>validação com useForm</p>
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <button>Enviar</button>
    </form>
  );
};
