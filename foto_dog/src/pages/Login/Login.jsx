import React from "react";
import { Navigate, Routes,  Route } from "react-router-dom";
import { useUserStorage } from "../../Providers/UserStorage";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { LoginCreate } from "./components/LoginCreate/LoginCreate";
import { LoginPasswordLost } from "./components/LoginPasswordLost/LoginPasswordLost";
import { LoginPasswordReset } from "./components/LoginPasswordReset/LoginPasswordReset";
import * as S from "./style";

export const Login = () => {
  const { login } = useUserStorage();

  if (login) {
    return <Navigate to="/conta" />;
  }
  return (
    <S.LoginBox>
      <S.LoginFormsBox>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/loginCreate" element={<LoginCreate />} />
          <Route path="/loginPasswordLost" element={<LoginPasswordLost />} />
          <Route path="/loginPasswordReset" element={<LoginPasswordReset />} />
        </Routes>
      </S.LoginFormsBox>
    </S.LoginBox>
  );
};
