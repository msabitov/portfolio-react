import React, {useState} from 'react';
import {FaVk, FaTelegram, FaMailBulk} from 'react-icons/fa';
import {ItemIcon} from '../components/About/AboutElements';
import {ContactsContainer, ContactsItem, ContactsWallpaper } from '../components/Contacts/ContactsElements';

const Contacts = () => {
    const contactsInfo = [
        {column:"2 / span 5", row:"5 / span 1", text:"vk.com/sabitov_ma", href:"vk.com/sabitov_ma", jsx: <FaVk />}, 
        {column:"2 / span 5", row:"6 / span 1", text:"+7 922 044-63-35", href:"tel:+7 922 044-63-35", jsx: <FaTelegram />}, 
        {column:"2 / span 5", row:"7 / span 1", text:"sabitov.m.a@yandex.ru", href:"sabitov.m.a@yandex.ru", jsx: <FaMailBulk />}, 
    ];
    const contacts = contactsInfo.map((item, index) =>
        <ContactsItem column={item.column} row={item.row} href={item.href}>
            <ItemIcon>
                {item.jsx}
            </ItemIcon>
            {item.text}
        </ContactsItem>
    );
    return (
        <ContactsContainer>
            <ContactsWallpaper />
            {contacts}
        </ContactsContainer>
    )
}

export default Contacts;