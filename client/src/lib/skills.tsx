import {ReactNode} from "react";
import {
    Code,
    Server,
    Database,
    Lock,
    Layers,
    LayoutPanelLeft,
    Network,
    FileJson,
    Plug,
    FileType,
    Shell,
    Zap,
    Mail,
    FileUp,
    FileCheck,
    ScanLine,
    Users,
    BarChart,
    PauseCircle,
    LayoutTemplate,
    GitBranch,
    FileCode,
    KeyRound,
    Spline,
    FileCog,
    Settings,
    FileSymlink,
    Globe,
} from "lucide-react";

interface Skill {
    name: string;
    description: string;
    icon: ReactNode;
}

export const skills: Skill[] = [
    {
        name: "JavaScript",
        description: "Build server-side logic and manage asynchronous workflows",
        icon: <Code className="text-primary"/>,
    },
    {
        name: "Node.js",
        description: "Develop scalable backend services and APIs",
        icon: <Server className="text-primary"/>,
    },
    {
        name: "Express.js",
        description: "Create RESTful APIs and manage routing logic",
        icon: <Server className="text-primary"/>,
    },
    {
        name: "Routers & Models",
        description: "Organise routes and define database schemas",
        icon: <Network className="text-primary"/>,
    },
    {
        name: "Middleware",
        description: "Intercept and handle requests at different stages",
        icon: <Layers className="text-primary"/>,
    },
    {
        name: "ODM (mongoose)",
        description: "Manage MongoDB operations with schema validation",
        icon: <FileSymlink className="text-primary"/>,
    },
    {
        name: "MVC",
        description: "Architectural pattern implementation",
        icon: <LayoutPanelLeft className="text-primary"/>,
    },
    {
        name: "ORM (Sequelize)",
        description: "Map relational DB models and handle SQL queries",
        icon: <FileCode className="text-primary"/>,
    },
    {
        name: "MongoDB",
        description: "Store and query NoSQL data for backend systems",
        icon: <Database className="text-primary"/>,
    },
    {
        name: "Validation (JOI)",
        description: "Validate request payloads and enforce rules",
        icon: <FileCheck className="text-primary"/>,
    },
    {
        name: "Authentication",
        description: "Secure login systems with JWT and OAuth",
        icon: <KeyRound className="text-primary"/>,
    },
    {
        name: "Authorization",
        description: "Restrict access based on user roles",
        icon: <Users className="text-primary"/>,
    },
    {
        name: "REST API",
        description: "Design and implement structured API endpoints",
        icon: <FileJson className="text-primary"/>,
    },
    {
        name: "Mongoose Relations",
        description: "Define and use population in related schemas",
        icon: <BarChart className="text-primary"/>,
    },
    {
        name: "Social Media Login",
        description: "Implement Google and Facebook login with OAuth2",
        icon: <Globe className="text-primary"/>,
    },
    {
        name: "Error Handling",
        description: "Log and respond to server errors gracefully",
        icon: <ScanLine className="text-primary"/>,
    },
    {
        name: "File Uploads",
        description: "Use Multer to manage and validate uploaded files",
        icon: <FileUp className="text-primary"/>,
    },
    {
        name: "CRUD Operations",
        description: "Build endpoints to create, read, update, and delete data",
        icon: <LayoutPanelLeft className="text-primary"/>,
    },
    {
        name: "Pagination",
        description: "Limit and structure large data responses",
        icon: <PauseCircle className="text-primary"/>,
    },
    {
        name: "Email Services",
        description: "Send transactional emails using Nodemailer",
        icon: <Mail className="text-primary"/>,
    },
    {
        name: "Templating Engines",
        description: "Render HTML views with EJS and pass dynamic data",
        icon: <LayoutTemplate className="text-primary"/>,
    },
    {
        name: "Sessions",
        description: "Manage user sessions with express-session and cookies",
        icon: <Users className="text-primary"/>,
    },
    {
        name: "Socket.IO",
        description: "Build real-time apps like chat or live notifications",
        icon: <Plug className="text-primary"/>,
    },
    {
        name: "GraphQL",
        description: "Query and mutate data with flexible API endpoints",
        icon: <FileType className="text-primary"/>,
    },
    {
        name: "Redis",
        description: "Cache requests and store session data in memory",
        icon: <Zap className="text-primary"/>,
    },
    {
        name: "NestJS",
        description: "Structure backend apps using modules and decorators",
        icon: <Spline className="text-primary"/>,
    },
    {
        name: "Docker",
        description: "Containerise apps for consistent deployment",
        icon: <Shell className="text-primary"/>,
    },
    {
        name: "Git & GitHub",
        description: "Track code, manage branches, and review pull requests",
        icon: <GitBranch className="text-primary"/>,
    },
];
