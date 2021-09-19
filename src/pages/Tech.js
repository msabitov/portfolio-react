import React, {useState} from 'react';
import {TechContainer, TechHeading, TechItem, TechWallpaper } from '../components/Tech/TechElements';

const Tech = () => {
    return (
        <TechContainer>
            <TechWallpaper />
            <TechHeading>Какие технологии Вас интересуют?</TechHeading>
            <TechItem row={"4 /span 1"} column={"3 / span 3"} />
        </TechContainer>
    )
}

export default Tech;