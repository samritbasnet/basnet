"use client";

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
  return (
    <div className="section-clean">
      <div className="professional-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Technical Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-readable">
            Technical skills developed through hands-on projects and formal
            training
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, { items, icon }]) => (
            <div
              key={category}
              className="card-enhanced"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{icon}</span>
                <h3 className="text-lg font-semibold text-foreground">
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag px-3 py-1 text-sm font-medium rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
