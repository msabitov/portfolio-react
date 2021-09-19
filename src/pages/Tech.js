import React, {useState} from 'react';
import {BarBottom, BarFluid, BarTop, ProgressBar, TechContainer, TechHeading, TechItem, TechWallpaper } from '../components/Tech/TechElements';

const Tech = () => {
    return (
        <TechContainer>
            <TechWallpaper />
            <TechHeading>Какие технологии Вас интересуют?</TechHeading>
            <TechItem row={"4 /span 1"} column={"3 / span 3"} />
            <TechItem row={"5 /span 1"} column={"3 / span 3"} />
            <TechItem row={"6 /span 1"} column={"3 / span 3"} />
            <TechItem row={"7 /span 1"} column={"3 / span 3"} />
            <TechItem row={"8 /span 1"} column={"3 / span 3"} />
            <TechItem row={"9 /span 1"} column={"3 / span 3"} />
            <TechItem row={"10 /span 1"} column={"3 / span 3"} />
            <TechItem row={"4 /span 1"} column={"6 / span 3"} />
            <TechItem row={"5 /span 1"} column={"6 / span 3"} />
            <TechItem row={"6 /span 1"} column={"6 / span 3"} />
            <TechItem row={"7 /span 1"} column={"6 / span 3"} />
            <TechItem row={"8 /span 1"} column={"6 / span 3"} />
            <TechItem row={"9 /span 1"} column={"6 / span 3"} />
            <TechItem row={"10 /span 1"} column={"6 / span 3"} />
            <ProgressBar row={"4 /span 7"} column={"9 / span 2"}>
                <BarTop />
                <BarBottom>
                    <BarFluid />
                </BarBottom>
            </ProgressBar>
        </TechContainer>
    )
}

export default Tech;