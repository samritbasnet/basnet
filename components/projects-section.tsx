"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "WeedingCard-Fortress",
      description: "A modern web application for designing and customizing wedding invitation cards.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      demoUrl: "#",
      githubUrl: "https://github.com/samritbasnet/WeedingCard-Fortress",
    },
    {
      title: "Async Avengers Hackathon",
      description:
        "A two-player game inspired by 'Who Wants to Be a Millionaire' where players answer multiple-choice questions.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["JavaScript", "HTML", "CSS", "Game Development"],
      demoUrl: "#",
      githubUrl: "https://github.com/samritbasnet/async-avengers-hackathon",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/50" ref={ref}>
      <div className="container">
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">My Work</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.demoUrl} target="_blank" rel="noreferrer">
                      Live Demo
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button variant="outline" size="lg" asChild>
            <Link href="https://github.com/samritbasnet" target="_blank" rel="noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View More on GitHub
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
