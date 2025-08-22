import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DataView = () => {
  const [timeRange, setTimeRange] = useState('weekly');

  // Weekly data
  const weeklyData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Revenue (¥)',
        data: [1200, 1900, 1500, 2100, 1800, 2500, 2200],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      },
      {
        label: 'Orders',
        data: [45, 67, 52, 78, 65, 89, 76],
        backgroundColor: 'rgba(236, 72, 153, 0.8)',
        borderColor: 'rgba(236, 72, 153, 1)',
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      }
    ],
  };

  // Monthly data
  const monthlyData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Revenue (¥)',
        data: [8500, 12000, 9800, 15200],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      },
      {
        label: 'Orders',
        data: [320, 450, 380, 520],
        backgroundColor: 'rgba(236, 72, 153, 0.8)',
        borderColor: 'rgba(236, 72, 153, 1)',
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
            weight: '600'
          },
          color: document.documentElement.classList.contains('dark') ? '#e2e8f0' : '#374151'
        }
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: document.documentElement.classList.contains('dark') ? 'rgba(148, 163, 184, 0.1)' : 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          font: {
            size: 12,
          },
          color: document.documentElement.classList.contains('dark') ? '#cbd5e1' : '#6b7280'
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
          color: document.documentElement.classList.contains('dark') ? '#cbd5e1' : '#6b7280'
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
  };

  const currentData = timeRange === 'weekly' ? weeklyData : monthlyData;
  const totalRevenue = currentData.datasets[0].data.reduce((sum, value) => sum + value, 0);
  const totalOrders = currentData.datasets[1].data.reduce((sum, value) => sum + value, 0);

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-soft dark:shadow-soft-dark p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Data & Analytics</h2>
          <div className="flex items-center space-x-4">
            <div className="flex bg-gray-100 dark:bg-dark-700 rounded-lg p-1">
              <button
                onClick={() => setTimeRange('weekly')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  timeRange === 'weekly'
                    ? 'bg-white dark:bg-dark-600 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
                }`}
              >
                Weekly Data
              </button>
              <button
                onClick={() => setTimeRange('monthly')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  timeRange === 'monthly'
                    ? 'bg-white dark:bg-dark-600 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
                }`}
              >
                Monthly Data
              </button>
            </div>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
              More
            </a>
          </div>
        </div>
        
        <div className="h-80">
          <Bar data={currentData} options={options} />
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">¥{totalRevenue.toLocaleString()}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Total Revenue</p>
          </div>
          <div className="text-center p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
            <p className="text-2xl font-bold text-pink-600 dark:text-pink-400">{totalOrders.toLocaleString()}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Total Orders</p>
          </div>
          <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">¥{(totalRevenue / totalOrders).toFixed(1)}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Average Order Value</p>
          </div>
        </div>
      </div>

      {/* Additional analytics cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-soft dark:shadow-soft-dark p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Top Performing Products</h3>
          <div className="space-y-3">
            {[
              { name: 'Wireless Headphones', sales: 234, revenue: '¥12,450' },
              { name: 'Smart Watch', sales: 189, revenue: '¥8,920' },
              { name: 'Bluetooth Speaker', sales: 156, revenue: '¥6,780' },
            ].map((product, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-dark-700 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">{product.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{product.sales} units sold</p>
                </div>
                <p className="font-semibold text-green-600 dark:text-green-400">{product.revenue}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-soft dark:shadow-soft-dark p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Customer Insights</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">New Customers</span>
              <span className="font-semibold text-blue-600 dark:text-blue-400">+15%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">Repeat Customers</span>
              <span className="font-semibold text-green-600 dark:text-green-400">68%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">Customer Satisfaction</span>
              <span className="font-semibold text-yellow-600 dark:text-yellow-400">4.8★</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">Average Session</span>
              <span className="font-semibold text-purple-600 dark:text-purple-400">4m 32s</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataView;
