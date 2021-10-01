import React from 'react'
import Video from '../../videos/Video.mp4';
import { PageContainer } from '../CommonElements';
import { Link } from 'react-router-dom';
import { JobHeading, MainHeading, StartContainer, StartWall, VideoWallpaper, WorkHeading } from './StartSectionElements';

const StartSection = (props) => {
    return (
        <PageContainer>
            <StartWall>
                <VideoWallpaper autoPlay loop muted src={Video} type='video/mp4'/>
            </StartWall>
            <MainHeading to="/about">{props.name}</MainHeading>
            <JobHeading to="/tech">{props.job}</JobHeading>
            <WorkHeading to="/contacts">{props.work}</WorkHeading>
        </PageContainer>
    )
}

export default StartSection
