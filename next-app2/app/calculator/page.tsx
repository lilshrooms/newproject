'use client';

import { useState } from 'react';
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function TaxCalculator() {
  const [homeValue, setHomeValue] = useState('');
  const [taxRate, setTaxRate] = useState('2.5'); // Default tax rate
  const [zipCode, setZipCode] = useState('');
  const [calculatedTax, setCalculatedTax] = useState<number | null>(null);
  const [monthlyTax, setMonthlyTax] = useState<number | null>(null);

  const fetchTaxRateByZipCode = async (zip: string) => {
    // Simulate fetching tax rate based on zip code
    // In a real application, you would replace this with an API call
    const mockTaxRates = {
      '10001': '2.7',
      '90210': '1.5',
      '30301': '2.0',
    };
    return mockTaxRates[zip] || '2.5'; // Default to 2.5 if zip code not found
  };

  const calculateTax = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const value = parseFloat(homeValue.replace(/,/g, ''));
    let rate = parseFloat(taxRate);

    if (zipCode) {
      const fetchedRate = await fetchTaxRateByZipCode(zipCode);
      rate = parseFloat(fetchedRate);
      setTaxRate(fetchedRate);
    }
    
    if (!isNaN(value) && !isNaN(rate)) {
      const annualTax = (value * (rate / 100));
      const monthly = annualTax / 12;
      
      setCalculatedTax(annualTax);
      setMonthlyTax(monthly);
    }
  };

  const formatCurrency = (value: string) => {
    const digits = value.replace(/\D/g, '');
    return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleHomeValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrency(e.target.value);
    setHomeValue(formatted);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 mt-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-blue-800 dark:text-white">
            Property Tax Calculator
          </h1>
          
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
            <form onSubmit={calculateTax} className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Home Value ($)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <input
                    type="text"
                    value={homeValue}
                    onChange={handleHomeValueChange}
                    className="w-full pl-8 p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Enter home value"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Tax Rate (%) or Zip Code
                </label>
                <div className="relative flex space-x-4">
                  <input
                    type="number"
                    value={taxRate}
                    onChange={(e) => setTaxRate(e.target.value)}
                    step="0.01"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Enter tax rate"
                  />
                  <input
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Enter zip code"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Calculate Tax
              </button>
            </form>
          </div>

          {calculatedTax !== null && monthlyTax !== null && (
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                Results
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-300">Annual Property Tax:</p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    ${calculatedTax.toLocaleString('en-US', { maximumFractionDigits: 2 })}
                  </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-300">Monthly Property Tax:</p>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                    ${monthlyTax.toLocaleString('en-US', { maximumFractionDigits: 2 })}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <button
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                  onClick={() => alert('Feature coming soon!')}
                >
                  Want to know how much your neighbors or comparable homes are paying in taxes?
                </button>
              </div>
            </div>
          )}

          <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-blue-800 dark:text-blue-300">
              About Property Taxes
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Property taxes are calculated based on your home's assessed value and your local tax rate. 
              Rates vary by location and may change annually. This calculator provides an estimate; 
              actual taxes may differ based on local assessments and exemptions.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}