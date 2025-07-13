"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const companies = [
  { name: "Microsoft", logo: "/placeholder.svg?height=60&width=120", industry: "Technology" },
  { name: "Goldman Sachs", logo: "/placeholder.svg?height=60&width=120", industry: "Finance" },
  { name: "Johnson & Johnson", logo: "/placeholder.svg?height=60&width=120", industry: "Healthcare" },
  { name: "Berkshire Hathaway", logo: "/placeholder.svg?height=60&width=120", industry: "Investment" },
  { name: "Aetna", logo: "/placeholder.svg?height=60&width=120", industry: "Insurance" },
  { name: "JPMorgan Chase", logo: "/placeholder.svg?height=60&width=120", industry: "Banking" },
  { name: "Pfizer", logo: "/placeholder.svg?height=60&width=120", industry: "Pharmaceuticals" },
  { name: "BlackRock", logo: "/placeholder.svg?height=60&width=120", industry: "Asset Management" },
  { name: "UnitedHealth", logo: "/placeholder.svg?height=60&width=120", industry: "Healthcare" },
  { name: "Citadel", logo: "/placeholder.svg?height=60&width=120", industry: "Trading" },
]

export function CompanySlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % companies.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've partnered with leading companies across healthcare, finance, insurance, and investment sectors
          </p>
        </div>

        {/* Horizontal Slider */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...companies, ...companies].map((company, index) => (
              <div key={`${company.name}-${index}`} className="flex-shrink-0 mx-8 group">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-24 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                      <Image
                        src={company.logo || "/placeholder.svg"}
                        alt={`${company.name} logo`}
                        width={96}
                        height={48}
                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900 text-sm">{company.name}</div>
                      <div className="text-xs text-gray-500">{company.industry}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Slider for Mobile */}
        <div className="md:hidden mt-8">
          <div className="relative h-32 overflow-hidden">
            <div
              className="absolute inset-0 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${currentIndex * 128}px)` }}
            >
              {companies.map((company, index) => (
                <div key={company.name} className="h-32 flex items-center justify-center p-4">
                  <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 w-full max-w-xs">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-8 bg-gray-100 rounded flex items-center justify-center">
                        <Image
                          src={company.logo || "/placeholder.svg"}
                          alt={`${company.name} logo`}
                          width={64}
                          height={32}
                          className="object-contain filter grayscale"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{company.name}</div>
                        <div className="text-xs text-gray-500">{company.industry}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">Fortune 500</div>
            <div className="text-sm text-gray-600">Companies Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">$50B+</div>
            <div className="text-sm text-gray-600">Assets Managed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">1M+</div>
            <div className="text-sm text-gray-600">Transactions/Day</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
            <div className="text-sm text-gray-600">Uptime SLA</div>
          </div>
        </div>
      </div>
    </section>
  )
}
