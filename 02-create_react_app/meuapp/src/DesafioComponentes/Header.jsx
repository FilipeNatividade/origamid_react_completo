import React from "react";

export const Header = () => {
  return (
    <header style={{ display: "flex", justifyContent: "center", gap: "25px" }}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/produtos">Produtos</a>
      </li>
    </header>
  );
};
