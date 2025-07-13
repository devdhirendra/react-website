import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Activity, Database, Smartphone, ArrowRight, CheckCircle, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const healthcareSolutions = [
  {
    icon: Database,
    title: "Electronic Health Records (EHR)",
    description: "Comprehensive EHR systems for seamless patient data management",
    features: ["Patient Data Management", "Clinical Decision Support", "Interoperability", "HIPAA Compliance"],
    image: "/placeholder.svg?height=300&width=400&text=EHR+System",
    benefits: "50% faster patient processing",
  },
  {
    icon: Smartphone,
    title: "Telemedicine Platforms",
    description: "Remote healthcare delivery with secure video consultations",
    features: ["Video Consultations", "Remote Monitoring", "Prescription Management", "Patient Portal"],
    image: "/placeholder.svg?height=300&width=400&text=Telemedicine",
    benefits: "300% increase in patient reach",
  },
  {
    icon: Activity,
    title: "Medical Device Integration",
    description: "IoT solutions for real-time patient monitoring and data collection",
    features: ["Real-time Monitoring", "Alert Systems", "Data Analytics", "Device Management"],
    image: "/placeholder.svg?height=300&width=400&text=Medical+IoT",
    benefits: "24/7 patient monitoring",
  },
  {
    icon: Shield,
    title: "Healthcare Analytics",
    description: "AI-powered insights for improved patient outcomes and operations",
    features: ["Predictive Analytics", "Population Health", "Quality Metrics", "Cost Optimization"],
    image: "/placeholder.svg?height=300&width=400&text=Healthcare+Analytics",
    benefits: "25% improvement in outcomes",
  },
]

const caseStudies = [
  {
    title: "Regional Hospital Network",
    challenge: "Fragmented patient data across 15 facilities",
    solution: "Unified EHR system with real-time data synchronization",
    results: [
      "60% reduction in duplicate tests",
      "40% faster diagnosis",
      "95% physician satisfaction",
      "$2M annual savings",
    ],
    image: "/placeholder.svg?height=250&width=400&text=Hospital+Network",
  },
  {
    title: "Specialty Clinic Chain",
    challenge: "Limited access to specialists in rural areas",
    solution: "Telemedicine platform with AI-assisted diagnostics",
    results: [
      "500% increase in specialist consultations",
      "85% patient satisfaction",
      "30% cost reduction",
      "24/7 availability",
    ],
    image: "/placeholder.svg?height=250&width=400&text=Specialty+Clinic",
  },
]

const compliance = [
  { name: "HIPAA", description: "Health Insurance Portability and Accountability Act" },
  { name: "HITECH", description: "Health Information Technology for Economic and Clinical Health" },
  { name: "FDA 21 CFR Part 11", description: "Electronic Records and Electronic Signatures" },
  { name: "SOC 2 Type II", description: "Security, Availability, and Confidentiality" },
]

export default function HealthcarePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-lg rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Healthcare Technology Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transforming Healthcare
              <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                {" "}
                Through Technology
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Empowering healthcare providers with innovative digital solutions that improve patient outcomes,
              streamline operations, and ensure compliance.
            </p>

            {/* Hero Image */}
            <div className="mb-8">
              <Image
                src="/placeholder.svg?height=400&width=800&text=Healthcare+Dashboard"
                alt="Healthcare Dashboard"
                width={800}
                height={400}
                className="rounded-2xl shadow-2xl mx-auto"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-blue-200 text-sm">Healthcare Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-blue-200 text-sm">HIPAA Compliance</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                <div className="text-2xl font-bold">2M+</div>
                <div className="text-blue-200 text-sm">Patients Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-blue-200 text-sm">System Uptime</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Start Healthcare Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Healthcare Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital health solutions designed for modern healthcare delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {healthcareSolutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
                >
                  <div className="grid lg:grid-cols-2 gap-6">
                    <CardHeader className="lg:p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{solution.title}</CardTitle>
                          <p className="text-gray-600 mt-1">{solution.description}</p>
                        </div>
                      </div>
                      <div className="space-y-3 mb-4">
                        {solution.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Badge className="bg-green-100 text-green-800">{solution.benefits}</Badge>
                    </CardHeader>
                    <CardContent className="lg:p-6 flex items-center">
                      <Image
                        src={solution.image || "/placeholder.svg"}
                        alt={solution.title}
                        width={400}
                        height={300}
                        className="rounded-lg w-full h-auto"
                      />
                    </CardContent>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world impact of our healthcare technology solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{study.title}</h3>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-1">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-1">Solution:</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Results:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Compliance & Security</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We ensure all healthcare solutions meet the highest standards of security and compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {compliance.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Healthcare Operations?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Partner with us to build innovative healthcare solutions that improve patient care and operational
            efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Start Healthcare Project
                <Zap className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
            >
              Download Healthcare Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
