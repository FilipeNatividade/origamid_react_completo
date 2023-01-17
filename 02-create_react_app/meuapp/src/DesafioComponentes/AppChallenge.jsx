import React from "react";
import { Header } from "./Header";
import { Home } from "./Home";
import { Produtos } from "./Produtos";

export const AppChallenge = () => {
  let Pagina = Home;
  const { pathname } = window.location;

  if(pathname === '/produtos'){
    Pagina = Produtos
  }else{
    Pagina = Home
  }

  return (
    <section>
       <hr style={{width:'100%'}}/>
      <Header />
      <hr style={{width:'100%'}}/>
      <Pagina />
    </section>
  );
};
