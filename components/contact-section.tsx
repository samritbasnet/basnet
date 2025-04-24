'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Download, Mail, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="mb-12 scroll-mt-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-medium">Contact me</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-primary rounded-lg p-8 text-primary-foreground"
      >
        <h3 className="text-3xl font-bold mb-4">Contact me</h3>
        <p className="text-lg mb-8 max-w-2xl">
          I'm always looking forward for new opportunities, and my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back
          to you!
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://docs.google.com/document/d/1uQ-cbdGoyGQpHR8V18DW2_drIvqPtVNQ7cWFyppgvRU/export?format=pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" size="lg" className="gap-2">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </a>

          <a href="https://t.me/samritbasnet" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg" className="gap-2">
              <Send className="h-4 w-4" />
              Telegram me
            </Button>
          </a>

          <a href="mailto:samritbasnet70@gmail.com">
            <Button variant="secondary" size="lg" className="gap-2">
              <Mail className="h-4 w-4" />
              Hit me an email
            </Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
