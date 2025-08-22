import React from 'react';

const AssetsView = () => {
  return (
    <div className="bg-white rounded-2xl shadow-soft p-6">
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">💰</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Asset Management</h2>
        <p className="text-gray-600 mb-6">Monitor your financial assets, revenue, and payment processing.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Total Revenue</h3>
            <p className="text-2xl font-bold text-green-600">¥89,247</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Pending Payout</h3>
            <p className="text-2xl font-bold text-blue-600">¥12,450</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Available Balance</h3>
            <p className="text-2xl font-bold text-purple-600">¥5,892</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetsView;
