import React, {useState} from 'react';
import StartSection from '../components/Main/StartSection';

const About = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            about
        </div>
    )
}

export default About;
