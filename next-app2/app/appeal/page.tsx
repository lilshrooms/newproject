'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js'
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"

const supabaseUrl = 'https://ibktlbeduwmyvnvoubha.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlia3RsYmVkdXdteXZudm91YmhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyNDM3ODMsImV4cCI6MjA0MTgxOTc4M30.mVqi9p5DDgCBr7a2usiNFiRGiinbAa4a7Ig8Hvrke9o';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function AppealPage() {
  const [appeals, setAppeals] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [appealText, setAppealText] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    fetchAppeals();
  }, []);

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

    const { data, error } = await supabase
      .from('appeals')
      .insert([{ name, email, appeal: appealText }]);

    if (error) {
      console.error('Error submitting appeal:', error);
    } else {
      setShowConfirmation(true);
      setName('');
      setEmail('');
      setAppealText('');
      fetchAppeals();
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 mt-20"> {/* Added mt-20 for top margin */}
        <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">Appeal Process</h1>
        <form onSubmit={handleSubmit} className="mb-12 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="appeal" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Appeal Details:</label>
            <textarea
              id="appeal"
              value={appealText}
              onChange={(e) => setAppealText(e.target.value)}
              required
              rows={4}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
            Submit Appeal
          </button>
        </form>

        {showConfirmation && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-8 rounded-md" role="alert">
            Your appeal has been submitted successfully!
          </div>
        )}

        <div className="appeals-list bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Submitted Appeals</h2>
          {appeals.map((appeal, index) => (
            <div key={appeal.id} className="border-b border-gray-200 dark:border-gray-700 py-4 last:border-b-0">
              <p className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Appeal #{index + 1}</p>
              <p className="text-gray-600 dark:text-gray-300"><strong>Name:</strong> {appeal.name}</p>
              <p className="text-gray-600 dark:text-gray-300"><strong>Email:</strong> {appeal.email}</p>
              <p className="text-gray-600 dark:text-gray-300"><strong>Details:</strong> {appeal.appeal}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}