import styled from "styled-components";

export const ProdutoBox = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  span {
    padding: 0.5rem;
    background-color: #91fb5d;
    color: #017e01;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 4px;
  }
  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
    line-height: 1.2rem;
  }
  img {
    margin-bottom: 2rem;
  }
`;
