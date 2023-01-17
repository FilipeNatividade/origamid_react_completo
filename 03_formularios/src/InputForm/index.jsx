import React from "react";
import * as S from "./style";

const formFields = [
  {
    id: "nome",
    label: "Nome",
    type: "text",
  },
  {
    id: "email",
    label: "E-mails",
    type: "email",
  },
  {
    id: "senha",
    label: "Senha",
    type: "password",
  },
  {
    id: "cep",
    label: "Cep",
    type: "text",
  },
  {
    id: "rua",
    label: "Rua",
    type: "text",
  },
  {
    id: "numero",
    label: "Número",
    type: "text",
  },
  {
    id: "bairro",
    label: "Bairro",
    type: "text",
  },
  {
    id: "cidade",
    label: "Cidade",
    type: "text",
  },
  {
    id: "estado",
    label: "Estado",
    type: "text",
  },
];

export const InputForm = () => {
  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: "",
      };
    }, {})
  );
  const [response, setResponse] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => setResponse(response));
  };

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  };

  return (
    <S.FormStyle onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }) => {
        return (
          <S.InputBox key={id}>
            <label htmlFor={id}>{label}</label>
            <input
              type={type}
              id={id}
              value={form[id]}
              onChange={handleChange}
            />
          </S.InputBox>
        );
      })}

      <S.InputBox>
        <button>ENVIAR</button>
      </S.InputBox>
      {response && response.ok && <p>Usúario Criado</p>}
    </S.FormStyle>
  );
};
