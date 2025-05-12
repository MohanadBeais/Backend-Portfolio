import {forwardRef} from "react";
import {ArrowRight} from "lucide-react";
import {motion} from "framer-motion";

const Hero = forwardRef<HTMLElement>((props, ref) => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
    };

    return (
        <section
            id="home"
            ref={ref}
            className="min-h-screen flex items-center pt-16 pb-20 px-4 relative"
        >
            {/* Background with overlay */}
            <div
                className="absolute inset-0 z-0 bg-dark-light opacity-50"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(0.3) contrast(1.2)"
                }}
            />

            <div className="absolute inset-0 z-0 bg-gradient-to-b from-dark to-transparent opacity-90"/>

            <div className="container mx-auto z-10 section-transition">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        className="order-2 lg:order-1"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                    >
                        <p className="text-primary font-medium mb-2">Hello, I'm</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-4">
                            Mohanad Beais
                        </h1>
                        <h2 className="text-xl md:text-2xl text-light text-opacity-80 font-medium mb-6">
                            Backend Developer <span className="text-primary">(Node.js)</span>
                        </h2>
                        <p className="text-light text-opacity-80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                            A passionate backend developer from Egypt, dedicated to building robust
                            server-side applications and scalable APIs that power modern web experiences.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => scrollToSection("projects")}
                                className="px-8 py-3 bg-primary hover:bg-primary/80 text-white font-medium rounded-full transition-colors duration-300 inline-flex items-center"
                            >
                                <span>View Projects</span>
                                <ArrowRight className="ml-2 h-4 w-4"/>
                            </button>
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary/10 font-medium rounded-full transition-colors duration-300"
                            >
                                Contact Me
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="order-1 lg:order-2 flex justify-center"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.8, delay: 0.3}}
                    >
                        <div
                            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary p-2 animate-float">
                            <div className="w-full h-full rounded-full overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80"
                                    alt="Backend Developer workspace"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
});

Hero.displayName = "Hero";

export default Hero;
