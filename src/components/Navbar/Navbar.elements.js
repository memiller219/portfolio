import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  top: 0;

`;

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
 
  ${Container}
`;

export const NavLogo = styled(Link)`
  justify-self: flex-start;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 20px 0 0 20px;
  margin-top: 35px;
  height: 20px;
  width: 40px;

  @media screen and (max-width: 960px) {
    margin-top: 20px;
  }
`;

export const MenuIcon = styled.div`
  display: none;
  color: #FFF;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 5px;
    right: 5px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    transition: all 0.5s ease;
    background: #001334;
  }
`;

export const NavItem = styled.li`
  border-bottom: 1px solid transparent;
  margin-top: 40px;
  &:hover {
    border-bottom: 1px solid #15D07F;
  }

  @media screen and (max-width: 960px) {
    border-bottom: none;
    width: 100%;
    margin-top: 0px;
    &:hover {
      border-bottom: none;
    }
  }
`;

export const NavLinks = styled.a`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-weight: 100;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 1.5rem;
    width: 100%;
    display: table;
    color: #f7f5eb;

    &:hover {
      transition: all 0.3s ease;
      color: #15D07F;
    }
  }
`;
