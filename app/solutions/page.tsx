import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Rocket, Target, Zap, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const solutions = [
  {
    icon: Lightbulb,
    title: "Digital Transformation",
    description: "End-to-end digital transformation strategies that modernize your business operations",
    features: ["Legacy System Modernization", "Process Digitization", "Cloud Migration", "Data Analytics Integration"],
    image: "/placeholder.svg?height=300&width=400&text=Digital+Transformation",
    industries: ["Healthcare", "Finance", "Manufacturing"],
    roi: "300% ROI in 12 months",
  },
  {
    icon: Rocket,
    title: "Enterprise Automation",
    description: "Intelligent automation solutions that eliminate manual processes and boost efficiency",
    features: [
      "Robotic Process Automation",
      "Workflow Optimization",
      "AI-Powered Decision Making",
      "Integration Platforms",
    ],
    image: "/placeholder.svg?height=300&width=400&text=Enterprise+Automation",
    industries: ["Insurance", "Banking", "Retail"],
    roi: "80% time savings",
  },
  {
    icon: Target,
    title: "Data-Driven Insights",
    description: "Transform raw data into actionable insights with advanced analytics and AI",
    features: ["Business Intelligence", "Predictive Analytics", "Real-time Dashboards", "Machine Learning Models"],
    image: "/placeholder.svg?height=300&width=400&text=Data+Analytics",
    industries: ["E-commerce", "Healthcare", "Finance"],
    roi: "45% better decisions",
  },
  {
    icon: Zap,
    title: "Innovation Acceleration",
    description: "Rapid prototyping and MVP development to bring your ideas to market faster",
    features: ["Rapid Prototyping", "MVP Development", "Market Validation", "Scalable Architecture"],
    image: "/placeholder.svg?height=300&width=400&text=Innovation+Lab",
    industries: ["Startups", "Technology", "Media"],
    roi: "50% faster time-to-market",
  },
]

const successStories = [
  {
    company: "Global Insurance Corp",
    challenge: "Manual claims processing taking 30+ days",
    solution: "AI-powered claims automation platform",
    results: [
      "95% reduction in processing time",
      "$5M annual cost savings",
      "99.2% accuracy rate",
      "24/7 automated processing",
    ],
    image: "/placeholder.svg?height=200&width=300&text=Insurance+Success",
    industry: "Insurance",
  },
  {
    company: "Regional Healthcare Network",
    challenge: "Fragmented patient data across 20 facilities",
    solution: "Unified EHR system with real-time analytics",
    results: [
      "60% faster patient processing",
      "40% reduction in medical errors",
      "100% HIPAA compliance",
      "$3M operational savings",
    ],
    image: "/placeholder.svg?height=200&width=300&text=Healthcare+Success",
    industry: "Healthcare",
  },
  {
    company: "Manufacturing Giant",
    challenge: "Inefficient supply chain management",
    solution: "IoT-enabled smart manufacturing platform",
    results: [
      "35% inventory reduction",
      "50% faster production cycles",
      "25% cost optimization",
      "Real-time visibility",
    ],
    image: "/placeholder.svg?height=200&width=300&text=Manufacturing+Success",
    industry: "Manufacturing",
  },
]

const process = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "Deep dive into your business challenges and opportunities",
    activities: ["Stakeholder interviews", "Process mapping", "Technology audit", "Gap analysis"],
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description: "Develop comprehensive solution strategy and roadmap",
    activities: ["Solution design", "Technology selection", "Timeline planning", "Resource allocation"],
  },
  {
    step: "03",
    title: "Implementation",
    description: "Agile development and deployment with continuous feedback",
    activities: ["Iterative development", "Quality assurance", "User training", "Change management"],
  },
  {
    step: "04",
    title: "Optimization & Support",
    description: "Continuous improvement and ongoing support",
    activities: ["Performance monitoring", "User feedback", "Feature enhancements", "24/7 support"],
  },
]

export default function SolutionsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-lg rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              Comprehensive Business Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Solutions That Drive
              <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                {" "}
                Real Results
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              From digital transformation to intelligent automation, we deliver end-to-end solutions that solve complex
              business challenges and accelerate growth.
            </p>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-blue-200 text-sm">Solutions Delivered</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-blue-200 text-sm">Client Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                <div className="text-2xl font-bold">$50M+</div>
                <div className="text-blue-200 text-sm">Cost Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-blue-200 text-sm">Support</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Discuss Your Solution
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Solution Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to address your most critical business challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
                >
                  <div className="grid lg:grid-cols-2 gap-6">
                    <CardHeader className="lg:p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
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
                      <div className="flex flex-wrap gap-2 mb-3">
                        {solution.industries.map((industry, industryIndex) => (
                          <Badge key={industryIndex} variant="outline" className="text-xs">
                            {industry}
                          </Badge>
                        ))}
                      </div>
                      <Badge className="bg-green-100 text-green-800">{solution.roi}</Badge>
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

      {/* Success Stories */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real transformations achieved through our innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.company}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3">{story.industry}</Badge>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{story.company}</h3>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-1">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{story.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-1">Solution:</h4>
                    <p className="text-gray-600 text-sm">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Results:</h4>
                    <div className="space-y-1">
                      {story.results.map((result, resultIndex) => (
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

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Solution Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful solution delivery and measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600 mb-4">{phase.description}</p>
                  <div className="space-y-1">
                    {phase.activities.map((activity, activityIndex) => (
                      <div key={activityIndex} className="text-sm text-gray-500">
                        • {activity}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your challenges and design a custom solution that drives real results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Start Your Transformation
                <Rocket className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              Download Solution Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
