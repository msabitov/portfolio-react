import React, {useState} from 'react';
import {AboutContainer, AboutItem, ItemIcon, Wallpaper } from '../components/About/AboutContainer';
import {FaBirthdayCake } from 'react-icons/fa';
const About = () => {
    return (
        <AboutContainer>
            <Wallpaper />
            <AboutItem column="2 / span 5" row="4 / span 1" >
                <ItemIcon>
                    <FaBirthdayCake />
                </ItemIcon>
                Дата рождения: 3 сентября 1997 г.
            </AboutItem>
            <AboutItem column="2 / span 5" row="5 / span 1" >
                <ItemIcon>
                    <FaBirthdayCake />
                </ItemIcon>
                Семейное положение: Холост
            </AboutItem>
            <AboutItem column="2 / span 5" row="6 / span 1" >
                <ItemIcon>
                    <FaBirthdayCake />
                </ItemIcon>
                Гражданство: Российская Федерация
            </AboutItem>
            <AboutItem column="2 / span 5" row="7 / span 1" >
                <ItemIcon>
                    <FaBirthdayCake />
                </ItemIcon>
                Служба в армии: 2020-2021 гг. (научная рота)
            </AboutItem>
            <AboutItem column="2 / span 5" row="8 / span 1" >
                <ItemIcon>
                    <FaBirthdayCake />
                </ItemIcon>
                Образование: Высшее
            </AboutItem>
            <AboutItem column="2 / span 5" row="9 / span 1" >
                <ItemIcon>
                    <FaBirthdayCake />
                </ItemIcon>
                Автоматизация технологических процессов и производств, 2015-2019 гг.
            </AboutItem>
            <AboutItem column="2 / span 5" row="10 / span 1" >
                <ItemIcon>
                    <FaBirthdayCake />
                </ItemIcon>
                Информатика и вычислительная техника, 2019-2022 гг.
            </AboutItem>
        </AboutContainer>
    )
}

export default About;
