"use client"

import { useEffect, useState } from "react"

interface TerminalTypingProps {
  texts: string[]
  className?: string
}

export function TerminalTyping({ texts, className = "" }: TerminalTypingProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[currentIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, texts])

  return (
    <span className={`font-mono ${className}`}>
      <span className="text-primary">{"> "}</span>
      {displayText}
      <span className="inline-block w-2 h-5 ml-1 bg-primary animate-blink" />
    </span>
  )
}
