const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "AI for Beginners – Digital Literacy Workshop",
  description:
    "A beginner-friendly introduction to AI and what it means for digital literacy, made for small businesses, schools, and community groups across Donegal and Derry.",
  thumbnailUrl: "https://i.ytimg.com/vi/JPnEXDQS3nM/maxresdefault.jpg",
  uploadDate: "2026-07-10",
  embedUrl: "https://www.youtube.com/embed/JPnEXDQS3nM",
  publisher: {
    "@type": "Organization",
    name: "AI Fusion",
    url: "https://aifusion.ie",
  },
}

export default function TrainingVideoSection() {
  return (
    <section className="py-20 md:py-24 bg-navy-950">
      <div className="container px-4 md:px-6 max-w-4xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
        />
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            AI for Beginners – Digital Literacy Workshop
          </h2>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto text-pretty">
            A beginner-friendly introduction to AI and what it means for digital literacy — made for small businesses,
            schools and community groups across Donegal and Derry.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-purple-500/30">
          <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
            <iframe
              src="https://www.youtube.com/embed/JPnEXDQS3nM"
              title="AI for Beginners – Digital Literacy Workshop | AI Fusion Donegal"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <p className="text-sm text-gray-400 text-center mt-4 text-pretty">
          This video was created using an AI-generated avatar and voice, based on a presentation script written by AI
          Fusion.
        </p>
      </div>
    </section>
  )
}
