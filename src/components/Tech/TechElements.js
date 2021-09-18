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
    background-size: cover;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
`; 