'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'

export default function SignUpPage2() {
  const [homeOwnerName, setHomeOwnerName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [ssn, setSsn] = useState('')
  const [address, setAddress] = useState('')
  const [dob, setDob] = useState('')
  const [income, setIncome] = useState('')
  const [employmentStatus, setEmploymentStatus] = useState('')
  const [isVeteran, setIsVeteran] = useState(false)

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the collected information to your backend for processing
    console.log(`Home Owner: ${homeOwnerName}, Email: ${email}, Phone: ${phoneNumber}, SSN: ${ssn}, Address: ${address}, DOB: ${dob}, Income: ${income}, Employment Status: ${employmentStatus}, Veteran: ${isVeteran}`)
    // Reset the form fields after submission
    setHomeOwnerName('')
    setEmail('')
    setPhoneNumber('')
    setSsn('')
    setAddress('')
    setDob('')
    setIncome('')
    setEmploymentStatus('')
    setIsVeteran(false)
    // You might want to show a success message to the user here
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Home Owner Information</h2>
          <form className="space-y-6" onSubmit={handleSignUp}>
            <div>
              <label htmlFor="homeOwnerName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Home Owner Name
              </label>
              <Input
                id="homeOwnerName"
                name="homeOwnerName"
                type="text"
                required
                value={homeOwnerName}
                onChange={(e) => setHomeOwnerName(e.target.value)}
                className="mt-1 block w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Phone Number
              </label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-1 block w-full"
              />
            </div>
            <div>
              <label htmlFor="ssn" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Social Security Number
              </label>
              <Input
                id="ssn"
                name="ssn"
                type="text"
                required
                value={ssn}
                onChange={(e) => setSsn(e.target.value)}
                className="mt-1 block w-full"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Address
              </label>
              <Input
                id="address"
                name="address"
                type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 block w-full"
              />
            </div>
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Date of Birth
              </label>
              <Input
                id="dob"
                name="dob"
                type="date"
                required
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="mt-1 block w-full"
              />
            </div>
            <div>
              <label htmlFor="income" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Income
              </label>
              <Input
                id="income"
                name="income"
                type="text"
                required
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="mt-1 block w-full"
              />
            </div>
            <div>
              <label htmlFor="employmentStatus" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Employment Status
              </label>
              <Input
                id="employmentStatus"
                name="employmentStatus"
                type="text"
                required
                value={employmentStatus}
                onChange={(e) => setEmploymentStatus(e.target.value)}
                className="mt-1 block w-full"
              />
            </div>
            <div className="flex items-center">
              <input
                id="isVeteran"
                name="isVeteran"
                type="checkbox"
                checked={isVeteran}
                onChange={(e) => setIsVeteran(e.target.checked)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="isVeteran" className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Are you a veteran?
              </label>
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
