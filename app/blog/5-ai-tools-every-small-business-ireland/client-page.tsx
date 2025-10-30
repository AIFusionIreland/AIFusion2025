"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ContactDialog } from "@/components/contact-dialog"
import SiteHeader from "@/components/site-header"

export default function BlogPostClient() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const handleViewServices = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
        {/* Blog Post Header */}
        <article className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Back Button */}
            <Link href="/blog">
              <Button variant="ghost" className="text-purple-400 hover:text-purple-300 mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>

            {/* Post Header */}
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  January 20, 2025
                </span>
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  AI Fusion Team
                </span>
                <span className="px-3 py-1 bg-purple-800/30 text-purple-300 rounded-full text-xs">AI Tools</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                5 AI Tools Every Small Business in Ireland Should Know
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                Running a small business in Ireland today means wearing many hats — marketer, customer-service agent,
                accountant, and content creator, all at once. The good news? Artificial Intelligence (AI) can help
                lighten that load.
              </p>
            </header>

            {/* Post Content */}
            <Card className="bg-navy-900/50 border-navy-800">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    AI tools are no longer just for tech companies — they're practical, affordable, and easy to use for
                    every small business owner. Here are five AI tools every small business in Ireland should know about
                    — plus how to get started with them right away.
                  </p>

                  <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                    1. ChatGPT – Your Smart Writing Assistant
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    If you've ever struggled to write social-media captions, blog posts, or marketing emails, ChatGPT by
                    OpenAI can be a game-changer.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    You simply type a question or prompt, and ChatGPT generates text for you — from polished emails to
                    creative ideas. It can even help with product descriptions or customer-service replies.
                  </p>
                  <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 my-6">
                    <p className="text-purple-300 font-semibold mb-2">💡 Tip:</p>
                    <p className="text-gray-300">
                      When using ChatGPT, be specific. For example: "Write a friendly Instagram caption for a local café
                      in Cork announcing new autumn drinks."
                    </p>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    <strong className="text-white">📈 How it helps:</strong> Saves hours on writing tasks and helps you
                    sound professional and consistent online.
                  </p>

                  <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                    2. Canva Magic Studio – Create Beautiful Graphics in Minutes
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Canva is already popular, but its Magic Studio tools now use AI to make design effortless.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    You can describe what you want — "Create a poster for an AI workshop in Dublin" — and Canva will
                    design it instantly. It also removes backgrounds, resizes images, and writes short marketing text.
                  </p>
                  <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 my-6">
                    <p className="text-purple-300 font-semibold mb-2">💡 Tip:</p>
                    <p className="text-gray-300">
                      Use Canva's "Brand Kit" to store your logo and colours so every design stays consistent with your
                      brand identity.
                    </p>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    <strong className="text-white">📈 How it helps:</strong> Makes social-media posts, flyers, and
                    presentations fast and professional — even with no design experience.
                  </p>

                  <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                    3. Google Gemini (formerly Bard) – Research and Idea Generator
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Google Gemini, Google's AI assistant, is perfect for quick research, brainstorming blog ideas, or
                    summarising long articles. It integrates directly with other Google tools like Docs and Sheets,
                    making it easy to use in daily business tasks.
                  </p>
                  <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 my-6">
                    <p className="text-purple-300 font-semibold mb-2">💡 Example prompt:</p>
                    <p className="text-gray-300">
                      "Give me five blog ideas for a hair salon in Galway that wants to promote eco-friendly products."
                    </p>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    <strong className="text-white">📈 How it helps:</strong> Speeds up research and creative planning
                    without needing to open ten browser tabs.
                  </p>

                  <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                    4. Notion AI – Organise and Automate Your Workflow
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    If your to-do list never ends, Notion AI can help. It's a productivity tool that combines notes,
                    project tracking, and AI writing in one dashboard.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    You can use it to plan content, manage clients, or generate meeting summaries automatically. It even
                    helps you rewrite and shorten text to make it more professional.
                  </p>
                  <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 my-6">
                    <p className="text-purple-300 font-semibold mb-2">💡 Tip:</p>
                    <p className="text-gray-300">
                      Create an "AI Content Calendar" template in Notion to plan your weekly marketing posts.
                    </p>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    <strong className="text-white">📈 How it helps:</strong> Keeps your business organised and saves
                    time on repetitive admin tasks.
                  </p>

                  <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                    5. OpusClip – Turn Long Videos into Social Media Gold
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Video content is essential, but editing can be time-consuming. OpusClip uses AI to turn your long
                    videos into short, engaging clips perfect for TikTok, Instagram, or YouTube Shorts.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Just upload your video, and the AI automatically selects highlights, adds captions, and formats it
                    for social platforms.
                  </p>
                  <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 my-6">
                    <p className="text-purple-300 font-semibold mb-2">💡 Example:</p>
                    <p className="text-gray-300">
                      Upload your workshop recording, and OpusClip will create a 30-second promotional video in minutes.
                    </p>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    <strong className="text-white">📈 How it helps:</strong> Makes consistent, high-quality video
                    marketing simple and affordable — ideal for small Irish businesses building a social presence.
                  </p>

                  <h2 className="text-3xl font-bold text-white mt-12 mb-4">
                    Bonus Tip: Combine Tools for Bigger Impact
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Each of these AI tools is powerful on its own — but when used together, they can transform how you
                    work.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Imagine writing your ideas with ChatGPT, designing visuals in Canva, organising them in Notion, and
                    scheduling posts with Gemini research behind them. That's real digital efficiency!
                  </p>

                  <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-600/30 rounded-lg p-8 mt-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Using AI in Your Business?</h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      At AI Fusion, we help Irish business owners learn how to use these tools confidently and safely —
                      no tech jargon, no overwhelm.
                    </p>
                    <p className="text-purple-300 font-semibold mb-4">
                      👉 Join our next "AI for Small Business" workshop or book a 1-hour consultation to discover which
                      AI tools fit your business best.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/business-services" onClick={handleViewServices}>
                        <Button className="bg-purple-600 hover:bg-purple-700 text-white">View Services</Button>
                      </Link>
                      <Button
                        onClick={() => setIsContactOpen(true)}
                        variant="outline"
                        className="border-purple-600 text-purple-300 hover:bg-purple-900/20 bg-transparent"
                      >
                        Book Consultation
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link href="/blog">
                <Button
                  variant="outline"
                  className="border-purple-600 text-purple-300 hover:bg-purple-900/20 bg-transparent"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to All Posts
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  )
}
