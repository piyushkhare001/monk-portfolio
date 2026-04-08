'use client'

import { Mail, Phone, MapPin, Link, Computer } from 'lucide-react'

export default function Contact() {

    const whatsappNumber = "919696120363"
    const message = encodeURIComponent("Hey Piyush, I came across your portfolio and would like to connect!")

    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Let’s connect! Reach out directly via WhatsApp or Email 🚀
                    </p>
                </div>

                <div className="flex flex-col items-center gap-6">

                    {/* WhatsApp Button 🔥 */}
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${message}`}
                        target="_blank"
                        className="w-full md:w-auto px-6 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
                    >
                        <Phone size={18} />
                        Chat on WhatsApp
                    </a>

                    {/* Email Button */}
                    <a
                        href="mailto:piyushkhare671@gmail.com"
                        className="w-full md:w-auto px-6 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
                    >
                        <Mail size={18} />
                        Send Email
                    </a>

                    {/* Info */}
                    <div className="text-center text-sm text-gray-500 mt-6">
                        <p>📍 Jaipur, India</p>
                        <p>📞 +91 9696120363</p>
                        <p>📧 piyushkhare671@gmail.com</p>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4 pt-4">
                        <a href="https://github.com/piyushkhare" target="_blank"
                            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                            <Computer size={20} />
                        </a>
                        <a href="https://linkedin.com/in/piyushkhare" target="_blank"
                            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                            <Link size={20} />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}