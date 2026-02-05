"use client"

import { Calendar, ArrowRight, Clock } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const blogPosts = [
  {
    title: "Understanding SQL Injection: From Basics to Advanced Exploitation",
    excerpt: "A comprehensive guide to SQL injection vulnerabilities, including detection techniques, exploitation methods, and effective prevention strategies.",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    category: "Web Security",
    placeholder: "bg-gradient-to-br from-primary/20 to-secondary",
  },
  {
    title: "Building Your First Penetration Testing Lab",
    excerpt: "Step-by-step guide to setting up a safe and effective penetration testing environment using VirtualBox, Kali Linux, and vulnerable VMs.",
    date: "Jan 8, 2026",
    readTime: "12 min read",
    category: "Tutorial",
    placeholder: "bg-gradient-to-br from-accent/20 to-secondary",
  },
  {
    title: "OSINT Techniques for Security Researchers",
    excerpt: "Exploring open source intelligence gathering methods used by security professionals to assess digital footprints and potential attack surfaces.",
    date: "Dec 28, 2025",
    readTime: "10 min read",
    category: "OSINT",
    placeholder: "bg-gradient-to-br from-neon-purple/20 to-secondary",
  },
  {
    title: "Introduction to Network Packet Analysis with Wireshark",
    excerpt: "Learn how to capture and analyze network traffic to identify security issues, troubleshoot problems, and understand network protocols.",
    date: "Dec 20, 2025",
    readTime: "15 min read",
    category: "Network Security",
    placeholder: "bg-gradient-to-br from-primary/10 to-accent/10",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="relative py-20 lg:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-mono mb-4">
            {"<Blog />"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Latest <span className="text-accent text-glow-blue">Articles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and research on cybersecurity topics and emerging threats.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <Card
              key={post.title}
              className="bg-card/50 border-border hover:border-accent/50 transition-all duration-300 group backdrop-blur-sm overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                {/* Thumbnail */}
                <div className={`aspect-[2/1] ${post.placeholder} relative`}>
                  <Badge
                    className="absolute top-4 left-4 bg-background/80 text-foreground border-none"
                  >
                    {post.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-accent hover:text-accent hover:bg-transparent group/btn"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-accent/50 text-accent hover:bg-accent/10 hover:border-accent bg-transparent"
          >
            View All Articles
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
