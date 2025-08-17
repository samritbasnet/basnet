'use client';

import { Badge } from '@/components/ui/badge';
import { CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ExternalLink, Github, Star } from 'lucide-react';
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
    github?: string;
    category: string;
    featured?: boolean;
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
          className="group rounded-2xl overflow-hidden border border-border bg-card hover-lift hover:border-primary/30 transition-all duration-300 bg-gradient-to-br from-card to-card/50"
        >
          <div className="relative w-full h-56 md:h-64">
            <Image
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              fill
              className="object-cover object-center w-full h-full"
            />
            {project.featured && (
              <div className="absolute top-3 left-3">
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black border-0">
                  <Star className="h-3 w-3 mr-1" />
                  Featured
                </Badge>
              </div>
            )}
          </div>

          <CardContent className="p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                  {project.title}
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                    <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
                  </span>
                </h3>
              </div>
              <Badge variant="outline" className="text-xs shrink-0 ml-2">
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

            {project.github && (
              <div className="pt-2 border-t border-border">
                <Link 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="h-4 w-4 mr-2" />
                  View Source Code
                </Link>
              </div>
            )}
          </CardContent>
        </motion.div>
      </Link>
    </motion.div>
  );
}
