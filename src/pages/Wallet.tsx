import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wallet, 
  Plus, 
  ArrowUpRight, 
  ArrowDownLeft, 
  CreditCard,
  Smartphone,
  Gift,
  History,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useAuth } from '../contexts/AuthContext';

export const WalletPage: React.FC = () => {
  const { user, updateUser } = useAuth();
  const [addMoneyAmount, setAddMoneyAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [showAddMoney, setShowAddMoney] = useState(false);

  const quickAmounts = [100, 250, 500, 1000, 2000, 5000];

  const transactions = [
    {
      id: '1',
      type: 'credit',
      description: 'Added money to wallet',
      amount: 1000,
      date: '2024-01-15 14:30',
      status: 'completed',
      method: 'UPI'
    },
    {
      id: '2',
      type: 'debit',
      description: 'Charging session at FastCharge Station',
      amount: 180,
      date: '2024-01-15 12:15',
      status: 'completed',
      method: 'wallet'
    },
    {
      id: '3',
      type: 'credit',
      description: 'Refund for cancelled booking',
      amount: 120,
      date: '2024-01-14 18:45',
      status: 'completed',
      method: 'refund'
    },
    {
      id: '4',
      type: 'debit',
      description: 'Charging session at Green Energy Hub',
      amount: 240,
      date: '2024-01-14 16:20',
      status: 'completed',
      method: 'wallet'
    },
    {
      id: '5',
      type: 'credit',
      description: 'Cashback from referral program',
      amount: 50,
      date: '2024-01-13 10:30',
      status: 'completed',
      method: 'cashback'
    }
  ];

  const paymentMethods = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      name: 'UPI',
      description: 'PhonePe, Google Pay, Paytm',
      fee: 'Free'
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      name: 'Cards',
      description: 'Credit & Debit Cards',
      fee: '2% + GST'
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      name: 'Net Banking',
      description: 'All major banks',
      fee: '₹5 + GST'
    }
  ];

  const handleAddMoney = () => {
    const amount = selectedAmount || parseInt(addMoneyAmount);
    if (amount && amount > 0) {
      updateUser({ wallet: (user?.wallet || 0) + amount });
      setShowAddMoney(false);
      setAddMoneyAmount('');
      setSelectedAmount(null);
    }
  };

  const getTransactionIcon = (type: string, method: string) => {
    if (type === 'credit') {
      return method === 'cashback' ? <Gift className="h-5 w-5" /> : <ArrowDownLeft className="h-5 w-5" />;
    }
    return <ArrowUpRight className="h-5 w-5" />;
  };

  const getTransactionColor = (type: string) => {
    return type === 'credit' ? 'text-green-600' : 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            My Wallet
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your wallet balance and transaction history
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Wallet Balance */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl shadow-sm p-8 text-white mb-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Wallet Balance</h2>
                <Wallet className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-6">₹{user?.wallet?.toLocaleString()}</div>
              <Button 
                variant="secondary" 
                className="w-full"
                onClick={() => setShowAddMoney(true)}
                icon={<Plus className="h-4 w-4" />}
              >
                Add Money
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                This Month
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <ArrowDownLeft className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Money Added</span>
                  </div>
                  <span className="font-semibold text-green-600">₹1,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <ArrowUpRight className="h-4 w-4 text-red-600 mr-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Money Spent</span>
                  </div>
                  <span className="font-semibold text-red-600">₹420</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Net Change</span>
                  </div>
                  <span className="font-semibold text-blue-600">+₹580</span>
                </div>
              </div>
            </motion.div>

            {/* Security Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
            >
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Secure Wallet
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  256-bit encryption
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  PCI DSS compliant
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Instant refunds
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  24/7 monitoring
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Transactions */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm"
            >
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Transaction History
                  </h2>
                  <Button size="sm" variant="outline" icon={<History className="h-4 w-4" />}>
                    Download Statement
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {transactions.map((transaction, index) => (
                    <motion.div
                      key={transaction.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-sm transition-shadow"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                          transaction.type === 'credit' ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'
                        }`}>
                          <span className={getTransactionColor(transaction.type)}>
                            {getTransactionIcon(transaction.type, transaction.method)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">
                            {transaction.description}
                          </h4>
                          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                            <Clock className="h-3 w-3" />
                            <span>{new Date(transaction.date).toLocaleString()}</span>
                            <span>•</span>
                            <span className="capitalize">{transaction.method}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-semibold ${getTransactionColor(transaction.type)}`}>
                          {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                          {transaction.status}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Add Money Modal */}
        {showAddMoney && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Add Money to Wallet
              </h3>

              {/* Quick Amount Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Quick Select
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {quickAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        selectedAmount === amount
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                          : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
                      }`}
                    >
                      ₹{amount}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div className="mb-6">
                <Input
                  label="Or enter custom amount"
                  type="number"
                  placeholder="Enter amount"
                  value={addMoneyAmount}
                  onChange={(e) => {
                    setAddMoneyAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                />
              </div>

              {/* Payment Methods */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Payment Method
                </label>
                <div className="space-y-3">
                  {paymentMethods.map((method, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                          {method.icon}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{method.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{method.description}</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{method.fee}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowAddMoney(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="flex-1"
                  onClick={handleAddMoney}
                  disabled={!selectedAmount && !addMoneyAmount}
                >
                  Add ₹{selectedAmount || addMoneyAmount || 0}
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};