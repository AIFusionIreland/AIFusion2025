import Link from "next/link"
import { CheckCircle } from "lucide-react"

export type CostBlockRow = {
  format: string
  price: string
  netCost: string
}

type CostBlockLink = {
  href: string
  label: string
}

export type CostBlockProps = {
  heading: string
  intro: string
  columns: { format: string; price: string; netCost: string }
  rows: CostBlockRow[]
  tableNote: string
  includedHeading?: string
  included: string[]
  fundingNote: string
  fundingLink: CostBlockLink
  closingText: string
  closingLink: CostBlockLink
  className?: string
}

export default function CostBlock({
  heading,
  intro,
  columns,
  rows,
  tableNote,
  includedHeading = "What's included",
  included,
  fundingNote,
  fundingLink,
  closingText,
  closingLink,
  className = "bg-navy-900",
}: CostBlockProps) {
  return (
    <section aria-labelledby="cost-block-heading" className={`py-20 md:py-24 ${className}`}>
      <div className="container px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2
            id="cost-block-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance"
          >
            {heading}
          </h2>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto text-pretty">{intro}</p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-navy-700">
          <table className="w-full min-w-[560px] text-left text-gray-300">
            <thead className="bg-navy-800 text-white">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">
                  {columns.format}
                </th>
                <th scope="col" className="px-4 py-3 font-semibold whitespace-nowrap">
                  {columns.price}
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  {columns.netCost}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.format} className="border-t border-navy-700 align-top">
                  <th scope="row" className="px-4 py-3 font-semibold text-purple-300">
                    {row.format}
                  </th>
                  <td className="px-4 py-3 whitespace-nowrap">{row.price}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{row.netCost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mt-4 text-pretty">{tableNote}</p>

        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-white">{includedHeading}</h3>
          <ul className="space-y-4">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <span className="text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-pretty mt-12">
          {`${fundingNote} `}
          <Link
            href={fundingLink.href}
            className="text-purple-300 font-semibold hover:text-purple-200 underline-offset-4 hover:underline"
          >
            {fundingLink.label}
          </Link>
        </p>

        <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-pretty mt-6">
          {`${closingText} `}
          <Link
            href={closingLink.href}
            className="text-purple-300 font-semibold hover:text-purple-200 underline-offset-4 hover:underline"
          >
            {closingLink.label}
          </Link>
        </p>
      </div>
    </section>
  )
}
