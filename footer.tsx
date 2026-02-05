"use client"

import { useState, useEffect } from "react"
import { ChevronUp, Shield, Linkedin, Github, Facebook, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-card/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-mono font-bold text-foreground">
              MR<span className="text-primary">_</span>SEC
            </span>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              &copy; 2026 Mohammad Rafiq | Cybersecurity Portfolio
            </p>
            <p className="text-xs text-muted-foreground mt-1 font-mono">
              {"// Securing the digital world"}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 justify-center md:justify-end">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Border */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-neon-purple" />

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground glow-green transition-all duration-300 ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        size="icon"
        aria-label="Back to top"
      >
        <ChevronUp className="h-6 w-6" />
      </Button>
    </footer>
  )
}
