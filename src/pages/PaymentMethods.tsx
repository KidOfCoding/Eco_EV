import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CreditCard,
  Smartphone,
  Wallet,
  Plus,
  Trash2,
  Shield,
  CheckCircle,
  Edit,
  Star,
  Lock
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

export const PaymentMethods: React.FC = () => {
  const { user, updateUser } = useAuth();
  const [showAddCard, setShowAddCard] = useState(false);
  const [showAddUPI, setShowAddUPI] = useState(false);

  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });

  const [upiData, setUpiData] = useState({
    id: '',
    provider: 'gpay'
  });

  // Mock saved payment methods
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: '1',
      type: 'card',
      name: 'HDFC Credit Card',
      details: '**** **** **** 1234',
      expiry: '12/26',
      isDefault: true,
      provider: 'visa'
    },
    {
      id: '2',
      type: 'upi',
      name: 'Google Pay',
      details: 'user@okaxis',
      isDefault: false,
      provider: 'gpay'
    },
    {
      id: '3',
      type: 'card',
      name: 'SBI Debit Card',
      details: '**** **** **** 5678',
      expiry: '08/25',
      isDefault: false,
      provider: 'mastercard'
    }
  ]);

  const handleAddCard = () => {
    if (!cardData.number || !cardData.name || !cardData.expiry || !cardData.cvv) {
      toast.error('Please fill all card details');
      return;
    }

    const newCard = {
      id: Math.random().toString(36),
      type: 'card',
      name: `${cardData.name}'s Card`,
      details: `**** **** **** ${cardData.number.slice(-4)}`,
      expiry: cardData.expiry,
      isDefault: paymentMethods.length === 0,
      provider: 'visa'
    };

    setPaymentMethods(prev => [...prev, newCard]);
    setCardData({ number: '', name: '', expiry: '', cvv: '' });
    setShowAddCard(false);
    toast.success('Card added successfully!');
  };

  const handleAddUPI = () => {
    if (!upiData.id) {
      toast.error('Please enter UPI ID');
      return;
    }

    const newUPI = {
      id: Math.random().toString(36),
      type: 'upi',
      name: upiData.provider === 'gpay' ? 'Google Pay' :
        upiData.provider === 'phonepe' ? 'PhonePe' : 'Paytm',
      details: upiData.id,
      isDefault: paymentMethods.length === 0,
      provider: upiData.provider
    };

    setPaymentMethods(prev => [...prev, newUPI]);
    setUpiData({ id: '', provider: 'gpay' });
    setShowAddUPI(false);
    toast.success('UPI ID added successfully!');
  };

  const handleSetDefault = (id: string) => {
    setPaymentMethods(prev =>
      prev.map(method => ({
        ...method,
        isDefault: method.id === id
      }))
    );
    toast.success('Default payment method updated!');
  };

  const handleDelete = (id: string) => {
    setPaymentMethods(prev => prev.filter(method => method.id !== id));
    toast.success('Payment method removed!');
  };

  const getProviderIcon = (provider: string) => {
    switch (provider) {
      case 'visa': return '💳';
      case 'mastercard': return '💳';
      case 'rupay': return '💳';
      case 'gpay': return '🟢';
      case 'phonepe': return '🟣';
      case 'paytm': return '🔵';
      default: return '💳';
    }
  };

  const securityFeatures = [
    'PCI DSS Level 1 Certified',
    '256-bit SSL Encryption',
    'Tokenized Card Storage',
    'Fraud Detection System',
    '3D Secure Authentication',
    'Real-time Transaction Monitoring'
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Payment Methods
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your payment methods for faster and secure transactions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Methods List */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Saved Payment Methods
                  </h2>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setShowAddUPI(true)}
                      icon={<Smartphone className="h-4 w-4" />}
                    >
                      Add UPI
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => setShowAddCard(true)}
                      icon={<Plus className="h-4 w-4" />}
                    >
                      Add Card
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {paymentMethods.length === 0 ? (
                  <div className="text-center py-12">
                    <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      No Payment Methods
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Add a payment method to start booking charging sessions
                    </p>
                    <div className="flex justify-center space-x-4">
                      <Button onClick={() => setShowAddCard(true)}>
                        Add Card
                      </Button>
                      <Button variant="outline" onClick={() => setShowAddUPI(true)}>
                        Add UPI
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {paymentMethods.map((method, index) => (
                      <motion.div
                        key={method.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`border-2 rounded-lg p-4 ${method.isDefault
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                            : 'border-gray-300 dark:border-gray-600'
                          }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="h-12 w-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-2xl">
                              {getProviderIcon(method.provider)}
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900 dark:text-white">
                                {method.name}
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {method.details}
                                {method.type === 'card' && ` • Expires ${method.expiry}`}
                              </p>
                              {method.isDefault && (
                                <div className="flex items-center mt-1">
                                  <Star className="h-3 w-3 text-blue-600 mr-1" />
                                  <span className="text-xs text-blue-600 font-medium">Default</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {!method.isDefault && (
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleSetDefault(method.id)}
                              >
                                Set Default
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="ghost"
                              icon={<Edit className="h-4 w-4" />}
                            >
                              Edit
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleDelete(method.id)}
                              icon={<Trash2 className="h-4 w-4" />}
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Wallet Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm mt-6">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Eco Pulse Wallet
                </h2>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Wallet className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        ₹{user?.wallet?.toLocaleString()}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">Available Balance</p>
                    </div>
                  </div>
                  <Button icon={<Plus className="h-4 w-4" />}>
                    Add Money
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">₹1,250</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">This Month</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">₹4,890</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Total Spent</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">₹150</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Cashback Earned</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Information */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Payment Security
                </h3>
              </div>
              <div className="space-y-3">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <Lock className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
                    Your Data is Safe
                  </h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    We never store your complete card details. All sensitive information is tokenized and encrypted using industry-standard security protocols.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <CreditCard className="h-4 w-4 mr-2" />
                  View Transaction History
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="h-4 w-4 mr-2" />
                  Security Settings
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Wallet className="h-4 w-4 mr-2" />
                  Auto-reload Settings
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Add Card Modal */}
        {showAddCard && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Add Credit/Debit Card
              </h3>

              <div className="space-y-4">
                <Input
                  label="Card Number"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={cardData.number}
                  onChange={(e) => setCardData(prev => ({ ...prev, number: e.target.value }))}
                  icon={<CreditCard className="h-4 w-4" />}
                />

                <Input
                  label="Cardholder Name"
                  type="text"
                  placeholder="Name on card"
                  value={cardData.name}
                  onChange={(e) => setCardData(prev => ({ ...prev, name: e.target.value }))}
                />

                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Expiry Date"
                    type="text"
                    placeholder="MM/YY"
                    value={cardData.expiry}
                    onChange={(e) => setCardData(prev => ({ ...prev, expiry: e.target.value }))}
                  />
                  <Input
                    label="CVV"
                    type="text"
                    placeholder="123"
                    value={cardData.cvv}
                    onChange={(e) => setCardData(prev => ({ ...prev, cvv: e.target.value }))}
                  />
                </div>
              </div>

              <div className="flex space-x-3 mt-6">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowAddCard(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="flex-1"
                  onClick={handleAddCard}
                >
                  Add Card
                </Button>
              </div>
            </motion.div>
          </div>
        )}

        {/* Add UPI Modal */}
        {showAddUPI && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Add UPI ID
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    UPI Provider
                  </label>
                  <select
                    value={upiData.provider}
                    onChange={(e) => setUpiData(prev => ({ ...prev, provider: e.target.value }))}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  >
                    <option value="gpay">Google Pay</option>
                    <option value="phonepe">PhonePe</option>
                    <option value="paytm">Paytm</option>
                    <option value="other">Other UPI App</option>
                  </select>
                </div>

                <Input
                  label="UPI ID"
                  type="text"
                  placeholder="yourname@okaxis"
                  value={upiData.id}
                  onChange={(e) => setUpiData(prev => ({ ...prev, id: e.target.value }))}
                  icon={<Smartphone className="h-4 w-4" />}
                />
              </div>

              <div className="flex space-x-3 mt-6">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowAddUPI(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="flex-1"
                  onClick={handleAddUPI}
                >
                  Add UPI ID
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};