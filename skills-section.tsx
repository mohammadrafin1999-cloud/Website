"use client"

import { useEffect, useState, useRef } from "react"
import { 
  Target, 
  Search, 
  Terminal, 
  Network, 
  Globe, 
  Users, 
  Activity, 
  FileText 
} from "lucide-react"

const skills = [
  { name: "Penetration Testing", level: 90, icon: Target },
  { name: "Vulnerability Assessment", level: 88, icon: Search },
  { name: "Kali Linux", level: 92, icon: Terminal },
  { name: "Networking", level: 85, icon: Network },
  { name: "Web Application Security", level: 87, icon: Globe },
  { name: "Social Media Expert", level: 95, icon:Users },
  { name: "Wireshark Analysis", level: 85, icon: Activity },
  { name: "Security Reporting", level: 82, icon: FileText },
]

const tools = [
  { name: "Nmap", color: "bg-primary" },
  { name: "Burp Suite", color: "bg-accent" },
  { name: "Metasploit", color: "bg-neon-purple" },
  { name: "Wireshark", color: "bg-primary" },
  { name: "Hydra", color: "bg-accent" },
  { name: "SQLmap", color: "bg-neon-purple" },
  { name: "Nessus", color: "bg-primary" },
  { name: "Shodan", color: "bg-accent" },
  { name: "John the Ripper", color: "bg-neon-purple" },
]

function SkillBar({ skill, isVisible }: { skill: typeof skills[0]; isVisible: boolean }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setWidth(skill.level), 100)
      return () => clearTimeout(timer)
    }
  }, [isVisible, skill.level])

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <skill.icon className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">{skill.name}</span>
        </div>
        <span className="text-sm font-mono text-primary">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="relative py-20 lg:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-mono mb-4">
            {"<Skills />"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technical <span className="text-primary text-glow-green">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Progress Bars */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-6 font-mono">
              {"// Core Competencies"}
            </h3>
            <div className="space-y-5">
              {skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} isVisible={isVisible} />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 font-mono">
              {"// Security Tools"}
            </h3>
            <div className="bg-card/50 border border-border rounded-lg p-6 backdrop-blur-sm">
              <div className="font-mono text-sm text-muted-foreground mb-4">
                $ ls /tools
              </div>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool.name}
                    className={`px-4 py-2 ${tool.color}/10 border border-current rounded-lg text-sm font-mono 
                    hover:scale-105 transition-transform cursor-default
                    ${tool.color === "bg-primary" ? "text-primary border-primary/30" : ""}
                    ${tool.color === "bg-accent" ? "text-accent border-accent/30" : ""}
                    ${tool.color === "bg-neon-purple" ? "text-neon-purple border-neon-purple/30" : ""}
                    `}
                  >
                    {tool.name}
                  </span>
                ))}
              </div>
              
              {/* Terminal Animation */}
              <div className="mt-6 bg-background/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-muted-foreground mb-2">
                  $ nmap -sV -sC target.com
                </div>
                <div className="text-primary animate-pulse-glow">
                  Scanning target... 
                </div>
              </div>
            </div>

            {/* Certifications Preview */}
            <div className="mt-6 bg-card/50 border border-border rounded-lg p-6 backdrop-blur-sm">
              <h4 className="font-semibold text-foreground mb-4">
                Continuous Learning
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Committed to staying updated with the latest security trends, 
                vulnerabilities, and defense techniques through ongoing education 
                and practical application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
