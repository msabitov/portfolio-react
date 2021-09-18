import React, {useState} from 'react';
import StartSection from '../components/Main/StartSection';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <StartSection name="Сабитов Марат Асхатович" job="Фронтенд-разработчик" work="Полная занятость" />
        </div>
    )
}

export default Home;
