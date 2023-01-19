import styled from "styled-components";

export const Header = styled.nav`
  margin-bottom: 2rem;
  .link {
    display: block;
    text-decoration: none;
    font-size: 1.2rem;
    font-size: Arial, Helvetica, sans-serif;
    color: #000;
    background-color: #eee;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    :hover {
      background-color: #ddd;
    }
  }
  .active {
    background-color: #ddd;
  }
`;

export const ListBox = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  gap: 1rem;
`;

export const List = styled.li`
  display: flex;
`;
