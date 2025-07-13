// Mock authentication system to replace Supabase temporarily
interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  company?: string
  industry?: string
  role: string
  avatar?: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
}

// Mock user data
const mockUsers: User[] = [
  {
    id: "1",
    email: "admin@nexaflow.com",
    firstName: "John",
    lastName: "Doe",
    company: "NexaFlow",
    industry: "technology",
    role: "admin",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

// Mock contact submissions
export interface ContactSubmission {
  id: string
  firstName: string
  lastName: string
  email: string
  company?: string
  phone?: string
  industry: string
  projectType?: string
  budget?: string
  message: string
  createdAt: string
  status: "new" | "contacted" | "qualified" | "closed"
}

const mockContacts: ContactSubmission[] = [
  {
    id: "1",
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah@healthtech.com",
    company: "HealthTech Solutions",
    phone: "+1 (555) 123-4567",
    industry: "healthcare",
    projectType: "development",
    budget: "250k-500k",
    message: "We need a comprehensive EHR system for our hospital network.",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    status: "new",
  },
  {
    id: "2",
    firstName: "Michael",
    lastName: "Chen",
    email: "m.chen@tradingfirm.com",
    company: "Elite Trading",
    phone: "+1 (555) 987-6543",
    industry: "finance",
    projectType: "automation",
    budget: "over-500k",
    message: "Looking for high-frequency trading platform with real-time analytics.",
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    status: "contacted",
  },
  {
    id: "3",
    firstName: "Lisa",
    lastName: "Rodriguez",
    email: "lisa.r@insurecorp.com",
    company: "InsureCorp",
    industry: "insurance",
    projectType: "analytics",
    budget: "100k-250k",
    message: "Need AI-powered claims processing automation system.",
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    status: "qualified",
  },
]

class MockAuth {
  private authState: AuthState = {
    user: null,
    isAuthenticated: false,
  }

  private listeners: ((state: AuthState) => void)[] = []

  constructor() {
    // Check for existing session
    if (typeof window !== "undefined") {
      const savedUser = localStorage.getItem("nexaflow_user")
      if (savedUser) {
        this.authState = {
          user: JSON.parse(savedUser),
          isAuthenticated: true,
        }
      }
    }
  }

  subscribe(listener: (state: AuthState) => void) {
    this.listeners.push(listener)
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener)
    }
  }

  private notify() {
    this.listeners.forEach((listener) => listener(this.authState))
  }

  async signIn(email: string, password: string): Promise<{ success: boolean; error?: string }> {
    // Mock authentication
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const user = mockUsers.find((u) => u.email === email)
    if (user && password === "password123") {
      this.authState = {
        user,
        isAuthenticated: true,
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("nexaflow_user", JSON.stringify(user))
      }
      this.notify()
      return { success: true }
    }

    return { success: false, error: "Invalid credentials" }
  }

  async signUp(
    userData: Partial<User> & { email: string; password: string },
  ): Promise<{ success: boolean; error?: string }> {
    // Mock registration
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newUser: User = {
      id: Date.now().toString(),
      email: userData.email,
      firstName: userData.firstName || "",
      lastName: userData.lastName || "",
      company: userData.company,
      industry: userData.industry,
      role: "user",
    }

    mockUsers.push(newUser)
    this.authState = {
      user: newUser,
      isAuthenticated: true,
    }

    if (typeof window !== "undefined") {
      localStorage.setItem("nexaflow_user", JSON.stringify(newUser))
    }
    this.notify()
    return { success: true }
  }

  async signOut(): Promise<void> {
    this.authState = {
      user: null,
      isAuthenticated: false,
    }
    if (typeof window !== "undefined") {
      localStorage.removeItem("nexaflow_user")
    }
    this.notify()
  }

  getUser(): User | null {
    return this.authState.user
  }

  isAuthenticated(): boolean {
    return this.authState.isAuthenticated
  }

  // Mock contact submissions
  async submitContact(
    data: Omit<ContactSubmission, "id" | "createdAt" | "status">,
  ): Promise<{ success: boolean; error?: string }> {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newContact: ContactSubmission = {
      ...data,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      status: "new",
    }

    mockContacts.unshift(newContact)
    return { success: true }
  }

  async getContacts(): Promise<ContactSubmission[]> {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return [...mockContacts]
  }
}

export const auth = new MockAuth()
export type { User, AuthState }
