'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Home, DollarSign, TrendingUp, Shield, Moon } from "lucide-react"
import Chatbot from "../components/Chatbox"
import Image from 'next/image'
import { Image as UIImage } from '@/components/ui/Image'
import Header from "../components/header/header"
import Footer from "../components/footer/footer"

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [email, setEmail] = useState("")

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

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend or email service
    console.log(`Signing up with email: ${email}`)
    // Reset the email input after submission
    setEmail("")
    // You might want to show a success message to the user here
  }

  return (
    <div className={`flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white ${darkMode ? 'dark:from-gray-900 dark:to-gray-800' : ''}`}>
      <Header />
      <main className="flex-1">
        <section className="w-full py-2 md:py-4 lg:py-6 xl:py-8 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="md:w-1/2 space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 focus:outline-none mb-2">
                  Revolutionizing Property Tax Valuations
                </h1>
                <p className="text-gray-700 md:text-xl dark:text-gray-300 animate-fade-in-up">
                  Get fair and precise property tax assessments with HomeBase&apos;s advanced valuation tool. Save time and money with confidence.
                </p>
                <div className="space-x-4 mt-4">
                  <Link href="/get-started">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                      Get Started
                    </Button>
                  </Link>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-100 font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 relative h-[750px]">
                <Image
                  src="/images/bank.png"
                  alt="Property Valuation Illustration"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-8 md:py-16 lg:py-24 bg-blue-600 dark:bg-blue-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
              Why Choose HomeBase?
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                <DollarSign className="h-12 w-12 mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">Accurate Valuations</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  Our advanced algorithms ensure precise property tax assessments.
                </p>
              </div>
              <div className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                <TrendingUp className="h-12 w-12 mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">Market Insights</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  Stay informed with real-time market trends and property data.
                </p>
              </div>
              <div className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                <Shield className="h-12 w-12 mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">Secure & Compliant</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  Your data is protected with bank-level security measures.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-8 md:py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800 dark:text-white">
                  Ready to Optimize Your Property Taxes Today?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
                  Join thousands of property owners who trust HomeBase for fair and accurate valuations.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2" onSubmit={handleSignUp}>
                  <Input 
                    className="max-w-lg flex-1 bg-white dark:bg-gray-800 border-blue-300 dark:border-blue-700 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Enter your email" 
                    type="email" 
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button 
                    type="submit" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Sign Up
                  </Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Start your free trial today. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}