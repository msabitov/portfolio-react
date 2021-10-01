import { motion } from "framer-motion";
import styled from "styled-components";
//import { pageVariants } from "./AnimationVariants";

const pageVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1,
            duration: 1,
        }
    },
    exit: {
        x: '-100vw',
        transition: {
            ease: 'easeIn',
            duration: 1,
        }
    }
}

export const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: repeat(12, 1fr);
    grid-template-columns: repeat(10, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    position: relative;
`;

export const PageContainer = (props) => <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{backgroundColor: props.color}}/>;