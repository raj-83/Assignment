import React from 'react';
import OperationsCard from './OperationsCard';

const OperationsCards = ({ onOpenModal }) => {
  const operationsData = [
    {
      icon: '📺',
      title: 'Small telecast live',
      description: 'Live sales in WeChat',
      iconBgColor: 'bg-pink-500',
      modalTitle: 'Live Streaming Tools',
      modalContent: 'Configure your live streaming settings, manage broadcast schedules, and monitor viewer engagement in real-time.'
    },
    {
      icon: 'S',
      title: 'Mini Program Store',
      description: 'WeChat Mini Program Store',
      iconBgColor: 'bg-green-500',
      modalTitle: 'Mini Program Management',
      modalContent: 'Set up and customize your WeChat Mini Program store, manage product listings, and configure payment options.'
    },
    {
      icon: '🌐',
      title: 'Distribution market',
      description: 'One-click promotion',
      iconBgColor: 'bg-blue-500',
      modalTitle: 'Distribution & Marketing',
      modalContent: 'Access our distribution network, set up affiliate programs, and launch targeted marketing campaigns.'
    },
    {
      icon: '🎫',
      title: 'Coupon',
      description: 'Store marketing essentials',
      iconBgColor: 'bg-red-500',
      modalTitle: 'Coupon Management',
      modalContent: 'Create and manage discount coupons, promotional codes, and special offers to boost sales and customer retention.'
    },
    {
      icon: '🏗️',
      title: 'Store construction',
      description: 'Can be customized',
      iconBgColor: 'bg-blue-500',
      modalTitle: 'Store Customization',
      modalContent: 'Customize your store appearance, layout, and branding to create a unique shopping experience for your customers.'
    },
    {
      icon: '📢',
      title: 'Promoting ads',
      description: 'WeChat billion-level exposure',
      iconBgColor: 'bg-red-500',
      modalTitle: 'Advertising Campaigns',
      modalContent: 'Launch targeted advertising campaigns on WeChat and other platforms to reach millions of potential customers.'
    },
    {
      icon: '🎁',
      title: 'Promotion rebate',
      description: 'Help you sell goods',
      iconBgColor: 'bg-red-500',
      modalTitle: 'Rebate & Rewards',
      modalContent: 'Set up customer reward programs, referral bonuses, and cashback incentives to encourage repeat purchases.'
    },
    {
      icon: '💰',
      title: 'Asset Management',
      description: 'Income and withdrawal',
      iconBgColor: 'bg-green-500',
      modalTitle: 'Financial Management',
      modalContent: 'Track your revenue, manage payouts, view transaction history, and monitor your financial performance.'
    }
  ];

  const handleCardClick = (operation) => {
    onOpenModal(operation.modalTitle, operation.modalContent);
  };

  return (
    <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-soft dark:shadow-soft-dark p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Operations Assistant</h2>
        <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
          More
        </a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {operationsData.map((operation, index) => (
          <div key={index} onClick={() => handleCardClick(operation)}>
            <OperationsCard
              icon={operation.icon}
              title={operation.title}
              description={operation.description}
              iconBgColor={operation.iconBgColor}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OperationsCards;
