import { Card, CardContent } from "@/components/ui/card"
import { Code, Zap, BarChart3, Cloud, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored solutions built with cutting-edge technologies to meet your specific business requirements.",
    features: ["Full-stack Development", "API Integration", "Legacy Modernization", "Quality Assurance"],
    href: "/services/development",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Streamline operations and eliminate manual tasks with intelligent automation solutions.",
    features: ["Workflow Automation", "RPA Implementation", "Business Process Optimization", "Integration Services"],
    href: "/services/automation",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics and machine learning.",
    features: ["Business Intelligence", "Predictive Analytics", "Data Visualization", "ML/AI Solutions"],
    href: "/services/analytics",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern, resilient applications.",
    features: ["Cloud Migration", "DevOps & CI/CD", "Microservices Architecture", "Security & Compliance"],
    href: "/services/cloud",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Core Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation and drive business
            growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={service.href}>
                    <div className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium cursor-pointer group-hover:translate-x-1 transition-transform">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
