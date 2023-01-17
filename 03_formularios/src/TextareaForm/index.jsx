import React from "react";

export const TextareaForm = () => {
  const [mensagem, setMensagem] = React.useState("");
  return (
    <form>
      <textarea
        value={mensagem}
        onChange={({ target }) => setMensagem(target.value)}
      />
    </form>
  );
};
