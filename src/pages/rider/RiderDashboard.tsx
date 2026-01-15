import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Battery, 
  CreditCard,
  Star,
  Calendar,
  Zap,
  History,
  Wallet,
  Gift,
  Settings
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export const RiderDashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Mock data
  const stats = {
    totalSessions: 45,
    totalSpent: 2350,
    favoriteStations: 8,
    carbonSaved: 125 // kg CO2
  };

  const recentBookings = [
    {
      id: '1',
      stationName: 'FastCharge Home Station',
      hostName: 'Rajesh Kumar',
      location: 'Koramangala, Bangalore',
      date: '2024-01-15',
      duration: 45,
      energyConsumed: 8.5,
      amount: 180,
      status: 'completed',
      rating: 5
    },
    {
      id: '2',
      stationName: 'Green Energy Hub',
      hostName: 'Priya Sharma',
      location: 'Indiranagar, Bangalore',
      date: '2024-01-14',
      duration: 30,
      energyConsumed: 6.2,
      amount: 124,
      status: 'completed',
      rating: 4
    },
    {
      id: '3',
      stationName: 'Quick Charge Point',
      hostName: 'Amit Singh',
      location: 'Whitefield, Bangalore',
      date: '2024-01-13',
      duration: 60,
      energyConsumed: 12.3,
      amount: 246,
      status: 'completed',
      rating: 5
    }
  ];

  const upcomingBookings = [
    {
      id: '4',
      stationName: 'FastCharge Home Station',
      hostName: 'Rajesh Kumar',
      location: 'Koramangala, Bangalore',
      scheduledTime: '2024-01-16 14:00',
      duration: 45,
      estimatedCost: 180,
      status: 'confirmed'
    }
  ];

  const favoriteStations = [
    {
      id: '1',
      name: 'FastCharge Home Station',
      location: 'Koramangala, Bangalore',
      rating: 4.9,
      price: 8,
      distance: 0.5
    },
    {
      id: '2',
      name: 'Green Energy Hub',
      location: 'Indiranagar, Bangalore',
      rating: 4.7,
      price: 12,
      distance: 2.1
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Rider Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Welcome back, {user?.name}! Ready for your next charge?
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Button 
            className="h-20 flex-col"
            onClick={() => navigate('/map')}
            icon={<MapPin className="h-6 w-6 mb-2" />}
          >
            Find Chargers
          </Button>
          <Button 
            variant="secondary" 
            className="h-20 flex-col"
            onClick={() => navigate('/wallet')}
            icon={<Wallet className="h-6 w-6 mb-2" />}
          >
            My Wallet
          </Button>
          <Button 
            variant="outline" 
            className="h-20 flex-col"
            icon={<History className="h-6 w-6 mb-2" />}
          >
            History
          </Button>
          <Button 
            variant="outline" 
            className="h-20 flex-col"
            icon={<Gift className="h-6 w-6 mb-2" />}
          >
            Rewards
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Sessions</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.totalSessions}
                </p>
              </div>
              <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">This year</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Spent</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  ₹{stats.totalSpent.toLocaleString()}
                </p>
              </div>
              <div className="h-12 w-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Lifetime</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Favorites</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.favoriteStations}
                </p>
              </div>
              <div className="h-12 w-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                <Star className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Saved stations</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">CO₂ Saved</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.carbonSaved} kg
                </p>
              </div>
              <div className="h-12 w-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center">
                <Battery className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Environmental impact</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent & Upcoming Bookings */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Bookings */}
            {upcomingBookings.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Upcoming Bookings
                  </h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {upcomingBookings.map((booking, index) => (
                      <motion.div
                        key={booking.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {booking.stationName}
                          </h3>
                          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium">
                            {booking.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          Host: {booking.hostName}
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600 dark:text-gray-400">Date & Time</p>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {new Date(booking.scheduledTime).toLocaleString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-600 dark:text-gray-400">Duration</p>
                            <p className="font-medium text-gray-900 dark:text-white">{booking.duration} mins</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                            ₹{booking.estimatedCost}
                          </span>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              Reschedule
                            </Button>
                            <Button size="sm" variant="secondary">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Recent Bookings */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Recent Sessions
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentBookings.map((booking, index) => (
                    <motion.div
                      key={booking.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {booking.stationName}
                        </h3>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < booking.rating 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-gray-300 dark:text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        Host: {booking.hostName} • {booking.location}
                      </p>
                      <div className="grid grid-cols-3 gap-4 text-sm mb-3">
                        <div>
                          <p className="text-gray-600 dark:text-gray-400">Duration</p>
                          <p className="font-medium text-gray-900 dark:text-white">{booking.duration} mins</p>
                        </div>
                        <div>
                          <p className="text-gray-600 dark:text-gray-400">Energy</p>
                          <p className="font-medium text-gray-900 dark:text-white">{booking.energyConsumed} kWh</p>
                        </div>
                        <div>
                          <p className="text-gray-600 dark:text-gray-400">Amount</p>
                          <p className="font-medium text-gray-900 dark:text-white">₹{booking.amount}</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          {new Date(booking.date).toLocaleDateString()}
                        </span>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="ghost">
                            Book Again
                          </Button>
                          <Button size="sm" variant="outline">
                            View Receipt
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Sessions
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Wallet Balance */}
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl shadow-sm p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Wallet Balance</h3>
                <Wallet className="h-6 w-6" />
              </div>
              <p className="text-3xl font-bold mb-4">₹{user?.wallet}</p>
              <Button variant="secondary" size="sm" className="w-full">
                Add Money
              </Button>
            </div>

            {/* Favorite Stations */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Favorite Stations
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {favoriteStations.map((station, index) => (
                    <motion.div
                      key={station.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 hover:shadow-sm transition-shadow cursor-pointer"
                    >
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                        {station.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {station.location}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span>{station.rating}</span>
                        </div>
                        <div>
                          <span className="text-gray-600 dark:text-gray-400">₹{station.price}/kWh</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{station.distance} km away</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  View All Favorites
                </Button>
              </div>
            </div>

            {/* Rewards */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Rewards & Offers
                </h2>
              </div>
              <div className="p-6">
                <div className="text-center">
                  <div className="h-12 w-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Gift className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Eco Warrior Badge
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    You're 25 sessions away from earning your next badge!
                  </p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    View All Rewards
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