import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Zap, 
  DollarSign, 
  TrendingUp,
  MapPin,
  AlertTriangle,
  Activity,
  Calendar,
  BarChart3,
  PieChart,
  Filter,
  Download
} from 'lucide-react';
import { Button } from '../../components/ui/Button';

export const AdminDashboard: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');

  // Mock analytics data
  const analytics = {
    totalUsers: 50234,
    totalHosts: 3456,
    totalRiders: 46778,
    totalStations: 12567,
    totalRevenue: 2345678,
    platformFee: 234567,
    activeStations: 11234,
    completedBookings: 89567,
    userGrowth: 12.3,
    revenueGrowth: 18.5,
    stationGrowth: 8.7,
    bookingGrowth: 15.2
  };

  const topCities = [
    { name: 'Bangalore', users: 12345, stations: 2345, revenue: 567890 },
    { name: 'Delhi', users: 9876, stations: 1890, revenue: 445670 },
    { name: 'Mumbai', users: 8765, stations: 1567, revenue: 398450 },
    { name: 'Hyderabad', users: 6543, stations: 1234, revenue: 289340 },
    { name: 'Pune', users: 5432, stations: 987, revenue: 234560 }
  ];

  const recentActivities = [
    {
      id: '1',
      type: 'user_registered',
      message: 'New rider registered: Arjun Patel',
      time: '5 minutes ago',
      severity: 'info'
    },
    {
      id: '2',
      type: 'station_added',
      message: 'New charging station added in Koramangala',
      time: '15 minutes ago',
      severity: 'success'
    },
    {
      id: '3',
      type: 'payment_failed',
      message: 'Payment failed for booking #12345',
      time: '1 hour ago',
      severity: 'error'
    },
    {
      id: '4',
      type: 'dispute_raised',
      message: 'Dispute raised by rider for booking #12344',
      time: '2 hours ago',
      severity: 'warning'
    },
    {
      id: '5',
      type: 'high_usage',
      message: 'High usage detected at Green Energy Hub',
      time: '3 hours ago',
      severity: 'info'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'success': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'error': return 'text-red-600 bg-red-100';
      default: return 'text-blue-600 bg-blue-100';
    }
  };

  const getSeverityIcon = (type: string) => {
    switch (type) {
      case 'user_registered': return <Users className="h-4 w-4" />;
      case 'station_added': return <Zap className="h-4 w-4" />;
      case 'payment_failed': return <DollarSign className="h-4 w-4" />;
      case 'dispute_raised': return <AlertTriangle className="h-4 w-4" />;
      case 'high_usage': return <Activity className="h-4 w-4" />;
      default: return <Activity className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Admin Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Platform analytics and management overview
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 3 months</option>
                <option value="1y">Last year</option>
              </select>
              <Button icon={<Download className="h-4 w-4" />}>
                Export Report
              </Button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Users</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {analytics.totalUsers.toLocaleString()}
                </p>
              </div>
              <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-500">+{analytics.userGrowth}% from last month</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Active Stations</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {analytics.activeStations.toLocaleString()}
                </p>
              </div>
              <div className="h-12 w-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-500">+{analytics.stationGrowth}% from last month</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  ₹{(analytics.totalRevenue / 100000).toFixed(1)}L
                </p>
              </div>
              <div className="h-12 w-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-500">+{analytics.revenueGrowth}% from last month</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Completed Bookings</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {analytics.completedBookings.toLocaleString()}
                </p>
              </div>
              <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-500">+{analytics.bookingGrowth}% from last month</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Charts and Analytics */}
          <div className="lg:col-span-2 space-y-8">
            {/* Revenue Chart */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Revenue Analytics
                  </h2>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline" icon={<BarChart3 className="h-4 w-4" />}>
                      Bar Chart
                    </Button>
                    <Button size="sm" variant="ghost" icon={<PieChart className="h-4 w-4" />}>
                      Pie Chart
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="h-64 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400">
                      Revenue analytics chart would be displayed here
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      Integration with charting library (Chart.js, D3, etc.)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Performing Cities */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Top Performing Cities
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {topCities.map((city, index) => (
                    <motion.div
                      key={city.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {city.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {city.users.toLocaleString()} users • {city.stations.toLocaleString()} stations
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900 dark:text-white">
                          ₹{(city.revenue / 1000).toFixed(0)}K
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Revenue</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* User Distribution */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  User Distribution
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Riders</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {analytics.totalRiders.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${(analytics.totalRiders / analytics.totalUsers) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Hosts</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {analytics.totalHosts.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-emerald-500 h-2 rounded-full" 
                        style={{ width: `${(analytics.totalHosts / analytics.totalUsers) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Recent Activities
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className={`p-2 rounded-lg ${getSeverityColor(activity.severity)}`}>
                        {getSeverityIcon(activity.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900 dark:text-white">
                          {activity.message}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {activity.time}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  View All Activities
                </Button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Quick Actions
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    Manage Users
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Zap className="h-4 w-4 mr-2" />
                    Monitor Stations
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    View Disputes
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Financial Reports
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};