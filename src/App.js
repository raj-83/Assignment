import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Modal from './components/Modal';

// Import all view components
import HomeView from './components/views/HomeView';
import LiveView from './components/views/LiveView';
import ShopView from './components/views/ShopView';
import CommodityView from './components/views/CommodityView';
import OrderView from './components/views/OrderView';
import DataView from './components/views/DataView';
import AssetsView from './components/views/AssetsView';
import ApplicationView from './components/views/ApplicationView';
import SetupView from './components/views/SetupView';

function App() {
  const [activeView, setActiveView] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');

  const handleViewChange = (viewId) => {
    setActiveView(viewId);
  };

  const handleOpenModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Function to render the appropriate view based on activeView state
  const renderActiveView = () => {
    switch (activeView) {
      case 'home':
        return <HomeView onOpenModal={handleOpenModal} />;
      case 'live':
        return <LiveView />;
      case 'shop':
        return <ShopView />;
      case 'commodity':
        return <CommodityView />;
      case 'order':
        return <OrderView />;
      case 'data':
        return <DataView />;
      case 'assets':
        return <AssetsView />;
      case 'application':
        return <ApplicationView />;
      case 'setup':
        return <SetupView />;
      default:
        return <HomeView onOpenModal={handleOpenModal} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="App">
        <Layout>
          <Sidebar activeView={activeView} onViewChange={handleViewChange} />
          <div className="flex-1 flex flex-col lg:ml-0">
            <Header />
            <main className="flex-1 p-4 lg:p-6 overflow-y-auto">
              <div className="max-w-7xl mx-auto">
                {renderActiveView()}
              </div>
            </main>
          </div>
        </Layout>

        {/* Modal */}
        <Modal 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
          title={modalTitle}
        >
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {modalContent}
            </p>
            <div className="flex space-x-3 pt-4">
              <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
              <button 
                onClick={handleCloseModal}
                className="flex-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </ThemeProvider>
  );
}

export default App;
