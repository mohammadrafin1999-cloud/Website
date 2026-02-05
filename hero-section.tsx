"use client"

import { ArrowRight, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TerminalTyping } from "@/components/terminal-typing"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background Image Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-20 pointer-events-none">
        <Image
          src="/profile-photo.jpg"
          alt=""
          fill
          className="object-cover object-center rounded-full blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/50 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Terminal Style Header */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-mono">
              {"// System Status: Online"}
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 text-foreground">
            Mohammad{" "}
            <span className="text-primary text-glow-green">Rafin</span>
          </h1>

          {/* Tagline */}
          <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6 font-mono">
            <TerminalTyping
              texts={[
                "Cybersecurity Specialist",
                "Ethical Hacker",
                "Digital Defense Expert",
                "Penetration Tester",
              ]}
            />
          </div>

          {/* Bio */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Dedicated to protecting digital infrastructures and securing
            organizations against evolving cyber threats. Specializing in
            penetration testing, vulnerability assessments, and comprehensive
            security solutions that safeguard your digital assets.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-green group"
              asChild
            >
              <a href="#projects">
                <Eye className="mr-2 h-5 w-5" />
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary bg-transparent"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { value: "50+", label: "Projects" },
              { value: "30+", label: "Clients" },
              { value: "5+", label: "Years Exp" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary text-glow-green">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-muted-foreground font-mono">
          scroll down
        </span>
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse-glow" />
        </div>
      </div>
    </section>
  )
}
