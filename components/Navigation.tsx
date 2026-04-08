'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = ['Home', 'Experience', 'Skills', 'Projects', 'Contact']

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

const scrollTo = (section: string) => {
    const element = document.getElementById(section.toLowerCase())
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setIsOpen(false)
    }
}

    return (
        <>
        <div className="pt-16">
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800'
                    : ''
            }`}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">

                        {/* Logo */}
                        <button
                            onClick={() => scrollTo('Home')}
                            className="text-xl font-bold"
                        >
                            Piyush Khare
                        </button>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollTo(item)}
                                    className="text-sm text-gray-600 hover:text-black dark:hover:text-white"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed inset-x-0 top-16 z-40 md:hidden bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex flex-col p-4 gap-2">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollTo(item)}
                                className="px-4 py-3 text-left rounded-lg text-gray-600 dark:text-gray-400"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            )}
            </div>
        </>
    )
}