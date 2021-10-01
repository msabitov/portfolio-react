import React from 'react'
import { NoMacthHeading, NoMatchCont } from '../components/NoMatch/NoMatchElements'
import { motion } from 'framer-motion';
import { pageVariants } from '../components/AnimationVariants';

const NoMatch = () => {
    return (
        <motion.div variants={pageVariants} initial="hidden" animate="visible" exit="exit">
            <NoMatchCont key="4">
                <NoMacthHeading>404 Not found</NoMacthHeading>
            </NoMatchCont>
        </motion.div>
    )
}

export default NoMatch
