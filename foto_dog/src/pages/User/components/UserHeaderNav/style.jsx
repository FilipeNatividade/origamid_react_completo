import styled from "styled-components";

export const NavBox = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  a,
  button {
    background-color: #eee;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;

    :hover {
      background-color: #fff;
      box-shadow: 0 0 0 3px #eee;
      border-color: #333;
      outline: none;
    }
  }

  .active {
    background-color: #fff;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    svg > * {
      fill: #fb1;
    }
  }
`;

export const NavMobileBox = styled.nav`
  display: ${(props) => (props.hidden ? "hidden" : "block")};
  position: absolute;
  top: 55px;
  right: 0px;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0.2rem;
  transform: translateX(-10px);
 
  a,
  button {
    display: flex;
    align-items: center;
    background-color: transparent;
    width: 100%;
    border: none;
    border-bottom: 1px solid #eee;
    padding: 0.5rem;
    cursor: pointer;

    svg > * {
      margin-right: 0.5rem;
    }

    :hover {
      color: #fb1;
      svg > * {
        fill: #fb1;
      }
    }
  }

  .active {
    background-color: #fff;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    color: #fb1;
    svg > * {
      fill: #fb1;
    }
  }
`;
export const MobileMenuBox = styled.div`
  display: ${(props) => (props.hidden ? "hidden" : "block")};
`;

export const MobileButton = styled.button`
  background-color: #eee;
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;

  cursor: pointer;

  :hover {
    background-color: #fff;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    outline: none;
    color: #fb1;
  }

  ::after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 2px;
    border-radius: 2px;
    background-color: currentColor;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: 0.2s;
  }
`;

export const mobileButtonActive = styled(MobileButton)`
  background-color: #fff;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    outline: none;
    color: #fb1;

  ::after {
    transform: rotate(90deg);
    width: 4px;
    height: 4px;
    box-shadow: 0 8px currentColor, 0 -8px currentColor;
  }
`;
