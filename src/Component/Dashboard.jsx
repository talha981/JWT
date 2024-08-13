import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Total Sales</h2>
          <p className="text-3xl font-bold text-blue-600">$12,345</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Active Users</h2>
          <p className="text-3xl font-bold text-green-600">1,234</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Pending Orders</h2>
          <p className="text-3xl font-bold text-yellow-600">56</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Revenue This Month</h2>
          <p className="text-3xl font-bold text-red-600">$5,678</p>
        </div>

        {/* Card 5 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">New Signups</h2>
          <p className="text-3xl font-bold text-purple-600">78</p>
        </div>

        {/* Card 6 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Support Tickets</h2>
          <p className="text-3xl font-bold text-teal-600">23</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
