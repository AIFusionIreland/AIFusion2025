"use client"

import SiteHeader from "@/components/site-header"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ExternalLink,
  Smartphone,
  Globe,
  Sparkles,
  ArrowRight,
  MapPin,
  MessageSquare,
  BarChart3,
  Users,
  Zap,
  Code,
} from "lucide-react"
import ContactDialog from "@/components/contact-dialog"

interface AppProject {
  title: string
  description: string
  longDescription: string
  category: string
  tags: string[]
  icon: React.ReactNode
  color: string
  features: string[]
  status: "live" | "beta" | "coming-soon"
  link?: string
}

const apps: AppProject[] = [
  {
    title: "Locafy",
    description: "AI-powered local business discovery platform",
    longDescription:
      "Locafy helps users discover and connect with local businesses in Ireland. Powered by AI to provide personalized recommendations and seamless business-consumer connections.",
    category: "Business Discovery",
    tags: ["AI", "Local Business", "Discovery", "Ireland"],
    icon: <MapPin className="h-6 w-6 text-white" />,
    color: "bg-purple-600",
    features: [
      "AI-powered business recommendations",
      "Local business directory",
      "Consumer-business matching",
      "Review and rating system",
    ],
    status: "live",
    link: "/#locafy",
  },
  {
    title: "AI Training Portal",
    description: "Interactive AI education and certification platform",
    longDescription:
      "A comprehensive training platform designed to help businesses and individuals learn AI tools and techniques through hands-on courses and certifications.",
    category: "Education",
    tags: ["Training", "AI Courses", "Certification", "Learning"],
    icon: <Users className="h-6 w-6 text-white" />,
    color: "bg-blue-600",
    features: [
      "Interactive AI courses",
      "Hands-on workshops",
      "Progress tracking",
      "Certification programs",
    ],
    status: "live",
    link: "/ai-training",
  },
  {
    title: "Business Analytics Dashboard",
    description: "Real-time insights for business performance",
    longDescription:
      "An AI-powered analytics dashboard that helps businesses track key metrics, understand customer behavior, and make data-driven decisions.",
    category: "Analytics",
    tags: ["Analytics", "Dashboard", "AI Insights", "Business Intelligence"],
    icon: <BarChart3 className="h-6 w-6 text-white" />,
    color: "bg-green-600",
    features: [
      "Real-time data visualization",
      "AI-powered insights",
      "Custom report generation",
      "Performance tracking",
    ],
    status: "beta",
  },
  {
    title: "AI Chat Assistant",
    description: "Custom chatbot solutions for businesses",
    longDescription:
      "Intelligent chatbot solutions tailored to your business needs. Automate customer support, lead generation, and internal communications with AI.",
    category: "Automation",
    tags: ["Chatbot", "Customer Support", "AI", "Automation"],
    icon: <MessageSquare className="h-6 w-6 text-white" />,
    color: "bg-orange-600",
    features: [
      "Natural language processing",
      "Multi-channel support",
      "Custom training on your data",
      "24/7 availability",
    ],
    status: "live",
  },
  {
    title: "Workflow Automation Suite",
    description: "Streamline operations with AI-powered automation",
    longDescription:
      "A comprehensive suite of automation tools that help businesses eliminate repetitive tasks, improve efficiency, and reduce operational costs.",
    category: "Automation",
    tags: ["Workflow", "Automation", "Efficiency", "Integration"],
    icon: <Zap className="h-6 w-6 text-white" />,
    color: "bg-cyan-600",
    features: [
      "Process automation",
      "Integration with existing tools",
      "Custom workflow builder",
      "Performance analytics",
    ],
    status: "beta",
  },
  {
    title: "Custom App Development",
    description: "Bespoke AI-powered applications",
    longDescription:
      "We build custom applications tailored to your specific business needs. From concept to deployment, we create solutions that leverage the power of AI.",
    category: "Development",
    tags: ["Custom Development", "AI Apps", "Web", "Mobile"],
    icon: <Code className="h-6 w-6 text-white" />,
    color: "bg-pink-600",
    features: [
      "Full-stack development",
      "AI integration",
      "Mobile-responsive design",
      "Ongoing support",
    ],
    status: "live",
  },
]

function StatusBadge({ status }: { status: AppProject["status"] }) {
  const variants = {
    live: "bg-green-500/20 text-green-400 border-green-500/30",
    beta: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    "coming-soon": "bg-gray-500/20 text-gray-400 border-gray-500/30",
  }

  const labels = {
    live: "Live",
    beta: "Beta",
    "coming-soon": "Coming Soon",
  }

  return (
    <Badge variant="outline" className={variants[status]}>
      {labels[status]}
    </Badge>
  )
}

export default function AppsPage() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <div className="min-h-screen bg-navy-950">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy-900 via-navy-950 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Apps</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover the innovative applications AI Fusion has built to help businesses thrive in the digital age.
              From local business discovery to AI-powered automation, explore our portfolio of solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Globe className="h-4 w-4 mr-2" />
                Web Applications
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Smartphone className="h-4 w-4 mr-2" />
                Mobile Solutions
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Sparkles className="h-4 w-4 mr-2" />
                AI-Powered
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Applications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each application is built with cutting-edge technology and designed to solve real business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app) => (
              <Card
                key={app.title}
                className="bg-navy-900 border-navy-700 hover:border-purple-500 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 ${app.color} rounded-xl flex items-center justify-center`}>
                      {app.icon}
                    </div>
                    <StatusBadge status={app.status} />
                  </div>
                  <CardTitle className="text-white text-xl group-hover:text-purple-400 transition-colors">
                    {app.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">{app.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{app.description}</p>
                  <p className="text-gray-400 text-sm mb-6">{app.longDescription}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {app.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-navy-800 text-gray-300 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2 mb-6">
                    <p className="text-sm font-medium text-gray-300">Key Features:</p>
                    <ul className="space-y-1">
                      {app.features.map((feature) => (
                        <li key={feature} className="text-sm text-gray-400 flex items-center">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {app.link && (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
                    >
                      <a href={app.link}>
                        Learn More
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Development CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Have an App Idea?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We specialize in building custom AI-powered applications tailored to your specific business needs. From
            concept to deployment, our team can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => setIsContactOpen(true)}
            >
              Discuss Your Project
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-navy-600 text-gray-300 hover:bg-navy-800"
            >
              <a href="/business-services">View Our Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built With Modern Technology</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our applications are built using cutting-edge technologies to ensure performance, scalability, and
              security.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "React / Next.js", desc: "Frontend Framework" },
              { name: "TypeScript", desc: "Type-Safe Code" },
              { name: "Node.js", desc: "Backend Runtime" },
              { name: "AI / ML", desc: "Machine Learning" },
              { name: "PostgreSQL", desc: "Database" },
              { name: "Vercel", desc: "Cloud Platform" },
              { name: "Tailwind CSS", desc: "Styling" },
              { name: "OpenAI / GPT", desc: "AI Integration" },
            ].map((tech) => (
              <Card key={tech.name} className="bg-navy-900 border-navy-700 text-center">
                <CardContent className="p-6">
                  <p className="text-white font-semibold mb-1">{tech.name}</p>
                  <p className="text-gray-400 text-sm">{tech.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-navy-900 to-navy-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Something Great?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you need a custom application or want to explore our existing solutions, we&apos;re here to help
            your business succeed with AI.
          </p>
          <Button
            size="lg"
            className="bg-white text-navy-900 hover:bg-gray-100"
            onClick={() => setIsContactOpen(true)}
          >
            Get In Touch
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Contact Dialog */}
      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </div>
  )
}
