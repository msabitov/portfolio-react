import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkScroll} from 'react-scroll';
import {Link as LinkRoute} from 'react-router-dom';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    background: black;
    display: grid;
    align-items: center;
    left: 0;
    transition: 0.2s linear;
    opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: white;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
`;

export const SidebarWrapper = styled.div`
    color: white;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    text-align: center;

    @media screen and (max:width: 480px){
        grid-template-rows: repeat(3, 40px);
    }
`;

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.3s linear;
    color: white;
    cursor: pointer;


`;