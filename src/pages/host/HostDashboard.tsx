import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Zap, 
  DollarSign, 
  Users, 
  Calendar,
  Star,
  TrendingUp,
  Settings,
  MapPin,
  Clock,
  Battery
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useAuth } from '../../contexts/AuthContext';

export const HostDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data
  const stats = {
    totalEarnings: 12450,
    monthlyEarnings: 3250,
    totalBookings: 89,
    activeStations: 3,
    avgRating: 4.8,
    completionRate: 96
  };

  const recentBookings = [
    {
      id: '1',
      riderName: 'Arjun Patel',
      stationName: 'FastCharge Home Station',
      startTime: '2024-01-15 14:30',
      duration: 45,
      amount: 180,
      status: 'completed'
    },
    {
      id: '2',
      riderName: 'Sneha Kumar',
      stationName: 'Green Energy Hub',
      startTime: '2024-01-15 16:00',
      duration: 30,
      amount: 120,
      status: 'active'
    },
    {
      id: '3',
      riderName: 'Rohit Singh',
      stationName: 'Quick Charge Point',
      startTime: '2024-01-15 12:15',
      duration: 60,
      amount: 240,
      status: 'completed'
    }
  ];

  const stations = [
    {
      id: '1',
      name: 'FastCharge Home Station',
      address: 'Koramangala, Bangalore',
      status: 'available',
      bookings: 25,
      earnings: 4500,
      rating: 4.9
    },
    {
      id: '2',
      name: 'Green Energy Hub',
      address: 'Indiranagar, Bangalore',
      status: 'busy',
      bookings: 32,
      earnings: 5200,
      rating: 4.7
    },
    {
      id: '3',
      name: 'Quick Charge Point',
      address: 'Whitefield, Bangalore',
      status: 'offline',
      bookings: 18,
      earnings: 2750,
      rating: 4.8
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'text-green-600 bg-green-100';
      case 'busy': return 'text-orange-600 bg-orange-100';
      case 'offline': return 'text-gray-600 bg-gray-100';
      case 'active': return 'text-blue-600 bg-blue-100';
      case 'completed': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'stations', label: 'My Stations', icon: Zap },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    { id: 'earnings', label: 'Earnings', icon: DollarSign },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Host Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Welcome back, {user?.name}! Here's your charging station performance.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Earnings</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  ₹{stats.totalEarnings.toLocaleString()}
                </p>
              </div>
              <div className="h-12 w-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-500">+12% from last month</span>
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
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">This Month</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  ₹{stats.monthlyEarnings.toLocaleString()}
                </p>
              </div>
              <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <TrendingUp className="h-4 w-4 text-blue-500 mr-1" />
              <span className="text-sm text-blue-500">+8% from last month</span>
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
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Bookings</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.totalBookings}
                </p>
              </div>
              <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <span className="text-sm text-gray-500">{stats.completionRate}% completion rate</span>
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
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Average Rating</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.avgRating}
                </p>
              </div>
              <div className="h-12 w-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center">
                <Star className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <span className="text-sm text-gray-500">From {user?.totalReviews} reviews</span>
            </div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* My Stations */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    My Charging Stations
                  </h2>
                  <Button size="sm" icon={<Plus className="h-4 w-4" />}>
                    Add Station
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {stations.map((station, index) => (
                    <motion.div
                      key={station.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {station.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {station.address}
                          </p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(station.status)}`}>
                          {station.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600 dark:text-gray-400">Bookings</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{station.bookings}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 dark:text-gray-400">Earnings</p>
                          <p className="font-semibold text-gray-900 dark:text-white">₹{station.earnings}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 dark:text-gray-400">Rating</p>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 mr-1" />
                            <p className="font-semibold text-gray-900 dark:text-white">{station.rating}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                          <Button size="sm" variant="ghost">
                            View Details
                          </Button>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Battery className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-500">Online</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recent Bookings */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Recent Bookings
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentBookings.map((booking, index) => (
                    <motion.div
                      key={booking.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {booking.riderName}
                        </h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                          {booking.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        {booking.stationName}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <Clock className="h-4 w-4 mr-1" />
                        {booking.duration} mins
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          ₹{booking.amount}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(booking.startTime).toLocaleDateString()}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Bookings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};