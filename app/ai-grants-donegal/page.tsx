import Link from "next/link"
import SiteHeader from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, CheckCircle, MapPin } from "lucide-react"

const faqs = [
  {
    question: "Can I get funding for AI training in Donegal?",
    answer:
      "Yes, usually through the Local Enterprise Office route: Digital for Business, which is free, followed by the Grow Digital Voucher, which funds 50% of eligible costs up to a maximum grant of €5,000. Grow Digital covers software and training or IT configuration.",
    schemaAnswer:
      "Yes, usually through the Local Enterprise Office route: Digital for Business, which is free, followed by the Grow Digital Voucher, which funds 50% of eligible costs up to a maximum grant of €5,000. Grow Digital covers software and training or IT configuration.",
  },
  {
    question: "Do I have to be a Local Enterprise Office client?",
    answer:
      "For the LEO route, yes — and you must not be a current client of Enterprise Ireland or IDA Ireland. If you are an Enterprise Ireland client, the AI Discovery and Digital Discovery grants apply instead.",
    schemaAnswer:
      "For the LEO route, yes, and you must not be a current client of Enterprise Ireland or IDA Ireland. If you are an Enterprise Ireland client, the AI Discovery and Digital Discovery grants apply instead.",
  },
  {
    question: "Can a grant pay for your training, or only for software?",
    answer:
      "Grow Digital explicitly covers software and training/IT configuration, where it supports the digitalisation set out in your Digital for Business report. That's why the sequence matters.",
    schemaAnswer:
      "Grow Digital explicitly covers software and training or IT configuration, where it supports the digitalisation set out in your Digital for Business report. That is why the sequence matters.",
  },
  {
    question: "I'm a sole trader — is anything available to me?",
    schemaQuestion: "I'm a sole trader, is anything available to me?",
    answer:
      "In many cases yes. PAYG customers are within scope of the Grow Digital Voucher. Skillnet's training grant is not open to individuals, but the LEO route often is.",
    schemaAnswer:
      "In many cases yes. PAYG customers are within scope of the Grow Digital Voucher. Skillnet's training grant is not open to individuals, but the LEO route often is.",
  },
  {
    question: "I'm based in Derry or Northern Ireland — what can I get?",
    schemaQuestion: "I'm based in Derry or Northern Ireland, what can I get?",
    answer:
      "InterTradeIreland runs fully funded programmes for SMEs across the island, including digital and innovation mentoring. Cross-border businesses in Donegal and Derry often have access to more routes, not fewer.",
    schemaAnswer:
      "InterTradeIreland runs fully funded programmes for SMEs across the island, including digital and innovation mentoring. Cross-border businesses in Donegal and Derry often have access to more routes, not fewer.",
  },
  {
    question: "How long does it take?",
    answer:
      "Digital for Business takes a matter of weeks, depending on your Local Enterprise Office's schedule. A Grow Digital application comes after the report is complete. We'd rather plan around realistic timing than promise a date that slips.",
    schemaAnswer:
      "Digital for Business takes a matter of weeks, depending on your Local Enterprise Office's schedule. A Grow Digital application comes after the report is complete.",
  },
  {
    question: "Is AI Fusion a grant agency?",
    answer:
      "No. We're an AI training and consultancy business. We help you prepare your application and we deliver the funded work — but all decisions on eligibility and approval rest with the funding bodies.",
    schemaAnswer:
      "No. AI Fusion is an AI training and consultancy business. We help you prepare your application and we deliver the funded work, but all decisions on eligibility and approval rest with the funding bodies.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.schemaQuestion ?? faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.schemaAnswer },
  })),
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://aifusion.ie" },
    {
      "@type": "ListItem",
      position: 2,
      name: "AI Grants Donegal & Derry",
      item: "https://aifusion.ie/ai-grants-donegal",
    },
  ],
}

const workedExample = [
  { step: "1", what: "Complete Digital for Business", effect: "Free. Produces the report naming AI as an opportunity" },
  { step: "2", what: "Apply for Grow Digital Voucher", effect: "Grant of 50% of eligible costs, up to €5,000" },
  { step: "3", what: "We deliver training and configuration", effect: "Client pays the remaining 50%" },
  {
    step: "4",
    what: "Claim the Skillnet training grant, if eligible",
    effect: "€204.30 × training days × staff, towards salary",
  },
  { step: "Net", what: "Illustrative only", effect: "Often a small fraction of the headline price" },
]

const caveats = [
  "Grants are claimed by you, not by us. We help you prepare and deliver the work; the application and the claim are yours.",
  "Approval is never guaranteed. Eligibility is decided by the Local Enterprise Office, Enterprise Ireland or Skillnet Ireland — not by AI Fusion.",
  "We're not a grant agency. We're an AI training and consultancy business that knows how these schemes work.",
  "Amounts and terms change. Schemes open, pause and close. We'll check the current position with you before you rely on anything on this page.",
  "We'll tell you if you're not eligible. If the funded route isn't open to you, we'll say so, and we'll show you the lowest-cost way to start anyway.",
]

