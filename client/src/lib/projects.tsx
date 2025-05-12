interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubLink: string;
    liveLink: string;
}

export const projects: Project[] = [
    {
        title: "E-commerce API",
        description: "A comprehensive RESTful API built with Node.js and Express to power e-commerce applications with secure authentication, product management, and order processing.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        technologies: ["Node.js", "Express", "MongoDB", "JWT"],
        githubLink: "#",
        liveLink: "#",
    },
    {
        title: "Chat Application",
        description: "A real-time chat platform built with Socket.IO and Node.js, featuring private messaging, group chats, and message history with MongoDB persistence.",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        technologies: ["Socket.IO", "Express", "MongoDB", "Redis"],
        githubLink: "#",
        liveLink: "#",
    },
    {
        title: "Task Manager",
        description: "A full-featured task management API with authentication, task categorization, deadlines, and PDF report generation to enhance productivity.",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        technologies: ["Node.js", "GraphQL", "MongoDB", "PDFKit"],
        githubLink: "#",
        liveLink: "#",
    },
];