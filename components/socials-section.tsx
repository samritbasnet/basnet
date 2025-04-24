'use client';

import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function SocialsSection() {
  const socials = [
    {
      name: 'Email',
      icon: <Mail className="h-5 w-5" />,
      username: 'samritbasnet70@gmail.com',
      url: 'mailto:samritbasnet70@gmail.com',
    },
    {
      name: 'Telegram',
      icon: <Mail className="h-5 w-5" />, 
      username: '@samritbasnet',
      url: 'https://t.me/samritbasnet',
    },
    {
      name: 'Instagram',
      icon: <Instagram className="h-5 w-5" />,
      username: '@samritbasnet',
      url: 'https://instagram.com/samritbasnet',
    },
    {
      name: 'GitHub',
      icon: <Github className="h-5 w-5" />,
      username: '@samritbasnet',
      url: 'https://github.com/samritbasnet',
    },
    {
      name: 'Twitter',
      icon: <Twitter className="h-5 w-5" />,
      username: '@samritbasnet',
      url: 'https://twitter.com/samritbasnet70',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      username: '@samritbasnet',
      url: 'https://www.linkedin.com/in/samrit-basnet/',
    },
  ];

  return (
    <section id="socials" className="mb-24">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-medium">Socials</h2>
        <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
          View all
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {socials.map((social, index) => (
          <motion.div
            key={social.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Link
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-primary transition-colors"
            >
              {social.icon}
              <div>
                <div className="text-sm font-medium">{social.name}</div>
                <div className="text-sm text-muted-foreground">{social.username}</div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
