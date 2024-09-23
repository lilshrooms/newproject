import React from 'react';
import Link from 'next/link';

export default function SideNav() {
  return (
    <nav className="bg-gray-800 text-white w-64 min-h-screen p-4 mt-16">
      <ul className="space-y-2">
        <li>
          <Link href="/dashboard" className="block py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 hover:text-blue-600 hover:font-bold transition-colors">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/my-properties" className="block py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 hover:text-blue-600 hover:font-bold transition-colors">
            My Properties
          </Link>
        </li>
        <li>
          <Link href="/search" className="block py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 hover:text-blue-600 hover:font-bold transition-colors">
            Search Properties
          </Link>
        </li>
        <li>
          <Link href="/market-trends" className="block py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 hover:text-blue-600 hover:font-bold transition-colors">
            Market Trends
          </Link>
        </li>
        <li>
          <Link href="/calculator" className="block py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 hover:text-blue-600 hover:font-bold transition-colors">
            Investment Calculator
          </Link>
        </li>
        <li>
          <Link href="/settings" className="block py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 hover:text-blue-600 hover:font-bold transition-colors">
            Account Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
}