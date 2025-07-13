import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Cloud, Server, Shield, Zap, Database, Globe, ArrowRight, CheckCircle, Settings } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const cloudServices = [
  {
    icon: Cloud,
    title: "Cloud Migration",
    description: "Seamless migration of your applications and data to the cloud",
    features: ["Assessment & Planning", "Zero-downtime Migration", "Data Transfer", "Post-migration Support"],
    image: "/placeholder.svg?height=300&width=400&text=Cloud+Migration",
  },
  {
    icon: Server,
    title: "Infrastructure as Code",
    description: "Automated infrastructure provisioning and management",
    features: ["Terraform Templates", "Auto-scaling", "Resource Optimization", "Cost Management"],
    image: "/placeholder.svg?height=300&width=400&text=Infrastructure+Code",
  },
  {
    icon: Shield,
    title: "Cloud Security",
    description: "Comprehensive security solutions for cloud environments",
    features: ["Identity Management", "Encryption", "Compliance", "Threat Detection"],
    image: "/placeholder.svg?height=300&width=400&text=Cloud+Security",
  },
  {
    icon: Settings,
    title: "DevOps & CI/CD",
    description: "Streamlined development and deployment pipelines",
    features: ["Continuous Integration", "Automated Deployment", "Monitoring & Logging", "Performance Optimization"],
    image: "/placeholder.svg?height=300&width=400&text=DevOps+Pipeline",
  },
]

const cloudProviders = [
  {
    name: "Amazon Web Services",
    logo: "/placeholder.svg?height=80&width=120&text=AWS",
    services: ["EC2", "S3", "RDS", "Lambda", "EKS"],
    specialty: "Comprehensive cloud platform with 200+ services",
  },
  {
    name: "Microsoft Azure",
    logo: "/placeholder.svg?height=80&width=120&text=Azure",
    services: ["Virtual Machines", "Blob Storage", "SQL Database", "Functions", "AKS"],
    specialty: "Enterprise-focused with strong hybrid capabilities",
  },
  {
    name: "Google Cloud Platform",
    logo: "/placeholder.svg?height=80&width=120&text=GCP",
    services: ["Compute Engine", "Cloud Storage", "BigQuery", "Cloud Functions", "GKE"],
    specialty: "AI/ML focused with advanced data analytics",
  },
]

const benefits = [
  {
    icon: Zap,
    title: "Scalability",
    description: "Scale resources up or down based on demand",
    metric: "Auto-scale to 10x capacity",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Enterprise-grade security and compliance",
    metric: "99.9% security uptime",
  },
  {
    icon: Database,
    title: "Reliability",
    description: "High availability and disaster recovery",
    metric: "99.99% uptime SLA",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Deploy applications worldwide instantly",
    metric: "190+ countries coverage",
  },
]

export default function CloudPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-lg rounded-full text-sm font-medium mb-6">
              <Cloud className="w-4 h-4 mr-2" />
              Cloud Solutions & Migration
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Scale Your Business
              <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                {" "}
                In The Cloud
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Modernize your infrastructure with cloud-native solutions that provide scalability, security, and
              cost-efficiency for your growing business.
            </p>

            {/* Hero Image */}
            <div className="mb-8">
              <Image
                src="/placeholder.svg?height=400&width=800&text=Cloud+Architecture"
                alt="Cloud Architecture"
                width={800}
                height={400}
                className="rounded-2xl shadow-2xl mx-auto"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Start Cloud Migration
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Free Cloud Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Cloud?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with the power of cloud computing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 mb-3">{benefit.description}</p>
                    <div className="text-sm font-medium text-blue-600">{benefit.metric}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Cloud Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud solutions from migration to optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cloudServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
                >
                  <div className="grid lg:grid-cols-2 gap-6">
                    <CardHeader className="lg:p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                          <p className="text-gray-600 mt-1">{service.description}</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="lg:p-6 flex items-center">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
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

      {/* Cloud Providers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Multi-Cloud Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with all major cloud providers to find the best solution for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cloudProviders.map((provider, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Image
                    src={provider.logo || "/placeholder.svg"}
                    alt={provider.name}
                    width={120}
                    height={80}
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{provider.name}</h3>
                  <p className="text-gray-600 mb-4">{provider.specialty}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {provider.services.map((service, serviceIndex) => (
                      <Badge key={serviceIndex} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Cloud Migration Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures smooth and successful cloud migrations
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Assessment", description: "Evaluate current infrastructure and requirements" },
              { step: "02", title: "Strategy", description: "Design migration strategy and timeline" },
              { step: "03", title: "Preparation", description: "Set up cloud environment and security" },
              { step: "04", title: "Migration", description: "Execute migration with minimal downtime" },
              { step: "05", title: "Optimization", description: "Optimize performance and costs" },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Move to the Cloud?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your cloud journey today with our expert guidance and proven methodologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Cloud Consultation
                <Cloud className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Download Migration Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
