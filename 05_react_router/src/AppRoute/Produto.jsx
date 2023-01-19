import React from "react";
import {
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import { ProdutoDescricao } from "./ProdutoDescricao";
import { ProdutoAvaliacao } from "./ProdutoAvaliacao";
import { ProdutoCustomizado } from "./ProdutoCustomizado";

export const Produto = () => {
  const params = useParams();
  const location = useLocation();

  const search = new URLSearchParams(location.search);

  return (
    <div>
      <h1>Produto</h1>
      <p>parametro: {params.id}</p>

      <p>location: {JSON.stringify(location)}</p>
      <p>search: {JSON.stringify(search)}</p>

      <nav>
        <NavLink to="">descrição</NavLink>
        {" | "}
        <NavLink to="avaliacao">avaliação</NavLink>
        {" | "}
        <NavLink to="customizado">customizado</NavLink>
      </nav>

      <Routes>
        <Route path="" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes>

      {/* 
      eu tenho outra opção que é coloar a rotas la no home (ai não precisa do "/*"), e usar o  <Outlet/>  para mostrar onde eu quero que renderize os componentes...
      */}
    </div>
  );
};
