import React from "react";
import { useFetch } from "./useFetch";

export const CustomHookApp = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    request("https://ranekapi.origamid.dev/json/api/produto/notebook");
  }, [request]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  console.log(data)
  if (data) return <div>{data.nome}</div>;
  else return null;
};
