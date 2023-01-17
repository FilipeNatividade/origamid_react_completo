import React from "react";
import { CheckboxForm } from "./CheckboxForm/CheckboxForm";
import { Desafio } from "./Desafio/Desafio";
import { InputForm } from "./InputForm";
import { RadioForm } from "./RadioForm/RadioForm";
import { SelectForm } from "./SelectForm/SelectForm";
import { TextareaForm } from "./TextareaForm";
import { Validacao } from "./Validacao/Validacao";
import { ValidacaoUseForm } from "./ValidacaoUseForm/ValidacaoUseForm";

export const App = () => {
  return (
    <div>
      <Desafio />
      <hr style={{ width: "100%" }} />
      <ValidacaoUseForm />
      <hr style={{ width: "100%" }} />
      <Validacao />
      <hr style={{ width: "100%" }} />
      <CheckboxForm />
      <hr style={{ width: "100%" }} />
      <RadioForm />
      <hr style={{ width: "100%" }} />
      <SelectForm />
      <hr style={{ width: "100%" }} />
      <TextareaForm />
      <hr style={{ width: "100%" }} />
      <InputForm />
    </div>
  );
};
