"use client"

import { 
  Globe, 
  Search, 
  MessageCircle, 
  Eye, 
  Shield, 
  Bug,
  Users,
  Award,
  FileCheck
} from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Globe,
    title: "Website Penetration Testing",
    description: "Comprehensive security assessment of web applications to identify vulnerabilities and security flaws.",
    color: "primary",
  },
  {
    icon: Search,
    title: "Vulnerability Assessment",
    description: "Systematic identification and evaluation of security weaknesses in your systems and infrastructure.",
    color: "accent",
  },
  {
    icon: MessageCircle,
    title: "Cybersecurity Consultation",
    description: "Expert guidance on security strategy, compliance, and best practices for your organization.",
    color: "neon-purple",
  },
  {
    icon: Eye,
    title: "OSINT Investigation",
    description: "Open source intelligence gathering to assess your digital footprint and exposure risks.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Network Security Setup",
    description: "Design and implementation of secure network architecture with proper access controls.",
    color: "accent",
  },
  {
    icon: Bug,
    title: "Malware Analysis",
    description: "In-depth analysis of malicious software to understand threats and develop countermeasures.",
    color: "neon-purple",
  },
  {
    icon: Users,
    title: "Social Media",
    description: "Specialized in professional account management, resolving complex any type of soclial media issues, and implementing advanced security protocols to protect social identities from compromise.",
    color: "primary",
  },
  {
    icon: Award,
    title: "Bug Bounty Support",
    description: "Assistance with bug bounty programs, vulnerability reporting, and coordination.",
    color: "neon-purple",
  },
  {
    icon: FileCheck,
    title: "Digital Security Audit",
    description: "Complete audit of your digital security posture with detailed recommendations.",
    color: "primary",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-mono mb-4">
            {"<Services />"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Security <span className="text-accent text-glow-blue">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive cybersecurity solutions tailored to protect your digital assets 
            and strengthen your security posture.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`bg-card/50 border-border hover:border-${service.color}/50 
              transition-all duration-300 group backdrop-blur-sm hover:-translate-y-1
              ${service.color === "primary" ? "hover:glow-green" : ""}
              ${service.color === "accent" ? "hover:glow-blue" : ""}
              ${service.color === "neon-purple" ? "hover:glow-purple" : ""}
              `}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors
                  ${service.color === "primary" ? "bg-primary/10 group-hover:bg-primary/20" : ""}
                  ${service.color === "accent" ? "bg-accent/10 group-hover:bg-accent/20" : ""}
                  ${service.color === "neon-purple" ? "bg-neon-purple/10 group-hover:bg-neon-purple/20" : ""}
                  `}
                >
                  <service.icon
                    className={`h-6 w-6
                    ${service.color === "primary" ? "text-primary" : ""}
                    ${service.color === "accent" ? "text-accent" : ""}
                    ${service.color === "neon-purple" ? "text-neon-purple" : ""}
                    `}
                  />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-border hover:border-primary hover:bg-primary/10 hover:text-primary bg-transparent"
                  asChild
                >
                  <a href="#contact">Request Service</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
