'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Loading from './loading'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // match your animation

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative">
      {loading && <Loading />}

<div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
      <Navigation />

      {/* IMPORTANT FIX 👇 */}
      <div className="">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}