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

export const NoMacthHeading = styled.h2`
    grid-column: 2 / span 6;
    grid-row: 5 / span 3;
    display: flex;
    flex-wrap: no-wrap;
    justify-content: flex-start;
    align-items: center;
    font-size: 3rem;
    font-weight: bold;
`;