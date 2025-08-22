import React from 'react';

const OnboardingSteps = () => {
  const steps = [
    {
      id: 1,
      title: 'Certification',
      description: 'Upload qualification information',
      gradient: 'from-pink-500 to-red-500',
      icon: '📋'
    },
    {
      id: 2,
      title: 'Upload a product',
      description: 'Fill in product information',
      gradient: 'from-blue-500 to-purple-500',
      icon: '📦'
    },
    {
      id: 3,
      title: 'Open for sale',
      description: 'Choose to open any sales channel',
      gradient: 'from-purple-500 to-pink-500',
      icon: '🛒'
    }
  ];

  return (
    <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-soft dark:shadow-soft-dark p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Well begun is half done
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Complete the following steps to sell.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`bg-gradient-to-r ${step.gradient} rounded-xl p-6 text-white relative overflow-hidden`}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-2xl">{step.icon}</span>
                  <span className="text-sm font-medium opacity-90">
                    {step.id}. {step.title}
                  </span>
                </div>
                <p className="text-sm opacity-90">{step.description}</p>
              </div>
              <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200">
                GO
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnboardingSteps;
