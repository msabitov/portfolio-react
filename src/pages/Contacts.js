import React, {useState} from 'react';

const Contacts = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
           Contacts
        </div>
    )
}

export default Contacts;
