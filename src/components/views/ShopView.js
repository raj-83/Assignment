import React from 'react';

const ShopView = () => {
  return (
    <div className="bg-white rounded-2xl shadow-soft p-6">
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">🛍️</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Shop Management</h2>
        <p className="text-gray-600 mb-6">Configure your store settings and manage your shop profile.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Total Products</h3>
            <p className="text-2xl font-bold text-blue-600">156</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Categories</h3>
            <p className="text-2xl font-bold text-purple-600">12</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Store Rating</h3>
            <p className="text-2xl font-bold text-yellow-600">4.8★</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopView;
