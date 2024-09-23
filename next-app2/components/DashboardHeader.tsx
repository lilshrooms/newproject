import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bell } from 'lucide-react'; 

export default function DashboardHeader() {
  const hasNotification = true; // this will be dynamically set based on your notification logic. right now it's a placeholder

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link className="flex items-center justify-center" href="/dashboard">
              <Image
                src="/images/logo.png"
                alt="HomeBase Logo"
                width={120}
                height={120}
                className="mr-2 cursor-pointer"
                style={{ objectFit: 'contain' }}
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6 ml-auto">
            <Link className="relative text-sm font-medium text-gray-800 hover:text-blue-600 hover:font-bold transition-colors" href="/notifications">
              <Bell className="h-6 w-6" />
              {hasNotification && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  1
                </span>
              )}
            </Link>
            <Link className="text-sm font-medium text-gray-800 hover:text-blue-600 hover:font-bold transition-colors" href="/profile">
              Profile
            </Link>
            <Link className="text-sm font-medium text-gray-800 hover:text-blue-600 hover:font-bold transition-colors" href="/logout">
              Logout
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}