import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormBox = styled.form`
  margin-bottom: 2rem;
`;

export const LostPassWord = styled(Link)`
  display: inline-block;
  color: #666;
  padding: 0.5rem 0;
  line-height: 1;

  ::after {
    content: "";
    height: 2px;
    width: 100%;
    display: block;
    background-color: currentColor;
  }
`;

export const CadasterBox = styled.div`
  margin-top: 4rem;
  p {
    margin: 2rem 0;
  }
`;

export const SubTitle = styled.h2`
  font-family: var(--type-second);
  line-height: 1;
  font-size: 2rem;

  ::after {
    content: "";
    display: block;
    background-color: #ddd;
    height: 0.5rem;
    width: 3rem;
    border-radius: 0.2rem;
  }
`;

export const CreateAccount = styled(Link)``;
