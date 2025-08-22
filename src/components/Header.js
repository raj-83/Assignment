import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="bg-white dark:bg-dark-800 shadow-soft dark:shadow-soft-dark px-6 py-4 border-b border-gray-100 dark:border-dark-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Dashboard</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
            Notice
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
            Help center
          </a>
          <ThemeToggle />
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">A</span>
            </div>
            <span className="text-gray-400 dark:text-gray-500">▼</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
