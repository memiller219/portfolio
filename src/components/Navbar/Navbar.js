import React, { useState } from "react";
import {VscMenu, VscClose} from 'react-icons/vsc';
import Logo from "../../images/Logo.svg";
import { Nav, NavContainer, NavLogo, MenuIcon, Menu, NavItem, NavLinks } from "./Navbar.elements";
import Resume from '../../images/Resume.pdf'

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };


  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">
           <img src={Logo} alt="logo" />
          </NavLogo>
          <MenuIcon onClick={handleClick}>
            {click ? <VscClose /> : <VscMenu />}
          </MenuIcon>
          <Menu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/">
                  Home
              </NavLinks>
            </NavItem>
            <NavItem>
            </NavItem>
            <NavItem>
              <NavLinks to="/projects" href="/projects">
                  Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to={Resume} href={Resume}>
                  Resume
              </NavLinks>
            </NavItem>
          </Menu>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
