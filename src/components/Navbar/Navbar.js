import React from 'react';
import { NavLogo, NavbarContainer, Nav, MobileIcon, NavMenu, NavItem, NavLinkMy } from './NavbarElements';
import { FaBars } from "react-icons/fa";
import { motion } from 'framer-motion';

const Navbar = (props) => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo exact to='/'>
                    <motion.div
                        animate={{ rotateY: 360, rotateZ: 360, }}
                        transition={{
                            repeat: Infinity,
                            repeatDelay: 5,
                            repeatType: "loop",
                            duration: 3
                    }}
                    >
                        MS
                    </motion.div>
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
