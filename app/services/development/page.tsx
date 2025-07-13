import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Smartphone, Globe, ArrowRight, CheckCircle, Zap } from "lucide-react"
import Link from "next/link"

const technologies = [
  { name: "React/Next.js", category: "Frontend", color: "bg-blue-100 text-blue-800" },
  { name: "Node.js", category: "Backend", color: "bg-green-100 text-green-800" },
  { name: "Python/Django", category: "Backend", color: "bg-yellow-100 text-yellow-800" },
  { name: "PostgreSQL", category: "Database", color: "bg-purple-100 text-purple-800" },
  { name: "MongoDB", category: "Database", color: "bg-green-100 text-green-800" },
  { name: "AWS/Azure", category: "Cloud", color: "bg-orange-100 text-orange-800" },
  { name: "Docker", category: "DevOps", color: "bg-blue-100 text-blue-800" },
  { name: "Kubernetes", category: "DevOps", color: "bg-indigo-100 text-indigo-800" },
]

const services = [
  {
    icon: Globe,
    title: "Web Applications",
    description: "Modern, responsive web applications built with cutting-edge frameworks",
    features: [
      "Single Page Applications",
      "Progressive Web Apps",
      "E-commerce Platforms",
      "Content Management Systems",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android",
    features: ["React Native Apps", "Native iOS/Android", "Hybrid Applications", "Mobile-first Design"],
  },
  {
    icon: Database,
    title: "Backend Systems",
    description: "Scalable backend infrastructure and API development",
    features: ["RESTful APIs", "GraphQL Services", "Microservices Architecture", "Database Design"],
  },
  {
    icon: Code,
    title: "Custom Solutions",
    description: "Tailored software solutions for unique business requirements",
    features: [
      "Legacy System Integration",
      "Custom Algorithms",
      "Third-party Integrations",
      "Performance Optimization",
    ],
  },
]

export default function DevelopmentPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-lg rounded-full text-sm font-medium mb-6">
              <Code className="w-4 h-4 mr-2" />
              Custom Software Development
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Build Software That
              <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                {" "}
                Drives Results
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              From concept to deployment, we create custom software solutions that solve complex business challenges and
              accelerate your digital transformation journey.
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
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive software development services tailored to your industry and business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <p className="text-gray-600 mt-1">{service.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use industry-leading technologies to build robust, scalable, and maintainable software solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Badge className={`${tech.color} mb-3`}>{tech.category}</Badge>
                  <h3 className="font-semibold text-gray-900">{tech.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery on time and within budget
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Requirements gathering and project planning" },
              { step: "02", title: "Design", description: "UI/UX design and system architecture" },
              { step: "03", title: "Development", description: "Agile development with regular updates" },
              { step: "04", title: "Deployment", description: "Testing, deployment, and ongoing support" },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Development Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create a custom solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Started Today
                <Zap className="ml-2 w-4 h-4" />
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
