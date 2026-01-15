import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  MessageCircle,
  Phone,
  Mail,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Book,
  Users,
  Zap,
  CreditCard,
  Shield
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export const Help: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Topics', icon: <HelpCircle className="h-5 w-5" /> },
    { id: 'booking', label: 'Booking', icon: <Book className="h-5 w-5" /> },
    { id: 'hosting', label: 'Hosting', icon: <Users className="h-5 w-5" /> },
    { id: 'charging', label: 'Charging', icon: <Zap className="h-5 w-5" /> },
    { id: 'payments', label: 'Payments', icon: <CreditCard className="h-5 w-5" /> },
    { id: 'safety', label: 'Safety', icon: <Shield className="h-5 w-5" /> }
  ];

  const faqs = [
    {
      category: 'booking',
      question: 'How do I book a charging station?',
      answer: 'You can book a charging station by browsing our map, selecting an available station, choosing your preferred time slot, and confirming your booking with payment.'
    },
    {
      category: 'booking',
      question: 'Can I cancel my booking?',
      answer: 'Yes, you can cancel your booking up to 30 minutes before the scheduled time. Cancellations made within 30 minutes may incur a small fee.'
    },
    {
      category: 'hosting',
      question: 'What equipment do I need to become a host?',
      answer: 'You need a compatible EV charging station (3kW or higher), dedicated parking space, stable electricity connection, and smartphone for managing bookings.'
    },
    {
      category: 'hosting',
      question: 'How much can I earn as a host?',
      answer: 'Earnings vary based on location, charger type, and usage. On average, hosts earn ₹15,000-₹45,000 per month. Use our earnings calculator for personalized estimates.'
    },
    {
      category: 'charging',
      question: 'What types of charging connectors are supported?',
      answer: 'We support Type-2, CCS, and CHAdeMO connectors. Each station listing clearly mentions the available connector types.'
    },
    {
      category: 'charging',
      question: 'How long does it take to charge my EV?',
      answer: 'Charging time depends on your battery capacity, current charge level, and charger power. Typically, it takes 1-4 hours for a full charge on most EV bikes.'
    },
    {
      category: 'payments',
      question: 'What payment methods are accepted?',
      answer: 'We accept UPI, credit/debit cards, net banking, and digital wallets like Paytm and Google Pay. You can also use your Eco Pulse wallet for faster payments.'
    },
    {
      category: 'payments',
      question: 'When will I be charged for my booking?',
      answer: 'Payment is processed when you start your charging session. You\'ll receive an instant receipt and detailed bill after completion.'
    },
    {
      category: 'safety',
      question: 'Is it safe to charge at private locations?',
      answer: 'Yes, all hosts undergo KYC verification and station inspection. We also provide insurance coverage and 24/7 emergency support for added safety.'
    },
    {
      category: 'safety',
      question: 'What should I do in case of an emergency?',
      answer: 'Immediately stop charging, ensure safety, and call our emergency helpline at 1800-CHARGE-911. Our support team is available 24/7.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const contactMethods = [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'Live Chat',
      description: 'Chat with our support team',
      action: 'Start Chat',
      available: 'Available 24/7'
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      action: '1800-CHARGE-911',
      available: 'Available 24/7'
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: 'Email Support',
      description: 'Send us your queries via email',
      action: 'support@ecopulse.com',
      available: 'Response within 2 hours'
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
            <HelpCircle className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Help & Support
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get answers to your questions and support when you need it.
              We're here to help you 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Search for Answers
            </h2>
            <Input
              label=""
              type="text"
              placeholder="Type your question here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              icon={<Search className="h-5 w-5" />}
            />
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                {category.icon}
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              {filteredFaqs.length} questions found
            </p>
          </motion.div>

          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  {expandedFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Our support team is ready to assist you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 text-center"
              >
                <div className="h-16 w-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto mb-6">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {method.description}
                </p>
                <Button variant="outline" className="mb-2">
                  {method.action}
                </Button>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {method.available}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};