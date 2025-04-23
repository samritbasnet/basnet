"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ScrollAnimations() {
  useEffect(() => {
    // Animate section headings
    const sectionHeadings = document.querySelectorAll("section > div > h2")
    sectionHeadings.forEach((heading) => {
      gsap.fromTo(
        heading,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: heading,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })

    // Animate experience timeline
    const experienceItems = document.querySelectorAll("#experience .flex.gap-4")
    experienceItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })

    // Animate education cards
    const educationCards = document.querySelectorAll("#education .card")
    educationCards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })

    // Animate social links
    const socialLinks = document.querySelectorAll("#socials .grid > div")
    socialLinks.forEach((link, index) => {
      gsap.fromTo(
        link,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: index * 0.05,
          scrollTrigger: {
            trigger: link,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return null
}
