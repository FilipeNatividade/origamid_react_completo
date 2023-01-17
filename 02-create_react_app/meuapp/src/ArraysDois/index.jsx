// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: "R$ 2000",
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "R$ 3000",
    cores: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    nome: "Tablet",
    preco: "R$ 1500",
    cores: ["#365069", "#47c1c8", "#f95786"],
  },
];

export const ArrayDois = () => {
  return (
    <>
      <h1>JSX Arrays 2</h1>
      {produtos.filter(produto => Number(produto.preco.replace('R$ ', '')) > 1500).map((produto) => {
        return (
          <div key={produto.id} style={{ border: "2px solid black", padding:'10px', marginBottom:'10px'}}>
            <h3>{produto.nome}</h3>
            <p>Preço: {produto.preco}</p>
            <ul>
              {produto.cores.map((cor) => {
               return <li style={{color:'#fff', backgroundColor:cor}} key={cor}>{cor}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};
