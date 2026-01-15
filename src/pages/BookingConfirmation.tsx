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
  Star
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
    toast.success('Booking confirmed! You will receive SMS and email confirmations.');
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
        title: 'ChargeBike Booking Confirmation',
        text: `I've booked a charging session at ${station.title}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Booking link copied to clipboard!');
    }
  };

  const handleContactHost = () => {
    toast.info('Host contact feature will be available soon!');
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
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Booking Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Date & Time</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {new Date(booking.date).toLocaleDateString()} at {booking.time}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {booking.duration} minutes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Zap className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Power & Socket</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {station.powerCapacity} kW • {station.socketType}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {station.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <CreditCard className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Total Amount</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        ₹{booking.amount}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Status</p>
                      <p className="font-medium text-green-600 capitalize">
                        {booking.status}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Host Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 mb-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Host Information
              </h2>

              <div className="flex items-center space-x-4 mb-6">
                <div className="h-16 w-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {station.hostName.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {station.hostName}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm font-medium">{station.hostRating}</span>
                    <span className="text-sm text-gray-500">• Verified Host</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-gray-900 dark:text-white">
                  Station: {station.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {station.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {station.amenities.map((amenity: string, index: number) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full mt-6"
                onClick={handleContactHost}
                icon={<MessageCircle className="h-4 w-4" />}
              >
                Contact Host
              </Button>
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
                    <li>• Follow safety guidelines during charging</li>
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