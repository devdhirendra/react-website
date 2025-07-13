import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, Play, Award, Users, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const portfolioProjects = [
  {
    id: 1,
    title: "HealthFlow EHR System",
    description:
      "Comprehensive electronic health records system serving 50+ hospitals with real-time patient data management and HIPAA compliance.",
    category: "healthcare",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "FHIR"],
    image: "/placeholder.svg?height=400&width=600&text=HealthFlow+EHR",
    metrics: {
      users: "10,000+",
      uptime: "99.9%",
      processing: "50% faster",
      savings: "$2M annually",
    },
    featured: true,
    liveUrl: "#",
    caseStudyUrl: "#",
  },
  {
    id: 2,
    title: "TradePro Analytics Platform",
    description:
      "High-frequency trading platform processing 1M+ transactions per second with advanced risk management and real-time analytics.",
    category: "finance",
    technologies: ["Python", "Redis", "Kafka", "Docker", "Kubernetes"],
    image: "/placeholder.svg?height=400&width=600&text=TradePro+Analytics",
    metrics: {
      transactions: "1M+/sec",
      latency: "<1ms",
      accuracy: "99.99%",
      revenue: "$10M+ managed",
    },
    featured: true,
    liveUrl: "#",
    caseStudyUrl: "#",
  },
  {
    id: 3,
    title: "ClaimSmart Automation",
    description:
      "AI-powered insurance claims processing system reducing manual work by 80% and improving accuracy to 99.9%.",
    category: "insurance",
    technologies: ["Python", "TensorFlow", "PostgreSQL", "Azure", "OCR"],
    image: "/placeholder.svg?height=400&width=600&text=ClaimSmart+AI",
    metrics: {
      automation: "80% reduction",
      accuracy: "99.9%",
      processing: "24/7",
      claims: "100K+ processed",
    },
    featured: true,
    liveUrl: "#",
    caseStudyUrl: "#",
  },
  {
    id: 4,
    title: "PortfolioMax Dashboard",
    description:
      "Investment portfolio management platform managing $50B+ in assets with real-time performance tracking.",
    category: "investment",
    technologies: ["Vue.js", "Python", "MongoDB", "AWS", "D3.js"],
    image: "/placeholder.svg?height=400&width=600&text=PortfolioMax+Dashboard",
    metrics: {
      assets: "$50B+",
      clients: "5,000+",
      performance: "15% above market",
      reporting: "Real-time",
    },
    featured: false,
    liveUrl: "#",
    caseStudyUrl: "#",
  },
  {
    id: 5,
    title: "MedDevice Connect",
    description:
      "IoT platform connecting 10,000+ medical devices with real-time monitoring and predictive maintenance.",
    category: "healthcare",
    technologies: ["IoT", "Node.js", "InfluxDB", "Kubernetes", "MQTT"],
    image: "/placeholder.svg?height=400&width=600&text=MedDevice+IoT",
    metrics: {
      devices: "10,000+",
      uptime: "99.95%",
      alerts: "Real-time",
      maintenance: "Predictive",
    },
    featured: false,
    liveUrl: "#",
    caseStudyUrl: "#",
  },
  {
    id: 6,
    title: "RiskGuard Analytics",
    description:
      "Advanced risk assessment platform for financial institutions with machine learning-powered fraud detection.",
    category: "finance",
    technologies: ["Python", "Scikit-learn", "PostgreSQL", "Docker", "Grafana"],
    image: "/placeholder.svg?height=400&width=600&text=RiskGuard+ML",
    metrics: {
      detection: "99.8%",
      false_positives: "<0.1%",
      processing: "Real-time",
      savings: "$5M+ prevented",
    },
    featured: false,
    liveUrl: "#",
    caseStudyUrl: "#",
  },
]

const categories = [
  { id: "all", name: "All Projects", count: portfolioProjects.length },
  { id: "healthcare", name: "Healthcare", count: portfolioProjects.filter((p) => p.category === "healthcare").length },
  { id: "finance", name: "Finance", count: portfolioProjects.filter((p) => p.category === "finance").length },
  { id: "insurance", name: "Insurance", count: portfolioProjects.filter((p) => p.category === "insurance").length },
  { id: "investment", name: "Investment", count: portfolioProjects.filter((p) => p.category === "investment").length },
]

