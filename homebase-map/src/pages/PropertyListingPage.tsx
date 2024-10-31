import React from 'react';

const PropertyListingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Properties for Sale</h1>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/4 px-4 mb-8">
          {/* Filters */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            {/* Add filter options here */}
          </div>
        </div>
        <div className="w-full lg:w-3/4 px-4">
          {/* Property listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Add property listing cards here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListingPage;