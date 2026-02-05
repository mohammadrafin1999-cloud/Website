import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'Mohammad Rafin| Cybersecurity Specialist & Social Media Expertr',
  description: 'Professional cybersecurity portfolio showcasing expertise in penetration testing, vulnerability assessment, ethical hacking, and digital defense solutions.',
  keywords: ['cybersecurity', 'ethical hacker', 'penetration testing', 'social media expert', 'Bangladesh'],
  authors: [{ name: 'Mohammad Rafin' }],
}

export const viewport: Viewport = {
  themeColor: '#0a0f0d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
