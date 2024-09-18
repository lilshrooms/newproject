import { useEffect, useRef } from 'react'

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''

interface GoogleMapProps {
  address: string
}

export default function GoogleMap({ address }: GoogleMapProps) {
  const mapRef = useRef<google.maps.Map | null>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`
    script.async = true
    script.onload = () => initMap()
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [address])

  function initMap() {
    const mapElement = document.getElementById('map')
    if (mapElement && window.google) {
      mapRef.current = new window.google.maps.Map(mapElement, {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 13
      })

      const geocoder = new window.google.maps.Geocoder()
      geocoder.geocode({ address: address }, (results: google.maps.GeocoderResult[] | null, status: google.maps.GeocoderStatus) => {
        if (status === google.maps.GeocoderStatus.OK && results && results[0]) {
          const location = results[0].geometry.location
          mapRef.current?.setCenter(location)
          new window.google.maps.Marker({
            map: mapRef.current,
            position: location
          })
        } else {
          console.error('Geocode was not successful for the following reason:', status)
          console.error('Address provided:', address)
        }
      })
    } else {
      console.error('Google Maps API not loaded or map element not found')
    }
  }

  return <div id="map" style={{ width: '100%', height: '300px' }}></div>
}