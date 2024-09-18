'use client'

import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">Last updated: September 15, 2024</p>
      
      <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing and using our website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.
      </p>
      
      <h2 className="text-2xl font-bold mb-4">2. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to modify these terms at any time. You should check this page regularly. Your continued use of the website after any changes constitutes your acceptance of the new terms.
      </p>
      
      <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
      <p className="mb-4">
        You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.
      </p>
      
      <h2 className="text-2xl font-bold mb-4">4. Privacy Policy</h2>
      <p className="mb-4">
        Our privacy policy, which sets out how we will use your information, can be found at <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>. By using this website, you consent to the processing described therein and warrant that all data provided by you is accurate.
      </p>
      
      <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
      <p className="mb-4">
        The website is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranty that the site will meet your requirements or be available on an uninterrupted, secure, or error-free basis.
      </p>
      
      <h2 className="text-2xl font-bold mb-4">6. Governing Law</h2>
      <p className="mb-4">
        These terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
      </p>
      
      <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about these Terms, please contact us at admin@yourhomebase.co.
      </p>
    </div>
  );
}
