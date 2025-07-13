"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, BarChart3, Shield, TrendingUp, Users, Award, Globe, Star } from "lucide-react"

const industries = ["Healthcare", "Trading", "Insurance", "Investment", "Manufacturing", "Retail"]

const floatingElements = [
  { icon: BarChart3, position: "top-20 left-10", delay: "0s", color: "text-blue-400" },
  { icon: Shield, position: "top-40 right-20", delay: "1s", color: "text-cyan-400" },
  { icon: TrendingUp, position: "bottom-32 left-20", delay: "2s", color: "text-purple-400" },
  { icon: Users, position: "bottom-20 right-10", delay: "3s", color: "text-green-400" },
  { icon: Award, position: "top-60 left-1/2", delay: "4s", color: "text-yellow-400" },
  { icon: Globe, position: "bottom-60 right-1/3", delay: "5s", color: "text-pink-400" },
]

const heroImages = [
  "/placeholder.svg?height=400&width=600&text=Dashboard+Analytics",
  "/placeholder.svg?height=400&width=600&text=Mobile+App+Interface",
  "/placeholder.svg?height=400&width=600&text=Data+Visualization",
  "/placeholder.svg?height=400&width=600&text=Cloud+Architecture",
]

export function HeroSection() {
  const [activeIndustry, setActiveIndustry] = useState(0)
  const [activeImage, setActiveImage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const industryInterval = setInterval(() => {
      setActiveIndustry((prev) => (prev + 1) % industries.length)
    }, 3000)

    const imageInterval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length)
    }, 4000)

    return () => {
      clearInterval(industryInterval)
      clearInterval(imageInterval)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl"></div>

        {/* Floating Icons */}
        {floatingElements.map((element, index) => {
          const Icon = element.icon
          return (
            <div
              key={index}
              className={`absolute ${element.position} w-12 h-12 ${element.color} opacity-30 animate-float hidden lg:block`}
              style={{ animationDelay: element.delay }}
            >
              <Icon className="w-full h-full" />
            </div>
          )
        })}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`text-white space-y-8 transition-all duration-1000 ${isVisible ? "animate-slide-up opacity-100" : "opacity-0 translate-y-10"}`}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium text-white border border-white/20">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                #1 Rated Software Development Company
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                Transform Your
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent animate-pulse">
                  Digital Future
                </span>
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-blue-100 max-w-2xl leading-relaxed">
                We build cutting-edge software solutions that drive innovation, streamline operations, and accelerate
                growth across industries.
              </p>
            </div>

            {/* Industry Tabs */}
            <div className="flex flex-wrap gap-3">
              {industries.map((industry, index) => (
                <button
                  key={industry}
                  onClick={() => setActiveIndustry(index)}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeIndustry === index
                      ? "bg-white text-blue-600 shadow-lg shadow-white/25"
                      : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 group transform hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 group bg-transparent backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                >
                  <Play className="mr-2 w-4 h-4" />
                  View Our Work
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-blue-200">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm text-blue-200">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-blue-200">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">150+</div>
                <div className="text-sm text-blue-200">Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced with Multiple Images */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in opacity-100" : "opacity-0"}`}
          >
            <div className="relative">
              {/* Main Image Carousel */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-1000 ${
                      index === activeImage ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute inset-0"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Hero image ${index + 1}`}
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-3xl"
                    />
                  </div>
                ))}

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-lg rounded-xl p-3 shadow-xl border border-white/20 animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-600">Performance</div>
                    <div className="text-sm font-bold text-gray-900">+247%</div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-lg rounded-xl p-3 shadow-xl border border-white/20 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-600">Active Users</div>
                    <div className="text-sm font-bold text-gray-900">1.2M+</div>
                  </div>
                </div>
              </div>

              <div
                className="absolute top-1/2 -right-8 bg-white/90 backdrop-blur-lg rounded-xl p-3 shadow-xl border border-white/20 animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-600">Success Rate</div>
                    <div className="text-sm font-bold text-gray-900">98.7%</div>
                  </div>
                </div>
              </div>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeImage ? "bg-white shadow-lg" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
