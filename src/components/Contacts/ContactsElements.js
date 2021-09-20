import styled from 'styled-components';
import image from '../../images/frame-4.png';
import {Route} from 'react-router-dom';

export const ContactsContainer = styled.div`
    padding: 0;
    height: 100vh;
    display: grid;
    grid-template-rows: repeat(12, 1fr);
    grid-template-columns: repeat(10, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    position: relative;
`;


export const ContactsWallpaper = styled.div`
    background: fixed url(${image}) left top;
    background-repeat: no-repeat;
    position: absolute;
    background-size: cover;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
`;

export const ContactsItem = styled.a`
    font-weight: 500;
    grid-column: ${props => props.column};
    grid-row: ${props => props.row};
    color: black;
    font-size: 1.2rem;
    z-index: 50;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5rem 1rem;
    position: relative;
    cursor: pointer;
    text-decoration: none;
    border-radius: 30px;

    &:hover, &:active, &:focus {
        box-shadow: 5px 5px 10px grey;
    } 

    @media screen and (max-width: 768px){
        font-size: 1rem;
        padding: 0 0.5rem;
        grid-column: 2 / span 8;
    }
`;