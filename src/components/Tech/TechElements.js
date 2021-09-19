import styled from 'styled-components';
import image from '../../images/frame-3.png';

export const TechContainer = styled.div`
    padding: 0;
    height: 100vh;
    display: grid;
    grid-template-rows: repeat(12, 1fr);
    grid-template-columns: repeat(10, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    position: relative;
`;


export const TechWallpaper = styled.div`
    background: fixed url(${image}) right top;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    background-size: cover;
    width: 100%;
    height: 100%;
`;

export const TechHeading = styled.h1`
    font-weight: 700;
    grid-column: 4 / span 5;
    grid-row: 2 / span 2;
    color: black;
    font-size: 1.5rem;
    z-index: 50;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;

    @media screen and (max-width: 1080px){
        font-size: 1.5rem;
        grid-column: 2 / span 8;
    }

    @media screen and (max-width: 768px){
        font-size: 1rem;
    }

    @media screen and (max-width: 468px){
        grid-column: 1 / span 10;
    }
`;

export const TechItem = styled.h2`
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
    background-color: ${props => props.active ? "white" : "grey"};

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