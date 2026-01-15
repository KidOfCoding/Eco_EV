import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Zap,
  MapPin,
  Clock,
  Shield,
  Star,
  Smartphone,
  Users,
  TrendingUp,
  ArrowRight,
  Sun
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';

export const Home: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (user) {
      switch (user.role) {
        case 'host':
          navigate('/host-dashboard');
          break;
        case 'rider':
          navigate('/rider-dashboard');
          break;
        case 'admin':
          navigate('/admin-dashboard');
          break;
        default:
          navigate('/map');
      }
    } else {
      navigate('/register');
    }
  };

  const features = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Find Nearby Chargers',
      description: 'Discover charging stations within your vicinity with real-time availability'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Book in Advance',
      description: 'Reserve your charging slot and never worry about availability'
    },
    {
      icon: <Sun className="h-6 w-6" />,
      title: '100% Solar Energy',
      description: 'Truly green charging powered entirely by renewable solar energy'
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Smart Monitoring',
      description: 'Real-time charging status and notifications on your mobile device'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Chargers' },
    { number: '50,000+', label: 'Happy Users' },
    { number: '25+', label: 'Cities' },
    { number: '4.8', label: 'Average Rating' },
    { number: '100%', label: 'Solar Energy' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/hero banner.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/20 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="inline-flex items-center space-x-2 bg-yellow-400/20 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/50 mb-6"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Sun className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                </motion.div>
                <span className="text-yellow-100 font-medium">100% Solar Powered</span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
                Charge Your <span className="text-emerald-300 whitespace-nowrap">EV Gang</span>
                <br />
                Anywhere, Anytime
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Connect with thousands of charging stations across India. Book, charge, and pay - all in one seamless experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={handleGetStarted}
                  icon={<Zap className="h-5 w-5" />}
                >
                  {user ? 'Go to Dashboard' : 'Get Started'}
                </Button>
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                  onClick={() => navigate('/map')}
                  icon={<MapPin className="h-5 w-5" />}
                >
                  Find Chargers
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">FastCharge Station</h3>
                        <p className="text-sm text-gray-500">0.5 km away</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">₹8</div>
                      <div className="text-sm text-gray-500">per hour</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-900">4.9</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600 font-medium">Available</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold">2.5kW</div>
                    <div className="text-sm opacity-80">Max Power</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold">Type-2</div>
                    <div className="text-sm opacity-80">Connector</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Eco Pulse?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Experience the future of EV charging with our comprehensive platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
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

      {/* How it Works Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Get started in just three simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: 'Find & Book',
                description: 'Search for nearby charging stations and book your preferred time slot',
                icon: <MapPin className="h-8 w-8" />,
                link: '/map'
              },
              {
                step: 2,
                title: 'Charge & Monitor',
                description: 'Plug in your EV and monitor charging status in real-time',
                icon: <Zap className="h-8 w-8" />,
                link: '/rider-dashboard'
              },
              {
                step: 3,
                title: 'Pay & Go',
                description: 'Complete payment securely and get instant receipt via app',
                icon: <Smartphone className="h-8 w-8" />,
                link: '/payment-methods'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center cursor-pointer hover:transform hover:scale-105 transition-transform"
                onClick={() => navigate(item.link)}
              >
                <div className="relative mb-6">
                  <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 h-8 w-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join the EV Revolution?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Whether you're looking to charge your EV or earn money by hosting, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => navigate('/register?role=rider')}
                icon={<Users className="h-5 w-5" />}
              >
                Start Riding
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/register?role=host')}
                icon={<TrendingUp className="h-5 w-5" />}
              >
                Become a Host
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};