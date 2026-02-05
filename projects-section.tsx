"use client"

import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "E-Commerce Security Audit",
    description: "Comprehensive penetration testing of a large-scale e-commerce platform, identifying critical SQL injection and XSS vulnerabilities.",
    tools: ["Burp Suite", "SQLmap", "Nmap"],
    category: "Web Security",
  },
  {
    title: "Network Infrastructure Assessment",
    description: "Full network security assessment for a financial institution, including firewall configuration review and internal penetration testing.",
    tools: ["Nessus", "Wireshark", "Metasploit"],
    category: "Network Security",
  },
  {
    title: "OSINT Framework Development",
    description: "Custom Python-based OSINT tool for automated reconnaissance and digital footprint analysis.",
    tools: ["Python", "Shodan", "TheHarvester"],
    category: "OSINT",
  },
  {
    title: "Ransomware Analysis Report",
    description: "Detailed malware analysis of a ransomware variant, including behavior analysis and IOC extraction.",
    tools: ["IDA Pro", "Ghidra", "REMnux"],
    category: "Malware Analysis",
  },
  {
    title: "Social Media Expert",
    description: "Specialized in professional account management, resolving complex platform issues, and implementing advanced security protocols to protect social identities from compromise.",
    tools: ["Meta", "Skill", "Meta"],
    category: "Cloud Security",
  },
  {
    title: "Bug Bounty Findings",
    description: "Collection of critical vulnerabilities discovered through bug bounty programs across multiple platforms.",
    tools: ["Burp Suite", "Nuclei", "ffuf"],
    category: "Bug Bounty",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 lg:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-mono mb-4">
            {"<Projects />"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-primary text-glow-green">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing real-world security assessments, research projects, and 
            tools developed throughout my cybersecurity journey.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 group backdrop-blur-sm hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* Category Badge */}
                <Badge
                  variant="outline"
                  className="mb-4 border-primary/50 text-primary"
                >
                  {project.category}
                </Badge>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 bg-secondary text-muted-foreground text-xs rounded font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-border hover:border-primary hover:bg-primary/10 hover:text-primary bg-transparent"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Details
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Github className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
