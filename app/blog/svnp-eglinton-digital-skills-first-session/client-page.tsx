"use client"

import { useState } from "react"
import SiteHeader from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { ContactDialog } from "@/components/contact-dialog"
import { useRouter } from "next/navigation"

export default function SvnpEglintonBlogClient() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const router = useRouter()

  const handleViewServices = () => {
    router.push("/community-ai-training-donegal")
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
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Small Screens, Big Confidence: The Smart Village Network&apos;s First Digital Skills Session in Eglinton
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                25th July 2026
              </span>
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                Donna Cregan
              </span>
              <span className="px-3 py-1 bg-purple-800/30 text-purple-300 rounded-full text-xs">Community</span>
            </div>
          </header>

          {/* Hero Image */}
          <figure className="mb-12">
            <img
              src="/images/svnp-eglinton-session-room.jpg"
              alt="AI Fusion delivering the SVNP Digital Skills for Beginners session to a group of older learners at Eglinton Community Centre"
              className="w-full rounded-lg border border-navy-800"
            />
            <figcaption className="mt-3 text-sm text-gray-400 text-center">
              The Digital Skills for Beginners session under way at Eglinton Community Centre.
            </figcaption>
          </figure>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              When nine retirees settled into the Eglinton Community Centre for a three-hour digital skills workshop,
              none of them arrived expecting a lecture. What they got instead was something the Smart Village Network
              Project (SVNP) is built to deliver: practical, tailored help that meets people exactly where they are with
              the devices they already own.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              This was the first training session delivered under ERNACT and SVNP by AI Fusion, a Donegal-based AI and
              digital skills training provider — and it&apos;s a small but telling example of what &quot;digital
              transformation&quot; actually looks like on the ground.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Meeting people where they are</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              The room was a genuine mix: some attendees on iPhones, others on Android phones and tablets. Rather than
              run a generic slideshow, the session was tailored on the spot to each operating system, walking people
              through the settings and screens actually in front of them.
            </p>

            <figure className="my-8">
              <img
                src="/images/svnp-eglinton-one-to-one-help.jpg"
                alt="Donna Cregan giving one-to-one help to two participants beside a screen showing how to find accessibility settings on iPhone and Android"
                className="w-full rounded-lg border border-navy-800"
              />
              <figcaption className="mt-3 text-sm text-gray-400 text-center">
                Hands-on, one-to-one support — working through accessibility settings on each person&apos;s own device.
              </figcaption>
            </figure>

            <p className="text-gray-300 leading-relaxed mb-4">
              The questions were the ones that matter in daily life, not in a manual:
            </p>

            <div className="bg-purple-900/20 border border-purple-600/30 rounded-lg p-6 mb-8">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span>How do I make the text bigger so I can read it comfortably?</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span>How does email actually work, and how do I use it with confidence?</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span>How do I stay safe online — what should I be wary of, and what&apos;s safe to click?</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-300 leading-relaxed mb-8">
              Nothing here is flashy. But for someone who&apos;s spent years quietly struggling to read a text message
              or unsure whether an email is genuine, it&apos;s the difference between a device sitting in a drawer and one
              that&apos;s actually useful.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Confidence, not just content</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              What stood out most from the session wasn&apos;t the material — it was the attitude in the room. Attendees
              came in willing to have a go, ready to ask questions without embarrassment, and left with something to hold
              onto afterwards: a take-home booklet built around screenshots and step-by-step instructions from their own
              devices, so the learning doesn&apos;t evaporate the moment they walk out the door.
            </p>

            <figure className="my-8">
              <img
                src="/images/svnp-eglinton-participants-sign.jpg"
                alt="Four participants smiling and holding a Smart Village Network Project sign at the Eglinton session"
                className="w-full rounded-lg border border-navy-800"
              />
              <figcaption className="mt-3 text-sm text-gray-400 text-center">
                Participants at the Smart Village Network Project&apos;s first Digital Skills for Beginners session.
              </figcaption>
            </figure>

            <p className="text-gray-300 leading-relaxed mb-8">
              That&apos;s the quiet, unglamorous work of closing the digital divide — not a single dramatic intervention,
              but repeated, patient, device-specific support that respects people&apos;s time and their existing
              confidence.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why this matters for SVNP&apos;s goal</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              The Smart Village Network Project — a €4.9 million cross-border initiative supported by PEACEPLUS and led by
              Derry City and Strabane District Council, alongside partners including ERNACT, Donegal County Council,
              Ulster University and North West Regional College — exists to accelerate digital and green transformation
              across the North West City Region, with a particular focus on bridging the rural-urban divide and improving
              access to digital services for communities who might otherwise be left behind.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              Sessions like Eglinton are where that mission gets tested in the real world. Nine people, one afternoon,
              and a stack of very ordinary, very real questions about text size and email safety — multiplied across
              every hub in the network — is exactly how &quot;inclusive economic growth&quot; and &quot;digital
              transformation&quot; stop being phrases in a funding document and start being something people actually
              experience.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Looking ahead</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              This was AI Fusion&apos;s first delivery under the ERNACT and SVNP partnership, and it won&apos;t be the
              last. If the Eglinton session is anything to go by, the appetite is there — people just need training
              that&apos;s built around them, not around the technology.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-600/30 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Planning Digital Skills Training for Your Community?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              AI Fusion delivers practical AI and digital skills training for small businesses, community groups, and
              schools across Donegal and the Northwest/Derry cross-border region. Let&apos;s talk through what your group
              needs.
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
