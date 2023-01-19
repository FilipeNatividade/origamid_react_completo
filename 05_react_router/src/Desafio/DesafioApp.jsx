import React from "react";
import './DesafioApp.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Produtos } from "./components/Produtos/Produtos";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Contato } from "./components/Contato/Contato";
import { Produto } from "./components/Produto/Produto";

export const DesafioApp = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Produtos/>}/>
          <Route path='produto/:id' element={<Produto/>}/>
          <Route path='contato' element={<Contato/>}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </div>
  );
};
