"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    number: 500,
    suffix: "+",
    label: "Projects Delivered",
    description: "Successful implementations across industries",
  },
  { number: 99.9, suffix: "%", label: "Uptime Guarantee", description: "Reliable, enterprise-grade solutions" },
  { number: 50, suffix: "+", label: "Expert Developers", description: "Certified professionals and specialists" },
  { number: 24, suffix: "/7", label: "Support Available", description: "Round-the-clock technical assistance" },
]

function CountUp({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(end * progress)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span>
      {end % 1 === 0 ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Proven Track Record</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Numbers that speak to our commitment to excellence and client success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  <CountUp end={stat.number} suffix={stat.suffix} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                <p className="text-blue-100 text-sm">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
