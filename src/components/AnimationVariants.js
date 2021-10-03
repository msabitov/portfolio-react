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

export const imgVariants = {
    hidden: {
        opacity: 0,
        rotateY: -90,
        rotateZ: -45,
    },
    visible: {
        opacity: 1,
        rotateY: 0,
        rotateZ: 0,
        transition: {
            delay: 0.5,
            duration: 1,
        }
    },
    exit: {
        opacity: 0,
        rotateY: 90,
        rotateZ: 45,
        transition: {
            ease: 'easeInOut',
            duration: 1,
        }
    }
}

export const cloudVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 1,
    },
    visible: {
        opacity: [1, 0],
        y: [0, -80],
        scale: [1, 1.3],
        transition: {
            delay: 0,
            duration: 1,
            repeat: Infinity,
        }
    },
    exit: {
        opacity: 0,
        transition: {
            ease: 'easeInOut',
            duration: 1,
        }
    }
}