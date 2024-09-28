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
import { createClient } from '@supabase/supabase-js'

// initialize supabase client
const supabaseUrl = 'https://ibktlbeduwmyvnvoubha.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlia3RsYmVkdXdteXZudm91YmhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyNDM3ODMsImV4cCI6MjA0MTgxOTc4M30.mVqi9p5DDgCBr7a2usiNFiRGiinbAa4a7Ig8Hvrke9o'
const supabase = createClient(supabaseUrl, supabaseKey)

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [showSuccessModal, setShowSuccessModal] = useState(false)

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

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")

    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address.")
      setIsLoading(false)
      return
    }

    try {
      console.log(`Attempting to sign up with email: ${email}`)
      const { data, error } = await supabase
        .from('contacts')
        .insert([{ email: email }])

      if (error) throw error

      console.log(`Successfully signed up with email: ${email}`, data)
      setMessage("Congrats, you're on our waitlist!")
      setEmail("")
      setShowSuccessModal(true)
    } catch (error) {
      console.error('Error inserting email:', error)
      if (error.message) {
        setMessage(`An error occurred: ${error.message}`)
      } else {
        setMessage("An unknown error occurred. Please try again later.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  const closeSuccessModal = () => {
    setShowSuccessModal(false)
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
                    disabled={isLoading}
                  >
                    {isLoading ? 'Joining...' : 'Join Waitlist'}
                  </Button>
                </form>
                {message && <p className="text-sm text-green-600 dark:text-green-400">{message}</p>}
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
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl relative">
            <button
              onClick={closeSuccessModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Success!</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Thank you for joining our waitlist. We'll be in touch soon!</p>
          </div>
        </div>
      )}
    </div>
  )
}