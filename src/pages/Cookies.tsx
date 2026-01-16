import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, BarChart3, Target, Calendar } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Cookies: React.FC = () => {
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
    personalization: true
  });

  const cookieTypes = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Essential Cookies',
      description: 'Required for basic website functionality, security, and user authentication',
      required: true,
      examples: 'Login sessions, security tokens, language preferences'
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Analytics Cookies',
      description: 'Help us understand how users interact with our platform to improve services',
      required: false,
      examples: 'Page views, user journeys, performance metrics'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Marketing Cookies',
      description: 'Used to deliver relevant advertisements and measure campaign effectiveness',
      required: false,
      examples: 'Ad targeting, conversion tracking, social media integration'
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'Personalization Cookies',
      description: 'Remember your preferences and provide customized user experience',
      required: false,
      examples: 'Theme preferences, saved locations, personalized recommendations'
    }
  ];

  const handlePreferenceChange = (type: string) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type as keyof typeof prev]
    }));
  };

  const savePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    // In a real app, this would also update the backend
    alert('Cookie preferences saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Cookie className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Learn about how we use cookies and similar technologies to enhance your experience on ECOPluse.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
            <Calendar className="h-5 w-5" />
            <span>Last updated: January 15, 2024</span>
          </div>
        </div>
      </section>

      {/* What are Cookies */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              What Are Cookies?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, keeping you logged in, and understanding how you use our platform.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period) to enhance your experience on ECOPluse.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Types of Cookies We Use
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Different cookies serve different purposes on our platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                      {type.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {type.title}
                    </h3>
                  </div>
                  {!type.required && (
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences[type.title.toLowerCase().split(' ')[0] as keyof typeof preferences]}
                        onChange={() => handlePreferenceChange(type.title.toLowerCase().split(' ')[0])}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  )}
                  {type.required && (
                    <span className="text-sm text-gray-500 dark:text-gray-400">Required</span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {type.description}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <strong>Examples:</strong> {type.examples}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={savePreferences} size="lg">
              Save Cookie Preferences
            </Button>
          </div>
        </div>
      </section>

      {/* Third Party Cookies */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Third-Party Cookies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We work with trusted partners to enhance your experience
            </p>
          </motion.div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Google Analytics
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Helps us understand user behavior and improve our platform. You can opt-out through Google's Ad Settings.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Payment Processors
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Razorpay, Paytm, and other payment partners use cookies to process transactions securely.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Map Services
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Google Maps and MapMyIndia use cookies to provide location services and navigation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Managing Cookies */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Managing Your Cookie Preferences
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the cookie preference center above to enable/disable specific cookie categories</li>
                <li>Configure your browser settings to block or delete cookies</li>
                <li>Use browser extensions that manage cookie preferences</li>
                <li>Opt-out of specific third-party services through their privacy settings</li>
              </ul>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mt-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                  <p className="text-yellow-800 dark:text-yellow-200">
                    <strong>Note:</strong> Disabling certain cookies may affect the functionality of our platform.
                    Essential cookies cannot be disabled as they are necessary for basic operations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
