'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loading() {
  const [progress, setProgress] = useState(0)
  const [textIndex, setTextIndex] = useState(0)
  
  const loadingTexts = [
    'Initializing portfolio...',
    'Loading experiences...',
    'Fetching skills...',
    'Almost there...',
    'Welcome!'
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 20)
    
    const textInterval = setInterval(() => {
      setTextIndex(prev => (prev + 1) % loadingTexts.length)
    }, 800)
    
    return () => {
      clearInterval(interval)
      clearInterval(textInterval)
    }
  }, [])
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-950">
      <div className="relative flex flex-col items-center gap-8 px-4">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 dark:from-white dark:to-gray-400 flex items-center justify-center shadow-2xl">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="text-3xl font-bold text-white dark:text-gray-900"
            >
              PK
            </motion.span>
          </div>
          
          {/* Pulsing rings */}
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-400 to-transparent"
          />
        </motion.div>
        
        {/* Progress Bar */}
        <div className="w-64 md:w-96">
          <div className="relative h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gray-900 dark:bg-white rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          
          {/* Glow effect */}
          <motion.div
            className="absolute h-1 bg-gradient-to-r from-transparent via-gray-900 dark:via-white to-transparent blur-sm"
            style={{ width: `${progress}%` }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        </div>
        
        {/* Loading Text */}
        <AnimatePresence mode="wait">
          <motion.p
            key={textIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-gray-500 dark:text-gray-400 font-mono"
          >
            {loadingTexts[textIndex]}
          </motion.p>
        </AnimatePresence>
        
        {/* Percentage */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          {Math.min(progress, 100)}%
        </motion.div>
      </div>
    </div>
  )
}