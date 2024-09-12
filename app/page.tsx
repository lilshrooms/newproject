'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Home, DollarSign, TrendingUp, Shield, Moon } from "lucide-react"
import Chatbot from "../components/Chatbox"
import Image from 'next/image'
import { Image as UIImage } from '@/components/ui/Image'

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false)

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
        <Link className="flex items-center justify-center" href="#">
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
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10">
              <div className="md:w-1/2 space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 focus:outline-none">
                  Revolutionizing Property Tax Valuations
                </h1>
                <p className="text-gray-700 md:text-xl dark:text-gray-300 animate-fade-in-up">
                  Get fair and precise property tax assessments with HomeBase&apos;s advanced valuation tool. Save time and money with confidence.
                </p>
                <div className="space-x-4">
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
              <div className="md:w-1/2 relative h-[500px]">
                <Image
                  src="/images/bank.png"
                  alt="image"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 dark:bg-blue-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-white">
              Why Choose HomeBase?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
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
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-white dark:bg-gray-800 border-blue-300 dark:border-blue-700 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
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
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2024 HomeBase Inc. All rights reserved.
            </p>
            <nav className="flex gap-4 mt-4 md:mt-0">
              <Link className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" href="#">
                Privacy Policy
              </Link>
              <Link className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" href="#">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </footer>
      <Chatbot />
    </div>
  )
}