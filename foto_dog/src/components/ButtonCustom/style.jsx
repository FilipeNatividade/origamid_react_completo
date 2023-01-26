import styled from "styled-components";

export const ButtonBox = styled.button`
  font-size: 1rem;
  font-family: var(--type-first);
  border-radius: 0.4rem;
  background-color: #fb1;
  color: #764701;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.2s;
  min-width: 8rem;

  :hover,
  :focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }
  :disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
