'use client'

import { useRef } from 'react'
import { Code2, Cloud, Smartphone, Database } from 'lucide-react'

const skillCategories = [
    {
        title: "Frontend",
        icon: Code2,
        skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "Redux", "Zustand"]
    },
    {
        title: "Backend",
        icon: Database,
        skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs", "JWT Auth", "Redis"]
    },
    {
        title: "Mobile",
        icon: Smartphone,
        skills: ["React Native", "Expo", "React Native CLI", "Push Notifications", "WebSocket"]
    },
    {
        title: "Cloud & DevOps",
        icon: Cloud,
        skills: ["AWS EC2", "AWS S3", "AWS SSM", "Vercel", "Git/GitHub", "Docker basics"]
    }
]

export default function Skills() {
    const ref = useRef(null)
    
    return (
        <section id="skills" className="py-20 px-4">
            <div ref={ref} className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Technologies and tools I work with to build modern applications
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                                    <category.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                                </div>
                                <h3 className="text-lg font-semibold">{category.title}</h3>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1.5 text-sm bg-gray-50 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:scale-105 transition-transform"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Additional Info */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
                        <h3 className="font-semibold mb-2">Education</h3>
                        <p className="text-gray-600 dark:text-gray-400">BCA – JIWAJI UNIVERSITY (2021–2024)</p>
                        <p className="text-sm text-gray-500">CGPA: 7.0/10</p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
                        <h3 className="font-semibold mb-2">Certifications</h3>
                        <p className="text-gray-600 dark:text-gray-400">MERN Stack Development – Code Help</p>
                        <p className="text-gray-600 dark:text-gray-400">Web Development Training – Corizo</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
