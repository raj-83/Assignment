import React from 'react';

const StatCard = ({ title, mainValue, secondaryValue, icon, iconBgColor }) => {
  return (
    <div className="bg-white dark:bg-dark-800 rounded-xl shadow-soft dark:shadow-soft-dark p-6 hover:shadow-medium dark:hover:shadow-medium-dark transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-2">{title}</h3>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-gray-800 dark:text-white">{mainValue}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{secondaryValue}</p>
          </div>
        </div>
        <div className={`w-12 h-12 ${iconBgColor} rounded-full flex items-center justify-center`}>
          <span className="text-white text-xl">{icon}</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
