'use client'

import { useState, useEffect, useRef, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, ArrowLeft, Bed, Bath, Square, Calendar, TrendingUp, TrendingDown, Moon } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, Legend } from 'recharts'
import { motion } from "framer-motion"
import { TooltipProps } from 'recharts'
import dynamic from 'next/dynamic'
import Chatbot from "@/components/Chatbox"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"

// Use environment variable for API key
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''

interface PropertyData {
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  yearBuilt: number;
  valuation: number;
  valuationTrend: 'up' | 'down';
  valuationChange: number;
  valuationRange: { min: number; max: number };
  comparableHomes: { min: number; max: number };
  taxHistory: { year: number; amount: number; neighborhoodAvg: number }[];
}

const GoogleMap = dynamic(() => import('@/components/GoogleMap'), {
  loading: () => <p>Loading map...</p>,
  ssr: false
})

function PropertyDetails() {
  const searchParams = useSearchParams()
  const [propertyData, setPropertyData] = useState<PropertyData | null>(null)
  const [loading, setLoading] = useState(true)
  const [mapsLoaded, setMapsLoaded] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const mapRef = useRef<google.maps.Map | null>(null)

  const street = searchParams.get('street')
  const city = searchParams.get('city')
  const state = searchParams.get('state')
  const zipCode = searchParams.get('zipCode')

  const getRandomValue = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

  useEffect(() => {
    console.log('Component mounted. Version: ', Date.now())
    console.log('Search params:', { street, city, state, zipCode }) // Add this log
  }, [street, city, state, zipCode])

  useEffect(() => {
    const fetchPropertyData = async () => {
      setLoading(true)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const data: PropertyData = {
        address: `${street}, ${city}, ${state} ${zipCode}`,
        beds: getRandomValue(2, 5),
        baths: getRandomValue(1, 3),
        sqft: getRandomValue(1500, 2500),
        yearBuilt: getRandomValue(1970, 2020),
        valuation: 450000,
        valuationTrend: 'up',
        valuationChange: 5.2,
        valuationRange: { min: 425000, max: 475000 },
        comparableHomes: { min: 400000, max: 500000 },
        taxHistory: [
          { year: 2018, amount: 4500, neighborhoodAvg: 4400 },
          { year: 2019, amount: 4300, neighborhoodAvg: 4600 },
          { year: 2020, amount: 4700, neighborhoodAvg: 4800 },
          { year: 2021, amount: 4600, neighborhoodAvg: 5000 },
          { year: 2022, amount: 5000, neighborhoodAvg: 5200 },
        ]
      }
      
      console.log('Fetched address:', data.address)
      setPropertyData(data)
      setLoading(false)
    }

    if (street && city && state && zipCode) {
      fetchPropertyData()
    } else {
      console.error('Missing address information')
      setLoading(false) // Set loading to false even if we don't have all the data
    }
  }, [street, city, state, zipCode])

  useEffect(() => {
    if (!mapsLoaded) {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`
      script.async = true
      script.onload = () => setMapsLoaded(true)
      document.head.appendChild(script)

      return () => {
        document.head.removeChild(script)
      }
    }
  }, [mapsLoaded])

  useEffect(() => {
    if (mapsLoaded && propertyData) {
      initMap(propertyData.address)
    }
  }, [mapsLoaded, propertyData])

  function initMap(address: string) {
    const mapElement = document.getElementById('map')
    if (mapElement && window.google) {
      if (!mapRef.current) {
        mapRef.current = new window.google.maps.Map(mapElement, {
          zoom: 15 // Increased zoom level for better visibility
        })
      }
      const geocoder = new window.google.maps.Geocoder()
      geocoder.geocode({ address: address }, (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
        if (status === 'OK' && results && results[0]) {
          const location = results[0].geometry.location
          mapRef.current?.setCenter(location)
          mapRef.current?.setZoom(15) // Ensure zoom is set after centering
          new window.google.maps.Marker({
            map: mapRef.current,
            position: location
          })
          console.log('Map centered on:', address, 'at', location.toString())
        } else {
          console.error('Geocode was not successful. Status:', status, 'Address:', address)
        }
      })
    } else {
      console.error('Google Maps API not loaded or map element not found')
    }
  }

  const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length >= 2) {
      return (
        <div className="bg-white p-4 shadow rounded">
          <p className="font-bold">{label}</p>
          <p className="text-blue-600">Your Property: ${payload[0]?.value?.toLocaleString() ?? 'N/A'}</p>
          <p className="text-green-600">Neighborhood Avg: ${payload[1]?.value?.toLocaleString() ?? 'N/A'}</p>
        </div>
      )
    }
    return null
  }

  const calculateSavings = () => {
    if (!propertyData) return 0
    const latestYear = propertyData.taxHistory[propertyData.taxHistory.length - 1]
    return latestYear.neighborhoodAvg - latestYear.amount
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (darkMode) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  if (!propertyData) {
    return <div className="flex justify-center items-center h-screen">No property data available. Please try again.</div>
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="flex-1 pt-16 container mx-auto px-4 py-8">
        <Link href="/get-started" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Get Started
        </Link>
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Property Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Property Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-lg font-semibold mb-4">{propertyData.address}</p>
                <div className="grid grid-cols-2 gap-4">
                  <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
                    <Bed className="h-5 w-5 mr-2 text-blue-600" />
                    <span>{propertyData.beds} Beds</span>
                  </motion.div>
                  <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
                    <Bath className="h-5 w-5 mr-2 text-blue-600" />
                    <span>{propertyData.baths} Baths</span>
                  </motion.div>
                  <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
                    <Square className="h-5 w-5 mr-2 text-blue-600" />
                    <span>{propertyData.sqft} sqft</span>
                  </motion.div>
                  <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
                    <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                    <span>Built in {propertyData.yearBuilt}</span>
                  </motion.div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Valuation Estimate</CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center mb-2">
                  <p className="text-3xl font-bold text-blue-600">${propertyData.valuation.toLocaleString()}</p>
                  <div className={`ml-2 flex items-center ${propertyData.valuationTrend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {propertyData.valuationTrend === 'up' ? <TrendingUp className="h-5 w-5 mr-1" /> : <TrendingDown className="h-5 w-5 mr-1" />}
                    <span className="text-sm font-semibold">{propertyData.valuationChange}%</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">Estimated range: ${propertyData.valuationRange.min.toLocaleString()} - ${propertyData.valuationRange.max.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Comparable homes in the area: ${propertyData.comparableHomes.min.toLocaleString()} - ${propertyData.comparableHomes.max.toLocaleString()}</p>
              </motion.div>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Property Location</CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <GoogleMap address={propertyData.address} />
              </motion.div>
            </CardContent>
          </Card>
          <div className="md:col-span-2 grid grid-cols-3 gap-6">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Historical Property Tax</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="h-64"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={propertyData.taxHistory}>
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                      <ReferenceLine y={propertyData.taxHistory[0].amount} stroke="red" strokeDasharray="3 3" />
                      <Line
                        type="monotone"
                        dataKey="amount"
                        name="Your Property"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 8 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="neighborhoodAvg"
                        name="Neighborhood Average"
                        stroke="#10b981"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </motion.div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Potential Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <p className="text-2xl font-bold text-green-600 mb-2">
                    ${calculateSavings().toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">
                    Estimated annual savings compared to the neighborhood average. Our advanced valuation tools can help you appeal your property tax assessment and potentially save this amount each year.
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}

export default function PropertyDetailsPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
      <PropertyDetails />
    </Suspense>
  )
}