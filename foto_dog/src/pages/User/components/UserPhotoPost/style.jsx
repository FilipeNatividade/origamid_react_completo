import styled, { css } from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  #img {
    margin-bottom: 1rem;
  }
`;

export const PreviewImg = styled.div`
  ${({ src }) => css`
    border-radius: 1rem;
    background: url(${src}) no-repeat;
    background-position: center center;
    background-size: cover;
  `}

  ::after {
    content: "";
    display: block;
    height: 0;
    padding-bottom: 100%;
  }
`;
