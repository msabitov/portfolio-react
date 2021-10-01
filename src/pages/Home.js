import React from 'react'
import Video from '../videos/Video.mp4';
import { PageContainer } from '../components/CommonElements';
import { Link } from 'react-router-dom';
import { JobHeading, MainHeading, StartContainer, StartWall, VideoWallpaper, WorkHeading } from '../components/Main/StartSectionElements';
import { motion } from 'framer-motion';
import { pageVariants } from '../components/AnimationVariants';

const Home = () => {
    const name="Сабитов Марат Асхатович";
    const job="Фронтенд-разработчик";
    const work="Полная занятость";
    return (
        <motion.div variants={pageVariants} initial="hidden" animate="visible" exit="exit">
            <StartContainer>
                <StartWall>
                    <VideoWallpaper autoPlay loop muted src={Video} type='video/mp4'/>
                </StartWall>
                <MainHeading to="/about">{name}</MainHeading>
                <JobHeading to="/tech">{job}</JobHeading>
                <WorkHeading to="/contacts">{work}</WorkHeading>
            </StartContainer>
        </motion.div>
    )
}

export default Home;
