import React from "react";

const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];

export const CheckboxForm = () => {
  const [cores, setCores] = React.useState([]);

  const handleChange = ({ target }) => {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  };

  const handleChecked = (cor) => cores.includes(cor);

  return (
    <div>
      <div style={{ display: "flex", gap: "25px" }}>
        <div style={{ border: "2px solid #a9a9a9", padding: "15px" }}>
          {coresArray.map((cor) => {
            return (
              <label key={cor} style={{textTransform:'capitalize'}}>
                <input
                  type="checkbox"
                  value={cor}
                  checked={cores.includes(cor)}
                  onChange={handleChange}
                />
                {cor}
              </label>
            );
          })}
        </div>
        {cores.length > 0 && (
          <div style={{ border: "2px solid #a9a9a9", padding: "15px" }}>
            <ul style={{ margin: "0" }}>
              {cores.map((cor) => {
                return <li>{cor}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
      <br />
      <hr style={{ width: "100%", borderColor: "#a9a9a9" }} />
      <br />
      <label>
        <input
          type="checkbox"
          value="azul"
          //   checked={cores.includes("azul")}
          onChange={handleChange}
        />
        Azul
      </label>

      <label>
        <input
          type="checkbox"
          value="vermelho"
          //   checked={handleChecked("vermelho")}
          onChange={handleChange}
        />
        Vermelho
      </label>
    </div>
  );
};
