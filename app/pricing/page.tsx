'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Moon, Building, Info } from "lucide-react"
import { useState, useEffect } from "react"
import { Tooltip } from "@/components/ui/tooltip"

export default function PricingPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState('homeowners')

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className={`flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white ${darkMode ? 'dark:from-gray-900 dark:to-gray-800' : ''}`}>
      <header className="fixed top-0 left-0 right-0 px-4 lg:px-6 h-20 flex items-center shadow-md bg-white dark:bg-gray-800 z-50">
        <Link className="flex items-center justify-center" href="/">
          <Home className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
          <span className="font-bold text-xl text-blue-600 dark:text-blue-400">Home<span className="text-gray-800 dark:text-white">Base</span></span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:font-bold transition-all" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:font-bold transition-all" href="/pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:font-bold transition-all" href="#">
            About
          </Link>
          <Link className="text-sm font-medium text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:font-bold transition-all" href="#">
            Contact
          </Link>
          <button onClick={toggleDarkMode} className="text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Moon className="h-6 w-6" />
          </button>
        </nav>
      </header>
      <main className="flex-1 pt-24">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 focus:outline-none text-center mb-12">
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
                {/* Residential SaaS Plan */}
                <div className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-full">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Residential Data Only</h2>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">$100</p>
                  <ul className="text-left text-gray-600 dark:text-gray-300 mb-6 flex-grow space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-2 mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="flex-grow">Access to our valuation tool</span>
                      <Tooltip content="Use our advanced AI to get accurate property valuations">
                        <Info className="ml-2 h-4 w-4 text-blue-500 cursor-pointer flex-shrink-0" />
                      </Tooltip>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-2 mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="flex-grow">Market insights</span>
                      <Tooltip content="Stay informed with real-time market trends and data">
                        <Info className="ml-2 h-4 w-4 text-blue-500 cursor-pointer flex-shrink-0" />
                      </Tooltip>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-2 mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="flex-grow">Annual subscription for monitoring</span>
                      <Tooltip content="We will monitor your property valuation and tax to notify you if there's an issue">
                        <Info className="ml-2 h-4 w-4 text-blue-500 cursor-pointer flex-shrink-0" />
                      </Tooltip>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-2 mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="flex-grow">Referrals to local lawyers</span>
                      <Tooltip content="Get connected with experienced local property tax lawyers to represent you">
                        <Info className="ml-2 h-4 w-4 text-blue-500 cursor-pointer flex-shrink-0" />
                      </Tooltip>
                    </li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-auto">Get Started</Button>
                </div>

                {/* Residential Performance-Based Plan */}
                <div className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-full">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Residential Full Service</h2>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">30%<span className="text-sm text-gray-600 dark:text-gray-400"> of savings</span></p>
                  <ul className="text-left text-gray-600 dark:text-gray-300 mb-6 flex-grow space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-2 mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="flex-grow">We handle everything</span>
                      <Tooltip content="Our experts manage the entire property tax appeal process for you">
                        <Info className="ml-2 h-4 w-4 text-blue-500 cursor-pointer flex-shrink-0" />
                      </Tooltip>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-2 mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="flex-grow">No upfront costs</span>
                      <Tooltip content="You only pay if we successfully reduce your property taxes">
                        <Info className="ml-2 h-4 w-4 text-blue-500 cursor-pointer flex-shrink-0" />
                      </Tooltip>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-2 mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="flex-grow">Pay only if we save you money</span>
                      <Tooltip content="Our fee is a percentage of the tax savings we secure for you">
                        <Info className="ml-2 h-4 w-4 text-blue-500 cursor-pointer flex-shrink-0" />
                      </Tooltip>
                    </li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-auto">Contact Us</Button>
                </div>
              </div>
            )}
            
            {activeTab === 'commercial' && (
              <div className="flex flex-col items-center">
                <div className="grid gap-10 md:grid-cols-2 w-full max-w-4xl">
                  {/* Commercial Plan for smaller properties */}
                  <div className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-full">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Small Scale Commercial</h2>
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">30%<span className="text-sm text-gray-600 dark:text-gray-400"> of savings</span></p>
                    <ul className="text-left text-gray-600 dark:text-gray-300 mb-6 flex-grow space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-2 mt-1">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="flex-grow">For properties with less than 3 units</span>
                        <Tooltip content="Ideal for small commercial buildings or multi-family properties">
                          <Info className="ml-2 h-4 w-4 text-blue-500 cursor-pointer flex-shrink-0" />
                        </Tooltip>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-2 mt-1">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="flex-grow">Property tax burden under $100,000</span>
                        <Tooltip content="Suitable for properties with lower tax assessments">
                          <Info className="ml-2 h-4 w-4 text-blue-500 cursor-pointer flex-shrink-0" />
                        </Tooltip>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-2 mt-1">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="flex-grow">Expert commercial valuation</span>
                        <Tooltip content="Our team includes specialists in commercial property assessment">
                          <Info className="ml-2 h-4 w-4 text-blue-500 cursor-pointer flex-shrink-0" />
                        </Tooltip>
                      </li>
                    </ul>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-auto">Get Started</Button>
                  </div>

                  {/* Commercial Plan for larger properties */}
                  <div className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-full">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Large Scale Commercial</h2>
                    <p className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">Customized Solutions</p>
                    <ul className="text-left text-gray-600 dark:text-gray-300 mb-6 flex-grow space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-2 mt-1">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="flex-grow">For properties with 3 or more units</span>
                        <Tooltip content="Tailored for larger commercial buildings or extensive multi-family properties">
                          <Info className="ml-2 h-4 w-4 text-blue-500 cursor-pointer flex-shrink-0" />
                        </Tooltip>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-2 mt-1">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="flex-grow">Property tax burden $100,000 or more</span>
                        <Tooltip content="Designed for properties with significant tax assessments">
                          <Info className="ml-2 h-4 w-4 text-blue-500 cursor-pointer flex-shrink-0" />
                        </Tooltip>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-2 mt-1">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="flex-grow">Personalized strategy and pricing</span>
                        <Tooltip content="We'll create a custom plan tailored to your specific property and needs">
                          <Info className="ml-2 h-4 w-4 text-blue-500 cursor-pointer flex-shrink-0" />
                        </Tooltip>
                      </li>
                    </ul>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-auto">Contact Us</Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}