import React from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <button onClick={handleClick} style={{ margin: "20px 0" }}>
      Login
    </button>
  );
};
