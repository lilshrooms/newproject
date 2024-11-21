'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Moon, Menu } from "lucide-react"

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link className="flex items-center justify-center" href="/">
              <Image
                src={darkMode ? "/images/logo2.png" : "/images/logo.png"}
                alt="HomeBase Logo"
                width={120}
                height={120}
                className="mr-2 cursor-pointer"
                style={{ objectFit: 'contain' }}
                onClick={() => window.location.href = '/'}
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6 ml-auto">
            <Link className="text-sm font-medium text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:font-bold transition-colors" href="/about">
              About
            </Link>
            <Link className="text-sm font-medium text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:font-bold transition-colors" href="/pricing">
              Pricing
            </Link>
            <Link className="text-sm font-medium text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:font-bold transition-colors" href="mailto:admin@yourhomebase.co">
              Contact
            </Link>
            <Link className="text-sm font-medium text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:font-bold transition-colors" href="/calculator">
              Calculator
            </Link>
            <Link className="text-sm font-medium text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:font-bold transition-colors" href="/signup">
              Sign Up
            </Link>
            <Link className="text-sm font-medium text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:font-bold transition-colors" href="/login">
              Login
            </Link>
            <button onClick={toggleDarkMode} className="text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Moon className="h-5 w-5" />
            </button>
          </nav>
          <button onClick={toggleMenu} className="md:hidden text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 py-3">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-3">
              <Link className="text-sm font-medium text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:font-bold transition-colors" href="/about">
                About
              </Link>
              <Link className="text-sm font-medium text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:font-bold transition-colors" href="/pricing">
                Pricing
              </Link>
              <Link className="text-sm font-medium text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:font-bold transition-colors" href="mailto:admin@yourhomebase.co">
                Contact
              </Link>
              <Link className="text-sm font-medium text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:font-bold transition-colors" href="/calculator">
                Calculator
              </Link>
              <Link className="text-sm font-medium text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:font-bold transition-colors" href="/signup">
                Sign Up
              </Link>
              <Link className="text-sm font-medium text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:font-bold transition-colors" href="/login">
                Login
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}