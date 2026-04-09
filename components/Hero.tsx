"use client";

import { Mail, Phone, MapPin, Send, Link, Computer } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="home"
            className=" min-h-screen flex items-center justify-center px-4 pt-20"
        >
            <div className="max-w-5xl mx-auto text-center">
                <div className="space-y-6">
                    {/* Badge */}
                    <div>
                        <span className="inline-block px-3 py-1 text-xs font-mono bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400">
                            Available for work
                        </span>
                    </div>

                    {/* Name */}
                    <h1 className="text-6xl md:text-8xl font-bold">
                        <span className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-white dark:via-gray-400 dark:to-white bg-clip-text text-transparent">
                            Piyush Khare
                        </span>
                    </h1>

                    {/* Title */}
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
                        Full-Stack Developer
                    </p>

                    {/* Description */}
                    <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-500">
                        Building scalable web and mobile applications with Next.js, React
                        Native, and AWS. Passionate about creating elegant solutions and
                        seamless user experiences.
                    </p>

                    {/* Contact Info */}
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>Jaipur, India</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone size={16} />
                            <span>+91 9696120363</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={16} />
                            <span>piyushkhare671@gmail.com</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <a
                            href="#contact"
                            className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:shadow-lg transition-shadow"
                        >
                            Get in touch
                        </a>

                        <a
                            href="#experience"
                            className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:border-gray-900 dark:hover:border-white transition-colors"
                        >
                            View my work
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-6 pt-8">
                        {[
                            {
                                icon: Computer,
                                href: "https://github.com/piyushkhare001",
                                label: "GitHub",
                            },
                            {
                                icon: Link,
                                href: "https://www.linkedin.com/in/piyush-khare-7a351623b",
                                label: "LinkedIn",
                            },
                            {
                                icon: Mail,
                                href: "mailto:piyushkhare671@gmail.com",
                                label: "Email",
                            },
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                                aria-label={social.label}
                            >
                                <social.icon size={24} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
