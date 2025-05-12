import {forwardRef} from "react";
import {motion} from "framer-motion";
import {skills} from "@/lib/skills";

const Skills = forwardRef<HTMLElement>((props, ref) => {
    const container = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: {y: 20, opacity: 0},
        visible: {y: 0, opacity: 1}
    };

    return (
        <section
            id="skills"
            ref={ref}
            className="py-20 px-4 bg-dark-light relative"
        >
            <div className="container mx-auto section-transition">
                <div className="text-center mb-16">
                    <h2 className="section-title">
                        My <span className="text-primary">Skills</span>
                        <div className="section-title-bar"></div>
                    </h2>
                    <p className="section-description">
                        I specialize in server-side development with a focus on Node.js technologies.
                        Here are the technologies and skills I've mastered over the years.
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.1}}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="skill-card bg-dark-lighter rounded-xl p-6 shadow-lg border border-gray-800 hover:border-primary transition-all duration-300 transform hover:-translate-y-1"
                            variants={item}
                        >
                            <div className="flex items-center mb-4">
                                <div
                                    className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                                    {skill.icon}
                                </div>
                                <h3 className="font-poppins font-medium text-lg">{skill.name}</h3>
                            </div>
                            <p className="text-light text-opacity-80 text-sm">{skill.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
});

Skills.displayName = "Skills";

export default Skills;