const sectionHeading = "text-3xl md:text-4xl font-bold text-white mb-6 text-balance"
const bodyText = "text-lg text-gray-300 leading-relaxed"
const cardClass = "bg-navy-900 border-navy-700 hover:border-purple-500 transition-colors h-full"
const eligibilityNote = "text-sm text-purple-300 mt-4"

function GrantCard({
  title,
  source,
  value,
  children,
}: {
  title: string
  source: string
  value: string
  children: React.ReactNode
}) {
  return (
    <Card className={cardClass}>
      <CardHeader>
        <CardTitle className="text-white text-xl text-balance">
          <h3>{title}</h3>
        </CardTitle>
        <div className="flex flex-wrap gap-2 pt-2">
          <Badge variant="secondary">{source}</Badge>
        </div>
        <p className="text-purple-200 font-semibold pt-2">{value}</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 text-gray-300 leading-relaxed">
        {children}
        <p className={eligibilityNote}>Subject to eligibility and approval by the funding body.</p>
      </CardContent>
    </Card>
  )
}

export default function AiGrantsDonegalPage() {
  return (
    <div className="flex flex-col min-h-screen bg-navy-975">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-purple-950">
          <div className="container px-4 md:px-6 max-w-5xl relative z-10">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="inline-flex items-center gap-2 bg-purple-900/40 border border-purple-500/30 rounded-full px-4 py-2">
                <MapPin className="w-4 h-4 text-purple-300" />
                <span className="text-purple-200 text-sm font-medium">Funding routes · Donegal · Derry</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">
                AI grants for Donegal &amp; Derry businesses — and how to get your AI training funded
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl text-pretty">
                Most of the businesses we work with don&apos;t pay the full price. Donegal and Derry SMEs can access
                four different funding routes for AI training and implementation, and the right one depends on your
                size, your location, and whether you&apos;re already an Enterprise Ireland client.
              </p>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl text-pretty">
                We&apos;ll tell you honestly which one you qualify for, and what&apos;s involved in getting it. No
                jargon, no grant-speak.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 h-auto py-4 whitespace-normal"
                >
                  <Link href="/contact">
                    Check what your project would cost after funding
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-purple-500 text-purple-300 hover:bg-purple-500/10 bg-transparent px-8 h-auto py-4"
                >
                  <Link href="/contact">
                    <Calendar className="w-4 h-4" />
                    Book a free 15-minute call
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility router */}
        <section className="py-20 md:py-24">
          <div className="container px-4 md:px-6 max-w-4xl">
            <h2 className={sectionHeading}>Which funding route is yours? Answer three questions</h2>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold text-white text-balance">
                  1. Are you currently a client of Enterprise Ireland or IDA Ireland?
                </h3>
                <p className={bodyText}>
                  <strong className="text-white">If yes,</strong> you&apos;re on the Enterprise Ireland route — see AI
                  Discovery and Digital Discovery below.
                </p>
                <p className={bodyText}>
                  <strong className="text-white">If no,</strong> you&apos;re likely on the LEO route. Go to question
                  2.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold text-white text-balance">
                  2. Do you employ between 1 and 50 people, and have you been trading and registered for at least 6
                  months?
                </h3>
                <p className={bodyText}>
                  <strong className="text-white">If yes,</strong> the LEO route is open to you: Digital for Business
                  (free), then the Grow Digital Voucher (50% funded).
                </p>
                <p className={bodyText}>
                  If you&apos;re a sole trader or just starting out, the LEO route can still be open to you in many
                  cases — PAYG customers are within scope of the Grow Digital Voucher. Talk to us or to your Local
                  Enterprise Office.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold text-white text-balance">
                  3. Are you training a team of staff, and are you based in the Republic of Ireland with 2–250
                  employees?
                </h3>
                <p className={bodyText}>
                  <strong className="text-white">If yes,</strong> you can stack the Skillnet Upskill SME Training
                  Grant on top of the LEO route, which contributes €204.30 per training day per employee towards
                  salary costs.
                </p>
                <p className={bodyText}>
                  Trading across the border, or based in Derry or Northern Ireland? See the InterTradeIreland section
                  below — cross-border businesses often have access to more routes, not fewer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pathway */}
        <section className="py-20 md:py-24 bg-navy-900">
          <div className="container px-4 md:px-6 max-w-5xl">
            <h2 className={sectionHeading}>The funded pathway, end to end</h2>
            <p className={`${bodyText} max-w-4xl mb-10`}>
              The short version: Digital for Business is free and comes first. It produces the report that unlocks the
              Grow Digital Voucher, which funds 50% of eligible costs up to €5,000. That grant covers software and the
              training and IT configuration to get it working — which is exactly what we do.
            </p>
            <figure className="flex flex-col gap-3">
              <img
                src="/funded-routes.png"
                alt="Diagram showing three funded routes into AI Fusion's work: the LEO route from Digital for Business to Grow Digital Voucher, the Enterprise Ireland AI Discovery route, and the Skillnet Upskill SME Training Grant"
                width={1376}
                height={768}
                className="w-full h-auto rounded-xl border border-navy-700"
              />
              <figcaption className="text-sm text-gray-400 text-center">
                Three routes into funded AI work. Eligibility and approval are decided by the funding body, not by AI
                Fusion.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Six supports */}
        <section className="py-20 md:py-24">
          <div className="container px-4 md:px-6 max-w-6xl">
            <h2 className={sectionHeading}>The six supports, in plain English</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <GrantCard
                title="1. Digital for Business"
                source="Local Enterprise Office"
                value="Cost to you: free"
              >
                <p>
                  An expert digital consultant appointed by your Local Enterprise Office reviews how your business
                  currently runs, identifies gaps, and produces a written report with recommendations. It&apos;s
                  designed for LEO clients with 1–50 paid employees, trading at least 6 months, registered in the LEO
                  area, and not currently a client of Enterprise Ireland or IDA Ireland.
                </p>
                <p>
                  <strong className="text-white">Why it matters more than it sounds:</strong> this report is the
                  required first step for the Grow Digital Voucher. If it doesn&apos;t identify AI as an opportunity,
                  the funded route stays closed. We can sit with you before or alongside the process so the report
                  captures the AI opportunities we can actually deliver.
                </p>
                <p>Your LEO appoints the consultant — it isn&apos;t us. We&apos;ll help you get the most out of it.</p>
              </GrantCard>

              <GrantCard
                title="2. Grow Digital Voucher"
                source="Local Enterprise Office"
                value="Grant: 50% of eligible costs, minimum €500 to a maximum of €5,000 per application"
              >
                <p>
                  Open to small enterprises with 1–50 paid employees who have completed a Digital for Business project
                  within the previous two years. Covers software and training/IT configuration. You can be approved for
                  up to two projects, with a cumulative grant value of up to €5,000.
                </p>
                <p>
                  You&apos;ll need to be established and trading at least 6 months, registered within your LEO&apos;s
                  area, solvent as shown in your financial statements, and hold current tax clearance — with a Tax
                  Reference Number and Tax Clearance Access Number for verification.
                </p>
                <p>
                  <strong className="text-white">What it can&apos;t be used for:</strong> the scheme excludes primary
                  agriculture, fishery and aquaculture, coal and steel, gambling, adult entertainment, tobacco,
                  commercial semi-states, trade associations and Chambers of Commerce, and companies with charitable
                  status that don&apos;t meet the trading criteria.
                </p>
                <p>
                  <strong className="text-white">Where we come in:</strong> we help you prepare the application, quote
                  the work correctly so it&apos;s eligible, and deliver the training and configuration the voucher pays
                  for.
                </p>
              </GrantCard>

              <GrantCard
                title="3. Skillnet Upskill SME Training Grant"
                source="Skillnet Ireland"
                value="Grant: €204.30 per training day, per employee"
              >
                <p>
                  A flat-rate contribution towards the salary cost of employees attending approved training, available
                  to Republic of Ireland SMEs with 2–250 employees. Training must be selected from approved programmes
                  delivered through a Skillnet network. Individuals and sole traders cannot claim this one.
                </p>
                <p>
                  <strong className="text-white">Be clear on this:</strong> it rebates salary costs to the employer. It
                  does not reduce our fee. Combined with the LEO route it can bring the real cost of a training day
                  close to nothing — but the two work differently.
                </p>
              </GrantCard>

              <GrantCard
                title="4. AI Discovery and Digital Discovery"
                source="Enterprise Ireland"
                value="Grant: up to 80% of project cost, capped at a €5,000 grant"
              >
                <p>
                  For Enterprise Ireland client companies. You choose a suitable consultant, agree the project outline,
                  and apply. It&apos;s the lowest-risk way for an EI client to bring in expert help on AI or digital
                  strategy.
                </p>
              </GrantCard>

              <GrantCard
                title="5. InterTradeIreland"
                source="Cross-border and all-island SMEs"
                value="Cost to you: fully funded programmes"
              >
                <p>
                  If you trade, or want to trade, across the border, InterTradeIreland runs fully funded programmes for
                  SMEs on the island — including one-to-one digital and innovation mentoring and cross-border growth
                  support. For a business working in both Donegal and Derry, this is often the most under-used route
                  available.
                </p>
              </GrantCard>

              <GrantCard title="6. Other supports worth knowing about" source="Various bodies" value="Varies by programme">
                <ul className="flex flex-col gap-3">
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-400 mt-1.5 shrink-0" aria-hidden="true" />
                    <span>
                      <strong className="text-white">AI Works for Ireland</strong> — a partnership between the Local
                      Enterprise Offices, Google and Enterprise Ireland, running free regional events that give SMEs
                      practical AI skills.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-400 mt-1.5 shrink-0" aria-hidden="true" />
                    <span>
                      <strong className="text-white">AIReady.ie</strong> — free, bite-sized AI courses from the
                      Government of Ireland, built for small businesses, sole traders, farmers and older adults.
                      Genuinely good, genuinely free.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-400 mt-1.5 shrink-0" aria-hidden="true" />
                    <span>
                      <strong className="text-white">Enterprise Ireland Mentor Grant</strong> — up to 10 mentoring
                      sessions to a total of €1,750, paid directly to the mentor, for EI clients.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-400 mt-1.5 shrink-0" aria-hidden="true" />
                    <span>
                      <strong className="text-white">AIM Centre AI Accelerator (Sligo)</strong> — a six-week hybrid
                      programme with 80% funding available through De Minimis, aimed at manufacturing and professional
                      services SMEs in the region.
                    </span>
                  </li>
                </ul>
              </GrantCard>
            </div>
          </div>
        </section>

        {/* Worked example */}
        <section className="py-20 md:py-24 bg-navy-900">
          <div className="container px-4 md:px-6 max-w-4xl">
            <h2 className={sectionHeading}>What this looks like in practice</h2>
            <p className={`${bodyText} mb-8`}>
              Take a Donegal business wanting AI set up properly: a training day for four staff, plus tool
              configuration, with a project value of €3,000.
            </p>
            <div className="overflow-x-auto rounded-xl border border-navy-700">
              <table className="w-full text-left text-gray-300">
                <thead className="bg-navy-800 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Step
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      What happens
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Effect
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {workedExample.map((row) => (
                    <tr key={row.step} className="border-t border-navy-700 align-top">
                      <th scope="row" className="px-4 py-3 font-semibold text-purple-300">
                        {row.step}
                      </th>
                      <td className="px-4 py-3">{row.what}</td>
                      <td className="px-4 py-3">{row.effect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed">
              Illustrative example only. Actual funding depends on your eligibility, the project, and approval by the
              funding body. We can&apos;t guarantee any amount.
            </p>
          </div>
        </section>

        {/* Caveats */}
        <section className="py-20 md:py-24">
          <div className="container px-4 md:px-6 max-w-4xl">
            <h2 className={sectionHeading}>What we won&apos;t tell you</h2>
            <p className={`${bodyText} mb-6`}>We&apos;d rather you trust us than be surprised later, so:</p>
            <ul className="flex flex-col gap-4">
              {caveats.map((caveat) => (
                <li key={caveat} className="flex gap-3 text-gray-300 leading-relaxed">
                  <CheckCircle className="h-5 w-5 text-purple-400 mt-1 shrink-0" aria-hidden="true" />
                  <span>{caveat}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-400 mt-8">Scheme details checked: October 2026.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-24 bg-navy-900">
          <div className="container px-4 md:px-6 max-w-4xl">
            <h2 className={sectionHeading}>Grant questions we get asked</h2>
            <div className="flex flex-col gap-8">
              {faqs.map((faq) => (
                <div key={faq.question} className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-white text-balance">{faq.question}</h3>
                  <p className={bodyText}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-16">
          <div className="container px-4 md:px-6 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
              Where this fits with our other services
            </h2>
            <p className={bodyText}>
              Funding usually supports our{" "}
              <Link href="/workplace-ai-training-donegal" className="text-purple-300 underline hover:text-purple-200">
                workplace and staff AI training
              </Link>{" "}
              and{" "}
              <Link href="/business-services" className="text-purple-300 underline hover:text-purple-200">
                AI consultancy and implementation
              </Link>
              . We also run{" "}
              <Link href="/community-ai-training-donegal" className="text-purple-300 underline hover:text-purple-200">
                community and funded programmes
              </Link>
              , and work with{" "}
              <Link href="/schools-ai-training-donegal" className="text-purple-300 underline hover:text-purple-200">
                schools and young people
              </Link>{" "}
              across Donegal and Derry.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24 bg-gradient-to-r from-navy-900 via-purple-900 to-navy-900">
          <div className="container px-4 md:px-6 max-w-4xl">
            <div className="flex flex-col items-center text-center gap-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
                Ready to find out what your business would actually pay?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-pretty">
                Tell us your size, your county and what you want to fix. We&apos;ll come back with the routes you
                qualify for and what the net cost looks like.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8"
              >
                <Link href="/contact">
                  <Calendar className="w-5 h-5" />
                  Book a free 15-minute call
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
