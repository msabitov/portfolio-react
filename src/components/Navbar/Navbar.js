import React from 'react';
import { NavLogo, NavbarContainer, Nav, MobileIcon, NavMenu, NavItem, NavLinkMy } from './NavbarElements';
import { FaBars } from "react-icons/fa";

const Navbar = (props) => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo exact to='/'>
                    MS
                </NavLogo>
                <MobileIcon onClick={props.toggle} >
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinkMy to='about'>Обо мне</NavLinkMy>
                    </NavItem>
                    <NavItem>
                        <NavLinkMy to='tech'>Технологии</NavLinkMy>
                    </NavItem>
                    <NavItem>
                        <NavLinkMy to='contacts'>Контакты</NavLinkMy>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar;
