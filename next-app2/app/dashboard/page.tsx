import React from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import SideNav from '@/components/SideNav';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader />
      <div className="flex">
        <SideNav />
        <main className="flex-grow p-8">
          <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DashboardCard title="My Properties" count={5} link="/my-properties" />
            <DashboardCard title="Saved Searches" count={3} link="/saved-searches" />
            <DashboardCard title="Recent Market Trends" link="/market-trends" />
            <DashboardCard title="Investment Opportunities" count={8} link="/opportunities" />
            <DashboardCard title="Notifications" count={2} link="/notifications" />
            <DashboardCard title="Account Settings" link="/settings" />
          </div>
        </main>
      </div>
    </div>
  );
}

function DashboardCard({ title, count, link }: { title: string; count?: number; link: string }) {
  return (
    <a href={link} className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {count !== undefined && <p className="text-3xl font-bold text-blue-600">{count}</p>}
    </a>
  );
}