"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  Mail,
  TrendingUp,
  Calendar,
  MessageSquare,
  Download,
  Filter,
  BarChart3,
  PieChart,
  Activity,
  Bell,
  Settings,
  LogOut,
} from "lucide-react"
import { auth, type User, type ContactSubmission } from "@/lib/auth"

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [contacts, setContacts] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    totalContacts: 0,
    thisMonth: 0,
    avgBudget: 0,
    topIndustry: "",
    conversionRate: 0,
    responseTime: 0,
  })
  const router = useRouter()

  useEffect(() => {
    checkUser()
    fetchContacts()
  }, [])

  const checkUser = () => {
    const currentUser = auth.getUser()
    if (!currentUser) {
      router.push("/auth/login")
      return
    }
    setUser(currentUser)
  }

  const fetchContacts = async () => {
    try {
      const data = await auth.getContacts()
      setContacts(data)
      calculateStats(data)
    } catch (error) {
      console.error("Error fetching contacts:", error)
    } finally {
      setLoading(false)
    }
  }

  const calculateStats = (data: ContactSubmission[]) => {
    const now = new Date()
    const thisMonth = data.filter((contact) => {
      const contactDate = new Date(contact.createdAt)
      return contactDate.getMonth() === now.getMonth() && contactDate.getFullYear() === now.getFullYear()
    })

    const industries = data.reduce(
      (acc, contact) => {
        acc[contact.industry] = (acc[contact.industry] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    const topIndustry = Object.entries(industries).sort(([, a], [, b]) => b - a)[0]?.[0] || "N/A"
    const qualified = data.filter((c) => c.status === "qualified").length
    const conversionRate = data.length > 0 ? (qualified / data.length) * 100 : 0

    setStats({
      totalContacts: data.length,
      thisMonth: thisMonth.length,
      avgBudget: 125000,
      topIndustry,
      conversionRate,
      responseTime: 2.4,
    })
  }

  const handleSignOut = async () => {
    await auth.signOut()
    router.push("/")
  }

  const getBudgetColor = (budget: string) => {
    switch (budget) {
      case "over-500k":
        return "bg-green-100 text-green-800"
      case "250k-500k":
        return "bg-blue-100 text-blue-800"
      case "100k-250k":
        return "bg-purple-100 text-purple-800"
      case "50k-100k":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800"
      case "contacted":
        return "bg-yellow-100 text-yellow-800"
      case "qualified":
        return "bg-green-100 text-green-800"
      case "closed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const formatBudget = (budget: string) => {
    const budgetMap: Record<string, string> = {
      "under-50k": "< $50K",
      "50k-100k": "$50K - $100K",
      "100k-250k": "$100K - $250K",
      "250k-500k": "$250K - $500K",
      "over-500k": "> $500K",
    }
    return budgetMap[budget] || budget
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Welcome back, {user?.firstName || "Admin"}</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <Button variant="outline" size="sm">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button onClick={handleSignOut} variant="outline" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalContacts}</div>
              <p className="text-xs text-muted-foreground">All time contacts</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.thisMonth}</div>
              <p className="text-xs text-muted-foreground">New leads this month</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.conversionRate.toFixed(1)}%</div>
              <p className="text-xs text-muted-foreground">Lead to qualified</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Response</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.responseTime}h</div>
              <p className="text-xs text-muted-foreground">Response time</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="leads" className="space-y-6">
          <TabsList className="grid w-full lg:w-auto grid-cols-4">
            <TabsTrigger value="leads">Leads</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="leads">
            <Card>
              <CardHeader>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                  <CardTitle>Recent Leads</CardTitle>
                  <div className="flex space-x-2 mt-4 lg:mt-0">
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contacts.length === 0 ? (
                    <div className="text-center py-8">
                      <Mail className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">No leads yet. Contact forms will appear here.</p>
                    </div>
                  ) : (
                    contacts.slice(0, 10).map((contact) => (
                      <div
                        key={contact.id}
                        className="flex flex-col lg:flex-row lg:items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold text-gray-900">
                              {contact.firstName} {contact.lastName}
                            </h3>
                            <Badge variant="outline" className="capitalize">
                              {contact.industry}
                            </Badge>
                            <Badge className={getStatusColor(contact.status)}>{contact.status}</Badge>
                            {contact.budget && (
                              <Badge className={getBudgetColor(contact.budget)}>{formatBudget(contact.budget)}</Badge>
                            )}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            <span className="font-medium">{contact.email}</span>
                            {contact.company && <span> • {contact.company}</span>}
                          </div>
                          <p className="text-sm text-gray-500 line-clamp-2">{contact.message}</p>
                        </div>
                        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                          <div className="text-right">
                            <div className="text-sm text-gray-500">
                              {new Date(contact.createdAt).toLocaleDateString()}
                            </div>
                            <div className="text-xs text-gray-400">
                              {new Date(contact.createdAt).toLocaleTimeString()}
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Reply
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Lead Sources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { source: "Website Contact Form", count: 45, percentage: 60 },
                      { source: "LinkedIn", count: 18, percentage: 24 },
                      { source: "Referrals", count: 9, percentage: 12 },
                      { source: "Direct Email", count: 3, percentage: 4 },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{item.source}</div>
                          <div className="text-sm text-gray-500">{item.count} leads</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{item.percentage}%</div>
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChart className="w-5 h-5 mr-2" />
                    Industry Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { industry: "Healthcare", count: 28, color: "bg-blue-500" },
                      { industry: "Finance", count: 22, color: "bg-green-500" },
                      { industry: "Insurance", count: 15, color: "bg-purple-500" },
                      { industry: "Technology", count: 10, color: "bg-orange-500" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded ${item.color}`}></div>
                        <div className="flex-1">
                          <div className="font-medium">{item.industry}</div>
                          <div className="text-sm text-gray-500">{item.count} leads</div>
                        </div>
                        <div className="text-right font-medium">{((item.count / 75) * 100).toFixed(0)}%</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>Active Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "HealthTech EHR System", client: "MedCorp", status: "In Progress", progress: 75 },
                    { name: "Trading Platform", client: "FinanceFlow", status: "Testing", progress: 90 },
                    { name: "Insurance Claims AI", client: "InsureTech", status: "Development", progress: 45 },
                  ].map((project, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">{project.name}</h3>
                          <p className="text-sm text-gray-600">{project.client}</p>
                        </div>
                        <Badge variant="outline">{project.status}</Badge>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">{project.progress}% Complete</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>New Leads</span>
                      <span className="font-semibold">+23%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Conversion Rate</span>
                      <span className="font-semibold">+15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Response Time</span>
                      <span className="font-semibold">-30%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Client Satisfaction</span>
                      <span className="font-semibold">98%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Export Monthly Report
                    </Button>
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Follow-up Emails
                    </Button>
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Team Meeting
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
