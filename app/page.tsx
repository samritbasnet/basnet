import Link from "next/link"
import { ExternalLink } from "lucide-react"
import ProjectCard from "@/components/project-card"
import EducationCard from "@/components/education-card"
import ContactSection from "@/components/contact-section"
import ExperienceSection from "@/components/experience-section"
import SocialsSection from "@/components/socials-section"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import AnimatedHero from "@/components/animated-hero"
import ScrollAnimations from "@/components/scroll-animations"
import AnimatedSkills from "@/components/animated-skills"

export default function Home() {
  const projects = [
    {
      title: "WeedingCard-Fortress",
      description: "A modern web application for designing and customizing wedding invitation cards.",
      image: "/placeholder.svg?height=80&width=80",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      url: "https://github.com/samritbasnet/WeedingCard-Fortress",
      category: "Web3",
    },
    {
      title: "Async Avengers Hackathon",
      description:
        "A two-player game inspired by 'Who Wants to Be a Millionaire' where players answer multiple-choice questions.",
      image: "/placeholder.svg?height=80&width=80",
      tags: ["JavaScript", "HTML", "CSS", "Game"],
      url: "https://github.com/samritbasnet/async-avengers-hackathon",
      category: "Game Development",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=80&width=80",
      tags: ["React", "Redux", "Node.js", "MongoDB"],
      url: "#",
      category: "Web Development",
    },
  ]

  const education = [
    {
      institution: "University of Technology",
      degree: "Master of Computer Science",
      duration: "2020 - 2022",
      description:
        "Specialized in Artificial Intelligence and Machine Learning with a focus on neural networks and deep learning algorithms.",
      skills: ["Machine Learning", "Neural Networks", "Data Science", "Python"],
    },
    {
      institution: "City College",
      degree: "Bachelor of Science in Computer Engineering",
      duration: "2016 - 2020",
      description: "Focused on software development, algorithms, and data structures with minor in mathematics.",
      skills: ["Algorithms", "Data Structures", "Software Engineering", "Java"],
    },
  ]

  return (
    <>
      <AnimatedBackground />
      <ScrollAnimations />
      <Header />
      <main className="min-h-screen py-20 px-4 md:px-8 lg:px-12 max-w-5xl mx-auto">
        {/* Hero */}
        <AnimatedHero />

        {/* Projects */}
        <section id="projects" className="mb-24 scroll-mt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-medium">Projects</h2>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1">
              View all <ExternalLink className="h-3 w-3" />
            </Link>
          </div>

          <div className="space-y-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-24 scroll-mt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-medium">Skills</h2>
          </div>

          <AnimatedSkills />
        </section>

        {/* Experience */}
        <ExperienceSection />

        {/* Education */}
        <section id="education" className="mb-24 scroll-mt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-medium">Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu) => (
              <EducationCard key={edu.institution} education={edu} />
            ))}
          </div>
        </section>

        {/* Socials */}
        <SocialsSection />

        {/* Contact */}
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
