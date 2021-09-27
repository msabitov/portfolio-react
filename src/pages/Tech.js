import React, {useState} from 'react';
import '../App.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {BarBottom, BarFluid, BarTop, ProgressBar, TechContainer, TechHeading, TechItem, TechListCont, TechWallpaper, WowIcon } from '../components/Tech/TechElements';
import WowSvg from '../images/svg/Wow.svg';

const Tech = () => {
    const [matrix, setMatrix] = useState([false, false, false, false, false, false, false, 
        false, false, false, false, false, false, false]);
    const BarLevel = matrix.filter(Boolean).length;

    const toggle = (index) => {
        const matrixNew = matrix.slice();
        matrixNew.splice(index,1,!(matrixNew[index]));
        setMatrix(matrixNew);
    };
    
    const layout = [
        {row:"1 /span 1", column:"1 / span 1", text:"HTML5"},
        {row:"2 /span 1", column:"1 / span 1", text:"CSS3"},
        {row:"3 /span 1", column:"1 / span 1", text:"JavaScript"},
        {row:"4 /span 1", column:"1 / span 1", text:"Node.js"},
        {row:"5 /span 1", column:"1 / span 1", text:"React"},
        {row:"6 /span 1", column:"1 / span 1", text:"Styled Components"},
        {row:"7 /span 1", column:"1 / span 1", text:"React Router"},
        {row:"1 /span 1", column:"2 / span 1", text:"Python"},
        {row:"2 /span 1", column:"2 / span 1", text:"SQL"},
        {row:"3 /span 1", column:"2 / span 1", text:"Microsoft Office"},
        {row:"4 /span 1", column:"2 / span 1", text:"English (Intermediate)"},
        {row:"5 /span 1", column:"2 / span 1", text:"Git"},
        {row:"6 /span 1", column:"2 / span 1", text:"Figma"},
        {row:"7 /span 1", column:"2 / span 1", text:"MATLAB"}
    ];

    const TechList = layout.map((item, index) => (
            <CSSTransition
            in={matrix[index]}
            key={index}
            classNames="tech-item"
            timeout={200}
            >
            <TechItem 
                onClick={() => toggle(index)} 
                active={matrix[index]} 
                row={item.row} 
                column={item.column}
                transitionName="tech-item"
                key={"item"+index}
                >
                {item.text}
            </TechItem>
            </CSSTransition>
        ))
    return (
        <TechContainer>
            <TechWallpaper />
            <TechHeading>Какие знания Вас интересуют?</TechHeading>
            <TechListCont>
                {TechList}
            </TechListCont>
            <WowIcon url={WowSvg} active={BarLevel == 14} />
            <ProgressBar row={"4 /span 7"} column={"9 / span 2"}>
                <BarTop />
                <BarBottom>
                    <BarFluid level={BarLevel*7.15}/>
                </BarBottom>
            </ProgressBar>
        </TechContainer>
    )
}

export default Tech;