import React from "react";

export const RadioForm = () => {
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("");

  const handleChange = ({ target }) => {
    setCor(target.value);
    console.log(target.value);
  };

  return (
    <form>
      <h4>cores</h4>
      <label>
        <input type="radio" onChange={handleChange} value="azul" name="cores" />
        Azul
      </label>
      <label>
        <input
          type="radio"
          onChange={handleChange}
          value="vermelho"
          name="cores"
        />
        Vermelho
      </label>
      <br/>
      <h4>produtos</h4>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setProduto(target.value)}
          value="smartphone"
          checked={produto === 'smartphone'}
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setProduto(target.value)}
          checked={produto === 'tablet'}
          value="tablet"
        />
        Tablet
      </label>
    </form>
  );
};
