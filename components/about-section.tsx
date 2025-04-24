'use client';

import { motion, useInView } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    'Full-Stack Web Development (React, Node, MySQL)',
    'Collaborative Agile Environments (JIRA, Scrum)',
    'Scalable UI/UX with SCSS and Material UI',
    'JWT Authentication & API Integration',
    'Pixel-perfect Figma to Code Implementation',
    'Strong Communication & Problem-Solving',
  ];

  return (
    <section id="about" className="py-20 bg-muted/50" ref={ref}>
      <div className="container">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            About Me
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            My Journey
          </h2>
          <div className="h-1 w-20 bg-primary mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg">
              I'm Samrit, a passionate Full-Stack Developer with a background in IT
              infrastructure and computing. My curiosity about how games and technology
              work led me to master tools like React, Node.js, MySQL, and more.
            </p>
            <p className="text-lg">
              I’ve delivered real-world solutions—from a feature-rich e-commerce platform
              to inventory systems and a Warner Bros. Discovery content experience. I
              thrive in fast-paced, agile environments and love bringing ideas to life
              through clean, maintainable code.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative z-10 bg-card rounded-lg p-6 shadow-lg border">
              <h3 className="text-xl font-bold mb-4">Professional Highlights</h3>
              <div className="space-y-6">
                <motion.div
                  className="relative pl-6 border-l-2 border-primary/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                  <h4 className="font-bold">PixelPlay Capstone</h4>
                  <p className="text-sm text-muted-foreground">
                    Full-Stack Game Discovery Platform
                  </p>
                  <p className="mt-2">
                    Engineered a scalable e-commerce site with React, Node, MySQL &
                    Supabase. Built admin dashboard with secure JWT auth and game
                    inventory CRUD.
                  </p>
                </motion.div>
                <motion.div
                  className="relative pl-6 border-l-2 border-primary/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                  <h4 className="font-bold">Warner Bros. Discovery Project</h4>
                  <p className="text-sm text-muted-foreground">Industry Collaboration</p>
                  <p className="mt-2">
                    Collaborated with designers and data scientists to develop a
                    personalized content interface using React and real-time dynamic
                    updates.
                  </p>
                </motion.div>
                <motion.div
                  className="relative pl-6 border-l-2 border-primary/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                  <h4 className="font-bold">InStock Inventory App</h4>
                  <p className="text-sm text-muted-foreground">Agile Team Project</p>
                  <p className="mt-2">
                    Delivered core inventory features and clean SCSS UI, working in a
                    professional Agile environment with GitHub PRs, Jira, and code
                    reviews.
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="absolute inset-0 bg-primary/5 rounded-lg transform rotate-3 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
