'use client'

import dynamic from 'next/dynamic';
import DashboardHeader from '@/components/DashboardHeader';  // Adjust the import path as needed
import SideNav from '@/components/SideNav';  // Adjust the import path as needed
import { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Label, BarChart, Bar } from 'recharts';
import { TooltipProps } from 'recharts';

const MapWithNoSSR = dynamic(() => import('@/components/GoogleMap'), {
  ssr: false,
  loading: () => <p>Loading Map...</p>
});

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length >= 2) {
    return (
      <div className="bg-white p-4 shadow rounded">
        <p className="font-bold">{label}</p>
        <p className="text-blue-600">Your Property: ${payload[0]?.value?.toLocaleString() ?? 'N/A'}</p>
        <p className="text-green-600">Neighborhood Avg: ${payload[1]?.value?.toLocaleString() ?? 'N/A'}</p>
      </div>
    );
  }
  return null;
};

export default function Dashboard() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [marketTrendView, setMarketTrendView] = useState('state');

  const simulatedProperties = [
    {
      id: 1,
      address: '111 Broadway New York, New York',
      value: '$450,000',
      lastAssessment: '01/15/2023',
      taxRate: '1.2%',
      annualTax: '$4,200',
      coordinates: { lat: 40.7128, lng: -74.0060 },
      taxHistory: [
        { year: 2018, amount: 4200, neighborhoodAvg: 5500 },
        { year: 2019, amount: 4300, neighborhoodAvg: 5800 },
        { year: 2020, amount: 4700, neighborhoodAvg: 6100 },
        { year: 2021, amount: 4600, neighborhoodAvg: 6400 },
        { year: 2022, amount: 4200, neighborhoodAvg: 6700 },
      ]
    },
    {
      id: 2,  
      address: '456 Elm St, Othertown, USA',
      value: '$425,000',
      lastAssessment: '03/22/2023',
      taxRate: '1.1%',
      annualTax: '$4,675',
      coordinates: { lat: 40.7282, lng: -73.7949 },
      taxHistory: [
        { year: 2018, amount: 4200, neighborhoodAvg: 5200 },
        { year: 2019, amount: 4400, neighborhoodAvg: 5500 },
        { year: 2020, amount: 4600, neighborhoodAvg: 5800 },
        { year: 2021, amount: 4500, neighborhoodAvg: 6100 },
        { year: 2022, amount: 4800, neighborhoodAvg: 6400 },
      ]
    },
    {
      id: 3,
      address: '789 Oak Ave, Somewhere, USA',
      value: '$275,000',
      lastAssessment: '11/30/2022',
      taxRate: '1.3%',
      annualTax: '$3,575',
      coordinates: { lat: 40.6782, lng: -73.9442 },
      taxHistory: [
        { year: 2018, amount: 3200, neighborhoodAvg: 4200 },
        { year: 2019, amount: 3400, neighborhoodAvg: 4500 },
        { year: 2020, amount: 3600, neighborhoodAvg: 4800 },
        { year: 2021, amount: 3500, neighborhoodAvg: 5100 },
        { year: 2022, amount: 3800, neighborhoodAvg: 5400 },
      ]
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

  const simulatedMarketTrends = {
    state: [
      { year: 2018, valuation: 300000, propertyTax: 3000 },
      { year: 2019, valuation: 310000, propertyTax: 3100 },
      { year: 2020, valuation: 315000, propertyTax: 3150 },
      { year: 2021, valuation: 325000, propertyTax: 3250 },
      { year: 2022, valuation: 340000, propertyTax: 3400 },
    ],
    county: [
      { year: 2018, valuation: 280000, propertyTax: 2800 },
      { year: 2019, valuation: 290000, propertyTax: 2900 },
      { year: 2020, valuation: 300000, propertyTax: 3000 },
      { year: 2021, valuation: 310000, propertyTax: 3100 },
      { year: 2022, valuation: 320000, propertyTax: 3200 },
    ],
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
                          icon={property.address.includes('111 Broadway') ? 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' : undefined}
                        />
                      ))}
                    </GoogleMap>
                  </LoadScript>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="bg-white p-4 rounded-lg shadow-md mb-6">
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
              <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4 text-blue-900">Historical Property Tax</h2>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={selectedProperty ? selectedProperty.taxHistory : []}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 50,
                        bottom: 20,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year">
                        <Label value="Year" offset={-5} position="insideBottom" />
                      </XAxis>
                      <YAxis domain={['dataMin - 1000', 'dataMax + 1000']}>
                        <Label value="Tax Amount ($)" angle={-90} position="insideLeft" offset={-40} style={{ textAnchor: 'middle' }} />
                      </YAxis>
                      <Tooltip content={<CustomTooltip />} />
                      <Legend verticalAlign="top" height={36}/>
                      <Line type="monotone" dataKey="amount" name="Your Property" stroke="#8884d8" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="neighborhoodAvg" name="Neighborhood Average" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-blue-900">Market Trends</h2>
                  <div className="space-x-2">
                    <button
                      onClick={() => setMarketTrendView('state')}
                      className={`px-3 py-1 rounded ${marketTrendView === 'state' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                      State
                    </button>
                    <button
                      onClick={() => setMarketTrendView('county')}
                      className={`px-3 py-1 rounded ${marketTrendView === 'county' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                      County
                    </button>
                  </div>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={simulatedMarketTrends[marketTrendView]}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis yAxisId="left" orientation="left" stroke="#8884d8">
                        <Label value="Valuation ($)" angle={-90} position="insideLeft" />
                      </YAxis>
                      <YAxis yAxisId="right" orientation="right" stroke="#82ca9d">
                        <Label value="Property Tax ($)" angle={90} position="insideRight" />
                      </YAxis>
                      <Tooltip />
                      <Legend />
                      <Bar yAxisId="left" dataKey="valuation" fill="#8884d8" name="Valuation" />
                      <Bar yAxisId="right" dataKey="propertyTax" fill="#82ca9d" name="Property Tax" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
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
