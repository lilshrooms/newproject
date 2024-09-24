import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, Home, Search, TrendingUp, Calculator, Settings } from 'lucide-react';

export default function SideNav() {
  return (
    <nav className="bg-blue-900 text-white w-64 min-h-screen p-4 mt-16">
      <ul className="space-y-2">
        <li>
          <Link href="/dashboard" className="flex items-center py-2 px-4 text-sm font-medium text-white hover:bg-blue-800 hover:text-blue-200 hover:font-bold transition-colors">
            <LayoutDashboard className="mr-3 h-5 w-5" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/my-properties" className="flex items-center py-2 px-4 text-sm font-medium text-white hover:bg-blue-800 hover:text-blue-200 hover:font-bold transition-colors">
            <Home className="mr-3 h-5 w-5" />
            My Properties
          </Link>
        </li>
        <li>
          <Link href="/search" className="flex items-center py-2 px-4 text-sm font-medium text-white hover:bg-blue-800 hover:text-blue-200 hover:font-bold transition-colors">
            <Search className="mr-3 h-5 w-5" />
            Search Properties
          </Link>
        </li>
        <li>
          <Link href="/market-trends" className="flex items-center py-2 px-4 text-sm font-medium text-white hover:bg-blue-800 hover:text-blue-200 hover:font-bold transition-colors">
            <TrendingUp className="mr-3 h-5 w-5" />
            Market Trends
          </Link>
        </li>
        <li>
          <Link href="/calculator" className="flex items-center py-2 px-4 text-sm font-medium text-white hover:bg-blue-800 hover:text-blue-200 hover:font-bold transition-colors">
            <Calculator className="mr-3 h-5 w-5" />
            Investment Calculator
          </Link>
        </li>
        <li>
          <Link href="/settings" className="flex items-center py-2 px-4 text-sm font-medium text-white hover:bg-blue-800 hover:text-blue-200 hover:font-bold transition-colors">
            <Settings className="mr-3 h-5 w-5" />
            Account Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
}