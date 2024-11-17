'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js'
import { useSearchParams } from 'next/navigation';
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"

const supabaseUrl = 'https://ibktlbeduwmyvnvoubha.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlia3RsYmVkdXdteXZudm91YmhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyNDM3ODMsImV4cCI6MjA0MTgxOTc4M30.mVqi9p5DDgCBr7a2usiNFiRGiinbAa4a7Ig8Hvrke9o';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function AppealPage() {
  const [appeals, setAppeals] = useState([]);
  const [name, setName] = useState('John Appleseed');
  const [email, setEmail] = useState('johnnyd@homebase.com');
  const [street, setStreet] = useState('111 Broadway');
  const [city, setCity] = useState('New York');
  const [state, setState] = useState('NY');
  const [zipCode, setZipCode] = useState('10001');
  const [appealText, setAppealText] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

  const searchParams = useSearchParams();

  useEffect(() => {
    fetchAppeals();
    setStreet(searchParams.get('street') || '111 Broadway');
    setCity(searchParams.get('city') || 'New York');
    setState(searchParams.get('state') || 'NY');
    setZipCode(searchParams.get('zipCode') || '10001');
  }, [searchParams]);

  async function fetchAppeals() {
    const { data, error } = await supabase
      .from('appeals')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching appeals:', error);
    } else {
      setAppeals(data);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
        // First, submit to Supabase
        const { data, error } = await supabase
            .from('appeals')
            .insert([{ 
                name, 
                email, 
                appeal: appealText,
                street,
                city,
                state,
                zipCode
            }]);

        if (error) throw error;

        // Then, call the PDF filling API
        const pdfResponse = await fetch('/api/pdf', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                street,
                city,
                state,
                zipCode,
                appeal: appealText
            })
        });

        const pdfResult = await pdfResponse.json();

        if (!pdfResult.success) {
            throw new Error(pdfResult.error);
        }

        // Add download link or success message
        setShowConfirmation(true);
        if (pdfResult.success) {
            setPdfUrl(pdfResult.filePath);
        }
        
        // Reset form
        setName('John Appleseed');
        setEmail('johna@homebase.com');
        setStreet('111 Broadway');
        setCity('New York');
        setState('NY');
        setZipCode('10001');
        setAppealText('');
        fetchAppeals();

    } catch (error) {
        console.error('Error processing appeal:', error);
        // Handle error (show error message to user)
    } finally {
        setIsSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 mt-20">
        <h1 className="text-4xl font-bold mb-8 text-blue-800 dark:text-white">HomeBase Appeal Assistant</h1>
        <form onSubmit={handleSubmit} className="mb-12 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="street" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Street:</label>
            <input
              type="text"
              id="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
            />
          </div>
          <div className="mb-6 grid grid-cols-3 gap-4">
            <div>
              <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">City:</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              />
            </div>
            <div>
              <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">State:</label>
              <input
                type="text"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              />
            </div>
            <div>
              <label htmlFor="zipCode" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Zip Code:</label>
              <input
                type="text"
                id="zipCode"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="appeal" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Appeal Details:</label>
            <textarea
              id="appeal"
              value={appealText}
              onChange={(e) => setAppealText(e.target.value)}
              required
              rows={6}
              placeholder="Please provide additional details about your home that you believe would help your appeal..."
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Appeal'}
          </button>
        </form>

        {showConfirmation && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-8 rounded-md" role="alert">
            Your appeal has been submitted successfully!
          </div>
        )}

        {showConfirmation && pdfUrl && (
            <div className="mt-4">
                <a 
                    href={pdfUrl}
                    download
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    Download Filled Form
                </a>
            </div>
        )}

        <div className="appeals-list bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Submitted Appeals</h2>
          {appeals.map((appeal, index) => (
            <div key={appeal.id} className="border-b border-gray-200 dark:border-gray-700 py-4 last:border-b-0">
              <p className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Appeal #{index + 1}</p>
              <p className="text-gray-600 dark:text-gray-300"><strong>Name:</strong> {appeal.name}</p>
              <p className="text-gray-600 dark:text-gray-300"><strong>Email:</strong> {appeal.email}</p>
              <p className="text-gray-600 dark:text-gray-300"><strong>Address:</strong> {appeal.street}, {appeal.city}, {appeal.state} {appeal.zipCode}</p>
              <p className="text-gray-600 dark:text-gray-300"><strong>Details:</strong> {appeal.appeal}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}