"use client"

import { useEffect } from "react"
import SiteHeader from "@/components/site-header"
import BackToHomeButton from "@/components/back-to-home-button"

export default function PrivacyPolicy() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-navy-975">
      <SiteHeader />

      <main className="flex-1 container max-w-4xl py-12 px-4">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
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
              AI Fusion ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
            <p className="text-gray-200 mt-4">
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
              please do not access the site or use our services.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-medium text-white mt-6 mb-3">Personal Data</h3>
            <p className="text-gray-200">
              We may collect personal identification information from you in a variety of ways, including, but not
              limited to, when you visit our site, register on the site, fill out a form, and in connection with other
              activities, services, features or resources we make available. You may be asked for, as appropriate:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-200">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company information</li>
            </ul>

            <h3 className="text-xl font-medium text-white mt-6 mb-3">Non-Personal Data</h3>
            <p className="text-gray-200">
              We may collect non-personal identification information about users whenever they interact with our site.
              Non-personal identification information may include:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-200">
              <li>Browser name</li>
              <li>Type of computer or device</li>
              <li>Technical information about users' means of connection to our site</li>
              <li>Operating system</li>
              <li>Internet service providers</li>
              <li>Other similar information</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-200">We may use the information we collect from you in the following ways:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-200">
              <li>
                To personalize your experience and to deliver content and product offerings relevant to your interests
              </li>
              <li>To improve our website in order to better serve you</li>
              <li>To allow us to better service you in responding to your customer service requests</li>
              <li>To administer a contest, promotion, survey or other site feature</li>
              <li>To quickly process your transactions</li>
              <li>To send periodic emails regarding your order or other products and services</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Protection of Your Information</h2>
            <p className="text-gray-200">
              We adopt appropriate data collection, storage and processing practices and security measures to protect
              against unauthorized access, alteration, disclosure or destruction of your personal information, username,
              password, transaction information and data stored on our site.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Sharing Your Personal Information</h2>
            <p className="text-gray-200">
              We do not sell, trade, or rent users' personal identification information to others. We may share generic
              aggregated demographic information not linked to any personal identification information regarding
              visitors and users with our business partners, trusted affiliates and advertisers for the purposes
              outlined above.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Third-Party Websites</h2>
            <p className="text-gray-200">
              Users may find advertising or other content on our site that link to the sites and services of our
              partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the
              content or links that appear on these sites and are not responsible for the practices employed by websites
              linked to or from our site. In addition, these sites or services, including their content and links, may
              be constantly changing. These sites and services may have their own privacy policies and customer service
              policies. Browsing and interaction on any other website, including websites which have a link to our site,
              is subject to that website's own terms and policies.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">7. Changes to This Privacy Policy</h2>
            <p className="text-gray-200">
              AI Fusion has the discretion to update this privacy policy at any time. When we do, we will revise the
              updated date at the top of this page. We encourage users to frequently check this page for any changes to
              stay informed about how we are helping to protect the personal information we collect. You acknowledge and
              agree that it is your responsibility to review this privacy policy periodically and become aware of
              modifications.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">8. Your Acceptance of These Terms</h2>
            <p className="text-gray-200">
              By using this site, you signify your acceptance of this policy. If you do not agree to this policy, please
              do not use our site. Your continued use of the site following the posting of changes to this policy will
              be deemed your acceptance of those changes.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">9. Contacting Us</h2>
            <p className="text-gray-200">
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with
              this site, please contact us at:
            </p>
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
