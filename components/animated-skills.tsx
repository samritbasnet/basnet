'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = {
  Frontend: {
    items: ['React.js', 'Next.js', 'JavaScript ES6+', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'SCSS', 'Chart.js', 'Framer Motion'],
    icon: '🎨'
  },
  Backend: {
    items: ['Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Supabase', 'JWT Auth', 'REST APIs', 'Database Design'],
    icon: '⚙️'
  },
  Tools: {
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker', 'CI/CD', 'JIRA', 'Agile/Scrum', 'Azure DevOps', 'npm/pnpm'],
    icon: '🛠️'
  },
  Design: {
    items: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping', 'Responsive Design', 'User Testing'],
    icon: '🎯'
  },
  'Cloud & DevOps': {
    items: ['Vercel', 'Netlify', 'Azure', 'AWS Basics', 'Linux', 'Deployment', 'Performance Optimization'],
    icon: '☁️'
  },
  'Soft Skills': {
    items: ['Problem Solving', 'Team Collaboration', 'Code Review', 'Technical Communication', 'Project Management', 'Mentoring'],
    icon: '🤝'
  }
};

export default function AnimatedSkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="mb-24">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-gradient">Technical Expertise</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A comprehensive skill set developed through hands-on projects, formal education, and industry collaboration
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, { items, icon }], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            className="group bg-card rounded-xl p-6 border hover-lift hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">{icon}</span>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.1 * i + 0.05 * index }}
                  className="px-3 py-1.5 text-xs font-medium bg-secondary/50 hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
