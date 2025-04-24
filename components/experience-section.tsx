'use client';

import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function ExperienceSection() {
  const experiences = [
    {
      role: 'Production Team Member',
      company: 'Treehouse Foods',
      companyUrl: '#',
      period: 'Sept 2024 – Present',
      description:
        'Collaborated on a fast-paced production line, demonstrated strong time management, real-time problem solving, and communication with cross-functional teams under high-pressure environments.',
      skills: ['Teamwork', 'Communication', 'Adaptability', 'Time Management'],
      icon: <Briefcase className="h-5 w-5 text-white" />,
      iconBg: 'bg-gray-700',
    },
    {
      role: 'Production Technician',
      company: 'Sofina Foods',
      companyUrl: '#',
      period: 'June 2023 – Sept 2023',
      description:
        'Worked in a high-volume packaging environment in Mitchell, Canada. Operated production machinery, maintained packaging standards, and supported continuous workflow on the production line.',
      skills: ['Packaging', 'Machine Operation', 'Efficiency', 'Workplace Safety'],
      icon: <Briefcase className="h-5 w-5 text-white" />,
      iconBg: 'bg-gray-700',
    },
  ];

  return (
    <section id="experience" className="mb-24 scroll-mt-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-medium">Experience</h2>
      </div>

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex gap-4"
          >
            <div
              className={`${experience.iconBg} rounded-full p-2 h-10 w-10 flex items-center justify-center flex-shrink-0`}
            >
              {experience.icon}
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                <div>
                  <span className="font-medium">
                    {experience.role}{' '}
                    {experience.company && (
                      <>
                        at{' '}
                        <Link
                          href={experience.companyUrl}
                          className="text-primary hover:underline"
                        >
                          {experience.company}
                        </Link>
                      </>
                    )}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {experience.period}
                </div>
              </div>

              {experience.skills && (
                <div className="flex flex-wrap gap-2 my-2">
                  {experience.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="font-normal">
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}

              {experience.description && (
                <p className="text-muted-foreground mt-1">{experience.description}</p>
              )}

              {experience.hasReadMore && (
                <button className="text-sm text-muted-foreground hover:text-primary mt-2">
                  Read more
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
