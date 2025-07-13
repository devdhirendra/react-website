"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Shield, BarChart3, Cloud, Cpu, Database, ArrowRight, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Optimized systems that handle millions of transactions per second with sub-millisecond latency.",
    color: "from-yellow-500 to-orange-500",
    benefits: ["99.99% Uptime", "Sub-ms Response", "Auto-scaling", "Load Balancing"],
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption, compliance, and advanced threat protection.",
    color: "from-blue-500 to-cyan-500",
    benefits: ["SOC 2 Compliant", "256-bit Encryption", "Multi-factor Auth", "Audit Trails"],
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time insights with AI-powered analytics, predictive modeling, and custom dashboards.",
    color: "from-purple-500 to-pink-500",
    benefits: ["Real-time Data", "AI Insights", "Custom Reports", "Predictive Models"],
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description: "Scalable, resilient cloud infrastructure with microservices and containerized deployments.",
    color: "from-green-500 to-teal-500",
    benefits: ["Auto-scaling", "Multi-region", "Disaster Recovery", "99.9% SLA"],
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Intelligent automation with machine learning models for process optimization and decision making.",
    color: "from-indigo-500 to-purple-500",
    benefits: ["Smart Automation", "Pattern Recognition", "Anomaly Detection", "Predictive Analytics"],
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Comprehensive data solutions with real-time processing, warehousing, and governance.",
    color: "from-red-500 to-pink-500",
    benefits: ["Real-time Processing", "Data Warehousing", "ETL Pipelines", "Data Governance"],
  },
]

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Cutting-Edge Technology
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Modern Business
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines enterprise-grade security, lightning-fast performance, and intelligent
            automation to transform your business operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-xl transform hover:scale-105 ${
                    activeFeature === index ? "ring-2 ring-blue-500 shadow-xl" : ""
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Active Feature Details */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
            <div className="flex items-center space-x-4 mb-6">
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${features[activeFeature].color} flex items-center justify-center shadow-lg`}
              >
                {(() => {
                  const Icon = features[activeFeature].icon
                  return <Icon className="w-8 h-8 text-white" />
                })()}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{features[activeFeature].title}</h3>
                <p className="text-gray-600">{features[activeFeature].description}</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="text-lg font-semibold text-gray-900">Key Benefits</h4>
              <div className="grid grid-cols-2 gap-3">
                {features[activeFeature].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group">
              Learn More About This Feature
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Built with Modern Technology Stack</h3>
            <p className="text-gray-600">
              Industry-leading tools and frameworks for maximum performance and reliability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", icon: "⚛️" },
              { name: "Node.js", icon: "🟢" },
              { name: "Python", icon: "🐍" },
              { name: "AWS", icon: "☁️" },
              { name: "Docker", icon: "🐳" },
              { name: "Kubernetes", icon: "⚙️" },
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-2xl mb-3 group-hover:bg-blue-50 transition-colors mx-auto">
                  {tech.icon}
                </div>
                <div className="text-sm font-medium text-gray-700">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
