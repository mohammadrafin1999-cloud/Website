import { Navigation } from "@/components/navigation"
import { ParticlesBackground } from "@/components/particles-background"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { VideosSection } from "@/components/sections/videos-section"
import { CertificationsSection } from "@/components/sections/certifications-section"
import { BlogSection } from "@/components/sections/blog-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Animated Background */}
      <ParticlesBackground />

      {/* Navigation */}
      <Navigation />

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <GallerySection />
      <VideosSection />
      <CertificationsSection />
      <BlogSection />
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Scan Line Effect */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden opacity-[0.02]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary to-transparent h-[200%] animate-scan-line" />
      </div>
    </main>
  )
}
