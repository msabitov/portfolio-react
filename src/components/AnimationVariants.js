export const pageVariants = {
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
        opacity: 0,
        transition: {
            ease: 'easeIn',
            duration: 1,
        }
    }
}