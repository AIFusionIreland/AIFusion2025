"use client"

import { useState } from "react"
import SiteHeader from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { ContactDialog } from "@/components/contact-dialog"
import { useRouter } from "next/navigation"

export default function EUAIActBlogClient() {
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
              The EU AI Act: What Every Small Business in Ireland Should Know
            </h1>
            <p className="text-xl text-gray-300 mb-6">(And What You Should Do)</p>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                29th October 2025
              </span>
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                AI Fusion Team
              </span>
              <span className="px-3 py-1 bg-blue-800/30 text-blue-300 rounded-full text-xs">
                Regulation & Compliance
              </span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              Running a small business in Ireland? If you use any form of Artificial Intelligence (AI) — whether for
              marketing, customer-service, automation or decision-making — you'll want to understand the EU AI Act. It's
              changing how AI can be used, and it has implications even for smaller companies.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              Here's a straightforward guide to the Act and what you, as a small business owner, should be doing now.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">What is the EU AI Act?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              The EU AI Act is a regulation adopted by the European Parliament and the European Council which sets out
              rules for the development, deployment and use of AI systems in the European Union.
            </p>

            <div className="bg-purple-900/20 border border-purple-600/30 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Some key points:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span>It became applicable from 1 August 2024.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span>
                    It uses a risk-based approach, meaning different rules apply depending on how "risky" the AI system
                    is.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span>
                    It covers "providers" (those who create or supply AI systems), "deployers" (those who put AI systems
                    into use) and others in the supply chain.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span>
                    It applies not only within the EU but also to companies outside the EU if they supply or deploy AI
                    systems into the EU market.
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why It Matters to Small Businesses in Ireland</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You might think: "I'm small, I don't do deep AI development — does it affect me?" The short answer: Yes —
              it could. Here's why:
            </p>

            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold mt-1">•</span>
                <span>
                  If your business uses AI tools (for example for recruitment, customer-service chatbots, marketing
                  automation, or risk-based decision-making), you may be considered a deployer of an AI system under the
                  Act.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold mt-1">•</span>
                <span>
                  Even if you don't build AI tools, using them may create obligations (such as transparency,
                  documentation, or risk-checks) depending on how they are used.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold mt-1">•</span>
                <span>
                  The Act treats small and medium-sized enterprises (SMEs) with special mention: there are measures
                  designed to support SMEs and reduce burden.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold mt-1">•</span>
                <span>Non-compliance can bring heavy fines and reputational damage.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Key Elements of the Act: What You Should Know</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Here are the major parts of the Act and what they mean in simple terms.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">1. Risk-based categories</h3>
            <p className="text-gray-300 leading-relaxed mb-4">The Act divides AI systems into levels of risk:</p>
            <ul className="space-y-3 text-gray-300 mb-6">
              <li>
                <strong className="text-white">Unacceptable risk:</strong> AI uses that are banned (for example
                manipulation of people, social scoring by governments).
              </li>
              <li>
                <strong className="text-white">High-risk systems:</strong> Systems that affect critical areas (e.g.,
                employment decisions, credit scoring, health/safety). These come with stricter rules.
              </li>
              <li>
                <strong className="text-white">Limited risk:</strong> AI systems with fewer obligations but still some
                requirements (e.g., transparency).
              </li>
              <li>
                <strong className="text-white">Minimal risk:</strong> Most AI tools will fall here and have the fewest
                obligations.
              </li>
            </ul>
            <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-4 mb-8">
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">What it means for you:</strong> Determine if your AI usage falls into
                "high-risk" or another tier. If you're using a simple chatbot for FAQs, you're likely in a lower risk
                tier. If you're using AI to make hiring/credit decisions, you may be in the high-risk category.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">2. Documentation & transparency</h3>
            <p className="text-gray-300 leading-relaxed mb-4">If your business uses an AI system, you may need to:</p>
            <ul className="space-y-3 text-gray-300 mb-6">
              <li>Keep documentation of how the AI system works, what data it uses, how decisions are made.</li>
              <li>
                Be transparent with users or customers if they are interacting with an AI system (for example, telling
                them they're speaking to a bot).
              </li>
              <li>Show how you manage risks (bias, errors, safety).</li>
            </ul>
            <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-4 mb-8">
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">What you should do:</strong> Carry out a checklist: "Which AI tools do we
                use?", "What decisions do they make?", "Do we have documentation or process around them?" Start simple
                if you don't have full systems yet.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              3. Governance, human oversight and risk-management
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              High-risk systems must have more formal governance: you may need to ensure humans oversee notable
              decisions, you have risk mitigation strategies and so on.
            </p>
            <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-4 mb-8">
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Action for your business:</strong> Even for lower-risk tools, set
                internal policy: "Who uses the AI?", "Who reviews its decisions?", "What happens if things go wrong?"
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">4. Support & proportionality for SMEs</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              The Act recognises SMEs (companies with fewer than ~250 employees and turnover under certain thresholds)
              may face more challenges. It provides for simplified documentation/obligations in some cases.
            </p>
            <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-4 mb-8">
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Good news for you:</strong> There may be lighter obligations and support
                (training, forms etc) especially if you're a small business.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">5. Timeline & phased enforcement</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              The Act is being phased in. Some obligations apply now, others later.
            </p>
            <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-4 mb-8">
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">What to watch:</strong> Make sure you know the key dates. For example:
                prohibited practices start from February 2025; high-risk system obligations by August 2027.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What Should a Small Irish Business Do? (Actionable Steps)
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">Here's a practical checklist you can work through.</p>

            <div className="space-y-6 mb-8">
              <div className="bg-purple-900/20 border border-purple-600/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Inventory your AI usage</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• List all AI tools you use (chatbots, automation, decision-making tools, analytics)</li>
                  <li>• For each: what it does, who uses it, what decisions result</li>
                </ul>
              </div>

              <div className="bg-purple-900/20 border border-purple-600/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Classify the risk</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• For each tool: is it making important decisions (hiring, finance, safety)? → high risk</li>
                  <li>• Or is it more basic (help-desk bot, marketing suggestions)? → lower risk</li>
                  <li>• Use the risk categories above to guess your level</li>
                </ul>
              </div>

              <div className="bg-purple-900/20 border border-purple-600/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Ensure transparency & documentation</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Make sure users/customers know when they are interacting with AI, if required</li>
                  <li>• Document how the tool works, what data it uses, what decisions it supports</li>
                  <li>• Have written policy for review and oversight</li>
                </ul>
              </div>

              <div className="bg-purple-900/20 border border-purple-600/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Assign human oversight & governance</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Decide who is responsible for AI tool use within your business</li>
                  <li>• Set how often you review tools, check for errors or biases</li>
                  <li>• Ensure people understand the tool and how it is used</li>
                </ul>
              </div>

              <div className="bg-purple-900/20 border border-purple-600/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Seek support for SME compliance</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Look out for EU funding/grants or national supports for AI and digital compliance</li>
                  <li>• Check if simplified forms for SMEs are available for documentation under the Act</li>
                  <li>• Consider getting expert advice if you use or plan to use higher-risk AI</li>
                </ul>
              </div>

              <div className="bg-purple-900/20 border border-purple-600/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Make it a strategic advantage</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    • Use compliance not just to avoid risk but to build trust: "We use AI ethically and transparently"
                  </li>
                  <li>
                    • Include this in your marketing ("transparent AI assistant", "ethical use of AI in business")
                  </li>
                  <li>• Stay ahead: start early so you're ready when enforcement tightens</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Common Questions & Quick Answers</h2>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Q: I only use ChatGPT for ideas and writing—does the Act apply?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  A: Possibly—but likely you're in a lower risk category. However, you should still document usage,
                  check transparency (if you show it to clients) and ensure your tool use is compliant.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">Q: What if I build my own AI system?</h3>
                <p className="text-gray-300 leading-relaxed">
                  A: Then you may be a "provider" under the Act, and your obligations will increase (depending on risk
                  category). You'll need more formal processes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">Q: What are the penalties for not complying?</h3>
                <p className="text-gray-300 leading-relaxed">
                  A: They can be significant for serious breaches — up to millions of euros or a percentage of turnover
                  for large companies. For SMEs the burden may be lighter, but non-compliance still poses risk of
                  reputation damage and regulatory action.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why You Should Care (Beyond Compliance)</h2>

            <ul className="space-y-4 text-gray-300 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-white">Trust & reputation:</strong> Businesses that use AI in a transparent,
                  ethical way build trust with customers.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-white">Competitive advantage:</strong> By getting ahead of regulation, you
                  show you're professional and forward-thinking.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-white">Opportunity for innovation:</strong> The Act also supports innovation
                  (regulatory sandboxes, training) especially for SMEs.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-white">Risk reduction:</strong> Avoid legal, financial, operational risks by
                  being prepared now.
                </div>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Final Thoughts</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              The EU AI Act is a major step in regulating how AI can be used — but it isn't only a burden. For Irish
              small businesses, it's an opportunity to use AI responsibly and to stand out by doing so.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              Start with the basics: know what AI tools you use, classify their risk, set simple governance, and take
              advantage of SME-friendly support. Get ahead now, and you'll be set for the future.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-600/30 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Need Help with AI Compliance?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              AI Fusion can help your business understand and implement AI compliance strategies. From risk assessment
              to documentation and governance, we'll guide you through the EU AI Act requirements.
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
                Book Consultation
              </Button>
            </div>
          </div>
        </article>
      </main>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  )
}
