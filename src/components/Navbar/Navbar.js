import React from 'react';
import { NavLogo, NavbarContainer, Nav, MobileIcon, NavMenu, NavItem, NavLinkMy, MobilePrev, MobileNext } from './NavbarElements';
import { FaBars } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useLocation } from 'react-router';
import {MdNavigateNext, MdNavigateBefore} from 'react-icons/md';

const Navbar = (props) => {
    const location = useLocation();
    const goPrev = (location) => {
        switch(location.pathname){
            case "/":
                return "/contacts";
            case "/about":
                return "/";
            case "/tech":
                return "/about";
            case "/contacts":
                return "/tech";
            default:
                return "/";
        }
    }
    const goNext = (location) => {
        switch(location.pathname){
            case "/":
                return "/about";
            case "/about":
                return "/tech";
            case "/tech":
                return "/contacts";
            case "/contacts":
                return "/";
            default:
                return "/";
        }
    }
            
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
                <MobilePrev exact to={goPrev(location)}>
                    <MdNavigateBefore />
                </MobilePrev>
                <MobileNext exact to={goNext(location)}>
                    <MdNavigateNext />
                </MobileNext>
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
