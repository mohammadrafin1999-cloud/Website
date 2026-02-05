"use client"

import React from "react"

import { useState } from "react"
import { 
  Mail, 
  MapPin, 
  Send, 
  Linkedin, 
  Github, 
  Facebook, 
  Youtube,
  MessageCircle
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mohammadrafinbabu@gmail.com",
    href: "mohammadrafinbabu@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+880 1234 567890",
    href: "https://wa.me/8801611228136",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangladesh",
    href: "https://maps.app.goo.gl/dMc5HhgYzf7EaRhA6",
  },
]

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61586057143678", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I will get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-mono mb-4">
            {"<Contact />"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-primary text-glow-green">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or need cybersecurity assistance? 
            Let&apos;s discuss how I can help secure your digital assets.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-secondary/50 border-border focus:border-primary"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-secondary/50 border-border focus:border-primary"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="How can I help you?"
                    className="bg-secondary/50 border-border focus:border-primary"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or security needs..."
                    className="bg-secondary/50 border-border focus:border-primary min-h-[150px]"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-green"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="block"
              >
                <Card className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 group backdrop-blur-sm">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}

            {/* Social Links */}
            <Card className="bg-card/50 border-border backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">
                  Connect with me
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Terminal Style */}
            <div className="bg-secondary/50 border border-border rounded-lg p-4 font-mono text-sm">
              <div className="text-muted-foreground mb-2">
                $ echo $AVAILABILITY
              </div>
              <div className="text-primary">
                Open for freelance projects and consultations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
