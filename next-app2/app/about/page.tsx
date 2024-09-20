'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Home, DollarSign, TrendingUp, Shield, Users, Target, Zap } from "lucide-react"
import Chatbot from "@/components/Chatbox"
import Image from 'next/image'
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"

export default function AboutPage() {
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
      <Header />
      <main className="flex-1">
        <section className="w-full py-8 md:py-12 lg:py-16 xl:py-20 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 focus:outline-none mb-2">
                About HomeBase
              </h1>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Built for property owners, powered by AI
              </h2>
              <Link href="/get-started">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                  Get Started for Free
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-8 md:py-12 bg-blue-600 dark:bg-blue-400">
          <div className="container mx-auto px-2 md:px-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-900 p-4 rounded-lg">
                <h3 className="text-4xl font-bold mb-2 text-white dark:text-gray-900">40+ counties</h3>
                <p className="text-white dark:text-gray-900">HomeBase has grown from a county coverage of 10 to over 40, across 5 states. We plan to double our coverage in the next 12 months</p>
              </div>
              <div className="bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-900 p-4 rounded-lg">
                <h3 className="text-4xl font-bold mb-2 text-white dark:text-gray-900">100,000+</h3>
                <p className="text-white dark:text-gray-900">Helped over 100,000+ property owners use HomeBase to optimize their tax assessments.</p>
              </div>
              <div className="bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-900 p-4 rounded-lg">
                <h3 className="text-4xl font-bold mb-2 text-white dark:text-gray-900">$1B+ </h3>
                <p className="text-white dark:text-gray-900">Total real estate property value.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-8 md:py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800 dark:text-white">
                    Our Story  
                              </h2>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">2023: HomeBase is Founded</h3>
                  <p className="text-gray-700 dark:text-gray-300">After experiencing the frustration of unfair property tax assessments, co-founders Jane Doe and John Smith create HomeBase to revolutionize the property valuation process using AI and big data.</p>
                </div>
                <div className="md:w-1/2">
                  <Image src="/images/frustrate.png" alt="HomeBase Founding" width={500} height={300} className="rounded-lg" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="md:w-1/2 order-2 md:order-1">
                  <Image src="/images/maze.png" alt="HomeBase Growth" width={500} height={300} className="rounded-lg" />
                </div>
                <div className="md:w-1/2 order-1 md:order-2">
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">2024: Rapid Expansion</h3>
                  <p className="text-gray-700 dark:text-gray-300">HomeBase experiences unprecedented growth as more property owners seek fair assessments. The company expands its services to cover commercial properties and partners with leading real estate firms.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">2025: Technological Advancements</h3>
                  <p className="text-gray-700 dark:text-gray-300">HomeBase integrates cutting-edge AI technologies to further enhance the accuracy and efficiency of property valuations, setting new industry standards.</p>
                </div>
                <div className="md:w-1/2">
                  <Image src="/images/solution.png" alt="Technological Advancements" width={500} height={300} className="rounded-lg" />
                </div>
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