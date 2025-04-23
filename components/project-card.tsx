"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import gsap from "gsap"

interface ProjectProps {
  project: {
    title: string
    description: string
    image: string
    tags: string[]
    url: string
    category: string
  }
}

export default function ProjectCard({ project }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Mouse position for 3D effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth spring physics for the card rotation
  const springConfig = { damping: 15, stiffness: 150 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig)

  // Handle mouse move for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    // Calculate normalized mouse position (-0.5 to 0.5)
    const xValue = (e.clientX - rect.left) / width - 0.5
    const yValue = (e.clientY - rect.top) / height - 0.5

    x.set(xValue)
    y.set(yValue)
  }

  // Reset position when mouse leaves
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  // GSAP animation for tags
  useEffect(() => {
    if (isHovered && cardRef.current) {
      gsap.fromTo(
        cardRef.current.querySelectorAll(".tag"),
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.3,
          ease: "power2.out",
        },
      )
    }
  }, [isHovered])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={cardRef}
    >
      <Link href={project.url} target="_blank" rel="noopener noreferrer">
        <motion.div
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
            transformStyle: "preserve-3d",
          }}
          className="perspective-1000"
        >
          <Card className="overflow-hidden border hover:border-primary/50 transition-all duration-300 transform-gpu">
            <CardContent className="p-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={80}
                      height={80}
                      className="rounded-md object-cover"
                    />
                  </motion.div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
                      {project.title}
                      <motion.span
                        animate={{ x: isHovered ? 5 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="inline-block ml-2"
                      >
                        <ExternalLink className="h-4 w-4 inline-block opacity-50" />
                      </motion.span>
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-normal tag">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Link>
    </motion.div>
  )
}
