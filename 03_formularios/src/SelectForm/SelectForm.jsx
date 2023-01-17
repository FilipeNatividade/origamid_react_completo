import React from "react";

export const SelectForm = () => {
  const [select, setSelect] = React.useState("");

  return (
    <div>
      <select
        value={select}
        onChange={({ target }) => setSelect(target.value)}
        id="produtos"
      >
        <option disabled value="">
          selecione
        </option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>

      <p>{select}</p>
    </div>
  );
};
