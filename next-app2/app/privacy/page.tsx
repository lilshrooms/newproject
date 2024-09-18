'use client'

import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Effective as of September 15, 2024</p>
      <p className="mb-4">
        This Privacy Policy (“Policy”) applies to HomeBase (“Company”) and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to the Company include www.yourhomebase.co and homeyness LLC. HomeBase provides a platform focused on property tax management and homeowner financial services. By using the Company’s platform, you consent to the data practices described in this statement.
      </p>
      <h2 className="text-2xl font-bold mb-4">Collection of Your Personal Information</h2>
      <p className="mb-4">
        To provide you with the services offered, HomeBase may collect personally identifiable information, such as your:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>First and last name</li>
        <li>Mailing address</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Social Security Number (SSN), Individual Taxpayer Identification Number (ITIN), or other tax-related identifiers</li>
        <li>Property information (address, valuation, tax assessment details)</li>
      </ul>
      <p className="mb-4">
        If you purchase HomeBase services, we collect billing and payment information to complete transactions. We may also collect data related to your property tax history and financial data necessary for the analysis and management of property tax appeals and assessments.
      </p>
      <p className="mb-4">
        We only collect personal information when voluntarily provided. However, certain information may be required when utilizing specific services, such as property tax analysis or filing an appeal.
      </p>
      <h2 className="text-2xl font-bold mb-4">Use of Your Personal Information</h2>
      <p className="mb-4">
        HomeBase collects and uses your personal information to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Provide property tax analysis and assessment services</li>
        <li>Assist in filing property tax appeals on your behalf</li>
        <li>Deliver services you have requested</li>
        <li>Provide updates about your property tax status or account</li>
        <li>Fulfill legal obligations related to property tax compliance</li>
        <li>Communicate changes to HomeBase services or policies</li>
      </ul>
      <p className="mb-4">
        HomeBase may also use your information to notify you of other services that may be of interest, including homeowner financial tools and solutions.
      </p>
      <h2 className="text-2xl font-bold mb-4">Sharing Information with Third Parties</h2>
      <p className="mb-4">
        HomeBase does not sell, rent, or lease customer information to third parties. However, we may share data with trusted partners to perform services such as property valuation analysis, tax filings, and communications. These third parties are prohibited from using your personal information except to provide these services to HomeBase, and they are required to maintain the confidentiality of your information.
      </p>
      <p className="mb-4">
        We may also share your information without notice if required by law or in the good faith belief that such action is necessary to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Comply with legal obligations</li>
        <li>Protect the rights or property of HomeBase</li>
        <li>Protect the personal safety of HomeBase users or the public</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Opt-Out of Disclosure of Personal Information to Third Parties</h2>
      <p className="mb-4">
        You have the right under the California Consumer Privacy Act (CCPA) to opt out of the disclosure of your personal information for business purposes. If you wish to opt out, please visit www.yourhomebase.co or contact us using the information below.
      </p>
      <h2 className="text-2xl font-bold mb-4">Security of Your Personal Information</h2>
      <p className="mb-4">
        HomeBase secures your personal information from unauthorized access, use, or disclosure using industry-standard security measures. However, no system is entirely secure, and we cannot guarantee the complete security of your information.
      </p>
      <h2 className="text-2xl font-bold mb-4">Right to Deletion</h2>
      <p className="mb-4">
        You have the right to request the deletion of your personal information, subject to certain exceptions. These include legal obligations such as:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Fulfilling transactions for services you’ve requested</li>
        <li>Detecting security incidents</li>
        <li>Complying with legal requirements related to property tax filings</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Children Under Thirteen</h2>
      <p className="mb-4">
        HomeBase does not knowingly collect personally identifiable information from children under the age of 13.
      </p>
      <h2 className="text-2xl font-bold mb-4">External Data Storage</h2>
      <p className="mb-4">
        Your data may be stored on third-party servers contracted by HomeBase for hosting and data storage services.
      </p>
      <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
      <p className="mb-4">
        HomeBase reserves the right to change this Policy as necessary. Significant changes will be communicated through email or prominent notice on our website. Your continued use of our services constitutes your agreement to any modifications.
      </p>
      <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
      <p className="mb-4">
        HomeBase welcomes your questions or comments regarding this Policy. Please contact us at:
      </p>
      <address className="mb-4">
        HomeBase<br />
        Email: <a href="mailto:admin@yourhomebase.co" className="text-blue-600">admin@yourhomebase.co</a><br />
      </address>
      <Link href="/" className="text-blue-600 hover:underline">Back to Home</Link>
    </div>
  )
}