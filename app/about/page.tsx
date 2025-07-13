import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Globe } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description:
      "We leverage cutting-edge technologies to solve complex business challenges and drive digital transformation.",
  },
  {
    icon: Users,
    title: "Client Success",
    description:
      "Your success is our success. We partner with you to achieve measurable business outcomes and long-term growth.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We maintain the highest standards in code quality, security, and performance across all our deliverables.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description:
      "Our solutions serve millions of users worldwide, making a positive impact across industries and communities.",
  },
]

const team = [
  {
    name: "Alex Thompson",
    role: "CEO & Founder",
    bio: "15+ years in enterprise software development with expertise in healthcare and financial systems.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Sarah Kim",
    role: "CTO",
    bio: "Former Google engineer specializing in scalable architectures and machine learning implementations.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Michael Rodriguez",
    role: "VP of Engineering",
    bio: "Expert in process automation and DevOps with a track record of delivering complex enterprise solutions.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Emily Chen",
    role: "Head of Data Science",
    bio: "PhD in Computer Science with specialization in predictive analytics and business intelligence.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">About NexaFlow</h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8">
              We're a team of passionate technologists dedicated to transforming industries through innovative software
              solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2018</div>
                <div className="text-blue-200">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-blue-200">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-blue-200">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600">
                To empower businesses with cutting-edge technology solutions that eliminate inefficiencies, enhance
                decision-making, and drive sustainable growth across healthcare, finance, insurance, and investment
                sectors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals leading our mission to transform industries through technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <div className="text-blue-600 font-medium mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                Founded in 2018 by a team of experienced software engineers and industry experts, NexaFlow emerged from
                a simple observation: traditional industries were struggling to keep pace with digital transformation.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We saw healthcare systems bogged down by inefficient processes, trading firms limited by legacy
                technology, insurance companies drowning in manual claims processing, and investment firms lacking
                real-time analytics. These challenges inspired us to create solutions that would fundamentally change
                how these industries operate.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Today, we're proud to have delivered over 500 successful projects, serving clients from startups to
                Fortune 500 companies. Our solutions process millions of transactions daily, manage billions in assets,
                and improve healthcare outcomes for patients worldwide.
              </p>
              <p className="text-lg leading-relaxed">
                As we look to the future, we remain committed to pushing the boundaries of what's possible with
                technology, always with the goal of creating meaningful impact for our clients and the communities they
                serve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
