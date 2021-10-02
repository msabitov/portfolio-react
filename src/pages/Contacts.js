import React from 'react';
import {FaVk, FaTelegram, FaMailBulk, FaGithub} from 'react-icons/fa';
import {ItemIcon} from '../components/About/AboutElements';
import {ContactsContainer, ContactsItem, ContactsWallpaper } from '../components/Contacts/ContactsElements';
import { motion } from 'framer-motion';
import { pageVariants } from '../components/AnimationVariants';

const Contacts = () => {
    const contactsInfo = [
        {column:"2 / span 5", row:"5 / span 1", text:"vk.com/sabitov_ma", href:"https://vk.com/sabitov_ma", jsx: <FaVk />}, 
        {column:"2 / span 5", row:"6 / span 1", text:"+7 922 044-63-35", href:"tel:+7 922 044-63-35", jsx: <FaTelegram />}, 
        {column:"2 / span 5", row:"7 / span 1", text:"sabitov.m.a@yandex.ru", href:"mailto: sabitov.m.a@yandex.ru", jsx: <FaMailBulk />},
        {column:"2 / span 5", row:"8 / span 1", text:"https://github.com/msabitov/", jsx: <FaGithub />}
    ];
    const contacts = contactsInfo.map((item, index) =>
        <ContactsItem column={item.column} row={item.row} href={item.href} target="_blank">
            <ItemIcon>
                {item.jsx}
            </ItemIcon>
            <span style={{marginLeft: "10px"}}>{item.text}</span>
        </ContactsItem>
    );
    return (
        <motion.div variants={pageVariants} initial="hidden" animate="visible" exit="exit">
            <ContactsContainer>
                <ContactsWallpaper />
                {contacts}
            </ContactsContainer>
        </motion.div>
    )
}

export default Contacts;