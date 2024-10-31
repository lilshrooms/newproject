import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const HomePage: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = React.useState<any>(null);
  const mapCenter = { lat: 40.7128, lng: -74.0060 };
  const zoom = 12;

  const featuredProperties = [
    { id: 1, title: 'Luxury Condo', price: '$500,000', location: { lat: 40.7128, lng: -74.0060 } },
    { id: 2, title: 'Suburban House', price: '$350,000', location: { lat: 40.7282, lng: -73.7949 } },
    { id: 3, title: 'Downtown Apartment', price: '$250,000', location: { lat: 40.7589, lng: -73.9851 } },
  ];

  return (
    <div className="flex flex-col h-screen">
      <section className="bg-red-600 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Find Your Dream Home</h1>
          <p className="text-xl mb-8">Search properties for sale and rent across the country</p>
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <form className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 lg:w-3/5 px-2 mb-4 md:mb-0">
                <input type="text" placeholder="Enter an address, neighborhood, city, or ZIP code" className="w-full px-4 py-2 rounded border focus:outline-none focus:border-red-500" />
              </div>
              <div className="w-full md:w-1/4 lg:w-1/5 px-2 mb-4 md:mb-0">
                <select className="w-full px-4 py-2 rounded border focus:outline-none focus:border-red-500">
                  <option>For Sale</option>
                  <option>For Rent</option>
                </select>
              </div>
              <div className="w-full md:w-1/4 lg:w-1/5 px-2">
                <button type="submit" className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Search</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="flex-grow">
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={mapCenter}
            zoom={zoom}
          >
            {featuredProperties.map((property) => (
              <Marker
                key={property.id}
                position={property.location}
                onClick={() => setSelectedProperty(property)}
              />
            ))}
            {selectedProperty && (
              <InfoWindow
                position={selectedProperty.location}
                onCloseClick={() => setSelectedProperty(null)}
              >
                <div>
                  <h3 className="text-lg font-semibold">{selectedProperty.title}</h3>
                  <p className="text-gray-600">{selectedProperty.price}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </section>
    </div>
  );
};

export default HomePage;

export {};
