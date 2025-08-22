import React from 'react';

const CommodityView = () => {
  return (
    <div className="bg-white rounded-2xl shadow-soft p-6">
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">📦</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Product Management</h2>
        <p className="text-gray-600 mb-6">Add, edit, and manage your product catalog and inventory.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Active Products</h3>
            <p className="text-2xl font-bold text-green-600">142</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Low Stock</h3>
            <p className="text-2xl font-bold text-orange-600">8</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Out of Stock</h3>
            <p className="text-2xl font-bold text-red-600">3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommodityView;
