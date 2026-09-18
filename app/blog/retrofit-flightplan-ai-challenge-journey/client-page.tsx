"use client"

import { useState } from "react"
import SiteHeader from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { ContactDialog } from "@/components/contact-dialog"
import { useRouter } from "next/navigation"

export default function RetrofitFlightplanBlogClient() {
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
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Retrofit Flightplan – Our AI Challenge Journey
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                18th September 2026
              </span>
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                AI Fusion Team
              </span>
              <span className="px-3 py-1 bg-purple-800/30 text-purple-300 rounded-full text-xs">
                AI Projects
              </span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <figure className="mb-8">
              <img
                src="/images/retrofit-flightplan-team.jpeg"
                alt="The Retrofit Flightplan team holding a TechIreland National AI Challenge 2026 banner in front of an Alpha Innovation backdrop"
                className="w-full rounded-lg border border-purple-600/30"
              />
              <figcaption className="mt-4 text-sm text-gray-400">
                <span className="block mb-2">The Retrofit Flightplan team (left to right):</span>
                <ul className="space-y-1 not-prose">
                  <li>
                    <span className="text-gray-300">Piaras Casey</span> — Auto-Mate Consultants, AI Automation &amp; Web
                    Design Derry (
                    <a
                      href="https://auto-mateconsultants.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      Auto-mate Consultants
                    </a>
                    )
                  </li>
                  <li>
                    <span className="text-gray-300">Ross</span> — Cyber Security Consultant
                  </li>
                  <li>
                    <span className="text-gray-300">Claire Irwin</span> — Irwin Consulting (
                    <a
                      href="https://www.irwinconsulting.ie"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      Irwin Consulting
                    </a>
                    )
                  </li>
                  <li>
                    <span className="text-gray-300">Donna Cregan</span> — AI Fusion, Digital &amp; AI Training Donegal
                    &amp; Derry (
                    <a
                      href="https://www.aifusion.ie"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      AI Fusion
                    </a>
                    )
                  </li>
                  <li>
                    <span className="text-gray-300">Susan McLaughlin</span> — Love a little HOME (
                    <a
                      href="https://www.lovealittle.ie"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      Love A Little
                    </a>
                    )
                  </li>
                  <li>
                    <span className="text-gray-300">Anne Marie McLaughlin</span> — The ii Buncrana, Inishowen Innovation
                    (
                    <a
                      href="https://www.inishowaninnovation.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      inspiring imagination
                    </a>
                    )
                  </li>
                  <li>
                    <span className="text-gray-300">Shane Doherty</span> — Shane Doherty Architecture, Clonmany County
                    Donegal (
                    <a
                      href="https://www.shanedohertyarchitecture.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      Shane Doherty Architecture
                    </a>
                    )
                  </li>
                </ul>
              </figcaption>
            </figure>

            <p className="text-gray-300 leading-relaxed mb-8">
              When we first came together for Challenge 13 of the TechIreland AI Hackathon, we knew we had a big task
              ahead of us: two weeks to take an idea, shape it into something useful, and build an MVP.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              What made this team a little different from the start was how we came together. Each of us had our own
              separate relationship with The Inishowen Innovation Hub in Buncrana (The ii) — some regulars, some
              occasional visitors, some connected through other projects entirely. When Anne Marie put the call out to
              join the TechIreland AI Challenge, we jumped at the chance. Several of us had never actually met before
              that first call. Getting to work alongside people we might never have crossed paths with in day-to-day
              personal or work life turned out to be one of the best parts of the whole experience.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Challenge #13 was a great fit for our team. We wanted to explore how AI could help both BER assessors and
              homeowners navigate the retrofit journey — understanding what work might be needed, what order it could be
              carried out in, what supports might be available, and ultimately helping people make more informed
              decisions about retrofitting their homes.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              The mix of people who answered that call was a big part of why it worked. Industry expertise on retrofit
              came from Claire and Shane, alongside AI consultants, project managers, architects, one-stop-shop owners,
              business owners and homeowners. Different backgrounds, different experience, different day jobs: one shared
              goal!
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Getting Started</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Our first meetings were virtual. We spent time understanding the user needs, discussing the problems
              homeowners and BER assessors face, and mapping out how we could build a solution that would make a
              genuinely complicated process easier to understand.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              We looked at what information and services were already available and considered how we could bring those
              together with the knowledge and experience of our subject matter experts. There was a lot to work out: the
              user journey, the technology, the data, the AI, the front end, the back end and, importantly, the
              boundaries of what an AI tool should and shouldn&apos;t try to do.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Two Weeks. One MVP.</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              It took a huge range of skills to bring Retrofit Flightplan to life. Within just two weeks, we:
            </p>

            <div className="bg-purple-900/20 border border-purple-600/30 rounded-lg p-6 mb-8">
              <ul className="space-y-3 text-gray-300">
                {[
                  "Defined the user needs and problem space",
                  "Designed the solution and user journey",
                  "Built an AI-powered MVP",
                  "Developed the front end and back end",
                  "Incorporated industry knowledge and existing information sources",
                  "Tested the application ourselves",
                  "Developed the presentation",
                  "Created and refined the pitch",
                  "Built the demo",
                  "Rehearsed and timed the presentation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-300 leading-relaxed mb-8">
              And somehow, in amongst all of that, we also managed to have lives outside the hackathon! Some of us were
              able to meet in person at the ii Hub in Buncrana, where Anne Marie provided us with a fantastic space to
              work together — complete with all the facilities we needed, a screen for those joining virtually, and,
              importantly, plenty of coffee to keep us going.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Final Weekend</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Then came the busy weekend. We had seven minutes to present the Retrofit Flightplan, followed by three
              minutes of questions from the judges.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              Every second mattered. We had to align the slides with the speech, make sure the demo fitted into the
              presentation, rehearse the transitions, and anticipate the questions the judges might ask. All of this was
              happening alongside running businesses, family commitments and day jobs, with everyone giving their time
              because they believed in the idea and wanted to see what we could create together.
            </p>

            <figure className="my-8">
              <img
                src="/images/retrofit-flightplan-team-work.jpeg"
                alt="Two members of the Retrofit Flightplan team working together in an office at the North West Regional Development Initiative, viewed through a glass door bearing the Derry City &amp; Strabane District Council branding."
                className="w-full rounded-lg border border-purple-600/30"
              />
              <figcaption className="mt-3 text-center text-sm text-gray-400">
                Team work in action during the final weekend push.
              </figcaption>
            </figure>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Pitch Day</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              On presentation day, we all gathered at the Alpha Hub in the CoLab space at ATU Letterkenny. There were 11
              teams from Donegal and the Northwest, and it was fantastic to see so many people getting involved. The
              atmosphere was brilliant — everyone was excited, enthusiastic and eager to see what could be achieved. We
              were also lucky to have access to facilities where we could do some last-minute preparation (thanks to
              ERNACT) and, naturally, some final behind-the-scenes coding (thanks to Piaras)!
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              Then it was time to watch the other teams present. There were some genuinely amazing and innovative ideas,
              brilliant presentations, and a real sense of just how much can be achieved in two weeks when you bring
  together AI, technology, industry knowledge and the talent that exists across the Northwest.
  </p>

  <figure className="my-8">
  <img
  src="/images/retrofit-flightplan-pitch-day.jpeg"
  alt="A packed room at the Alpha Hub in CoLab, ATU Letterkenny during the National AI Challenge pitch day, with teams seated at tables and a presenter speaking beside screens displaying project visuals."
  className="w-full rounded-lg border border-purple-600/30"
  />
  <figcaption className="mt-3 text-center text-sm text-gray-400">
  Teams gathered at the Alpha Hub in CoLab, ATU Letterkenny for pitch day.
  </figcaption>
  </figure>
  
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Retrofit Flightplan Takes the Stage</h2>

            <figure className="my-8">
              <img
                src="/images/retrofit-flightplan-presentation.jpeg"
                alt="The Retrofit Flightplan team presenting at the National AI Challenge, with a team member reading the pitch beside the ALPHA innovation backdrop and a screen showing the project's retrofit slide, as the audience looks on."
                className="w-full rounded-lg border border-purple-600/30"
              />
              <figcaption className="mt-3 text-center text-sm text-gray-400">
                The Retrofit Flightplan team delivering their pitch to the judges and audience.
              </figcaption>
            </figure>

            <p className="text-gray-300 leading-relaxed mb-6">
              Then it was our turn. The Retrofit Flightplan team gathered together, with Piaras driving the demo and me
              delivering the presentation.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Seven minutes. Slides aligned. Demo ready. And thankfully no technical hitches! The presentation went well
              and was timed to perfection. The judges had some questions for us afterwards, and the whole team
              contributed to answering them. Then came the applause, and we could finally sit back and take a breath.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              Although we weren&apos;t successful in progressing to the next stage in Galway, we weren&apos;t
              disappointed about the project itself. In fact, the experience gave us something more valuable: a
              prototype, a great team, new knowledge and an idea that we believe is worth continuing to explore.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">What&apos;s Next?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Retrofit Flightplan isn&apos;t finished. We plan to continue developing the project, meeting virtually and
              hopefully getting together again at the fantastic facilities on offer at the ii in Buncrana. The hackathon
              may have finished, but the conversations around how AI can support homeowners, BER assessors and the wider
              retrofit industry are only beginning.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              For me, one of the best parts of the whole experience was the people. We brought together AI-curious
              people, AI consultants, project managers, architects, one-stop-shop owners, business owners and
              homeowners — people who, in many cases, started out as strangers connected only by ii Buncrana and a shared
              curiosity about AI.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Different backgrounds. Different experiences. Different perspectives. But one shared goal: to see what we
              could build together. And that&apos;s what made Retrofit Flightplan such a pleasure to work on.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              Two weeks. One ambitious challenge. A lot of AI. A lot of coffee. A lot of teamwork. And a team of people
              who were willing to give their time, knowledge and energy to create something that could potentially make
              the retrofit journey a little easier for everyone.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-600/30 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Have an AI Idea You Want to Explore?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              AI Fusion helps businesses and community groups across Donegal and the Northwest turn AI ideas into
              practical, real-world solutions. Whether you&apos;re curious about a prototype or planning a full project,
              let&apos;s talk.
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
