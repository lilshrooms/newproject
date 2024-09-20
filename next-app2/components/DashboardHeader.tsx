import React from 'react';
import Link from 'next/link';

export default function DashboardHeader() {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/dashboard" className="text-2xl font-bold text-blue-600">
          Property Focus
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/notifications" className="text-gray-600 hover:text-blue-600">Notifications</Link></li>
            <li><Link href="/profile" className="text-gray-600 hover:text-blue-600">Profile</Link></li>
            <li><Link href="/logout" className="text-gray-600 hover:text-blue-600">Logout</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}