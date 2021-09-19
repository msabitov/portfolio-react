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
    width: 100%;
    height: 100%;
`;

export const AboutItem = styled.h2`
    font-weight: 500;
    grid-column: ${props => props.column};
    grid-row: ${props => props.row};
    border: solid black 2px;
    border-radius: 30px;
    color: black;
    font-size: 1.2rem;
    z-index: 50;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5rem 1rem;
    position: relative;
    cursor: default;
    background-color: ${props => props.active ? "white" : "transparent"};

    &:hover, &:active, &:focus {
        box-shadow: 5px 5px 10px grey;
    } 

    @media screen and (max-width: 1305px){
        font-size: 0.8rem;
    }
    @media screen and (max-width: 950px){
        font-size: 0.7rem;
        
    }
    @media screen and (max-width: 768px){
        font-size: 0.5rem;
        padding: 0 0.5rem;
        grid-column: 2 / span 8;
    }
            
`;

export const ItemIcon = styled.div`
    width: 24px;
    height: 24px;
    margin-right: 20px;
    z-index: 55;

    @media screen and (max-width: 768px){
        margin-right: 10px;
    }
`;

export const DepImgCont = styled.div`
    grid-column: 7 / span 3;
    grid-row: 5 / span 5;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-image: url(${({url}) => url});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    overflow: hidden;

    @media screen and (max-width: 768px){
        grid-column: 6 / span 4;
        grid-row: 2 / span 3;
        margin: 10px;
    }

`;

export const Resume = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        grid-column: 2 / span 4;
        grid-row: 2 / span 3;
        margin: 10px;
        z-index: 10;
        width: 100%;
        height: 100%;
        background-image: url(${({url}) => url});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        overflow: hidden;
    }

`;

export const AboutHeading = styled.h1`
    font-weight: 700;
    grid-column: 2 / span 8;
    grid-row: 3 / span 2;
    color: black;
    font-size: 1.5rem;
    z-index: 50;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5rem 1rem;

    @media screen and (max-width: 768px){
        display: none;
    }
`;