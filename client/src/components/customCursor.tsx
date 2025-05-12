import {useState, useEffect} from "react";
import {motion} from "framer-motion";

const CURSOR_SIZE = 20;

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only show custom cursor on devices that likely have a mouse
        const checkIfMobile = () => {
            setIsVisible(window.innerWidth >= 768);
        };

        checkIfMobile();
        window.addEventListener("resize", checkIfMobile);

        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({x: e.clientX, y: e.clientY});
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("resize", checkIfMobile);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed w-5 h-5 border-2 border-primary rounded-full pointer-events-none z-50"
            animate={{
                x: mousePosition.x - CURSOR_SIZE / 2,
                y: mousePosition.y - CURSOR_SIZE / 2,
                scale: [1, 1.2, 1],
                opacity: 1,
            }}
            transition={{
                scale: {
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                },
                default: {
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                },
            }}
        />
    );
};

export default CustomCursor;
