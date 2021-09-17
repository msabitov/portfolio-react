import React from 'react';
import { NavLogo, NavbarContainer, Nav, MobileIcon, NavMenu, NavItem, NavLink } from './NavbarElements';
import { FaBars } from "react-icons/fa";

const Navbar = (props) => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo>
                    
                </NavLogo>
                <MobileIcon onClick={props.toggle} >
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink to='about'>Личная информация</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='tech'>Технологии</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='contacts'>Контакты</NavLink>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar;
