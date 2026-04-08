'use client'

import { ExternalLink, Computer } from 'lucide-react'

const projects = [
    {
        title: "E-commerce Platform",
        description: "Full-featured e-commerce web app with product listings, cart functionality, and order management using Next.js and PostgreSQL.",
        tech: ["Next.js", "PostgreSQL", "Node.js", "Tailwind CSS"],
        github: "#",
        live: "#"
    },
    {
        title: "Travel Booking Platform",
        description: "End-to-end travel booking platform with real-time hotel search, pricing, and booking integration using TravClan's APIs.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "Cashfree"],
        github: "#",
        live: "#"
    },
    {
        title: "React Native Mobile App",
        description: "Production mobile application with complete architecture, navigation, state management, and push notifications.",
        tech: ["React Native", "Redux", "Push Notifications", "AWS S3"],
        github: "#",
        live: "#"
    },
    {
        title: "Resume Score Checker",
        description: "User-centric tool that analyzes resumes and provides scoring and improvement suggestions.",
        tech: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs"],
        github: "#",
        live: "#"
    }
]

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Some of my recent work and personal projects
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all hover:-translate-y-1"
                        >
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-md">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="flex gap-4">
                                <a href={project.github} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    <Computer size={18} />
                                </a>
                                <a href={project.live} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    <ExternalLink size={18} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
