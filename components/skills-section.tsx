"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const frontendSkills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Redux", level: 80 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "Material-UI", level: 85 },
    { name: "SCSS", level: 80 },
  ]

  const backendSkills = [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 80 },
    { name: "MySQL", level: 75 },
    { name: "MongoDB", level: 85 },
    { name: "GraphQL", level: 70 },
    { name: "REST API", level: 90 },
  ]

  const toolsSkills = [
    { name: "Git", level: 90 },
    { name: "GitHub", level: 95 },
    { name: "VS Code", level: 95 },
    { name: "AWS", level: 75 },
    { name: "CI/CD", level: 80 },
    { name: "JIRA", level: 85 },
  ]

  const SkillBar = ({ name, level, index, category }) => {
    return (
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
      >
        <div className="flex justify-between mb-1">
          <span className="font-medium">{name}</span>
          <span className="text-sm text-muted-foreground">{level}%</span>
        </div>
        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: `${level}%` } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.05 }}
          ></motion.div>
        </div>
      </motion.div>
    )
  }

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container">
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">My Skills</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Tech Stack</h2>
          <div className="h-1 w-20 bg-primary mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="bg-card rounded-lg p-6 shadow-md border"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="inline-block bg-primary/10 text-primary p-2 rounded-md mr-3">🖥️</span>
              Frontend
            </h3>
            <div>
              {frontendSkills.map((skill, index) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} category="frontend" />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-card rounded-lg p-6 shadow-md border"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="inline-block bg-primary/10 text-primary p-2 rounded-md mr-3">⚙️</span>
              Backend
            </h3>
            <div>
              {backendSkills.map((skill, index) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} category="backend" />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-card rounded-lg p-6 shadow-md border"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="inline-block bg-primary/10 text-primary p-2 rounded-md mr-3">🛠️</span>
              Tools & Practices
            </h3>
            <div>
              {toolsSkills.map((skill, index) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} category="tools" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
