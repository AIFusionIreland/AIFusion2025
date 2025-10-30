import type { Metadata } from "next"
import SiteHeader from "@/components/site-header"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI Fusion Blog | AI Insights, Tips & News for Ireland",
  description:
    "Stay updated with the latest AI trends, practical tips, and insights from AI Fusion. Learn how AI is transforming businesses and individuals across Ireland.",
  keywords: [
    "AI blog Ireland",
    "artificial intelligence news",
    "AI tips",
    "AI training insights",
    "AI business Ireland",
    "AI Fusion blog",
  ],
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "5 AI Tools Every Small Business in Ireland Should Know",
      excerpt:
        "Running a small business in Ireland means wearing many hats. Discover five practical, affordable AI tools that can help lighten your load — from ChatGPT to OpusClip.",
      date: "2025-10-29",
      author: "AI Fusion Team",
      category: "AI Tools",
      slug: "5-ai-tools-every-small-business-ireland",
    },
    {
      id: 2,
      title: "The EU AI Act: What Every Small Business in Ireland Should Know",
      excerpt:
        "Running a small business in Ireland? If you use any form of AI, you'll want to understand the EU AI Act. Here's a straightforward guide to the Act and what you should be doing now.",
      date: "2025-10-29",
      author: "AI Fusion Team",
      category: "Regulation & Compliance",
      slug: "eu-ai-act-ireland-small-business",
    },
  ]

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">AI Fusion Blog</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Insights, tips, and news about AI training, business transformation, and the future of artificial
              intelligence in Ireland.
            </p>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  className="bg-navy-900/50 border-navy-800 hover:border-purple-600/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString("en-IE", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </span>
                      <span className="px-3 py-1 bg-purple-800/30 text-purple-300 rounded-full text-xs">
                        {post.category}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-3 hover:text-purple-400 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-300 leading-relaxed mb-4">{post.excerpt}</p>

                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        variant="ghost"
                        className="text-purple-400 hover:text-purple-300 hover:bg-purple-800/20 p-0 h-auto"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Coming Soon Message */}
            <div className="mt-12 text-center">
              <Card className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-600/30">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">More Content Coming Soon!</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We're working on bringing you more valuable insights about AI, business transformation, and
                    practical tips for leveraging artificial intelligence. Check back regularly for new articles and
                    updates.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
