import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, Brain, Database, ArrowRight, CheckCircle, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const analyticsServices = [
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Transform raw data into actionable insights with comprehensive BI solutions",
    features: ["Interactive Dashboards", "Real-time Reporting", "KPI Monitoring", "Data Visualization"],
    image: "/placeholder.svg?height=300&width=400&text=BI+Dashboard",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "AI-powered analytics for predictive insights and intelligent automation",
    features: ["Predictive Modeling", "Pattern Recognition", "Anomaly Detection", "Recommendation Systems"],
    image: "/placeholder.svg?height=300&width=400&text=ML+Models",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven decisions with advanced analytics",
    features: ["Trend Forecasting", "Risk Assessment", "Customer Behavior", "Market Analysis"],
    image: "/placeholder.svg?height=300&width=400&text=Predictive+Charts",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Build robust data pipelines and warehouses for scalable analytics",
    features: ["ETL Pipelines", "Data Warehousing", "Real-time Processing", "Data Quality"],
    image: "/placeholder.svg?height=300&width=400&text=Data+Pipeline",
  },
]

const useCases = [
  {
    industry: "Healthcare",
    title: "Patient Outcome Prediction",
    description: "ML models predicting patient outcomes with 94% accuracy",
    metrics: ["94% Accuracy", "30% Cost Reduction", "50% Faster Diagnosis"],
    image: "/placeholder.svg?height=200&width=300&text=Healthcare+Analytics",
  },
  {
    industry: "Finance",
    title: "Fraud Detection System",
    description: "Real-time fraud detection preventing $2M+ in losses",
    metrics: ["99.8% Detection Rate", "$2M+ Saved", "0.1s Response Time"],
    image: "/placeholder.svg?height=200&width=300&text=Fraud+Detection",
  },
  {
    industry: "Retail",
    title: "Customer Segmentation",
    description: "AI-driven customer insights increasing sales by 35%",
    metrics: ["35% Sales Increase", "85% Accuracy", "12 Segments"],
    image: "/placeholder.svg?height=200&width=300&text=Customer+Segments",
  },
]

export default function AnalyticsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-lg rounded-full text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4 mr-2" />
              Advanced Data Analytics
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Turn Data Into
              <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                {" "}
                Competitive Advantage
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Unlock the power of your data with AI-driven analytics, machine learning, and business intelligence
              solutions that drive growth and innovation.
            </p>

            {/* Hero Image */}
            <div className="mb-8">
              <Image
                src="/placeholder.svg?height=400&width=800&text=Analytics+Dashboard"
                alt="Analytics Dashboard"
                width={800}
                height={400}
                className="rounded-2xl shadow-2xl mx-auto"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Analytics Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Analytics Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive data analytics solutions from basic reporting to advanced AI-powered insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {analyticsServices.map((service, index) => {
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

      {/* Use Cases */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world applications of our analytics solutions across different industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={useCase.image || "/placeholder.svg"}
                    alt={useCase.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3">{useCase.industry}</Badge>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{metric}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Analytics Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge tools and platforms for comprehensive data analytics
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Python", category: "Language", icon: "🐍" },
              { name: "R", category: "Language", icon: "📊" },
              { name: "TensorFlow", category: "ML Framework", icon: "🧠" },
              { name: "PyTorch", category: "ML Framework", icon: "🔥" },
              { name: "Tableau", category: "Visualization", icon: "📈" },
              { name: "Power BI", category: "Visualization", icon: "📊" },
              { name: "Apache Spark", category: "Big Data", icon: "⚡" },
              { name: "Snowflake", category: "Data Warehouse", icon: "❄️" },
              { name: "AWS", category: "Cloud", icon: "☁️" },
              { name: "Azure", category: "Cloud", icon: "🌐" },
              { name: "Databricks", category: "Platform", icon: "🧱" },
              { name: "Jupyter", category: "Notebook", icon: "📓" },
            ].map((tech, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-4">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{tech.icon}</div>
                  <h3 className="font-semibold text-gray-900 text-sm">{tech.name}</h3>
                  <p className="text-xs text-gray-500">{tech.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Transform your business with data-driven insights and AI-powered analytics solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Analytics Project
                <Zap className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Download Analytics Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
