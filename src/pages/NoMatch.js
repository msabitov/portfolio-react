import React from 'react'
import { NoMatchHeading, NoMatchCont, NoMatchImg, NoMatcComment } from '../components/NoMatch/NoMatchElements'
import { motion } from 'framer-motion';
import { pageVariants } from '../components/AnimationVariants';
import img from '../images/svg/NotFound.svg';

const NoMatch = () => {
    return (
        <motion.div variants={pageVariants} initial="hidden" animate="visible" exit="exit">
            <NoMatchCont key="4">
                <NoMatchImg src={img} />
                <NoMatchHeading>Как Вы здесь оказались?</NoMatchHeading>
                <NoMatcComment>Не знаю, но задерживаться точно&nbsp;не&nbsp;стоит&nbsp;:)</NoMatcComment>
            </NoMatchCont>
        </motion.div>
    )
}

export default NoMatch
