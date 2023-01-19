import styled from "styled-components";

export const ContatoBox = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

export const ListContact = styled.ul`
padding:0 ;
list-style: none;
`;

export const List = styled.li`
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif, Helvetica, sans-serif;
  margin-bottom: 0.8rem;
  ::before{
    content: '';
    display: inline-block;
    width: 20px;
    height: 2px;
    background-color: #ddd;
    margin-right: 10px;
  }
`;
