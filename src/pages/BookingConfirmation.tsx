import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Calendar,
  MapPin,
  Clock,
  Zap,
  CreditCard,
  Download,
  Share2,
  MessageCircle,
  Star,
  AlertTriangle
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import toast from 'react-hot-toast';

export const BookingConfirmation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { booking, station } = location.state || {};

  useEffect(() => {
    if (!booking || !station) {
      navigate('/map');
      return;
    }

    // Show success notification
    toast.success('Booking confirmed! Redirecting to dashboard in 5s...');

    // Auto-redirect to dashboard after 5 seconds
    const timer = setTimeout(() => {
      navigate('/rider-dashboard');
    }, 5000);

    return () => clearTimeout(timer);
  }, [booking, station, navigate]);

  if (!booking || !station) {
    return null;
  }

  const handleDownloadReceipt = () => {
    toast.success('Receipt downloaded successfully!');
  };

  const handleShareBooking = () => {
    if (navigator.share) {
      navigator.share({
        title: 'SuryaVolt Booking Confirmation',
        text: `I've booked a charging session at ${station.title}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Booking link copied to clipboard!');
    }
  };

  const handleContactHost = () => {
    toast.success('Host contact feature will be available soon!');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-8"
        >
          <div className="h-20 w-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Booking Confirmed!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Your charging session has been successfully booked
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Details */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 mb-6"
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Booking Details
                </h2>
                <div className="bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-800">
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                    ID: {booking.id}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Date & Time</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {new Date(booking.date).toLocaleDateString()} at {booking.time}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {booking.duration} minutes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Zap className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Power</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {station.powerCapacity} kW ({station.socketType})
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {station.title}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {station.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Amenities Section */}
              {booking.amenities && booking.amenities.length > 0 && (
                <div className="border-t border-gray-100 dark:border-gray-700 pt-6 mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Selected Amenities
                  </h3>
                  <div className="space-y-2">
                    {booking.amenities.map((item: any, idx: number) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span className="text-gray-700 dark:text-gray-300">{item.name}</span>
                        <span className="text-gray-900 dark:text-white font-medium">₹{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Cost Breakdown */}
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  Payment Summary
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">EV Charging Cost</span>
                    <span className="text-gray-900 dark:text-white">₹{booking.breakdown?.energyCharge || 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Platform Fee</span>
                    <span className="text-gray-900 dark:text-white">₹{booking.breakdown?.platformFee || 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">GST (18%)</span>
                    <span className="text-gray-900 dark:text-white">₹{booking.breakdown?.gst || 0}</span>
                  </div>
                  {booking.breakdown?.amenitiesCost > 0 && (
                    <div className="flex justify-between text-blue-600 dark:text-blue-400">
                      <span>Amenities Total</span>
                      <span>₹{booking.breakdown?.amenitiesCost}</span>
                    </div>
                  )}
                  <div className="border-t border-gray-200 dark:border-gray-600 pt-2 mt-2">
                    <div className="flex justify-between text-base font-bold">
                      <span className="text-gray-900 dark:text-white">Total Amount Paid</span>
                      <span className="text-green-600">₹{booking.amount}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Important Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6"
            >
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                <div>
                  <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">
                    Important Reminders
                  </h3>
                  <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                    <li>• Arrive on time for your booking</li>
                    <li>• Bring your charging cable if required</li>
                    <li>• Contact host if you're running late</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <Button
            variant="outline"
            onClick={handleDownloadReceipt}
            icon={<Download className="h-4 w-4" />}
          >
            Download Receipt
          </Button>
          <Button
            variant="outline"
            onClick={handleShareBooking}
            icon={<Share2 className="h-4 w-4" />}
          >
            Share Booking
          </Button>
          <Button
            onClick={() => navigate('/rider-dashboard')}
          >
            Go to Dashboard
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
