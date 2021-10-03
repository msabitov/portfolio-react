import styled from"styled-components";

export const NoMatchCont = styled.div`
    padding: 0;
    height: 100vh;
    display: grid;
    grid-template-rows: repeat(12, 1fr);
    grid-template-columns: repeat(10, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    position: relative;
`;

export const NoMatchImg = styled.div`
    grid-column: 2 / span 8;
    grid-row: 3 / span 7;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    overflow: hidden;

    @media screen and (max-width: 1200px){
        grid-row: 3 / span 6;
    }

    @media screen and (max-width: 768px){
        grid-row: 3 / span 4;
    }
    @media screen and (max-width: 467px){
        grid-row: 3 / span 3;
    }
`;


export const NoMatchHeading = styled.h2`
    grid-column: 2 / span 8;
    grid-row: 10 / span 1;
    display: flex;
    flex-wrap: no-wrap;
    justify-content: flex-start;
    align-items: center;
    font-size: 3rem;
    font-weight: normal;

    @media screen and (max-width: 1200px){
        font-size: 1.75rem;
        grid-row: 9 / span 1;
    }

    @media screen and (max-width: 768px){
        font-size: 1.25rem;
        grid-row: 7 / span 1;
    }

    @media screen and (max-width: 467px){
        font-size: 1rem;
        grid-row: 6 / span 1;
    }
`;
export const NoMatcComment = styled.h3`
    grid-column: 2 / span 8;
    grid-row: 11 / span 1;
    display: flex;
    flex-wrap: no-wrap;
    justify-content: flex-start;
    align-items: center;
    font-size: 2rem;
    font-weight: normal;

    @media screen and (max-width: 1200px){
        font-size: 1.25rem;
        grid-row: 10 / span 1;
    }

    @media screen and (max-width: 768px){
        font-size: 0.8rem;
        grid-row: 8 / span 1;
    }

    @media screen and (max-width: 467px){
        font-size: 0.6rem;
        grid-row: 7 / span 1;
    }
`;