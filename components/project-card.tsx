'use client';

import { Badge } from '@/components/ui/badge';
import { CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface ProjectProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    url: string;
    category: string;
  };
}

export default function ProjectCard({ project }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Animate tags when hover
  useEffect(() => {
    if (isHovered && cardRef.current) {
      gsap.fromTo(
        cardRef.current.querySelectorAll('.tag'),
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [isHovered]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={cardRef}
    >
      <Link href={project.url} target="_blank" rel="noopener noreferrer">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="rounded-2xl overflow-hidden border border-border bg-background hover:shadow-lg hover:border-primary/40 transition-all duration-300"
        >
          <div className="relative w-full h-56 md:h-64">
            <Image
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              fill
              className="object-cover object-center w-full h-full"
            />
          </div>

          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">
                {project.title}
                <span className="inline-block ml-2">
                  <ExternalLink className="h-4 w-4 opacity-50" />
                </span>
              </h3>
              <Badge variant="outline" className="text-xs">
                {project.category}
              </Badge>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="tag font-normal text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </motion.div>
      </Link>
    </motion.div>
  );
}
