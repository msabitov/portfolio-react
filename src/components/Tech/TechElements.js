import { motion } from 'framer-motion';
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
    grid-column: 3 / span 6;
    grid-row: 2 / span 2;
    color: black;
    font-size: 1.5rem;
    z-index: 50;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    text-align: center;

    @media screen and (max-width: 1080px){
        font-size: 1.5rem;
        grid-column: 2 / span 8;
    }

    @media screen and (max-width: 768px){
        font-size: 1rem;
    }

    @media screen and (max-width: 468px){
        grid-column: 2 / span 7;
        font-size: 0.8rem;
    }
`;
export const TechListCont = styled.div`
    grid-column: 3 / span 6;
    grid-row: 4 / span 8;
    display: grid;
    grid-template-rows: repeat(8, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    position: relative;

    @media screen and (max-width: 768px){
        grid-column: 1 / span 8;
        grid-row: 4 / span 7;
        padding-left: 1rem;
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
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    position: relative;
    cursor: default;
    background-color: ${props => props.active ? "white" : "transparent"};
    transition: all 500ms ease-in-out;

    &:hover {
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
    }
            
`;

export const ProgressBar = styled.div`
    grid-column: ${props => props.column};
    grid-row: ${props => props.row};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    z-index: 50;
`;

export const BarBottom = styled.div`
    width: 50%;
    height: 95%;
    border: 2px solid black;
    border-radius: 0 0 50px 50px; 
    background-color: white;
    opacity: 0.6;
    position: relative;
    overflow: hidden;
`;

export const BarTop = styled.div`
    width: 75%;
    height: 5%;
    border: 3px solid black;
    border-radius: 10px; 
    background-color: white;
    opacity: 0.6;
`;

export const BarFluid = styled.div`
    position: absolute;
    bottom: 0;
    background-color: #5FE2DC;
    width: 100%;
    height: ${props => props.level}%;
    transition: height 400ms ease-in-out 100ms;
`;

export const CloudCont = styled.div`
    grid-column: 9 / span 2;
    grid-row: 2 / span 2;
    z-index: 10;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

export const ImgCont = styled(motion.div)`
    width: 60%;
    height: auto;
    display: flex;
    justify-content: center;
`;

