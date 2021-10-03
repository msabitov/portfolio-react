import styled from 'styled-components';
import image from '../../images/frame-4.png';

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
    background-size: cover;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
`;

export const ContactsItem = styled.a`
    grid-column: ${props => props.column};
    grid-row: ${props => props.row};
    color: black;
    font-size: 1.2rem;
    z-index: 50;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5rem 1.5rem
    cursor: pointer;
    text-decoration: none;
    border-radius: 30px;
    transition: all 500ms ease-in-out;

    &:hover {
        box-shadow: 5px 5px 10px grey;
    }

    @media screen and (max-width: 1200px){
        font-size: 1rem;
    }

    @media screen and (max-width: 768px){
        padding: 0 0.5rem;
        grid-column: 2 / span 8;
    }

    @media screen and (max-width: 440px){
        font-size: 0.8rem;
        padding: 0 1rem;
        grid-column: 1 / span 10;
    }
`;