const achievements = [
  { icon: Award, title: "500+ Projects", description: "Successfully delivered across industries" },
  { icon: Users, title: "150+ Clients", description: "From startups to Fortune 500 companies" },
  { icon: TrendingUp, title: "95% Success Rate", description: "Projects delivered on time and budget" },
  { icon: Award, title: "50+ Awards", description: "Industry recognition for excellence" },
]

export default function PortfolioPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-lg rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Our Work & Achievements
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Portfolio of
              <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                {" "}
                Excellence
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Explore our portfolio of successful projects that have transformed businesses across healthcare, finance,
              insurance, and investment sectors.
            </p>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                    <Icon className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
                    <div className="text-lg font-bold">{achievement.title}</div>
                    <div className="text-blue-200 text-xs">{achievement.description}</div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Play className="mr-2 w-4 h-4" />
                Watch Demo Reel
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="space-y-8">
            {/* Category Filters */}
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-5 w-full max-w-2xl">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-sm">
                    {category.name} ({category.count})
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* All Projects */}
            <TabsContent value="all">
              <div className="space-y-12">
                {/* Featured Projects */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioProjects
                      .filter((project) => project.featured)
                      .map((project) => (
                        <Card
                          key={project.id}
                          className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
                        >
                          <div className="aspect-video overflow-hidden relative">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              width={600}
                              height={400}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                                <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                                  <ExternalLink className="w-4 h-4 mr-1" />
                                  Live Demo
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                                >
                                  <Play className="w-4 h-4 mr-1" />
                                  Case Study
                                </Button>
                              </div>
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-3">
                              <Badge className="capitalize">{project.category}</Badge>
                              <Badge variant="outline">Featured</Badge>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                            {/* Metrics */}
                            <div className="grid grid-cols-2 gap-3 mb-4">
                              {Object.entries(project.metrics).map(([key, value], index) => (
                                <div key={index} className="text-center">
                                  <div className="text-sm font-bold text-gray-900">{value}</div>
                                  <div className="text-xs text-gray-500 capitalize">{key.replace("_", " ")}</div>
                                </div>
                              ))}
                            </div>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-1">
                              {project.technologies.slice(0, 3).map((tech, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                              {project.technologies.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                  +{project.technologies.length - 3} more
                                </Badge>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>

                {/* All Projects */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">All Projects</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioProjects.map((project) => (
                      <Card
                        key={project.id}
                        className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
                      >
                        <div className="aspect-video overflow-hidden relative">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                              <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                                <ExternalLink className="w-4 h-4 mr-1" />
                                View Project
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                              >
                                <Github className="w-4 h-4 mr-1" />
                                Details
                              </Button>
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <Badge className="capitalize">{project.category}</Badge>
                            {project.featured && <Badge variant="outline">Featured</Badge>}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                          <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                          <div className="flex flex-wrap gap-1">
                            {project.technologies.slice(0, 4).map((tech, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Category-specific content */}
            {categories.slice(1).map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {portfolioProjects
                    .filter((project) => project.category === category.id)
                    .map((project) => (
                      <Card
                        key={project.id}
                        className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
                      >
                        <div className="aspect-video overflow-hidden relative">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                              <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                                <ExternalLink className="w-4 h-4 mr-1" />
                                View Project
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                              >
                                <Play className="w-4 h-4 mr-1" />
                                Case Study
                              </Button>
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <Badge className="capitalize">{project.category}</Badge>
                            {project.featured && <Badge variant="outline">Featured</Badge>}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                          <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                          {/* Metrics */}
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            {Object.entries(project.metrics)
                              .slice(0, 2)
                              .map(([key, value], index) => (
                                <div key={index} className="text-center">
                                  <div className="text-sm font-bold text-gray-900">{value}</div>
                                  <div className="text-xs text-gray-500 capitalize">{key.replace("_", " ")}</div>
                                </div>
                              ))}
                          </div>

                          <div className="flex flex-wrap gap-1">
                            {project.technologies.slice(0, 4).map((tech, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Start your project today and become our next success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
