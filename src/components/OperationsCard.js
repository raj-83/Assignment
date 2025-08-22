import React from 'react';

const OperationsCard = ({ icon, title, description, iconBgColor }) => {
  return (
    <div className="bg-white dark:bg-dark-800 rounded-xl shadow-soft dark:shadow-soft-dark p-6 hover:shadow-medium dark:hover:shadow-medium-dark transition-all duration-200 cursor-pointer group">
      <div className="flex items-start space-x-4">
        <div className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
          <span className="text-white text-xl">{icon}</span>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default OperationsCard;
