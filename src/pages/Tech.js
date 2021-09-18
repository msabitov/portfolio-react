import React, {useState} from 'react';

const Tech = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            Tech
        </div>
    )
}

export default Tech;
