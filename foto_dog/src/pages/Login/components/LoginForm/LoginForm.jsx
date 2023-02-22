import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputCustom } from "../../../../components/InputCustom/InputCustom";
import { ButtonCustom } from "../../../../components/ButtonCustom/ButtonCustom";
import { useForm } from "../../../../hooks/useForm";
import { useUserStorage } from "../../../../Providers/UserStorage";
import { Title } from "../../../../components/Title/Title";
import { ErrorComponent } from "../../../../components/ErrorComponent/ErrorComponent";
import * as S from "./style";

export const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const navigate = useNavigate();

  const { userLogin, error, loading } = useUserStorage();

  async function HandleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
      username.setValue("");
      password.setValue("");
    }
  }

  return (
    <section className="animeLeft">
      <Title text="Login" />
      <S.FormBox onSubmit={HandleSubmit}>
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
        {loading ? (
          <ButtonCustom disabled>Carregando...</ButtonCustom>
        ) : (
          <ButtonCustom>Entrar</ButtonCustom>
        )}

        <ErrorComponent error={error} />
      </S.FormBox>
      <S.LostPassWord to="/login/loginPasswordLost">Perdeu a Senha?</S.LostPassWord>
      <S.CadasterBox>
        <S.SubTitle>Cadastre-se</S.SubTitle>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <ButtonCustom onClick={() => navigate("/login/loginCreate")}>
          Cadastro
        </ButtonCustom>
      </S.CadasterBox>
    </section>
  );
};
