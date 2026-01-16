import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Video,
  Download,
  Zap,
  Shield,
  DollarSign,
  Users,
  Settings,
  AlertTriangle,
  CheckCircle,
  FileText,
  PlayCircle
} from 'lucide-react';
import { Button } from '../components/ui/Button';

export const HostResources: React.FC = () => {
  const resources = [
    {
      category: 'Getting Started',
      icon: <BookOpen className="h-6 w-6" />,
      items: [
        {
          title: 'Host Onboarding Guide',
          description: 'Complete step-by-step guide to becoming a successful host',
          type: 'PDF',
          downloadUrl: '#'
        },
        {
          title: 'Setup Checklist',
          description: 'Essential checklist for setting up your charging station',
          type: 'PDF',
          downloadUrl: '#'
        },
        {
          title: 'Welcome Video',
          description: 'Introduction video for new hosts',
          type: 'Video',
          downloadUrl: '#'
        }
      ]
    },
    {
      category: 'Safety & Compliance',
      icon: <Shield className="h-6 w-6" />,
      items: [
        {
          title: 'Electrical Safety Guidelines',
          description: 'Important safety protocols for EV charging',
          type: 'PDF',
          downloadUrl: '#'
        },
        {
          title: 'Insurance Information',
          description: 'Understanding your coverage and protection',
          type: 'PDF',
          downloadUrl: '#'
        },
        {
          title: 'Emergency Procedures',
          description: 'What to do in case of emergencies',
          type: 'Video',
          downloadUrl: '#'
        }
      ]
    },
    {
      category: 'Maximizing Earnings',
      icon: <DollarSign className="h-6 w-6" />,
      items: [
        {
          title: 'Pricing Strategy Guide',
          description: 'How to set competitive and profitable pricing',
          type: 'PDF',
          downloadUrl: '#'
        },
        {
          title: 'Marketing Your Station',
          description: 'Tips to attract more riders to your station',
          type: 'PDF',
          downloadUrl: '#'
        },
        {
          title: 'Host Success Stories',
          description: 'Learn from top-performing hosts',
          type: 'Video',
          downloadUrl: '#'
        }
      ]
    },
    {
      category: 'Technical Support',
      icon: <Settings className="h-6 w-6" />,
      items: [
        {
          title: 'Equipment Troubleshooting',
          description: 'Common issues and solutions for charging equipment',
          type: 'PDF',
          downloadUrl: '#'
        },
        {
          title: 'App Tutorial',
          description: 'How to use the host dashboard effectively',
          type: 'Video',
          downloadUrl: '#'
        },
        {
          title: 'IoT Integration Guide',
          description: 'Setting up smart meters and remote controls',
          type: 'PDF',
          downloadUrl: '#'
        }
      ]
    }
  ];

  const webinars = [
    {
      title: 'Host Onboarding Masterclass',
      date: 'January 25, 2024',
      time: '7:00 PM IST',
      duration: '60 minutes',
      description: 'Complete guide to becoming a successful ECOPluse host',
      registered: false
    },
    {
      title: 'Maximizing Your Earnings',
      date: 'February 1, 2024',
      time: '7:00 PM IST',
      duration: '45 minutes',
      description: 'Advanced strategies for increasing your monthly income',
      registered: true
    },
    {
      title: 'Safety Best Practices',
      date: 'February 8, 2024',
      time: '7:00 PM IST',
      duration: '30 minutes',
      description: 'Essential safety protocols and emergency procedures',
      registered: false
    }
  ];

  const faqs = [
    {
      question: 'What equipment do I need to start hosting?',
      answer: 'You need a compatible EV charging station (3kW or higher), dedicated parking space, stable electricity connection, and a smartphone to manage bookings.'
    },
    {
      question: 'How much can I earn as a host?',
      answer: 'Earnings vary based on location, usage, and pricing. On average, hosts earn ₹15,000-₹45,000 per month. Top hosts in prime locations earn even more.'
    },
    {
      question: 'What if my charging station breaks down?',
      answer: 'Contact our technical support immediately. We provide guidance for repairs and can temporarily disable your listing to prevent bookings.'
    },
    {
      question: 'How do I handle difficult riders?',
      answer: 'Contact our support team immediately. We have protocols to handle disputes and can take action against riders who violate community guidelines.'
    },
    {
      question: 'Can I adjust my pricing?',
      answer: 'Yes, you can adjust your pricing anytime through the host dashboard. Changes take effect immediately for new bookings.'
    }
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'PDF': return <FileText className="h-5 w-5" />;
      case 'Video': return <PlayCircle className="h-5 w-5" />;
      default: return <Download className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <BookOpen className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Host Resources
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Everything you need to become a successful ECOPluse host.
              Guides, tutorials, and support materials to help you maximize your earnings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Resource Library
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Comprehensive guides and materials for hosts
            </p>
          </motion.div>

          <div className="space-y-12">
            {resources.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <div className="h-10 w-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          {getFileIcon(item.type)}
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            {item.type}
                          </span>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Upcoming Webinars
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Join our live sessions to learn from experts and connect with other hosts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-sm p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <Video className="h-8 w-8 text-blue-600" />
                  {webinar.registered && (
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 text-xs rounded-full">
                      Registered
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {webinar.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {webinar.description}
                </p>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div>📅 {webinar.date}</div>
                  <div>🕰️ {webinar.time}</div>
                  <div>⏱️ {webinar.duration}</div>
                </div>
                <Button
                  variant={webinar.registered ? "outline" : "primary"}
                  className="w-full"
                >
                  {webinar.registered ? 'View Details' : 'Register Now'}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Quick answers to common host questions
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need More Help?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Our host success team is here to help you succeed and maximize your earnings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Contact Host Support
              </Button>
              <Button size="lg" variant="outline">
                Schedule 1-on-1 Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
