import {useState, useEffect, useRef} from "react";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "@/lib/queryClient";
import {Toaster} from "@/components/ui/toaster";
import {TooltipProvider} from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

function App() {
    const [activeSection, setActiveSection] = useState("home");
    const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({
        home: null,
        skills: null,
        projects: null,
        contact: null,
    });

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200; // Adding offset for better detection

            // Find the current section based on scroll position
            for (const section in sectionsRef.current) {
                const element = sectionsRef.current[section];
                if (!element) continue;

                const offsetTop = element.offsetTop;
                const offsetHeight = element.offsetHeight;

                if (
                    scrollPosition >= offsetTop &&
                    scrollPosition < offsetTop + offsetHeight
                ) {
                    setActiveSection(section);
                }
            }
        };

        // Register intersection observer to detect section visibility for animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("section-visible");
                    }
                });
            },
            {threshold: 0.1}
        );

        // Observe all sections
        document.querySelectorAll(".section-transition").forEach((section) => {
            observer.observe(section);
        });

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.querySelectorAll(".section-transition").forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <Toaster/>
                <div className="min-h-screen bg-dark text-light">
                    <CustomCursor/>
                    <Header activeSection={activeSection}/>

                    <main>
                        <Hero ref={(el) => (sectionsRef.current.home = el)}/>
                        <Skills ref={(el) => (sectionsRef.current.skills = el)}/>
                        <Projects ref={(el) => (sectionsRef.current.projects = el)}/>
                        <Contact ref={(el) => (sectionsRef.current.contact = el)}/>
                    </main>

                    <Footer/>
                </div>
            </TooltipProvider>
        </QueryClientProvider>
    );
}

export default App;
