import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Heart,
  Shield,
  MessageCircle,
  Star,
  Award,
  Handshake,
  AlertTriangle,
  CheckCircle,
  UserCheck
} from 'lucide-react';

export const Community: React.FC = () => {
  const guidelines = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Be Respectful',
      description: 'Treat all community members with kindness, respect, and professionalism',
      examples: [
        'Use polite language in all communications',
        'Respect cultural and personal differences',
        'Be patient with new users learning the platform'
      ]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Safety First',
      description: 'Prioritize safety in all interactions and charging sessions',
      examples: [
        'Follow all electrical safety protocols',
        'Report any safety concerns immediately',
        'Maintain clean and safe charging environments'
      ]
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: 'Be Reliable',
      description: 'Honor your commitments and communicate any changes promptly',
      examples: [
        'Be punctual for scheduled charging sessions',
        'Notify in advance if you need to cancel',
        'Keep your availability calendar updated'
      ]
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Provide Quality Service',
      description: 'Strive to exceed expectations and maintain high standards',
      examples: [
        'Ensure charging equipment is in good working condition',
        'Provide clear instructions and assistance when needed',
        'Maintain cleanliness of charging areas'
      ]
    }
  ];

  const violations = [
    {
      severity: 'Minor',
      color: 'yellow',
      examples: [
        'Late arrival without notification',
        'Incomplete profile information',
        'Delayed response to messages'
      ],
      consequences: 'Warning and guidance provided'
    },
    {
      severity: 'Moderate',
      color: 'orange',
      examples: [
        'Repeated cancellations',
        'Inappropriate behavior or language',
        'Misrepresentation of charging station details'
      ],
      consequences: 'Temporary account restrictions'
    },
    {
      severity: 'Severe',
      color: 'red',
      examples: [
        'Safety violations or negligence',
        'Fraudulent activities',
        'Harassment or discrimination',
        'Damage to property'
      ],
      consequences: 'Account suspension or permanent ban'
    }
  ];

  const rewards = [
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Super Host',
      description: 'Maintain 4.8+ rating with 50+ bookings',
      benefits: ['Priority support', 'Increased visibility', 'Special badge']
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: 'Eco Warrior',
      description: 'Complete 100+ charging sessions',
      benefits: ['Carbon impact certificate', 'Exclusive offers', 'Community recognition']
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: 'Trusted Member',
      description: 'Verified profile with excellent track record',
      benefits: ['Enhanced profile visibility', 'Priority booking', 'Lower platform fees']
    }
  ];

  const getSeverityColor = (color: string) => {
    const colors = {
      yellow: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 border-yellow-200 dark:border-yellow-800',
      orange: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 border-orange-200 dark:border-orange-800',
      red: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 border-red-200 dark:border-red-800'
    };
    return colors[color as keyof typeof colors];
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
            <Users className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Community Guidelines
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Building a trusted, safe, and respectful community for all EV enthusiasts.
              These guidelines help us maintain the quality and safety of our platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Guidelines */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Community Standards
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Guidelines that help us build a better platform together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guidelines.map((guideline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8"
              >
                <div className="h-16 w-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                  {guideline.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {guideline.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {guideline.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm">Examples:</h4>
                  <ul className="space-y-1">
                    {guideline.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Violations and Consequences */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Violations & Consequences
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Understanding the consequences of guideline violations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {violations.map((violation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-xl border-2 p-6 ${getSeverityColor(violation.color)}`}
              >
                <h3 className="text-xl font-semibold mb-4">
                  {violation.severity} Violations
                </h3>
                <div className="space-y-3 mb-6">
                  {violation.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-start">
                      <AlertTriangle className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm">{example}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-current border-opacity-20 pt-4">
                  <h4 className="font-medium mb-2">Consequences:</h4>
                  <p className="text-sm">{violation.consequences}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Rewards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Community Rewards
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Recognizing outstanding community members
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rewards.map((reward, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 text-center"
              >
                <div className="h-16 w-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {reward.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {reward.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {reward.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm">Benefits:</h4>
                  <ul className="space-y-1">
                    {reward.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 dark:text-gray-400">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <MessageCircle className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Report Violations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Help us maintain community standards by reporting inappropriate behavior or safety concerns.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                How to Report
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                    <span className="font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">In-App Reporting</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Use the report button on user profiles or booking pages</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                    <span className="font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Email Support</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Send detailed reports to safety@ecopulse.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                    <span className="font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Emergency Line</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Call 1800-CHARGE-911 for urgent safety issues</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};