"use client"

import { useState } from "react"
import SiteHeader from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { ContactDialog } from "@/components/contact-dialog"
import { useRouter } from "next/navigation"

export default function TrainingSessionBlogClient() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const router = useRouter()

  const handleViewServices = () => {
    router.push("/business-services")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
        <article className="container mx-auto max-w-4xl px-4 py-12">
          {/* Back Button */}
          <Link href="/blog">
            <Button variant="ghost" className="text-purple-400 hover:text-purple-300 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              What Happens in an AI Fusion Training Session
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                19th November 2025
              </span>
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                Donna Cregan
              </span>
              <span className="px-3 py-1 bg-purple-800/30 text-purple-300 rounded-full text-xs">Training</span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              Every training session I deliver starts long before I walk through the door with a laptop bag. The real
              work happens in the planning — understanding who&apos;s actually going to be in the room, what they&apos;re
              hoping to get out of the day, and what might be holding them back.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              A recent Digital Skills for Beginners workshop, delivered for ERNACT at Eglinton Community Centre, is a
              good example of what that looks like in practice.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Starting With the Right Questions</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Before any session, I sit down with whoever knows the group best — often a community leader, coordinator,
              or in this case, Roksana from ERNACT. She had a clear picture of the participants: an older audience, many
              of whom felt genuinely nervous about technology, and who needed practical, hands-on help rather than a
              lecture about what technology could do.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Together, we worked through what &quot;digital skills&quot; actually meant for this specific group. It
              wasn&apos;t about AI tools or productivity hacks. It was far more grounded than that:
            </p>

            <div className="bg-purple-900/20 border border-purple-600/30 rounded-lg p-6 mb-8">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span>Getting comfortable with their own devices — phones, tablets, whatever they&apos;d brought along</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span>Setting up and using email with confidence</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span>Sharing photos with family and friends, especially those living further afield</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span>
                    A handful of practical, everyday tips that would make technology feel less intimidating and more
                    useful
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-gray-300 leading-relaxed mb-8">
              That upfront conversation shaped everything — the pace of the day, the language used, and even how the room
              was set up.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why Tailoring Matters More Than the Topic List</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              It would have been easy to run a generic &quot;intro to digital skills&quot; session. But a room full of
              confident young professionals and a room full of people picking up a smartphone properly for the first time
              need completely different approaches — different pacing, different reassurance, different starting points.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">For this group, that meant:</p>

            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold mt-1">•</span>
                <span>
                  <strong className="text-white">No assumed knowledge.</strong> Every step was shown, not just
                  explained.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold mt-1">•</span>
                <span>
                  <strong className="text-white">Plenty of one-to-one time,</strong> so nobody was left behind while the
                  group moved on.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold mt-1">•</span>
                <span>
                  <strong className="text-white">Real devices, real accounts, real photos</strong> — not slides and
                  theory.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold mt-1">•</span>
                <span>
                  <strong className="text-white">Space for questions at every stage,</strong> not just saved to the end.
                </span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">On the Day: Workshop Style, Hands-On Support</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              The session itself was run workshop-style rather than as a straight presentation. That meant working around
              the room, helping people individually with their own devices, and letting the pace be set by the
              participants rather than a fixed agenda.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              For some, that meant getting their email set up properly for the first time. For others, it was finally
              being able to send a photo to a grandchild without needing to ask someone else to do it for them. Small
              wins, but the kind that matter enormously in day-to-day life.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              By the end of the day, the goal wasn&apos;t just that everyone had &quot;covered the material&quot; — it was
              that everyone walked away with their specific questions answered, and the confidence to actually use what
              they&apos;d learned once they were back home on their own.
            </p>

            <blockquote className="border-l-4 border-purple-500 bg-navy-900/50 rounded-r-lg p-6 mb-8">
              <p className="text-gray-200 leading-relaxed italic mb-3">
                &quot;It was a pleasure to work with Donna Cregan from AI Fusion. Donna delivered a very engaging and
                supportive Digital Skills for Beginners workshop, and we really appreciated her professional and friendly
                approach.&quot;
              </p>
              <footer className="text-sm text-purple-300 font-medium">— Roksana Oliinyk, ERNACT</footer>
            </blockquote>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why This Approach Works</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Digital skills training only works if it meets people where they are. That&apos;s true whether the audience
              is a business team learning to use AI tools, a school group exploring technology safely, or — as in this
              case — an older community group building the confidence to stay connected with the people they love.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              If you&apos;re organising a group, community programme, or funded initiative and want training that&apos;s
              genuinely built around your participants rather than a one-size-fits-all course, get in touch. I&apos;d be
              glad to talk through what your group needs, the same way Roksana and I did before this session.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-600/30 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Planning Training for Your Group?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              AI Fusion delivers tailored AI and digital skills training for businesses, schools, community groups and
              funded programmes across Donegal and Derry. Let&apos;s talk through what your participants need.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={handleViewServices} size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                View Services
              </Button>
              <Button
                onClick={() => setIsContactOpen(true)}
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-400 hover:bg-purple-600/10"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </article>
      </main>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  )
}
