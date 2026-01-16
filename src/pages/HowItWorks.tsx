import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  UserPlus,
  MapPin,
  Calendar,
  Zap,
  CreditCard,
  Star,
  Smartphone,
  Shield,
  Clock,
  CheckCircle
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

export const HowItWorks: React.FC = () => {
  const navigate = useNavigate();

  const riderSteps = [
    {
      icon: <UserPlus className="h-8 w-8" />,
      title: 'Sign Up',
      description: 'Create your rider account with basic details and verify your mobile number'
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Find Chargers',
      description: 'Use our map to discover nearby charging stations with real-time availability'
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: 'Book Slot',
      description: 'Reserve your preferred time slot and get instant confirmation'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Charge & Monitor',
      description: 'Plug in your EV and track charging progress in real-time'
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: 'Pay Securely',
      description: 'Complete payment through UPI, cards, or wallet with instant receipt'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Rate & Review',
      description: 'Share your experience to help other riders and improve the platform'
    }
  ];

  const hostSteps = [
    {
      icon: <UserPlus className="h-8 w-8" />,
      title: 'Register as Host',
      description: 'Sign up and complete KYC verification with your charging setup details'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'List Your Charger',
      description: 'Add photos, set pricing, and specify availability hours for your station'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Get Verified',
      description: 'Our team verifies your setup for safety and quality standards'
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: 'Manage Bookings',
      description: 'Accept or decline booking requests and manage your schedule'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Host Riders',
      description: 'Provide charging service and ensure a great experience'
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: 'Earn Money',
      description: 'Receive payments automatically with weekly payouts to your bank'
    }
  ];

  const features = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Mobile App',
      description: 'Available on iOS and Android with offline map support'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Insurance Coverage',
      description: 'All charging sessions covered by comprehensive insurance'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for any issues'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Quality Assurance',
      description: 'Regular quality checks and safety audits of all stations'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How ECOPluse Works
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Simple, secure, and seamless EV charging experience for riders and earning opportunities for hosts
            </p>
          </motion.div>
        </div>
      </section>

      {/* For Riders */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              For EV Riders
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Get your EV charged in 6 simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {riderSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 relative"
              >
                <div className="absolute -top-4 left-6 h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 mt-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              onClick={() => navigate('/register?role=rider')}
              icon={<UserPlus className="h-5 w-5" />}
            >
              Start as Rider
            </Button>
          </div>
        </div>
      </section>

      {/* For Hosts */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              For Charging Station Hosts
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Start earning from your charging setup in 6 steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hostSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-sm p-6 relative"
              >
                <div className="absolute -top-4 left-6 h-8 w-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div className="h-12 w-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 mt-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate('/register?role=host')}
              icon={<Zap className="h-5 w-5" />}
            >
              Become a Host
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Everything you need for a seamless charging experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 text-center"
              >
                <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
