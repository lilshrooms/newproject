'use client'

import { useState, useEffect, useRef } from 'react'
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from "lucide-react"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import Script from 'next/script'
import Image from 'next/image'
import ReactiveButton from 'reactive-button'

declare global {
  interface Window {
    google: any;
  }
}

export default function GetStartedPage() {
  const [address, setAddress] = useState('')
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null)
  const [buttonState, setButtonState] = useState('idle')
  const [streetViewUrl, setStreetViewUrl] = useState('')
  const mapRef = useRef<HTMLDivElement>(null)

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

        // Add listener for place changed
        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace()
          if (place.geometry && place.geometry.location) {
            updateStreetView(place.geometry.location)
          }
        })
      } else {
        console.log('Google Maps API not fully loaded, retrying...')
        setTimeout(loadAutocomplete, 500)
      }
    }

    loadAutocomplete()
  }, [])

  const updateStreetView = (location: google.maps.LatLng) => {
    const streetViewService = new window.google.maps.StreetViewService()
    streetViewService.getPanorama({ location, radius: 50 }, (data: any, status: any) => {
      if (status === 'OK') {
        const panorama = new window.google.maps.StreetViewPanorama(mapRef.current, {
          position: data.location.latLng,
          pov: { heading: 165, pitch: 0 },
          zoom: 1,
        })
      } else {
        console.error('Street View data not found for this location.')
      }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    setButtonState('loading')
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
        setTimeout(() => {
          setButtonState('success')
          const query = new URLSearchParams({ street, city, state, zipCode }).toString()
          router.push(`/property-details?${query}`)
        }, 2000)
      } else {
        console.log('No place selected')
        setButtonState('error')
      }
    } else {
      console.log('Autocomplete not initialized')
      setButtonState('error')
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
        <form onSubmit={handleSubmit} className="max-w-full mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center w-full">
            <div className="flex items-center space-x-2 w-full">
              <Input
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
                required
                className="flex-grow bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white h-12"
              />
              <ReactiveButton
                buttonState={buttonState}
                idleText="Submit"
                loadingText="AI Analyzing..."
                successText="Success!"
                errorText="Error!"
                color="blue"
                width="145x"
                height="48px"
                className="rounded-full transition-all duration-450 transform hover:scale-105"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </form>
        <div className="flex justify-center mt-6">
          <Image src="/images/search.png" alt="Search" width={600} height={400} />
        </div>
        <div className="flex justify-center mt-6 w-full h-[400px]">
          <div ref={mapRef} className="w-full h-full rounded-lg"></div>
        </div>
      </main>
      <Footer />
    </div>
  )
}