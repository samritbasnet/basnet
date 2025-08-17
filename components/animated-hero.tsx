"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function AnimatedHero() {
  return (
    <section className="section-hero">
      <div className="professional-container">
        <div className="mb-8">
          <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20">
            👋 Hello, I'm
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-readable">
          <span className="text-foreground">Samrit Basnet</span>
          <br />
          <span className="text-gradient">Full-Stack Developer</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl leading-relaxed text-readable">
          A passionate{" "}
          <span className="text-primary font-medium">software engineer</span>{" "}
          building modern web applications with clean, scalable code. Recently
          shipped{" "}
          <Link
            href="https://moneyflow-liard.vercel.app/"
            className="font-semibold text-primary hover:text-primary/80 underline underline-offset-4 decoration-primary/30 hover:decoration-primary/60 transition-all"
          >
            MoneyFlow
          </Link>
          , a finance dashboard with interactive data visualization.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link
            href="#projects"
            className="btn-primary inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium"
          >
            View My Projects
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10"
          >
            Get In Touch
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <Link
            href="mailto:contact@samritbasnet.com"
            aria-label="Email"
            className="p-2 text-muted-foreground hover:text-primary"
          >
            <Mail className="h-5 w-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/samrit-basnet"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-muted-foreground hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://github.com/samritbasnet"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 text-muted-foreground hover:text-primary"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://twitter.com/samritbasnet"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="p-2 text-muted-foreground hover:text-primary"
          >
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
