import React, { useState } from 'react';

const Sidebar = ({ activeView, onViewChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navigationItems = [
    { id: 'home', name: 'Home', icon: '🏠' },
    { id: 'live', name: 'Live', icon: '▶️' },
    { id: 'shop', name: 'Shop', icon: '🛍️', hasDropdown: true },
    { id: 'commodity', name: 'Commodity', icon: '📦' },
    { id: 'order', name: 'Order', icon: '📋' },
    { id: 'data', name: 'Data', icon: '📊' },
    { id: 'assets', name: 'Assets', icon: '💰' },
    { id: 'application', name: 'Application', icon: '🔲', hasDropdown: true },
    { id: 'setup', name: 'Set up', icon: '⚙️' },
  ];

  const handleNavigationClick = (viewId) => {
    onViewChange(viewId);
    // Close mobile sidebar after navigation
    if (isCollapsed) {
      setIsCollapsed(false);
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {isCollapsed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsCollapsed(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50
        transform transition-transform duration-300 ease-in-out
        ${isCollapsed ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        w-64 bg-white dark:bg-dark-800 shadow-soft dark:shadow-soft-dark flex flex-col
      `}>
        {/* Logo Section */}
        <div className="p-6 border-b border-gray-100 dark:border-dark-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-gray-800 dark:text-white">MoneyWeaver</span>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Aoki's shop</span>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300 text-xs rounded-full">Basic</span>
              <span className="text-gray-400 dark:text-gray-500">▼</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navigationItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleNavigationClick(item.id)}
              className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
                activeView === item.id
                  ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-l-4 border-red-500'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-700 hover:text-gray-800 dark:hover:text-white'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </div>
              {item.hasDropdown && (
                <span className="text-gray-400 dark:text-gray-500 text-sm">▼</span>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile toggle button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-dark-800 rounded-lg shadow-md dark:shadow-soft-dark"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <span className="text-xl text-gray-800 dark:text-white">☰</span>
      </button>
    </>
  );
};

export default Sidebar;
