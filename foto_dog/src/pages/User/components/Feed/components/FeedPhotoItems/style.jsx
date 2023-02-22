import styled from "styled-components";

export const Photo = styled.li`
  display: grid;
  border-radius: 0.2rem;
  overflow: hidden;
  cursor: pointer;

  img {
    grid-area: 1/1;
  }

  :hover span {
    display: flex;
  }

  :nth-child(2) {
    grid-column: 2/4;
    grid-row: span 2;
  }
  @media only screen and (max-width: 40rem) {
    :nth-child(2) {
      grid-column: initial;
      grid-row: initial;
    }
  }
`;

export const Visualização = styled.span`
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 1rem;
  text-align: center;

  align-items: center;
  justify-content: center;
  grid-area: 1/1;
  display: none;

  svg{
    margin-right: .25rem;
  }
`;
