import styled from 'styled-components';
import { Link as LinkRoute } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';


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
    z-index: 10;
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 0 20px;
    max-width:  1080px;
    height: 72px;
    z-index: 1;
`;

export const NavLogo = styled(LinkRoute)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 20px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width: 768px){
        color: white;   
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.5rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 20px;
    @media screen and (max-width: 768px){
        display: none;
    }
    
`;

export const NavItem = styled.li`
    height: 72px;
`;

export const NavLink = styled(LinkScroll)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.5rem;
    height: 100%;
    cursor: pointer;

    $.active {
        border-bottom: 3px solid green;
    }
`;