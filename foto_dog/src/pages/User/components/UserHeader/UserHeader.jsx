import React from "react";
import { useLocation } from "react-router-dom";
import { Title } from "../../../../components/Title/Title";
import { UserHeaderNav } from "../UserHeaderNav/UserHeaderNav";
import * as S from "./style";

export const UserHeader = () => {
  const [headerTitle, setHeaderTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/conta/userStats") {
      setHeaderTitle("Estatísticas");
    } else if (location.pathname === "/conta/userPhotoPost") {
      setHeaderTitle("Poste Sua Foto");
    } else {
      setHeaderTitle("Minha Conta");
    }
  }, [location]);

  return (
    <S.HeaderBox>
      <Title text={headerTitle} />
      <UserHeaderNav />
    </S.HeaderBox>
  );
};
