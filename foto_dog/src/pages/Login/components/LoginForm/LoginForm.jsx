import React from "react";
import { Link } from "react-router-dom";
import { InputCustom } from "../../../../components/InputCustom/InputCustom";
import { ButtonCustom } from "../../../../components/ButtonCustom/ButtonCustom";
import { useForm } from "../../../../hooks/useForm";
import { useUserStorage } from "../../../../Providers/UserStorage";

export const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin } = useUserStorage();

  async function HandleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
      username.setValue("");
      password.setValue("");
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={HandleSubmit}>
        <InputCustom
          label="Usuário"
          type="text"
          name="username"
          {...username}
        />
        <InputCustom
          label="Senha"
          type="password"
          name="password"
          {...password}
        />

        <ButtonCustom>Entrar</ButtonCustom>
      </form>

      <Link to="/loginCreate">Cadastro</Link>
    </section>
  );
};
