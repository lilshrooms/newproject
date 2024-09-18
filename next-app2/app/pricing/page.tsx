'use client'

import Header from "@/components/header/header"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Building, Info } from "lucide-react"
import { useState } from "react"
import { Tooltip } from "@/components/ui/tooltip"
import Footer from "@/components/footer/footer"
import Chatbot from "@/components/Chatbox" // Correct import path

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState('homeowners')

  const detailBoxes = [
    {
      title: "Residential Data Only",
      price: "$100",
      features: [
        { text: "Access to our valuation tool", tooltip: "Use our advanced AI to get accurate property valuations" },
        { text: "Market insights", tooltip: "Stay informed with real-time market trends and data" },
        { text: "Annual subscription for monitoring", tooltip: "We will monitor your property valuation and tax to notify you if there's an issue" },
        { text: "Referrals to local lawyers", tooltip: "Get connected with experienced local property tax lawyers to represent you" }
      ],
      buttonText: "Get Started",
      buttonLink: "/get-started"
    },
    {
      title: "Residential Full Service",
      price: "30% of savings",
      features: [
        { text: "We handle everything", tooltip: "Our experts manage the entire property tax appeal process for you" },
        { text: "No upfront costs", tooltip: "You only pay if we successfully reduce your property taxes" },
        { text: "Pay only if we save you money", tooltip: "Our fee is a percentage of the tax savings we secure for you" }
      ],
      buttonText: "Contact Us",
      buttonLink: "mailto:admin@yourhomebase.co"
    },
    {
      title: "Small Scale Commercial",
      price: "30% of savings",
      features: [
        { text: "For properties with less than 3 units", tooltip: "Ideal for small commercial buildings or multi-family properties" },
        { text: "Property tax burden under $100,000", tooltip: "Suitable for properties with lower tax assessments" },
        { text: "Expert commercial valuation", tooltip: "Our team includes specialists in commercial property assessment" }
      ],
      buttonText: "Get Started",
      buttonLink: "/get-started"
    },
    {
      title: "Large Scale Commercial",
      price: "Customized Solutions",
      features: [
        { text: "For properties with 3 or more units", tooltip: "Tailored for larger commercial buildings or extensive multi-family properties" },
        { text: "Property tax burden $100,000 or more", tooltip: "Designed for properties with significant tax assessments" },
        { text: "Personalized strategy and pricing", tooltip: "We'll create a custom plan tailored to your specific property and needs" }
      ],
      buttonText: "Contact Us",
      buttonLink: "mailto:admin@yourhomebase.co"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="flex-1 pt-20">
        <section className="w-full py-8 md:py-16 lg:py-24 xl:py-32 px-4 md:px-6">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 focus:outline-none text-center mb-8">
              Pricing Plans
            </h1>
            
            <div className="flex justify-center mb-8">
              <Button
                onClick={() => setActiveTab('homeowners')}
                className={`mr-4 ${activeTab === 'homeowners' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                <Home className="mr-2 h-4 w-4" /> Homeowners
              </Button>
              <Button
                onClick={() => setActiveTab('commercial')}
                className={`${activeTab === 'commercial' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                <Building className="mr-2 h-4 w-4" />  Landlords
              </Button>
            </div>
            
            {activeTab === 'homeowners' && (
              <div className="grid gap-10 md:grid-cols-2">
                {detailBoxes.slice(0, 2).map((box, index) => (
                  <div key={index} className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-full">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{box.title}</h2>
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">{box.price}</p>
                    <ul className="text-left text-gray-600 dark:text-gray-300 mb-6 flex-grow space-y-4">
                      {box.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-2 mt-1">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="flex-grow">{feature.text}</span>
                          <Tooltip content={feature.tooltip}>
                            <Info className="ml-2 h-4 w-4 text-blue-500 cursor-pointer flex-shrink-0" />
                          </Tooltip>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-auto">
                      <Link href={box.buttonLink}>{box.buttonText}</Link>
                    </Button>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'commercial' && (
              <div className="grid gap-10 md:grid-cols-2">
                {detailBoxes.slice(2).map((box, index) => (
                  <div key={index} className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-full">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{box.title}</h2>
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">{box.price}</p>
                    <ul className="text-left text-gray-600 dark:text-gray-300 mb-6 flex-grow space-y-4">
                      {box.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-2 mt-1">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="flex-grow">{feature.text}</span>
                          <Tooltip content={feature.tooltip}>
                            <Info className="ml-2 h-4 w-4 text-blue-500 cursor-pointer flex-shrink-0" />
                          </Tooltip>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-auto">
                      <Link href={box.buttonLink}>{box.buttonText}</Link>
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}