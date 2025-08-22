import React from 'react';
import StatCard from './StatCard';

const StatCards = () => {
  const statsData = [
    {
      title: 'Payment amount',
      mainValue: '8,992',
      secondaryValue: 'Yesterday 8638',
      icon: '¥',
      iconBgColor: 'bg-red-500'
    },
    {
      title: 'Payment order',
      mainValue: '793',
      secondaryValue: 'Yesterday 753',
      icon: '📋',
      iconBgColor: 'bg-blue-500'
    },
    {
      title: 'Paying customer',
      mainValue: '280',
      secondaryValue: 'Yesterday 320',
      icon: '👥',
      iconBgColor: 'bg-purple-500'
    },
    {
      title: 'Pending orders',
      mainValue: '480',
      secondaryValue: 'Yesterday 470',
      icon: '🚚',
      iconBgColor: 'bg-green-500'
    },
    {
      title: 'Live stream viewers',
      mainValue: '23,466',
      secondaryValue: 'Yesterday 22089',
      icon: '👁️',
      iconBgColor: 'bg-pink-500'
    },
    {
      title: 'New attention',
      mainValue: '4,890',
      secondaryValue: 'Yesterday 3800',
      icon: '⭐',
      iconBgColor: 'bg-yellow-500'
    },
    {
      title: 'Cumulative attention',
      mainValue: '135,743',
      secondaryValue: 'Yesterday 130493',
      icon: '📈',
      iconBgColor: 'bg-indigo-500'
    },
    {
      title: 'Number of orders',
      mainValue: '5,249',
      secondaryValue: 'Yesterday 4680',
      icon: '📦',
      iconBgColor: 'bg-teal-500'
    }
  ];

  return (
    <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-soft dark:shadow-soft-dark p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Today's data</h2>
        <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
          More
        </a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            mainValue={stat.mainValue}
            secondaryValue={stat.secondaryValue}
            icon={stat.icon}
            iconBgColor={stat.iconBgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default StatCards;
