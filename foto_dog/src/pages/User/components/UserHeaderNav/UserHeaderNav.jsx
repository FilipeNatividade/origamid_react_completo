import React from "react";
import { ButtonCustom } from "../../../../components/ButtonCustom/ButtonCustom";
import { useUserStorage } from "../../../../Providers/UserStorage";
import { ReactComponent as Feed } from "../../../../Assets/feed.svg";
import { ReactComponent as Estatistica } from "../../../../Assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../../../Assets/sair.svg";
import * as S from "./style";
import { NavLink, useLocation } from "react-router-dom";
import { useMedia } from "../../../../hooks/useMedia";

export const UserHeaderNav = () => {
  const { userLogout } = useUserStorage();
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const {pathname} = useLocation();

  React.useEffect(() => {
    setMobileMenu(true);
  }, [pathname]);

  return (
    <>
      <S.MobileMenuBox hidden={!mobile}>
        {mobileMenu ? (
          <S.MobileButton
            aria-label="Menu"
            onClick={() => setMobileMenu(false)}
          ></S.MobileButton>
        ) : (
          <S.mobileButtonActive
            aria-label="Menu"
            onClick={() => setMobileMenu(true)}
          ></S.mobileButtonActive>
        )}
      </S.MobileMenuBox>
      {mobile ? (
        <S.NavMobileBox
          hidden={mobileMenu}
          className={mobileMenu && "navMobileActive"}
        >
          <NavLink to="/conta" end>
            <Feed /> {mobile && "minhas fotos"}
          </NavLink>
          <NavLink to="/conta/userStats">
            <Estatistica /> {mobile && "Estatísticas"}
          </NavLink>
          <NavLink to="/conta/userPhotoPost">
            <AdicionarFoto /> {mobile && "Adicionar foto"}
          </NavLink>
          <button onClick={userLogout}>
            <Sair />
            {mobile && "Sair"}
          </button>
        </S.NavMobileBox>
      ) : (
        <S.NavBox>
          <NavLink to="/conta" end>
            <Feed /> {mobile && "minhas fotos"}
          </NavLink>
          <NavLink to="/conta/userStats">
            <Estatistica /> {mobile && "Estatísticas"}
          </NavLink>
          <NavLink to="/conta/userPhotoPost">
            <AdicionarFoto /> {mobile && "Adicionar foto"}
          </NavLink>
          <button onClick={userLogout}>
            <Sair />
            {mobile && "Sair"}
          </button>
        </S.NavBox>
      )}
    </>
  );
};
