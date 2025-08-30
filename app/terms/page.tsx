"use client"

import { useEffect } from "react"
import SiteHeader from "@/components/site-header"
import BackToHomeButton from "@/components/back-to-home-button"

export default function TermsOfService() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-navy-975">
      <SiteHeader />

      <main className="flex-1 container max-w-4xl py-12 px-4">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Terms of Service</h1>
          <BackToHomeButton
            variant="outline"
            size="sm"
            className="bg-purple-800/30 border-purple-600/50 hover:bg-purple-700/50 text-white"
          />
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300">Last Updated: June 1, 2023</p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p className="text-gray-200">
              Welcome to AI Fusion. These Terms of Service ("Terms") govern your use of our website and services. By
              accessing or using our website and services, you agree to be bound by these Terms. If you disagree with
              any part of the Terms, you may not access our website or use our services.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
            <p className="text-gray-200">
              Permission is granted to temporarily access the materials (information or software) on AI Fusion's website
              for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of
              title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-200">
              <li>Modify or copy the materials</li>
              <li>
                Use the materials for any commercial purpose, or for any public display (commercial or non-commercial)
              </li>
              <li>Attempt to decompile or reverse engineer any software contained on AI Fusion's website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
            <p className="text-gray-200 mt-4">
              This license shall automatically terminate if you violate any of these restrictions and may be terminated
              by AI Fusion at any time. Upon terminating your viewing of these materials or upon the termination of this
              license, you must destroy any downloaded materials in your possession whether in electronic or printed
              format.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Disclaimer</h2>
            <p className="text-gray-200">
              The materials on AI Fusion's website are provided on an 'as is' basis. AI Fusion makes no warranties,
              expressed or implied, and hereby disclaims and negates all other warranties including, without limitation,
              implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement
              of intellectual property or other violation of rights.
            </p>
            <p className="text-gray-200 mt-4">
              Further, AI Fusion does not warrant or make any representations concerning the accuracy, likely results,
              or reliability of the use of the materials on its website or otherwise relating to such materials or on
              any sites linked to this site.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Limitations</h2>
            <p className="text-gray-200">
              In no event shall AI Fusion or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability
              to use the materials on AI Fusion's website, even if AI Fusion or a AI Fusion authorized representative
              has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do
              not allow limitations on implied warranties, or limitations of liability for consequential or incidental
              damages, these limitations may not apply to you.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Accuracy of Materials</h2>
            <p className="text-gray-200">
              The materials appearing on AI Fusion's website could include technical, typographical, or photographic
              errors. AI Fusion does not warrant that any of the materials on its website are accurate, complete or
              current. AI Fusion may make changes to the materials contained on its website at any time without notice.
              However AI Fusion does not make any commitment to update the materials.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Links</h2>
            <p className="text-gray-200">
              AI Fusion has not reviewed all of the sites linked to its website and is not responsible for the contents
              of any such linked site. The inclusion of any link does not imply endorsement by AI Fusion of the site.
              Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">7. Modifications</h2>
            <p className="text-gray-200">
              AI Fusion may revise these terms of service for its website at any time without notice. By using this
              website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">8. Governing Law</h2>
            <p className="text-gray-200">
              These terms and conditions are governed by and construed in accordance with the laws of Ireland and you
              irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Information</h2>
            <p className="text-gray-200">If you have any questions about these Terms, please contact us at:</p>
            <p className="text-gray-200 mt-2">
              AI Fusion
              <br />
              Email: info@aifusion.ie
            </p>
          </section>
        </div>

        <div className="mt-12 flex justify-center">
          <BackToHomeButton variant="default" size="lg" className="bg-purple-600 hover:bg-purple-700 text-white" />
        </div>
      </main>

      <footer className="border-t border-navy-800 bg-navy-975 py-8">
        <div className="container text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} AI Fusion. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
