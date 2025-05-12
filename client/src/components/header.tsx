import {useState} from "react";
import {Menu, X} from "lucide-react";

interface HeaderProps {
    activeSection: string;
}

const Header = ({activeSection}: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed w-full top-0 z-50 bg-dark/90 backdrop-blur-sm shadow-md">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <a
                    href="#home"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("home");
                    }}
                    className="text-2xl font-poppins font-bold text-white"
                >
                    <span className="text-primary">M</span>B
                </a>

                <div className="hidden md:flex space-x-10">
                    {["home", "skills", "projects", "contact"].map((section) => (
                        <a
                            key={section}
                            href={`#${section}`}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(section);
                            }}
                            className={`hover:text-primary transition-colors duration-300 ${
                                activeSection === section ? "text-primary font-semibold" : ""
                            }`}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    ))}
                </div>

                <button
                    className="block md:hidden text-2xl text-primary"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X/> : <Menu/>}
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-dark-light w-full py-4 px-6 shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? "block" : "hidden"}`}>
                <div className="flex flex-col space-y-4">
                    {["home", "skills", "projects", "contact"].map((section) => (
                        <a
                            key={section}
                            href={`#${section}`}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(section);
                            }}
                            className={`text-lg hover:text-primary transition-colors duration-300 ${
                                activeSection === section ? "text-primary font-semibold" : ""
                            }`}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
