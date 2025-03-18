"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { ParticleBackground } from "./particle-background"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(0,255,127,0.05),rgba(0,200,100,0.05))] animate-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,127,0.1),transparent_70%)] animate-pulse" />

      {/* Geometric Shapes */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-green-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float-slow" />

      <div className="container px-4 flex flex-col items-center text-center relative z-10">
        <div
          className={`transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            Sanaya Menghani
          </h1>
        </div>
        <div
          className={`transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xl md:text-2xl text-emerald-800 dark:text-emerald-200 mb-8">
            Technical Analyst & Computational Mathematics Graduate
          </p>
        </div>
        <div
          className={`flex gap-4 transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            asChild
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-full transition-transform hover:scale-105"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg rounded-full transition-transform hover:scale-105"
          >
            <a href="/resume.pdf">Download Resume</a>
          </Button>
        </div>
      </div>
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <a
          href="#about"
          className="animate-bounce-slow p-2 rounded-full bg-emerald-50 shadow-lg hover:shadow-xl transition-shadow"
        >
          <ChevronDown className="h-6 w-6 text-emerald-600" />
        </a>
      </div>
    </section>
  )
}

