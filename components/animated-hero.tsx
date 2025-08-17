"use client";

import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin);
}

export default function AnimatedHero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headingRef.current || !paragraphRef.current || !containerRef.current)
      return;

    const tl = gsap.timeline();

    // Create a manual split text effect by wrapping each word in a span
    if (headingRef.current) {
      const text = headingRef.current.textContent || "";
      const words = text.split(" ");

      // Clear the heading and add each word in a span
      headingRef.current.innerHTML = "";
      words.forEach((word, index) => {
        const wordSpan = document.createElement("span");
        wordSpan.textContent = word + (index < words.length - 1 ? " " : "");
        wordSpan.style.display = "inline-block";
        wordSpan.style.opacity = "0";
        wordSpan.style.transform = "translateY(20px)";
        wordSpan.className = "word-animation";
        headingRef.current?.appendChild(wordSpan);
      });
    }

    // Animate the container
    tl.fromTo(
      containerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    // Animate each word of the heading
    tl.to(
      ".word-animation",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      },
      "-=0.4"
    );

    // Animate the paragraph with a typing effect
    tl.fromTo(
      paragraphRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.2"
    );

    // Animate social icons
    tl.fromTo(
      ".social-icon",
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
      },
      "-=0.5"
    );

    // Cleanup
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="section-hero relative" ref={containerRef}>
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="professional-container relative z-10">
        <div className="mb-8">
          <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full text-sm font-semibold border border-primary/20 glass-effect backdrop-blur-sm">
            <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></span>
            👋 Hello, I'm
          </span>
        </div>

        <h1
          ref={headingRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-readable"
        >
          <span className="text-foreground">Samrit Basnet</span>
          <br />
          <span className="text-gradient">Full-Stack Developer</span>
        </h1>

        <p
          ref={paragraphRef}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl leading-relaxed text-readable"
        >
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
            className="btn-primary inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            View My Projects
            <svg
              className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
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
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary/30 text-primary rounded-xl font-semibold hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
          >
            Get In Touch
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <span className="text-sm text-muted-foreground font-medium">
            Connect with me:
          </span>
          <div className="flex items-center gap-4">
            <Link
              href="mailto:contact@samritbasnet.com"
              aria-label="Email"
              className="social-icon p-2 hover:bg-primary/10 rounded-lg transition-colors"
            >
              <Mail className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </Link>
            <Link
              href="https://linkedin.com/in/samrit-basnet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-icon p-2 hover:bg-primary/10 rounded-lg transition-colors"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </Link>
            <Link
              href="https://github.com/samritbasnet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-icon p-2 hover:bg-primary/10 rounded-lg transition-colors"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </Link>
            <Link
              href="https://twitter.com/samritbasnet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="social-icon p-2 hover:bg-primary/10 rounded-lg transition-colors"
            >
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
