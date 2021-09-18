import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
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
    display: none;
    @media screen and (max-width: 768px){
        color: white;   
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-120%, 40%);
        font-size: 1.5rem;
        cursor: pointer;
    }
`;

export const SidebarWrapper = styled.div`
    color: white;
    width: 100%;
    height: 80vh;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 30px;
    text-align: center;
    padding: 60px 0;
    
    @media screen and (max:width: 480px){
        grid-template-rows: repeat(3, 40px);
    }
`;

export const SidebarLink = styled(LinkRoute)`
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