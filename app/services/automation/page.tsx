import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Bot, Workflow, BarChart3, ArrowRight, CheckCircle, Clock, DollarSign } from "lucide-react"
import Link from "next/link"

const automationTypes = [
  {
    icon: Workflow,
    title: "Business Process Automation",
    description: "Streamline repetitive tasks and workflows to increase efficiency",
    benefits: ["80% Time Reduction", "99% Accuracy", "24/7 Operation", "Cost Savings"],
    examples: ["Invoice Processing", "Data Entry", "Report Generation", "Email Workflows"],
  },
  {
    icon: Bot,
    title: "Robotic Process Automation",
    description: "Deploy software robots to handle rule-based tasks",
    benefits: ["No Human Error", "Instant Processing", "Scalable", "Compliance Ready"],
    examples: ["Form Filling", "Data Migration", "System Integration", "Customer Onboarding"],
  },
  {
    icon: BarChart3,
    title: "Intelligent Automation",
    description: "AI-powered automation with machine learning capabilities",
    benefits: ["Smart Decisions", "Pattern Recognition", "Continuous Learning", "Predictive Actions"],
    examples: ["Fraud Detection", "Customer Support", "Inventory Management", "Quality Control"],
  },
]

const industries = [
  { name: "Healthcare", automation: "Patient Records, Billing, Scheduling", savings: "60%" },
  { name: "Finance", automation: "Transaction Processing, Compliance, Reporting", savings: "75%" },
  { name: "Insurance", automation: "Claims Processing, Underwriting, Customer Service", savings: "80%" },
  { name: "Manufacturing", automation: "Quality Control, Inventory, Supply Chain", savings: "65%" },
]

export default function AutomationPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-lg rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Process Automation Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Automate Everything,
              <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                {" "}
                Amplify Results
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Transform your business operations with intelligent automation solutions that eliminate manual work,
              reduce errors, and accelerate growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                <div className="text-2xl font-bold">80%</div>
                <div className="text-blue-200">Time Saved</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                <div className="text-2xl font-bold">99%</div>
                <div className="text-blue-200">Accuracy Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-blue-200">Operation</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Start Automation Journey
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Calculate ROI
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Automation Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple task automation to complex AI-driven processes, we deliver solutions that transform your
              operations
            </p>
          </div>

          <div className="space-y-8">
            {automationTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <CardHeader className="lg:p-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{type.title}</CardTitle>
                          <p className="text-gray-600 mt-2">{type.description}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {type.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardHeader>

                    <CardContent className="lg:p-8 bg-gray-50">
                      <h4 className="font-semibold text-gray-900 mb-4">Common Use Cases</h4>
                      <div className="space-y-3">
                        {type.examples.map((example, exampleIndex) => (
                          <div key={exampleIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-gray-700">{example}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how automation transforms operations across different industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{industry.automation}</p>
                  <div className="bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium">
                    {industry.savings} Cost Reduction
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Calculate Your ROI</h2>
              <p className="text-xl text-gray-600">See how much you could save with process automation</p>
            </div>

            <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-0">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Time Savings</h3>
                    <p className="text-3xl font-bold text-blue-600 mb-2">2,000+</p>
                    <p className="text-gray-600">Hours saved per year</p>
                  </div>
                  <div>
                    <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Reduction</h3>
                    <p className="text-3xl font-bold text-green-600 mb-2">$500K+</p>
                    <p className="text-gray-600">Annual savings</p>
                  </div>
                  <div>
                    <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">ROI</h3>
                    <p className="text-3xl font-bold text-purple-600 mb-2">300%+</p>
                    <p className="text-gray-600">Return on investment</p>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500">
                    Get Custom ROI Analysis
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Processes?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your automation journey today and transform your business operations for maximum efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Free Assessment
                <Zap className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
