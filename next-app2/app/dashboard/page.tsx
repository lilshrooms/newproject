import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => <p>Loading Map...</p>
});

export default function Dashboard() {
  const simulatedProperties = [
    {
      id: 1,
      address: '111 Broadway New York, New York',
      value: '$450,000',
      lastAssessment: '01/15/2023',
      taxRate: '1.2%',
      annualTax: '$4,200',
      coordinates: [40.7128, -74.0060],
    },
    {
      id: 2,
      address: '456 Elm St, Othertown, USA',
      value: '$425,000',
      lastAssessment: '03/22/2023',
      taxRate: '1.1%',
      annualTax: '$4,675',
      coordinates: [40.7282, -73.7949],
    },
    {
      id: 3,
      address: '789 Oak Ave, Somewhere, USA',
      value: '$275,000',
      lastAssessment: '11/30/2022',
      taxRate: '1.3%',
      annualTax: '$3,575',
      coordinates: [40.6782, -73.9442],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader />
      <div className="flex">
        <SideNav />
        <main className="flex-grow p-8">
          <h1 className="text-3xl font-bold mb-6 text-blue-900">Dashboard Overview</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white p-4 rounded-lg shadow-md h-96">
                <h2 className="text-xl font-semibold mb-4 text-blue-900">Property Map</h2>
                <MapWithNoSSR properties={simulatedProperties} />
              </div>
            </div>
            <div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-blue-900">Property Information</h2>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Address:</strong> {simulatedProperties[0].address}</p>
                  <p><strong>Estimated Value:</strong> {simulatedProperties[0].value}</p>
                  <p><strong>Last Assessment:</strong> {simulatedProperties[0].lastAssessment}</p>
                  <p><strong>Tax Rate:</strong> {simulatedProperties[0].taxRate}</p>
                  <p>
                    <strong>Annual Property Tax:</strong> {simulatedProperties[0].annualTax}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <DashboardCard title="My Properties" count={simulatedProperties.length} link="/my-properties" />
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
      <h2 className="text-xl font-semibold mb-2 text-blue-900">{title}</h2>
      {count !== undefined && <p className="text-3xl font-bold text-blue-600">{count}</p>}
    </a>
  );
}