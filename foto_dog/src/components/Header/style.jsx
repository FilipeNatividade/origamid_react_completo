import styled from "styled-components";
import { Link } from "react-router-dom";
import Usuario from "../../Assets/usuario.svg";

export const HederBox = styled.header`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: rgb(255, 255, 255);
  top: 0;
`;

export const HederNav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 4rem;
`;

export const LogoLink = styled(Link)`
  padding: 0.5rem 0;
`;
export const LoginLink = styled(Link)`
  color: #333;
  display: flex;
  align-items: center;
  &:after {
    content: "";
    display: inline-block;
    width: 14px;
    height: 17px;
    background: url(${Usuario}) no-repeat center center;
    margin-left: 0.5rem;
    top: -1px;
  }
`;
