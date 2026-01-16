import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, Shield, AlertTriangle } from 'lucide-react';

export const Terms: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: `By accessing and using ECOPluse's platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.`
    },
    {
      title: 'User Accounts',
      content: `You must create an account to use our services. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate and complete information during registration.`
    },
    {
      title: 'Host Responsibilities',
      content: `As a host, you agree to: (a) Provide accurate information about your charging station, (b) Maintain your equipment in safe working condition, (c) Be available during booked sessions, (d) Comply with all local electrical and safety regulations, (e) Treat all riders with respect and professionalism.`
    },
    {
      title: 'Rider Responsibilities',
      content: `As a rider, you agree to: (a) Use charging stations responsibly and safely, (b) Respect host property and follow their guidelines, (c) Pay for services as agreed, (d) Report any issues or damages immediately, (e) Provide honest reviews and ratings.`
    },
    {
      title: 'Booking and Cancellation',
      content: `Bookings are confirmed upon payment. Cancellations made more than 30 minutes before the scheduled time are eligible for full refund. Late cancellations may incur charges. No-shows will be charged the full booking amount.`
    },
    {
      title: 'Payment Terms',
      content: `All payments are processed securely through our platform. Hosts receive 85% of the booking amount, with 15% retained as platform fee. Payouts are made weekly to verified bank accounts. Refunds are processed within 5-7 business days.`
    },
    {
      title: 'Safety and Insurance',
      content: `All charging sessions are covered by our comprehensive insurance policy. Users must follow safety guidelines and report any incidents immediately. ECOPluse is not liable for damages resulting from misuse or negligence.`
    },
    {
      title: 'Prohibited Activities',
      content: `Users may not: (a) Use the platform for illegal activities, (b) Provide false information, (c) Interfere with platform operations, (d) Harass or discriminate against other users, (e) Attempt to circumvent payment systems.`
    },
    {
      title: 'Intellectual Property',
      content: `All content, trademarks, and intellectual property on the platform belong to ECOPluse or its licensors. Users may not reproduce, distribute, or create derivative works without permission.`
    },
    {
      title: 'Limitation of Liability',
      content: `ECOPluse's liability is limited to the amount paid for the specific service. We are not liable for indirect, incidental, or consequential damages. Our total liability shall not exceed ₹10,000 per incident.`
    },
    {
      title: 'Dispute Resolution',
      content: `Disputes will be resolved through binding arbitration in Bangalore, Karnataka. Users agree to attempt mediation before pursuing legal action. Indian law governs these terms.`
    },
    {
      title: 'Modifications',
      content: `We may modify these terms at any time. Users will be notified of significant changes via email or app notification. Continued use constitutes acceptance of modified terms.`
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
            <FileText className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Please read these terms carefully before using ECOPluse's platform and services.
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

      {/* Terms Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`p-8 ${index !== sections.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''}`}
              >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {index + 1}. {section.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-8 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6"
          >
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                  Important Notice
                </h3>
                <p className="text-yellow-700 dark:text-yellow-300">
                  These terms constitute a legally binding agreement. By using our platform, you acknowledge that you have read, understood, and agree to be bound by these terms. If you have any questions, please contact our legal team at legal@ecopulse.com.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact for Questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-8 text-center"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Questions About These Terms?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Our legal team is available to clarify any questions about our terms of service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" icon={<FileText className="h-4 w-4" />}>
                Download PDF
              </Button>
              <Button icon={<Shield className="h-4 w-4" />}>
                Contact Legal Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
