'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = {
  Frontend: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'Material UI'],
  Backend: ['Node.js', 'Express.js', 'MySQL', 'Supabase', 'JWT Auth'],
  Tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'CI/CD', 'JIRA', 'Agile'],
  Design: ['Figma', 'Wireframing', 'Prototyping', 'User Testing'],
};

export default function AnimatedSkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={ref} className="py-20 bg-muted/50">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-2">Skills & Tools</h2>
          <p className="text-muted-foreground text-lg">
            A refined toolkit built through real-world projects and collaborations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-card rounded-xl p-6 shadow-md border"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
              <ul className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
