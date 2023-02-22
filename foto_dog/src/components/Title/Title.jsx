import React from "react";
import styled from "styled-components";

const CustomTitle = styled.h1`
  font-family: var(--type-second);
  line-height: 1;
  font-size: 3rem;
  position: relative;
  z-index: 1;

  ::after {
    content: "";
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background-color: #fb1;
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
  }
`;

export const Title = ({ text }) => {
  return <CustomTitle>{text}</CustomTitle>;
};
