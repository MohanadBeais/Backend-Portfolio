import {Variants} from "framer-motion";

export const fadeInUp: Variants = {
    hidden: {opacity: 0, y: 20},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6
        }
    }
};

export const fadeInDown: Variants = {
    hidden: {opacity: 0, y: -20},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6
        }
    }
};

export const fadeInLeft: Variants = {
    hidden: {opacity: 0, x: -20},
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6
        }
    }
};

export const fadeInRight: Variants = {
    hidden: {opacity: 0, x: 20},
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6
        }
    }
};

export const staggerContainer: Variants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export const itemFadeIn: Variants = {
    hidden: {opacity: 0, y: 10},
    visible: {opacity: 1, y: 0}
};
