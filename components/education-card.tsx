"use client"

import { motion, useInView } from "framer-motion"
import { Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useRef } from "react"

interface EducationProps {
  education: {
    institution: string
    degree: string
    duration: string
    description: string
    skills: string[]
  }
}

export default function EducationCard({ education }: EducationProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="card"
    >
      <Card className="overflow-hidden border hover:shadow-md transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-medium">{education.institution}</h3>
                <p className="text-muted-foreground">{education.degree}</p>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                {education.duration}
              </div>
            </div>
            <p className="text-muted-foreground mt-2">{education.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {education.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                >
                  <Badge variant="secondary" className="font-normal">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
