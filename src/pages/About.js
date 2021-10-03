import React, {useState} from 'react';
import {AboutContainer, AboutItem, DepImgCont, ItemIcon, Wallpaper, Resume, AboutHeading } from '../components/About/AboutElements';
import {FaBirthdayCake, FaBookOpen, FaBook, FaFlag, FaUniversity, FaUserTie, FaRocket } from 'react-icons/fa';
import DepImage0 from '../images/svg/DepImage-0.svg';
import DepImage1 from '../images/svg/DepImage-1.svg';
import DepImage2 from '../images/svg/DepImage-2.svg';
import DepImage3 from '../images/svg/DepImage-3.svg';
import DepImage4 from '../images/svg/DepImage-4.svg';
import DepImage5 from '../images/svg/DepImage-5.svg';
import DepImage6 from '../images/svg/DepImage-6.svg';
import DepImage7 from '../images/svg/DepImage-7.svg';
import ResImg from '../images/svg/Resume.svg';
import '../App.css';
import { AnimatePresence, motion } from 'framer-motion';
import { imgVariants, pageVariants } from '../components/AnimationVariants';

const About = () => {
    const [numItem, setNumItem] = useState(0);
    const itemInfo = [
        {column:"2 / span 5", row:"5 / span 1", text:"Дата рождения: 3 сентября 1997 г.", jsx: <FaBirthdayCake />}, 
        {column:"2 / span 5", row:"6 / span 1", text:"Семейное положение: Холост", jsx: <FaUserTie />}, 
        {column:"2 / span 5", row:"7 / span 1", text:"Гражданство: Российская Федерация", jsx: <FaFlag />}, 
        {column:"2 / span 5", row:"8 / span 1", text:"Служба в армии: 2020-2021 гг. (научная рота)", jsx: <FaRocket />},
        {column:"2 / span 5", row:"9 / span 1", text:"Образование: Высшее", jsx: <FaUniversity />}, 
        {column:"2 / span 8", row:"10 / span 1", text:"Автоматизация технологических процессов и производств, 2015-2019 гг.", jsx: <FaBook />}, 
        {column:"2 / span 8", row:"11 / span 1", text:"Информатика и вычислительная техника, 2019-2022 гг.", jsx: <FaBookOpen />}
    ];
    const imgArray = [DepImage0, DepImage1, DepImage2, DepImage3, DepImage4, DepImage5, DepImage6, DepImage7];
    const imgList = imgArray.map((item, index) => (
                index==numItem && <DepImgCont 
                key={index}
                variants={imgVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                url={item} />)
                );

    const itemList = itemInfo.map((item, ind) => (
        <AboutItem onClick={() => numItem!=(ind+1) ? setNumItem(ind+1) : setNumItem(0)} active={numItem == (ind+1)} column={item.column} row={item.row}>
            <ItemIcon>
                {item.jsx}
            </ItemIcon>
            {item.text}
        </AboutItem>
    ));
    
    return (
        <motion.div variants={pageVariants} initial="hidden" animate="visible" exit="exit">
            <AboutContainer>
                <Wallpaper onClick={() => setNumItem(0)}/>
                <AboutHeading>Меня зовут Марат Сабитов. Я&nbsp;начинающий Frontend-разработчик.</AboutHeading>
                {itemList}
                <AnimatePresence>
                    {imgList}
                </AnimatePresence>
                <Resume url={ResImg} />
            </AboutContainer>
        </motion.div>
    )
}

export default About;
