import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
    background: #000;
    height: 72px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 0 20px;
    max-width:  1920px;
    height: 72px;
    z-index: 1;
`;

export const NavLogo = styled(NavLink)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: 500;
    text-decoration: none;
    
    &.active {
        color: #5FE2DC;
    }

    @media screen and (max-width: 768px){ 
        display: none;
    }
`;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        color: white;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-120%, 35%);
        font-size: 1.5rem;
        cursor: pointer;
    }
`;

export const MobilePrev = styled(NavLink)`
    display: none;
    @media screen and (max-width: 768px){
        display: inline;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
    }
`;

export const MobileNext = styled(NavLink)`
    display: none;
    @media screen and (max-width: 768px){
        display: inline;
        color: white;
        margin-right: 80%;
        font-size: 1.5rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    text-align: center;
    margin: 0 40px;
    padding: 0;
    @media screen and (max-width: 768px){
        display: none;
    }
    
`;

export const NavItem = styled.li`
    height: 72px;
`;

export const NavLinkMy = styled(NavLink)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.5rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #5FE2DC;
    }
`;