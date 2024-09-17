'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from "lucide-react"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import Script from 'next/script'

declare global {
  interface Window {
    google: any;
  }
}

export default function GetStartedPage() {
  const [address, setAddress] = useState('')
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null)

  const router = useRouter()

  useEffect(() => {
    const loadAutocomplete = () => {
      if (typeof window !== 'undefined' && window.google && window.google.maps && window.google.maps.places) {
        const autocomplete = new window.google.maps.places.Autocomplete(
          document.getElementById('address') as HTMLInputElement,
          { types: ['address'] }
        )
        setAutocomplete(autocomplete)
        console.log('Autocomplete initialized')
      } else {
        console.log('Google Maps API not fully loaded, retrying...')
        setTimeout(loadAutocomplete, 500)
      }
    }

    loadAutocomplete()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (autocomplete) {
      const place = autocomplete.getPlace()
      if (place && place.address_components) {
        let street = '', city = '', state = '', zipCode = ''
        for (const component of place.address_components) {
          const componentType = component.types[0]
          switch (componentType) {
            case 'street_number':
              street = `${component.long_name} ${street}`
              break
            case 'route':
              street += component.short_name
              break
            case 'locality':
              city = component.long_name
              break
            case 'administrative_area_level_1':
              state = component.short_name
              break
            case 'postal_code':
              zipCode = component.long_name
              break
          }
        }
        const query = new URLSearchParams({ street, city, state, zipCode }).toString()
        router.push(`/property-details?${query}`)
      } else {
        console.log('No place selected')
      }
    } else {
      console.log('Autocomplete not initialized')
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
        strategy="beforeInteractive"
        onLoad={() => console.log('Google Maps API script loaded')}
        onError={() => console.error('Error loading Google Maps API script')}
      />
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 mt-20">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Get Started with HomeBase</h1>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-2">
              <Input
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
                required
                className="flex-grow bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white h-12"
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 h-12">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  )
}