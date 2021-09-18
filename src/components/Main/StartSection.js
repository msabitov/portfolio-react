import React from 'react'
import Video from '../../videos/Video.mp4';
import { JobHeading, MainHeading, StartContainer, StartWall, VideoWallpaper, WorkHeading } from './StartSectionElements';

const StartSection = (props) => {
    return (
        <StartContainer>
            <StartWall>
                <VideoWallpaper autoPlay loop muted src={Video} type='video/mp4'/>
            </StartWall>
            <MainHeading>{props.name}</MainHeading>
            <JobHeading>{props.job}</JobHeading>
            <WorkHeading>{props.work}</WorkHeading>
        </StartContainer>
    )
}

export default StartSection
