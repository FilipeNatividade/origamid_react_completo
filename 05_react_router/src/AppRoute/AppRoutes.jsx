import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contato } from "./Contato";
import { Home } from "./Home";
import { Sobre } from "./Sobre";
import { Pagina404 } from "./Pagina404";
import { Header } from "./Header";
import { Login } from "./Login";
import { Produto } from "./Produto";

export const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="contato" element={<Contato />} />
          <Route path="login" element={<Login />} />
          <Route path="produto/:id/*" element={<Produto />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
