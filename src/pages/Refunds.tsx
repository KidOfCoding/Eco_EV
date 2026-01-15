import React from 'react';
import { motion } from 'framer-motion';
import { 
  RefreshCw, 
  Clock, 
  CreditCard, 
  CheckCircle, 
  XCircle,
  AlertTriangle,
  Calendar,
  DollarSign,
  Phone,
  Mail
} from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Refunds: React.FC = () => {
  const refundScenarios = [
    {
      icon: <CheckCircle className="h-6 w-6 text-green-600" />,
      title: 'Eligible for Full Refund',
      scenarios: [
        'Cancellation more than 30 minutes before booking time',
        'Host cancels the booking',
        'Charging station is not working or unavailable',
        'Safety concerns at the charging location',
        'Technical issues preventing charging'
      ]
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-yellow-600" />,
      title: 'Partial Refund (50%)',
      scenarios: [
        'Cancellation 15-30 minutes before booking time',
        'Early termination due to rider\'s personal reasons',
        'Charging session interrupted by power outage (beyond 30 mins)'
      ]
    },
    {
      icon: <XCircle className="h-6 w-6 text-red-600" />,
      title: 'No Refund',
      scenarios: [
        'Cancellation less than 15 minutes before booking',
        'No-show without prior cancellation',
        'Violation of platform terms and conditions',
        'Damage to host property due to rider negligence'
      ]
    }
  ];

  const refundProcess = [
    {
      step: 1,
      title: 'Request Refund',
      description: 'Submit refund request through the app or contact support',
      timeframe: 'Immediate'
    },
    {
      step: 2,
      title: 'Review Process',
      description: 'Our team reviews the request and verifies eligibility',
      timeframe: '2-4 hours'
    },
    {
      step: 3,
      title: 'Approval',
      description: 'Refund approved and processing initiated',
      timeframe: '4-6 hours'
    },
    {
      step: 4,
      title: 'Money Transfer',
      description: 'Refund credited to your original payment method',
      timeframe: '3-7 business days'
    }
  ];

  const disputeTypes = [
    {
      type: 'Billing Dispute',
      description: 'Incorrect charges or billing discrepancies',
      resolution: '24-48 hours'
    },
    {
      type: 'Service Quality',
      description: 'Issues with charging station or host service',
      resolution: '2-3 business days'
    },
    {
      type: 'Technical Issues',
      description: 'App bugs or platform-related problems',
      resolution: '1-2 business days'
    },
    {
      type: 'Safety Concerns',
      description: 'Safety-related incidents or concerns',
      resolution: 'Immediate priority'
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
            <RefreshCw className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Refund Policy
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Fair and transparent refund policy designed to protect both riders and hosts in our community.
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

      {/* Refund Scenarios */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Refund Eligibility
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Understanding when and how much you can get refunded
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {refundScenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
              >
                <div className="flex items-center mb-4">
                  {scenario.icon}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">
                    {scenario.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {scenario.scenarios.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Refund Process */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Refund Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              How we process your refund requests
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {refundProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 relative">
                  <span className="text-xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {step.description}
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {step.timeframe}
                  </span>
                </div>
                {index < refundProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dispute Resolution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Dispute Resolution
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We handle different types of disputes with care and fairness
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {disputeTypes.map((dispute, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {dispute.type}
                  </h3>
                  <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">
                    {dispute.resolution}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {dispute.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Refunds */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Refund?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact our support team for quick assistance with refunds and disputes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" icon={<Phone className="h-5 w-5" />}>
                Call Support
              </Button>
              <Button size="lg" variant="outline" icon={<Mail className="h-5 w-5" />}>
                Email Support
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};