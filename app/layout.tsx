import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })

export const metadata: Metadata = {
  title: 'Piyush Khare | Full-Stack Developer',
  description: 'Full-stack developer specializing in Next.js, React Native, and AWS. Building scalable web and mobile applications.',
  keywords: 'Piyush Khare, Full Stack Developer, Next.js, React Native, AWS, Portfolio',
  authors: [{ name: 'Piyush Khare' }],
  openGraph: {
    title: 'Piyush Khare | Full-Stack Developer',
    description: 'Building scalable web and mobile apps with Next.js, React Native, and AWS',
    url: 'https://piyushkhare.dev',
    siteName: 'Piyush Khare Portfolio',
    images: [{ url: '/og-image.png' }],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased`}>
        {children}
      </body>
    </html>
  )
}