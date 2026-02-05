"use client"

import { Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const videos = [
  {
    id: 1,
    title: "Introduction to Penetration Testing",
    caption: "Learn the fundamentals of ethical hacking and penetration testing methodologies.",
    duration: "15:32",
    placeholder: "bg-gradient-to-br from-primary/20 to-secondary",
  },
  {
    id: 2,
    title: "Web Application Security Tutorial",
    caption: "Hands-on demonstration of OWASP Top 10 vulnerabilities and how to prevent them.",
    duration: "22:45",
    placeholder: "bg-gradient-to-br from-accent/20 to-secondary",
  },
  {
    id: 3,
    title: "Kali Linux Setup Guide",
    caption: "Complete guide to setting up a penetration testing lab with Kali Linux.",
    duration: "18:20",
    placeholder: "bg-gradient-to-br from-neon-purple/20 to-secondary",
  },
  {
    id: 4,
    title: "Network Security Fundamentals",
    caption: "Understanding network protocols and common security vulnerabilities.",
    duration: "25:10",
    placeholder: "bg-gradient-to-br from-primary/20 to-accent/10",
  },
]

export function VideosSection() {
  return (
    <section id="videos" className="relative py-20 lg:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-neon-purple/10 border border-neon-purple/30 rounded-full text-neon-purple text-sm font-mono mb-4">
            {"<Videos />"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Video <span className="text-neon-purple">Content</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Educational content on cybersecurity topics, tutorials, and demonstrations.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="bg-card/50 border-border hover:border-neon-purple/50 transition-all duration-300 group backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Video Thumbnail */}
                <div className={`relative aspect-video ${video.placeholder}`}>
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-background/80 rounded-full flex items-center justify-center group-hover:bg-neon-purple group-hover:scale-110 transition-all duration-300">
                      <Play className="h-6 w-6 text-foreground group-hover:text-background ml-1" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-background/90 rounded text-xs font-mono text-foreground">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-neon-purple transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {video.caption}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* YouTube CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Subscribe to my channel for more cybersecurity content
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-destructive hover:bg-destructive/90 text-destructive-foreground rounded-lg transition-colors font-medium"
          >
            <Play className="h-5 w-5" />
            Visit YouTube Channel
          </a>
        </div>
      </div>
    </section>
  )
}
