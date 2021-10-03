import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StartContainer = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: repeat(12, 1fr);
    grid-template-columns: repeat(10, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    position: relative;
`;

export const Heading = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    outline: solid white 3px;
    outline-offset: 20px;
    z-index: 50;
    font-size: 1.5rem;
    background: rgba(1, 30, 41, 0);
    text-decoration: none;

    transition: 0.3s all ease-in-out;
    &:hover {
        background: rgba(1, 30, 41, 1);
        outline-offset: 0;
    }

    @media screen and (max-width: 1200px){
        font-size: 1.3rem;
    }

    @media screen and (max-width: 1020px){
        font-size: 1.2rem;
    }

    @media screen and (max-width: 768px){
        font-size: 1.5rem;
    }
    @media screen and (max-width: 500px){
        font-size: 0.8rem;
    }

`;


export const MainHeading = styled(Heading)`
    grid-column: 6 / span 4;
    grid-row: 3 / span 1;

    @media screen and (max-width: 768px){
        grid-column: 2 / span 8;
        grid-row: 3 / span 1;
    }
`;

export const JobHeading = styled(Heading)`
    grid-column: 2 / span 4;
    grid-row: 4 / span 1;

    @media screen and (max-width: 768px){
        grid-column: 2 / span 8;
        grid-row: 5 / span 1;
    }
`;

export const WorkHeading = styled(Heading)`
    grid-column: 6 / span 4;
    grid-row: 5 / span 1;
    
    @media screen and (max-width: 768px){
        grid-column: 2 / span 8;
        grid-row: 7 / span 1;
    }
`;

export const StartWall = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoWallpaper = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
`;
