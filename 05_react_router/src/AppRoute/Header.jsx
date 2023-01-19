import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  // React.useEffect(() => {
  //   console.log("header", "mudou de rota!", location.pathname);
  // }, [location]);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {" | "}
      <NavLink to="sobre">Sobre</NavLink>
      {" | "}
      <NavLink to="contato">Contato</NavLink>
      {" | "}
      <NavLink to="login">Login</NavLink>
    </nav>
  );
};
