import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Zap, 
  Clock, 
  Shield, 
  TrendingUp, 
  Users,
  CheckCircle,
  ArrowRight,
  Calculator,
  Home,
  Settings,
  Award,
  UserPlus
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

export const BecomeHost: React.FC = () => {
  const navigate = useNavigate();
  const [chargerType, setChargerType] = useState('3kw');
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [pricePerKwh, setPricePerKwh] = useState(10);

  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: 'Earn ₹15,000+ Monthly',
      description: 'Average hosts earn between ₹15,000 to ₹45,000 per month from their charging stations'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Flexible Schedule',
      description: 'Set your own availability hours and manage bookings according to your convenience'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Insurance Protected',
      description: 'All charging sessions are covered by comprehensive insurance for your peace of mind'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Growing Community',
      description: 'Join thousands of hosts across India who are building the EV charging network'
    }
  ];

  const requirements = [
    'Own a charging point (3kW or higher)',
    'Dedicated parking space for EV bikes',
    'Stable electricity connection',
    'Valid government ID for KYC',
    'Bank account for receiving payments',
    'Smartphone for managing bookings'
  ];

  const steps = [
    {
      icon: <UserPlus className="h-6 w-6" />,
      title: 'Sign Up & Verify',
      description: 'Complete registration and KYC verification process'
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: 'Setup Your Station',
      description: 'Add photos, set pricing, and specify availability'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Safety Inspection',
      description: 'Our team conducts a safety check of your setup'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Go Live',
      description: 'Start accepting bookings and earning money'
    }
  ];

  // Earnings calculator
  const calculateEarnings = () => {
    const powerMap = { '3kw': 3, '7kw': 7, '22kw': 22 };
    const power = powerMap[chargerType as keyof typeof powerMap];
    const dailyEarnings = hoursPerDay * power * pricePerKwh * 0.85; // 85% after platform fee
    return {
      daily: Math.round(dailyEarnings),
      monthly: Math.round(dailyEarnings * 30),
      yearly: Math.round(dailyEarnings * 365)
    };
  };

  const earnings = calculateEarnings();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Turn Your Charger Into a
                <span className="text-emerald-300"> Money Machine</span>
              </h1>
              <p className="text-xl text-emerald-100 mb-8">
                Join thousands of hosts earning passive income by sharing their EV charging stations. 
                It's simple, safe, and profitable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => navigate('/register?role=host')}
                  icon={<Zap className="h-5 w-5" />}
                >
                  Start Hosting Today
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                  icon={<Calculator className="h-5 w-5" />}
                >
                  Calculate Earnings
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Monthly Earnings</h3>
                      <p className="text-sm text-gray-500">Based on average usage</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-4">₹25,000</div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Daily sessions:</span>
                      <span>8-12</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Avg. session:</span>
                      <span>45 mins</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Your cut:</span>
                      <span>85%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Host With Us?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Join the EV revolution and earn money while helping the environment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8"
              >
                <div className="h-16 w-16 bg-emerald-100 dark:bg-emerald-900 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section id="calculator" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Calculate Your Potential Earnings
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              See how much you could earn based on your setup
            </p>
          </motion.div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Charger Type
                  </label>
                  <select
                    value={chargerType}
                    onChange={(e) => setChargerType(e.target.value)}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white"
                  >
                    <option value="3kw">3kW (Standard Home Charger)</option>
                    <option value="7kw">7kW (Fast Home Charger)</option>
                    <option value="22kw">22kW (Commercial Charger)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Available Hours per Day: {hoursPerDay}
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="24"
                    value={hoursPerDay}
                    onChange={(e) => setHoursPerDay(parseInt(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Price per kWh: ₹{pricePerKwh}
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="25"
                    value={pricePerKwh}
                    onChange={(e) => setPricePerKwh(parseInt(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Your Potential Earnings
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Daily</span>
                    <span className="text-2xl font-bold text-emerald-600">₹{earnings.daily}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Monthly</span>
                    <span className="text-3xl font-bold text-emerald-600">₹{earnings.monthly.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Yearly</span>
                    <span className="text-2xl font-bold text-emerald-600">₹{earnings.yearly.toLocaleString()}</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">
                    * Earnings after 15% platform fee. Actual earnings may vary based on demand and location.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                What You Need to Get Started
              </h2>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                    <span className="text-lg text-gray-700 dark:text-gray-300">{requirement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="EV Charging Setup"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Getting Started is Easy
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              From signup to earning - in just 4 simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="h-16 w-16 bg-emerald-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-4 h-6 w-6 text-gray-400" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Join our community of hosts and start generating passive income from your charging station today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => navigate('/register?role=host')}
                icon={<Zap className="h-5 w-5" />}
              >
                Become a Host
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/help')}
                icon={<Users className="h-5 w-5" />}
              >
                Talk to Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};