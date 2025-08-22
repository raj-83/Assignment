import React from 'react';
import OnboardingSteps from '../OnboardingSteps';
import StatCards from '../StatCards';
import OperationsCards from '../OperationsCards';
import SalesAnalytics from '../SalesAnalytics';

const HomeView = ({ onOpenModal }) => {
  return (
    <div className="space-y-6">
      <OnboardingSteps />
      <StatCards />
      <OperationsCards onOpenModal={onOpenModal} />
      <SalesAnalytics />
    </div>
  );
};

export default HomeView;
