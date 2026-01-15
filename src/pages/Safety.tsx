import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  Phone, 
  Camera,
  Lock,
  UserCheck,
  Zap,
  FileText,
  Award
} from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Safety: React.FC = () => {
  const safetyFeatures = [
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: 'KYC Verification',
      description: 'All hosts and riders undergo mandatory identity verification using government-issued documents'
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: 'Station Inspection',
      description: 'Physical verification of charging stations by our certified technicians before going live'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Insurance Coverage',
      description: 'Comprehensive insurance covering equipment damage, theft, and liability during charging sessions'
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: '24/7 Emergency Support',
      description: 'Round-the-clock emergency helpline for immediate assistance during charging sessions'
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: 'Secure Payments',
      description: 'PCI-DSS compliant payment processing with end-to-end encryption for all transactions'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Electrical Safety',
      description: 'Mandatory electrical safety checks and compliance with Indian electrical standards'
    }
  ];

  const guidelines = [
    {
      category: 'For Hosts',
      rules: [
        'Ensure your charging station meets IS 15118 standards',
        'Provide adequate lighting and safe access to the charging point',
        'Keep emergency contact numbers readily available',
        'Maintain cleanliness and safety of the charging area',
        'Report any technical issues immediately',
        'Be present or reachable during charging sessions'
      ]
    },
    {
      category: 'For Riders',
      rules: [
        'Inspect charging cables and connectors before use',
        'Follow host instructions and respect their property',
        'Report any safety concerns immediately',
        'Do not leave your vehicle unattended for extended periods',
        'Ensure your EV is compatible with the charging station',
        'Keep emergency contacts handy during charging'
      ]
    }
  ];

  const emergencySteps = [
    {
      step: 1,
      title: 'Stop Charging',
      description: 'Immediately disconnect your vehicle from the charging station'
    },
    {
      step: 2,
      title: 'Ensure Safety',
      description: 'Move to a safe distance and ensure no one is in immediate danger'
    },
    {
      step: 3,
      title: 'Call Emergency',
      description: 'Contact our 24/7 emergency helpline: 1800-CHARGE-911'
    },
    {
      step: 4,
      title: 'Report Incident',
      description: 'File a detailed incident report through the app for investigation'
    }
  ];

  const certifications = [
    { name: 'ISO 27001', description: 'Information Security Management' },
    { name: 'PCI DSS', description: 'Payment Card Industry Data Security' },
    { name: 'IS 15118', description: 'EV Charging Communication Protocol' },
    { name: 'BIS Certified', description: 'Bureau of Indian Standards Compliance' }
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
              Safety First, Always
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your safety is our top priority. We've implemented comprehensive safety measures, 
              verification processes, and emergency protocols to ensure secure charging experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Safety Measures
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Multi-layered security and safety protocols for your peace of mind
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
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

      {/* Safety Guidelines */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Safety Guidelines
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Important safety rules for hosts and riders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {guidelines.map((guideline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  {guideline.category}
                </h3>
                <div className="space-y-4">
                  {guideline.rules.map((rule, ruleIndex) => (
                    <div key={ruleIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{rule}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Protocol */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Emergency Protocol
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              What to do in case of an emergency during charging
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergencySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 text-center relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 h-8 w-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 mt-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-red-800 dark:text-red-200 mb-2">
                Emergency Helpline
              </h3>
              <p className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">
                1800-CHARGE-911
              </p>
              <p className="text-red-700 dark:text-red-300">
                Available 24/7 for immediate assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We meet the highest industry standards for safety and security
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 text-center"
              >
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};