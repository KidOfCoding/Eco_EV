import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, Users, AlertTriangle, Calendar } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Privacy: React.FC = () => {
  const dataTypes = [
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Personal Information',
      description: 'Name, email, phone number, and profile photo',
      usage: 'Account creation, communication, and service delivery'
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: 'Authentication Data',
      description: 'Login credentials and KYC documents',
      usage: 'Account security and identity verification'
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Usage Information',
      description: 'Booking history, charging sessions, and app interactions',
      usage: 'Service improvement and personalized recommendations'
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: 'Location Data',
      description: 'GPS coordinates and address information',
      usage: 'Finding nearby stations and navigation assistance'
    }
  ];

  const rights = [
    'Access your personal data and obtain a copy',
    'Correct inaccurate or incomplete information',
    'Delete your account and associated data',
    'Restrict processing of your data',
    'Data portability to another service',
    'Object to processing for marketing purposes'
  ];

  const securityMeasures = [
    'End-to-end encryption for all data transmission',
    'Regular security audits and penetration testing',
    'Multi-factor authentication for account access',
    'Secure data centers with 24/7 monitoring',
    'Regular backup and disaster recovery procedures',
    'Employee training on data protection protocols'
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
            <Shield className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
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

      {/* Introduction */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Introduction
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              SuryaVolt ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform, mobile application, and related services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Data Collection */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Information We Collect
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We collect information to provide better services to all our users
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                    {type.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {type.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  <strong>What we collect:</strong> {type.description}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong>How we use it:</strong> {type.usage}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Your Privacy Rights
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                You have complete control over your personal data. Here are your rights under Indian data protection laws:
              </p>
              <div className="space-y-4">
                {rights.map((right, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <Shield className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{right}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Exercise Your Rights
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                To exercise any of these rights, please contact our Data Protection Officer:
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <Shield className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-gray-900 dark:text-white">privacy@ecopulse.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <Lock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-gray-900 dark:text-white">+91 1800 123 4567</span>
                </div>
              </div>
              <Button className="w-full mt-6">
                Contact Privacy Team
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How We Protect Your Data
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We implement industry-leading security measures to safeguard your information
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityMeasures.map((measure, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 text-center"
              >
                <div className="h-12 w-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 mx-auto mb-4">
                  <Lock className="h-6 w-6" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">{measure}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Your Privacy?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our privacy team is here to help you understand how we protect your data.
            </p>
            <Button size="lg" variant="secondary">
              Contact Privacy Team
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
