"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function ScrollDots() {
  const [activeSection, setActiveSection] = useState("hero")

  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id || "hero")
          }
        })
      },
      {
        root: null,
        rootMargin: "-20% 0px -20% 0px",
        threshold: 0.1,
      },
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-4">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="group relative flex items-center"
          aria-label={section.label}
        >
          <span className="absolute right-8 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-emerald-50/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-emerald-700 border border-emerald-200">
            {section.label}
          </span>
          <div
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300 border",
              activeSection === section.id
                ? "bg-emerald-500 border-emerald-300 scale-100"
                : "bg-emerald-200 border-emerald-300 scale-75 hover:scale-100",
            )}
          />
        </a>
      ))}
    </div>
  )
}

