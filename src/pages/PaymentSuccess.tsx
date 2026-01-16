import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Download,
  Share2,
  Calendar,
  CreditCard,
  Clock,
  Zap,
  MapPin,
  Star
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import toast from 'react-hot-toast';

export const PaymentSuccess: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const transactionId = searchParams.get('txnId') || 'TXN' + Date.now();
  const amount = searchParams.get('amount') || '180';

  useEffect(() => {
    toast.success('Payment successful! Booking confirmed.');
  }, []);

  const transactionDetails = {
    id: transactionId,
    amount: parseInt(amount),
    date: new Date().toISOString(),
    method: 'UPI',
    status: 'Success',
    stationName: 'FastCharge Home Station',
    hostName: 'Rajesh Kumar',
    duration: 45,
    scheduledTime: '2024-01-16 14:00'
  };

  const handleDownloadReceipt = () => {
    // In a real app, this would generate and download a PDF receipt
    toast.success('Receipt downloaded successfully!');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'ECOPluse Payment Successful',
        text: `Payment of ₹${transactionDetails.amount} completed successfully!`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(`Payment successful! Transaction ID: ${transactionDetails.id}`);
      toast.success('Transaction details copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full"
      >
        {/* Success Animation */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="h-20 w-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
          </motion.div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Payment Successful!
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Your charging session has been booked and confirmed
          </p>
        </div>

        {/* Transaction Details */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Transaction Details
          </h2>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Transaction ID</span>
              <span className="font-mono text-sm text-gray-900 dark:text-white">
                {transactionDetails.id}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Amount Paid</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                ₹{transactionDetails.amount}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Payment Method</span>
              <span className="text-gray-900 dark:text-white">{transactionDetails.method}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Date & Time</span>
              <span className="text-gray-900 dark:text-white">
                {new Date(transactionDetails.date).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Status</span>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600 font-medium">{transactionDetails.status}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Summary */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Booking Summary
          </h2>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Zap className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  {transactionDetails.stationName}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Host: {transactionDetails.hostName}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  {new Date(transactionDetails.scheduledTime).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  at {new Date(transactionDetails.scheduledTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  {transactionDetails.duration} minutes
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Estimated charging time
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            className="w-full"
            onClick={handleDownloadReceipt}
            icon={<Download className="h-4 w-4" />}
          >
            Download Receipt
          </Button>

          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              onClick={handleShare}
              icon={<Share2 className="h-4 w-4" />}
            >
              Share
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/rider-dashboard')}
            >
              Dashboard
            </Button>
          </div>

          <Button
            variant="ghost"
            className="w-full"
            onClick={() => navigate('/map')}
          >
            Book Another Session
          </Button>
        </div>

        {/* Support */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Need help with your booking?
          </p>
          <Button variant="ghost" size="sm">
            Contact Support
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
