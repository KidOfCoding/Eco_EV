import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, Smartphone } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

export const Pricing: React.FC = () => {
    const navigate = useNavigate();

    const plans = [
        {
            title: 'Per Charge',
            price: '₹8',
            period: 'per hour',
            features: [
                'Pay-as-you-go model',
                'No subscription needed',
                'Access to all hubs',
                'Real-time availability'
            ],
            cta: 'Get Started',
            variant: 'outline',
            recommended: false,
            action: () => navigate('/map')
        },
        {
            title: 'Monthly Pass',
            price: '₹499',
            period: 'per month',
            features: [
                'Unlimited charging',
                'Priority booking',
                'AI battery insights',
                '24/7 support',
                '5% cashback'
            ],
            cta: 'Get Started',
            variant: 'primary',
            recommended: true,
            action: () => navigate('/register?role=rider')
        },
        {
            title: 'Become a Host',
            price: '₹0',
            period: 'setup cost',
            features: [
                'Free solar hub installation',
                'Earn passive income',
                'Analytics dashboard',
                'Maintenance included'
            ],
            cta: 'Apply Now',
            variant: 'outline',
            recommended: false,
            action: () => navigate('/become-host')
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Choose the plan that fits your needs. No hidden fees, no surprises.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border-2 ${plan.recommended
                                ? 'border-emerald-500 scale-105 z-10'
                                : 'border-transparent hover:border-blue-200 dark:hover:border-blue-800'
                                }`}
                        >
                            {plan.recommended && (
                                <div className="absolute top-0 inset-x-0 h-10 bg-emerald-500 flex items-center justify-center text-white text-sm font-bold uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}

                            <div className={`p-8 ${plan.recommended ? 'pt-14' : ''}`}>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                                    {plan.title}
                                </h3>
                                <div className="text-center mb-6">
                                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                                        {plan.price}
                                    </span>
                                    <span className="text-gray-500 dark:text-gray-400 block mt-1">
                                        {plan.period}
                                    </span>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <Check className={`h-5 w-5 mr-3 flex-shrink-0 ${plan.recommended ? 'text-emerald-500' : 'text-blue-500'
                                                }`} />
                                            <span className="text-gray-600 dark:text-gray-300 text-sm">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    className="w-full"
                                    variant={plan.recommended ? 'primary' : 'outline'}
                                    onClick={plan.action}
                                    style={plan.recommended ? { backgroundColor: '#10B981', borderColor: '#10B981' } : {}}
                                >
                                    {plan.cta}
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="mt-20 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                Can I switch plans later?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Yes, you can upgrade to the Monthly Pass or cancel it at any time. Changes take effect immediately.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                Are there any hidden installation fees for hosts?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                No, the basic installation is completely free for eligible locations. Commercial setups may vary.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                How does the cashback work?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Monthly Pass members earn 5% cashback on all charging sessions, credited to their SuryaVolt wallet instantly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

