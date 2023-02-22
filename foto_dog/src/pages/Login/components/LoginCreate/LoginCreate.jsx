import React from "react";
import { Title } from "../../../../components/Title/Title";
import { InputCustom } from "../../../../components/InputCustom/InputCustom";
import { ButtonCustom } from "../../../../components/ButtonCustom/ButtonCustom";
import { useForm } from "../../../../hooks/useForm";
import * as S from "./style";
import { useUserStorage } from "../../../../Providers/UserStorage";
import { useFetch } from "../../../../hooks/useFetch";
import { ErrorComponent } from "../../../../components/ErrorComponent/ErrorComponent";
export const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { loading, error, request } = useFetch();

  const { userLogin } = useUserStorage();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = request("api/user", {
      username: username.value,
      email: email.value,
      password: password.value,
    });

    if (response.status === 200);
    {
      userLogin(username.value, password.value);
    }
  };

  return (
    <section className="animeLeft">
      <Title text="Cadastre-se" />

      <S.FormBox onSubmit={handleSubmit}>
        <InputCustom
          label="Usuário"
          type="text"
          name="username"
          {...username}
        />
        <InputCustom label="Email" type="email" name="email" {...email} />
        <InputCustom
          label="Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <ButtonCustom disabled>Carregando...</ButtonCustom>
        ) : (
          <ButtonCustom>Cadastrar</ButtonCustom>
        )}
        <ErrorComponent error={error} />
      </S.FormBox>
    </section>
  );
};
