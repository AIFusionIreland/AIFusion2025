"use client"
import Link from "next/link"
import type React from "react"

import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Users,
  Monitor,
  User,
  GraduationCap,
  Target,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Zap,
  Star,
} from "lucide-react"
import AIFusionTextLogo from "@/components/ai-fusion-text-logo"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

// Import the SiteHeader component
import SiteHeader from "@/components/site-header"

export default function AITrainingPage() {
  const [isEnrollFormOpen, setIsEnrollFormOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  // Ensure page starts at top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleEnrollSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const subject = encodeURIComponent("AI Training Enrollment Request")
      const body = encodeURIComponent(`
New AI Training Enrollment Request

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
This enrollment request was submitted through the AI Fusion AI Training page.
    `)

      window.open(`mailto:info@aifusion.ie?subject=${subject}&body=${body}`, "_blank")

      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })

      // Close form after successful submission
      setTimeout(() => {
        setIsEnrollFormOpen(false)
        setSubmitStatus("idle")
      }, 2000)
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-navy-975">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-navy-900 via-navy-950 to-purple-950">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="text-center space-y-6">
              <div className="flex justify-center mb-8">
                <Image
                  src="/images/ai-fusion-classroom-training.jpg"
                  alt="AI Fusion Classroom Training"
                  width={400}
                  height={300}
                  className="rounded-2xl shadow-lg max-w-md mx-auto aspect-[4/3] object-cover"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white">AI Training & Courses</h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Learn practical AI skills with our hands-on training programs designed for all skill levels.
              </p>
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="py-24 bg-navy-975">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Who It's For</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Our AI training is designed for anyone looking to harness the power of artificial intelligence,
                regardless of their background or experience level.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Beginners */}
              <div className="bg-navy-900 p-8 rounded-2xl shadow-lg border border-navy-800 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-green-200 rounded-2xl mb-6">
                  <User className="h-8 w-8 text-green-800" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Beginners</h3>
                <p className="text-gray-200 mb-6">
                  New to AI? Perfect! Start your journey with our beginner-friendly courses that break down complex
                  concepts into easy-to-understand lessons.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    No prior experience needed
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Step-by-step guidance
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Hands-on practice
                  </li>
                </ul>
              </div>

              {/* Hobbyists */}
              <div className="bg-navy-900 p-8 rounded-2xl shadow-lg border border-navy-800 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-200 rounded-2xl mb-6">
                  <Lightbulb className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Hobbyists</h3>
                <p className="text-gray-200 mb-6">
                  Explore AI as a creative outlet and personal interest. Learn how to integrate AI into your hobbies and
                  personal projects.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                    Creative AI applications
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                    Personal project ideas
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                    Community support
                  </li>
                </ul>
              </div>

              {/* Professionals */}
              <div className="bg-navy-900 p-8 rounded-2xl shadow-lg border border-navy-800 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-200 rounded-2xl mb-6">
                  <Target className="h-8 w-8 text-purple-800" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Professionals</h3>
                <p className="text-gray-200 mb-6">
                  Enhance your career with AI skills. Learn how to integrate AI tools into your workflow to increase
                  productivity and efficiency.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                    Career advancement
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                    Workflow optimization
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                    Industry applications
                  </li>
                </ul>
              </div>

              {/* Students */}
              <div className="bg-navy-900 p-8 rounded-2xl shadow-lg border border-navy-800 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-cyan-200 rounded-2xl mb-6">
                  <GraduationCap className="h-8 w-8 text-cyan-800" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Students</h3>
                <p className="text-gray-200 mb-6">
                  Get ahead in your studies and future career. Learn AI skills that will give you a competitive edge in
                  any field.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
                    Academic support
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
                    Future-ready skills
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
                    Student-friendly pricing
                  </li>
                </ul>
              </div>

              {/* Schools */}
              <div className="bg-navy-900 p-8 rounded-2xl shadow-lg border border-navy-800 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-yellow-200 rounded-2xl mb-6">
                  <Users className="h-8 w-8 text-yellow-800" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Schools</h3>
                <p className="text-gray-200 mb-6">
                  Bring AI education to your institution. We offer comprehensive programs for educators and students at
                  all levels.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />
                    Curriculum integration
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />
                    Teacher training
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />
                    Group discounts
                  </li>
                </ul>
              </div>

              {/* Seeking Practical Skills */}
              <div className="bg-navy-900 p-8 rounded-2xl shadow-lg border border-navy-800 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-orange-200 rounded-2xl mb-6">
                  <Zap className="h-8 w-8 text-orange-800" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Seeking Practical AI Skills</h3>
                <p className="text-gray-200 mb-6">
                  Focus on real-world applications. Learn AI skills that you can immediately apply to solve problems and
                  improve your daily life.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-orange-400 mr-2" />
                    Real-world applications
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-orange-400 mr-2" />
                    Immediate implementation
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-orange-400 mr-2" />
                    Problem-solving focus
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Training Formats Section */}
        <section className="py-24 bg-navy-950">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Training Formats</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Choose the learning format that works best for your schedule and learning style.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* In-Person Workshops */}
              <div className="bg-navy-900 p-8 rounded-2xl shadow-lg border border-navy-800 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-green-200 rounded-2xl mb-6">
                  <Users className="h-8 w-8 text-green-800" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">In-Person Workshops</h3>
                <p className="text-gray-200 mb-6">
                  Join us for hands-on, interactive workshops where you can learn directly from our experts and
                  collaborate with fellow learners.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">Face-to-face interaction with instructors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">Collaborative learning environment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">Immediate feedback and support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">Networking opportunities</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/upcoming-courses"
                    className="inline-flex items-center text-green-600 hover:text-green-500 font-medium transition-colors"
                  >
                    View Upcoming Courses
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <p className="text-green-800 font-medium">
                    Perfect for: Hands-on learners who thrive in group settings
                  </p>
                </div>
              </div>

              {/* Live Online Sessions */}
              <div className="bg-navy-900 p-8 rounded-2xl shadow-lg border border-purple-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">POPULAR</span>
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-purple-200 rounded-2xl mb-6">
                  <Monitor className="h-8 w-8 text-purple-800" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Live Online Sessions</h3>
                <p className="text-gray-200 mb-6">
                  Participate in real-time online classes from the comfort of your home. Get the benefits of live
                  instruction with the convenience of remote learning.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">Real-time interaction with instructors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">Learn from anywhere</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">Interactive Q&A sessions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">Recorded sessions for review</span>
                  </li>
                </ul>
                <div className="bg-purple-100 p-4 rounded-lg">
                  <p className="text-purple-800 font-medium">Perfect for: Busy professionals and remote learners</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What They Gain Section */}
        <section className="py-24 bg-navy-975">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">What You'll Gain</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Our comprehensive AI training program will equip you with practical skills you can use immediately.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Master ChatGPT Prompting */}
              <div className="bg-navy-900 p-8 rounded-2xl shadow-lg border border-navy-800 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-green-200 rounded-2xl mb-6">
                  <BookOpen className="h-8 w-8 text-green-800" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Master ChatGPT Prompting</h3>
                <p className="text-gray-200 mb-6">
                  Learn the art and science of crafting effective prompts to get the best results from ChatGPT and other
                  AI language models.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">Prompt engineering techniques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">Context optimization strategies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">Advanced conversation techniques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">Industry-specific applications</span>
                  </li>
                </ul>
              </div>

              {/* Use AI in Everyday Tools */}
              <div className="bg-navy-900 p-8 rounded-2xl shadow-lg border border-navy-800 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-200 rounded-2xl mb-6">
                  <Zap className="h-8 w-8 text-purple-800" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Use AI in Everyday Tools</h3>
                <p className="text-gray-200 mb-6">
                  Discover how to integrate AI into your daily workflow using tools for writing, marketing, design, and
                  productivity.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">AI-powered writing assistance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">Marketing automation with AI</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">Design and creative tools</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">Productivity optimization</span>
                  </li>
                </ul>
              </div>

              {/* Become Comfortable with AI Tools */}
              <div className="bg-navy-900 p-8 rounded-2xl shadow-lg border border-navy-800 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-200 rounded-2xl mb-6">
                  <Star className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Become Comfortable with AI Tools</h3>
                <p className="text-gray-200 mb-6">
                  Build confidence through weekly sessions that gradually introduce you to various AI tools and
                  platforms.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">Weekly hands-on practice</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">Progressive skill building</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">Confidence building exercises</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">Ongoing support and guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Enrollment Form Dialog */}
        <Dialog open={isEnrollFormOpen} onOpenChange={setIsEnrollFormOpen}>
          <DialogContent className="sm:max-w-[500px] bg-navy-900 border-navy-800 max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-medium text-white">Enroll in AI Training</h2>
              </div>
              <form onSubmit={handleEnrollSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-200">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 bg-navy-800 border-navy-700 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-200">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 bg-navy-800 border-navy-700 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-200">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="mt-1 bg-navy-800 border-navy-700 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400 resize-none"
                      placeholder="Tell us about your AI learning goals, preferred training format, or any questions you have..."
                    />
                  </div>
                </div>

                {submitStatus === "success" && (
                  <div className="bg-green-900/50 border border-green-700 rounded-lg p-4">
                    <p className="text-green-200 text-sm">
                      ✓ Enrollment request submitted successfully! We'll contact you soon.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-900/50 border border-red-700 rounded-lg p-4">
                    <p className="text-red-200 text-sm">
                      ✗ There was an error submitting your request. Please try again.
                    </p>
                  </div>
                )}

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsEnrollFormOpen(false)}
                    className="flex-1 border-navy-700 text-gray-200 hover:text-white hover:bg-navy-800"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email}
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Enrollment"}
                  </Button>
                </div>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </main>

      {/* Footer */}
      <footer className="border-t border-navy-800 bg-navy-975 py-12">
        <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <AIFusionTextLogo className="h-12" showText={true} />
          <p className="text-sm text-gray-300">© {new Date().getFullYear()} AI Fusion. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-navy-975 rounded-md px-2 py-1"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-navy-975 rounded-md px-2 py-1"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
