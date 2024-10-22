'use client'

import dynamic from 'next/dynamic';
import DashboardHeader from '@/components/DashboardHeader';  // Adjust the import path as needed
import SideNav from '@/components/SideNav';  // Adjust the import path as needed
import { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapWithNoSSR = dynamic(() => import('@/components/GoogleMap'), {
  ssr: false,
  loading: () => <p>Loading Map...</p>
});

export default function Dashboard() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const simulatedProperties = [
    {
      id: 1,
      address: '111 Broadway New York, New York',
      value: '$450,000',
      lastAssessment: '01/15/2023',
      taxRate: '1.2%',
      annualTax: '$4,200',
      coordinates: { lat: 40.7128, lng: -74.0060 },
    },
    {
      id: 2,
      address: '456 Elm St, Othertown, USA',
      value: '$425,000',
      lastAssessment: '03/22/2023',
      taxRate: '1.1%',
      annualTax: '$4,675',
      coordinates: { lat: 40.7282, lng: -73.7949 },
    },
    {
      id: 3,
      address: '789 Oak Ave, Somewhere, USA',
      value: '$275,000',
      lastAssessment: '11/30/2022',
      taxRate: '1.3%',
      annualTax: '$3,575',
      coordinates: { lat: 40.6782, lng: -73.9442 },
    },
  ];

  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  const center = {
    lat: 40.7128,
    lng: -74.0060,
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader />
      <div className="flex">
        <SideNav />
        <main className="flex-grow p-8">
          <h1 className="text-3xl font-bold mb-6 text-blue-900">Dashboard Overview</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white p-4 rounded-lg shadow-md h-[calc(100vh-200px)]">
                <h2 className="text-xl font-semibold mb-4 text-blue-900">Property Map</h2>
                <div className="h-[calc(100%-2rem)]">
                  <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
                    <GoogleMap
                      mapContainerStyle={mapContainerStyle}
                      center={center}
                      zoom={10}
                    >
                      {simulatedProperties.map((property) => (
                        <Marker
                          key={property.id}
                          position={property.coordinates}
                          onClick={() => setSelectedProperty(property)}
                        />
                      ))}
                    </GoogleMap>
                  </LoadScript>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-blue-900">Property Information</h2>
                {selectedProperty ? (
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Address:</strong> {selectedProperty.address}</p>
                    <p><strong>Estimated Value:</strong> {selectedProperty.value}</p>
                    <p><strong>Last Assessment:</strong> {selectedProperty.lastAssessment}</p>
                    <p><strong>Tax Rate:</strong> {selectedProperty.taxRate}</p>
                    <p><strong>Annual Property Tax:</strong> <span className="text-red-600">{selectedProperty.annualTax}</span></p>
                  </div>
                ) : (
                  <p className="text-gray-500">Select a property on the map to view details</p>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <DashboardCard title="My Properties" count={simulatedProperties.length} link="/my-properties" />
            <DashboardCard title="Saved Searches" count={3} link="/saved-searches" />
            <DashboardCard title="Recent Market Trends" link="/market-trends" />
            <DashboardCard title="Investment Opportunities" count={8} link="/opportunities" />
            <DashboardCard title="Notifications" count={2} link="/notifications" />
            <DashboardCard title="Account Settings" link="/settings" />
          </div>
        </main>
      </div>
    </div>
  );
}

function DashboardCard({ title, count, link }: { title: string; count?: number; link: string }) {
  return (
    <a href={link} className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2 text-blue-900">{title}</h2>
      {count !== undefined && <p className="text-3xl font-bold text-blue-600">{count}</p>}
    </a>
  );
}
