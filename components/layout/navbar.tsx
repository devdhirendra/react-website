"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Code2 } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const industries = [
  { name: "Healthcare", href: "/industries/healthcare", description: "Digital health solutions and medical software" },
  {
    name: "Trading & Finance",
    href: "/industries/trading",
    description: "High-frequency trading and financial analytics",
  },
  { name: "Insurance", href: "/industries/insurance", description: "Claims processing and risk assessment tools" },
  { name: "Investment", href: "/industries/investment", description: "Portfolio management and investment analytics" },
]

const services = [
  {
    name: "Custom Software Development",
    href: "/services/development",
    description: "Tailored solutions for your business needs",
  },
  {
    name: "Process Automation",
    href: "/services/automation",
    description: "Streamline operations with intelligent automation",
  },
  { name: "Data Analytics", href: "/services/analytics", description: "Transform data into actionable insights" },
  { name: "Cloud Solutions", href: "/services/cloud", description: "Scalable cloud infrastructure and migration" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              NexaFlow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`px-4 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                      pathname === "/about" ? "text-blue-600" : "text-gray-700"
                    }`}
                  >
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[500px] gap-3 p-4">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{service.name}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{service.description}</p>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">Industries</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[500px] gap-3 p-4">
                    {industries.map((industry) => (
                      <Link
                        key={industry.name}
                        href={industry.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{industry.name}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {industry.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/solutions" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`px-4 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                      pathname === "/solutions" ? "text-blue-600" : "text-gray-700"
                    }`}
                  >
                    Solutions
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/portfolio" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`px-4 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                      pathname === "/portfolio" ? "text-blue-600" : "text-gray-700"
                    }`}
                  >
                    Portfolio
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/auth/login">
              <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                Sign In
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="/about" className="text-lg font-medium hover:text-blue-600 transition-colors">
                  About
                </Link>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Services</h3>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block pl-4 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Industries</h3>
                  {industries.map((industry) => (
                    <Link
                      key={industry.name}
                      href={industry.href}
                      className="block pl-4 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
                <Link href="/solutions" className="text-lg font-medium hover:text-blue-600 transition-colors">
                  Solutions
                </Link>
                <Link href="/portfolio" className="text-lg font-medium hover:text-blue-600 transition-colors">
                  Portfolio
                </Link>
                <div className="pt-4 space-y-2">
                  <Link href="/auth/login" className="block">
                    <Button variant="outline" className="w-full bg-transparent">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/contact" className="block">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500">Get Started</Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
