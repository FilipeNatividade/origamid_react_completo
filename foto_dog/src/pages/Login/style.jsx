import styled from "styled-components";
import loginImage from "../../Assets/login.jpg";

export const LoginBox = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  ::before {
    display: block;
    content: "";
    background: url(${loginImage}) no-repeat center;
    background-size: cover;
  }
  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
    ::before {
      display: none;
    }
  }
`;

export const LoginFormsBox = styled.section`
  max-width: 30rem;
  padding: 1rem;
  @media (max-width: 40rem) {
    max-width: 100%;
  }
`;
