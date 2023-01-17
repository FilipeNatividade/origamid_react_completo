import React from "react";

export const Input = ({ id, label, onChange, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} onChange={onChange}  {...props}/>
    </>
  );
};
