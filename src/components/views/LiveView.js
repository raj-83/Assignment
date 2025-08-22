import React from 'react';

const LiveView = () => {
  return (
    <div className="bg-white rounded-2xl shadow-soft p-6">
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">▶️</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Live Streaming</h2>
        <p className="text-gray-600 mb-6">Manage your live streaming sessions and monitor viewer engagement.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Active Streams</h3>
            <p className="text-2xl font-bold text-red-600">3</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Total Viewers</h3>
            <p className="text-2xl font-bold text-blue-600">1,247</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Engagement Rate</h3>
            <p className="text-2xl font-bold text-green-600">87%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveView;
