export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#00d9ff] border-r-transparent"></div>
        <p className="mt-4 text-gray-300">Loading contact page...</p>
      </div>
    </div>
  )
}
