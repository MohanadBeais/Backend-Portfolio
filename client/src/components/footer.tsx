import {FC} from "react";

const Footer: FC = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
    };

    return (
        <footer className="bg-dark py-8 px-4 border-t border-gray-800">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-light text-opacity-80 mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Mohanad Beais. All rights reserved.
                    </p>

                    <div className="flex space-x-6">
                        {["home", "skills", "projects", "contact"].map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className="text-light text-opacity-80 hover:text-primary transition-colors duration-300"
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
