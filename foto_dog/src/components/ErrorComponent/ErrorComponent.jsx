import React from "react";
import styled from "styled-components";

const CustomError = styled.p`
  color: #f31;
  font-size: 0.875rem;
  margin: 1rem 0;
`;

export const ErrorComponent = ({ error }) => {
  if (!error) return null;
  return <CustomError>{error}</CustomError>;
};
