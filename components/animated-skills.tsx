"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = {
  Frontend: {
    items: [
      "React.js",
      "Next.js",
      "JavaScript ES6+",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "SCSS",
      "Chart.js",
      "Framer Motion",
    ],
    icon: "🎨",
  },
  Backend: {
    items: [
      "Node.js",
      "Express.js",
      "MySQL",
      "MongoDB",
      "Supabase",
      "JWT Auth",
      "REST APIs",
      "Database Design",
    ],
    icon: "⚙️",
  },
  Tools: {
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Docker",
      "CI/CD",
      "JIRA",
      "Agile/Scrum",
      "Azure DevOps",
      "npm/pnpm",
    ],
    icon: "🛠️",
  },
  Design: {
    items: [
      "Figma",
      "UI/UX Design",
      "Wireframing",
      "Prototyping",
      "Responsive Design",
      "User Testing",
    ],
    icon: "🎯",
  },
  "Cloud & DevOps": {
    items: [
      "Vercel",
      "Netlify",
      "Azure",
      "AWS Basics",
      "Linux",
      "Deployment",
      "Performance Optimization",
    ],
    icon: "☁️",
  },
  "Soft Skills": {
    items: [
      "Problem Solving",
      "Team Collaboration",
      "Code Review",
      "Technical Communication",
      "Project Management",
      "Mentoring",
    ],
    icon: "🤝",
  },
};

export default function AnimatedSkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="section-clean">
      <div className="professional-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Technical Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-readable">
            Technical skills developed through hands-on projects and formal training
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, { items, icon }], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group card-enhanced hover-lift p-8"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">{icon}</span>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.1 * i + 0.05 * index,
                    }}
                    className="px-4 py-2 text-sm font-medium bg-secondary/60 hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200 cursor-default text-readable"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
