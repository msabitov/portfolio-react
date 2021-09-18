import styled from 'styled-components';
import image from '../../images/frame-2.png';

export const AboutContainer = styled.div`
    padding: 0;
    height: 100vh;
    display: grid;
    grid-template-rows: repeat(12, 1fr);
    grid-template-columns: repeat(10, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    position: relative;
`;


export const Wallpaper = styled.div`
    background: fixed url(${image}) right top;
    background-repeat: no-repeat;
    position: absolute;
    background-size: cover;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
`;

export const AboutItem = styled.h2`
    font-weight: 500;
    grid-column: 2 / span 6;
    grid-row: ${props => props.row};
    border: solid black 2px;
    border-radius: 30px;
    color: black;
    font-size: 1.2rem;
    z-index: 50;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 1rem;
    position: relative;

    &:hover, &:active, &:focus {
        box-shadow: 5px 5px 10px grey;
    } 

    @media screen and (max-width: 1280px){
        font-size: 0.8rem;
    }
    @media screen and (max-width: 768px){
        font-size: 0.8rem;
        grid-column: 2 / span 8;
    }
            
`;

export const ItemIcon = styled.div`
    width: 24px;
    height: 24px;
    margin-right: 20px;
    z-index: 55;
`;