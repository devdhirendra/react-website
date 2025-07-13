"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, TrendingUp, Shield, PieChart, ArrowRight } from "lucide-react"
import Link from "next/link"

const industries = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Heart,
    description: "Digital health solutions, EHR systems, and medical device integration",
    stats: "500+ Healthcare Projects",
    color: "from-red-500 to-pink-500",
    features: ["Electronic Health Records", "Telemedicine Platforms", "Medical Device Integration", "HIPAA Compliance"],
  },
  {
    id: "trading",
    name: "Trading & Finance",
    icon: TrendingUp,
    description: "High-frequency trading systems and financial analytics platforms",
    stats: "1M+ Transactions/sec",
    color: "from-green-500 to-emerald-500",
    features: ["Algorithmic Trading", "Risk Management", "Real-time Analytics", "Regulatory Compliance"],
  },
  {
    id: "insurance",
    name: "Insurance",
    icon: Shield,
    description: "Claims processing automation and risk assessment tools",
    stats: "99.9% Accuracy Rate",
    color: "from-blue-500 to-cyan-500",
    features: ["Claims Processing", "Fraud Detection", "Policy Management", "Actuarial Analytics"],
  },
  {
    id: "investment",
    name: "Investment",
    icon: PieChart,
    description: "Portfolio management and investment analytics solutions",
    stats: "$50B+ Assets Managed",
    color: "from-purple-500 to-indigo-500",
    features: ["Portfolio Analytics", "Risk Assessment", "Performance Tracking", "Compliance Reporting"],
  },
]

export function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(0)

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Industries We Transform</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized solutions for complex industry challenges, backed by deep domain expertise and cutting-edge
            technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Industry Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <Card
                  key={industry.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                    activeIndustry === index ? "ring-2 ring-blue-500 shadow-xl" : ""
                  }`}
                  onClick={() => setActiveIndustry(index)}
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${industry.color} flex items-center justify-center mb-4`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{industry.description}</p>
                    <div className="text-sm font-medium text-blue-600">{industry.stats}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Active Industry Details */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center space-x-4 mb-6">
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-r ${industries[activeIndustry].color} flex items-center justify-center`}
              >
                {(() => {
                  const Icon = industries[activeIndustry].icon
                  return <Icon className="w-8 h-8 text-white" />
                })()}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{industries[activeIndustry].name}</h3>
                <p className="text-gray-600">{industries[activeIndustry].description}</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="text-lg font-semibold text-gray-900">Key Capabilities</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {industries[activeIndustry].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link href={`/industries/${industries[activeIndustry].id}`}>
              <div className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium cursor-pointer group">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
