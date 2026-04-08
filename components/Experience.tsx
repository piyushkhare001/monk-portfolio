'use client'

import { useRef } from 'react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
    {
        title: "Full Stack Developer",
        company: "AV Technosys",
        location: "Jaipur",
        period: "Nov 2025 – Present",
        achievements: [
            "Built React Native mobile app from scratch with complete architecture, navigation, and state management",
            "Developed e-commerce web app using Next.js and PostgreSQL with product listings and cart functionality",
            "Designed RESTful APIs with Node.js and PostgreSQL, implementing optimized queries and scalable workflows",
            "Integrated AWS S3 for secure image storage and optimized delivery",
            "Implemented push notifications for real-time user updates across mobile platforms"
        ]
    },
    {
        title: "Full Stack Developer",
        company: "Lazyatra",
        location: "Jaipur",
        period: "Feb 2025 – Oct 2025",
        achievements: [
            "Integrated TravClan's APIs for real-time hotel booking flow (search, pricing, booking)",
            "Built end-to-end travel platform using Next.js, TypeScript, Tailwind CSS, and RESTful APIs",
            "Migrated React Native app from Expo to CLI for production readiness",
            "Deployed optimized builds on AWS EC2 using Next.js standalone build",
            "Secured application secrets using AWS SSM Parameter Store",
            "Integrated Cashfree payment gateway for seamless transactions"
        ]
    },
    {
        title: "Frontend Developer Intern",
        company: "Jobbie",
        location: "Remote",
        period: "June 2024 – Feb 2025",
        achievements: [
            "Built responsive UIs with React.js, TypeScript, Tailwind CSS, and ShadCN UI",
            "Designed reusable components for consistency and scalability",
            "Integrated RESTful APIs in collaboration with backend teams",
            "Developed user-centric tools like resume score checker, boosting engagement",
            "Ensured cross-browser compatibility and optimized performance"
        ]
    }
]

export default function Experience() {
    const ref = useRef(null)
    
    return (
        <section  id="experience" className=" py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
            <div ref={ref} className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        My professional journey building scalable applications and solving real-world problems
                    </p>
                </div>
                
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-px bg-gray-200 dark:bg-gray-800" />
                    
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:flex-row-reverse'
                            }`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gray-900 dark:bg-white" />
                            
                            <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800">
                                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                                        <Briefcase size={14} />
                                        <span>{exp.company}</span>
                                        <span>•</span>
                                        <Calendar size={14} />
                                        <span>{exp.period}</span>
                                    </div>
                                    
                                    <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                                    
                                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                        <MapPin size={14} />
                                        <span>{exp.location}</span>
                                    </div>
                                    
                                    <ul className="space-y-2">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex gap-2">
                                                <span className="text-gray-900 dark:text-white mt-1">▹</span>
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="flex-1" /> {/* Spacer */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
