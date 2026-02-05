"use client"

import { Award, ExternalLink, CheckCircle } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const certifications = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2024",
    status: "Active",
    credentialId: "COMP001234567",
    color: "primary",
  },
  {
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "2023",
    status: "Active",
    credentialId: "ECC1234567890",
    color: "accent",
  },
  {
    name: "OSCP",
    issuer: "Offensive Security",
    date: "In Progress",
    status: "Pursuing",
    credentialId: "N/A",
    color: "neon-purple",
  },
  {
    name: "AWS Security Specialty",
    issuer: "Amazon Web Services",
    date: "2024",
    status: "Active",
    credentialId: "AWS1234567890",
    color: "primary",
  },
  {
    name: "Google Cybersecurity Certificate",
    issuer: "Google",
    date: "2023",
    status: "Active",
    credentialId: "GGL1234567890",
    color: "accent",
  },
  {
    name: "PNPT",
    issuer: "TCM Security",
    date: "2024",
    status: "Active",
    credentialId: "TCM1234567890",
    color: "neon-purple",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-mono mb-4">
            {"<Certifications />"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional <span className="text-primary text-glow-green">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications validating expertise in cybersecurity domains.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={cert.name}
              className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 group backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4
                  ${cert.color === "primary" ? "bg-primary/10" : ""}
                  ${cert.color === "accent" ? "bg-accent/10" : ""}
                  ${cert.color === "neon-purple" ? "bg-neon-purple/10" : ""}
                  `}
                >
                  <Award
                    className={`h-7 w-7
                    ${cert.color === "primary" ? "text-primary" : ""}
                    ${cert.color === "accent" ? "text-accent" : ""}
                    ${cert.color === "neon-purple" ? "text-neon-purple" : ""}
                    `}
                  />
                </div>

                {/* Status Badge */}
                <Badge
                  variant={cert.status === "Active" ? "default" : "secondary"}
                  className={`mb-3 ${
                    cert.status === "Active"
                      ? "bg-primary/20 text-primary border-primary/30"
                      : "bg-accent/20 text-accent border-accent/30"
                  }`}
                >
                  <CheckCircle className="h-3 w-3 mr-1" />
                  {cert.status}
                </Badge>

                {/* Cert Info */}
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Issued by {cert.issuer}
                </p>
                <p className="text-xs text-muted-foreground font-mono">
                  {cert.date} • ID: {cert.credentialId}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-border hover:border-primary hover:bg-primary/10 hover:text-primary bg-transparent"
                  disabled={cert.status === "Pursuing"}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {cert.status === "Pursuing" ? "In Progress" : "Verify Certificate"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
