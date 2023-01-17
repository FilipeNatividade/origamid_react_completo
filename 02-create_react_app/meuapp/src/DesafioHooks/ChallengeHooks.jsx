import React from "react";
import { Produtos } from "./Produtos";

export const ChallengeHooks = () => {
  const [dados, setDados] = React.useState(
    JSON.parse(localStorage.getItem("dados"))
  );
  const [loading, setLoading] = React.useState(null);

  React.useEffect(() => {
    localStorage.setItem("dados", JSON.stringify(dados));
  }, [dados]);

  const handleClick = async (event) => {
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    let json = await response.json();
    setDados(json);
    setLoading(false);
  };

  return (
    <div>
      <button onClick={handleClick}>notebook</button>
      <button style={{ margin: "0 10px" }} onClick={handleClick}>
        smartphone
      </button>
      <button onClick={handleClick}>tablet</button>
      {loading && <p>Carregando...</p>}
      {!loading && dados && <Produtos dados={dados} />}
    </div>
  );
};
