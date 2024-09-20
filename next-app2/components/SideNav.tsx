import React from 'react';
import Link from 'next/link';

export default function SideNav() {
  return (
    <nav className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <ul className="space-y-2">
        <li><Link href="/dashboard" className="block py-2 px-4 hover:bg-gray-700">Dashboard</Link></li>
        <li><Link href="/my-properties" className="block py-2 px-4 hover:bg-gray-700">My Properties</Link></li>
        <li><Link href="/search" className="block py-2 px-4 hover:bg-gray-700">Search Properties</Link></li>
        <li><Link href="/market-trends" className="block py-2 px-4 hover:bg-gray-700">Market Trends</Link></li>
        <li><Link href="/calculator" className="block py-2 px-4 hover:bg-gray-700">Investment Calculator</Link></li>
        <li><Link href="/settings" className="block py-2 px-4 hover:bg-gray-700">Account Settings</Link></li>
      </ul>
    </nav>
  );
}