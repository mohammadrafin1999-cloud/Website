"use client"

import { Users, Bug, Globe, Search, HardDrive, Skull } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const focusAreas = [
  {
    icon: Bug,
    title: "Ethical Hacking",
    description: "Identifying vulnerabilities through authorized penetration testing",
  },
  {
    icon: Globe,
    title: "Web Security (OWASP)",
    description: "Protecting web applications from OWASP Top 10 vulnerabilities",
  },
  {
    icon: Users,
    title: "Social Media Expert",
    description: "Managing social media accounts, ensuring complete account security, and providing solutions for all social media-related issues.",
  },
  {
    icon: Search,
    title: "OSINT",
    description: "Open Source Intelligence gathering and analysis",
  },
  {
    icon: HardDrive,
    title: "Digital Forensics",
    description: "Investigating security incidents and recovering evidence",
  },
  {
    icon: Skull,
    title: "Malware Analysis",
    description: "Analyzing malicious software behavior and threats",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-mono mb-4">
            {"<About />"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Who Am <span className="text-accent text-glow-blue">I</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className="space-y-6">
            <div className="bg-card/50 border border-border rounded-lg p-6 backdrop-blur-sm">
              <div className="font-mono text-sm text-primary mb-4">
                {"> whoami"}
              </div>
              <p className="text-foreground leading-relaxed mb-4">
                I am <span className="text-primary font-semibold">Mohammad Rafin</span>, 
                a passionate cybersecurity professional dedicated to making the digital 
                world a safer place. With extensive experience in Managing social media accounts, ensuring complete account security, and providing solutions for all social media-related issues, ethical hacking and 
                security assessment, I help organizations identify and remediate 
                vulnerabilities before malicious actors can exploit them.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My journey in cybersecurity began with a curiosity about how systems 
                work and evolved into a mission to protect digital assets. I believe 
                in continuous learning and staying ahead of emerging threats through 
                hands-on research and industry certifications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Based in <span className="text-accent">Bangladesh</span>, I work with 
                clients globally to provide comprehensive security solutions, from 
                penetration testing to security awareness training.
              </p>
            </div>

            {/* Terminal Style Info */}
            <div className="bg-secondary/50 border border-border rounded-lg p-4 font-mono text-sm">
              <div className="text-muted-foreground mb-2">$ cat profile.txt</div>
              <div className="space-y-1">
                <div>
                  <span className="text-accent">Name:</span>{" "}
                  <span className="text-foreground">Mohammad Rafiq</span>
                </div>
                <div>
                  <span className="text-accent">Role:</span>{" "}
                  <span className="text-foreground">Cybersecurity Specialist</span>
                </div>
                <div>
                  <span className="text-accent">Location:</span>{" "}
                  <span className="text-foreground">Bangladesh</span>
                </div>
                <div>
                  <span className="text-accent">Status:</span>{" "}
                  <span className="text-primary">Available for Projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Focus Areas Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {focusAreas.map((area, index) => (
              <Card
                key={area.title}
                className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 group backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <area.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
