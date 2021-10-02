import React, {useState} from 'react';
import '../App.css';
import {BarBottom, BarFluid, BarTop, CloudCont, ImgCont, ProgressBar, TechContainer, TechHeading, TechItem, TechListCont, TechWallpaper, WowIcon } from '../components/Tech/TechElements';
import {FaCloud} from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import { cloudVariants, pageVariants } from '../components/AnimationVariants';

const Tech = () => {
    const [matrix, setMatrix] = useState([false, false, false, false, false, false, false, 
        false, false, false, false, false, false, false]);
    const BarLevel = matrix.filter(Boolean).length;

    const chooseAll = () => {
        const matrixNew = new Array(14);
        if(BarLevel==14) matrixNew.fill(false)
        else matrixNew.fill(true)
        setMatrix(matrixNew);
    }
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
        {row:"7 /span 1", column:"2 / span 1", text:"Framer Motion"},
    ];

    const TechList = layout.map((item, index) => (
            <TechItem 
                onClick={() => toggle(index)} 
                active={matrix[index]} 
                row={item.row} 
                column={item.column}
                key={"item"+index}
                >
                {item.text}
            </TechItem>
        ))
    return (
        <motion.div variants={pageVariants} initial="hidden" animate="visible" exit="exit">
            <TechContainer key="3">
                <TechWallpaper />
                <TechHeading>Какие знания Вас интересуют?</TechHeading>
                <TechListCont>
                    {TechList}
                    <TechItem 
                    row="8 /span 1" 
                    column="1 / span 2"
                    active={BarLevel == 14}
                    onClick={() => chooseAll()} 
                    >
                        Выбрать все
                    </TechItem>
                </TechListCont>
                <CloudCont>
                    <AnimatePresence exitBeforeEnter>
                        {(BarLevel == 14) && <ImgCont
                        variants={cloudVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        >
                            <FaCloud style={{width: "inherit", height: "inherit"}}/>
                        </ImgCont>}
                    </AnimatePresence>
                </CloudCont>
                <ProgressBar row={"4 /span 7"} column={"9 / span 2"}>
                    <BarTop />
                    <BarBottom>
                        <BarFluid level={BarLevel*7.15}/>
                    </BarBottom>
                </ProgressBar>
            </TechContainer>
        </motion.div>
    )
}

export default Tech;