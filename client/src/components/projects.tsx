import {forwardRef} from "react";
import {motion} from "framer-motion";
import {projects} from "@/lib/projects";
import {Github, ExternalLink} from "lucide-react";

const Projects = forwardRef<HTMLElement>((props, ref) => {
    const container = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: {y: 30, opacity: 0},
        visible: {y: 0, opacity: 1, transition: {duration: 0.6}}
    };

    return (
        <section
            id="projects"
            ref={ref}
            className="py-20 px-4 bg-dark relative"
        >
            {/* Background with overlay */}
            <div
                className="absolute inset-0 opacity-10 z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />

            <div className="container mx-auto relative z-10 section-transition">
                <div className="text-center mb-16">
                    <h2 className="section-title">
                        My <span className="text-primary">Projects</span>
                        <div className="section-title-bar"></div>
                    </h2>
                    <p className="section-description">
                        Here are some of the projects I've worked on. Each one highlights different aspects of my
                        backend development skills.
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.1}}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card bg-dark-lighter rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
                            variants={item}
                            whileHover={{scale: 1.03}}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="font-poppins font-bold text-xl mb-2 text-white">{project.title}</h3>
                                <p className="text-light text-opacity-80 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex}
                                              className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
                      {tech}
                    </span>
                                    ))}
                                </div>
                                <div className="flex space-x-4">
                                    <a
                                        href={project.githubLink}
                                        className="text-primary hover:text-primary/80 transition-colors duration-300"
                                        aria-label={`GitHub repository for ${project.title}`}
                                    >
                                        <Github className="h-5 w-5"/>
                                    </a>
                                    <a
                                        href={project.liveLink}
                                        className="text-primary hover:text-primary/80 transition-colors duration-300"
                                        aria-label={`Live demo for ${project.title}`}
                                    >
                                        <ExternalLink className="h-5 w-5"/>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
});

Projects.displayName = "Projects";

export default Projects;
