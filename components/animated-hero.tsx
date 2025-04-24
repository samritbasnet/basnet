'use client';

import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(TextPlugin);
}

export default function AnimatedHero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headingRef.current || !paragraphRef.current || !containerRef.current) return;

    const tl = gsap.timeline();

    const text = headingRef.current.textContent || '';
    const words = text.split(' ');
    headingRef.current.innerHTML = '';
    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.textContent = word + (index < words.length - 1 ? ' ' : '');
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      span.className = 'word-animation';
      headingRef.current.appendChild(span);
    });

    tl.fromTo(
      containerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );
    tl.to(
      '.word-animation',
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      },
      '-=0.4'
    );
    tl.fromTo(
      paragraphRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.out' },
      '-=0.2'
    );
    tl.fromTo(
      '.social-icon',
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      },
      '-=0.5'
    );

    return () => tl.kill();
  }, []);

  return (
    <section className="mb-24 pt-8" ref={containerRef}>
      <h2 ref={headingRef} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
        I Build Real-World Web Experiences
      </h2>
      <p ref={paragraphRef} className="text-lg text-muted-foreground mb-8 max-w-2xl">
        Hey, I’m <span className="font-medium text-foreground">Samrit Basnet</span> — a
        passionate{' '}
        <Link href="#" className="underline underline-offset-4 hover:text-primary">
          full-stack developer
        </Link>{' '}
        with experience building scalable apps using React, Node.js, MySQL, and Supabase.
        I’ve collaborated on industry projects like{' '}
        <span className="font-semibold text-foreground">Warner Bros. Discovery</span> and
        created a capstone game platform called{' '}
        <span className="font-semibold text-foreground">PixelPlay</span>. I bring clean
        code, continuous learning, and creative solutions to every build.
      </p>

      <div className="flex items-center gap-4 mt-8">
        <Link
          href="mailto:contact@samritbasnet.com"
          aria-label="Email"
          className="social-icon"
        >
          <Button variant="ghost" size="icon" className="rounded-full">
            <Mail className="h-5 w-5" />
          </Button>
        </Link>
        <Link
          href="https://twitter.com/samritbasnet70"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="social-icon"
        >
          <Button variant="ghost" size="icon" className="rounded-full">
            <Twitter className="h-5 w-5" />
          </Button>
        </Link>
        <Link
          href="https://linkedin.com/in/samrit-basnet"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="social-icon"
        >
          <Button variant="ghost" size="icon" className="rounded-full">
            <Linkedin className="h-5 w-5" />
          </Button>
        </Link>
        <Link
          href="https://github.com/samrit-basnet"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="social-icon"
        >
          <Button variant="ghost" size="icon" className="rounded-full">
            <Github className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
