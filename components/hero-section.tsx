"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-20"
      ref={ref}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-primary/10 animate-gradient"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.1)_0,rgba(var(--background-rgb),0)_65%)]"></div>
      </div>

      <div className="container relative z-10 grid items-center gap-6 md:grid-cols-2 lg:gap-12">
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            👋 Hi, I'm Samrit Basnet
          </motion.span>

          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="block">Full-Stack Developer</span>
            <span className="block text-primary">&amp; Software Engineer</span>
          </motion.h1>

          <motion.p
            className="max-w-[600px] text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I'm a passionate Full-Stack Developer specializing in building scalable web applications and solving complex
            real-world problems.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg">
              <Link href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link href="https://github.com/samritbasnet" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/samrit-basnet" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:contact@samritbasnet.com" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-full overflow-hidden border-4 border-primary/20">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Samrit Basnet"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
