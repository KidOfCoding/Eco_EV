import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Star, 
  Zap, 
  Clock, 
  DollarSign,
  Calendar,
  ArrowLeft,
  Heart,
  Share2,
  Flag,
  User,
  Shield,
  Camera,
  Navigation,
  Phone,
  MessageCircle
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';
import { ChargingStation } from '../types';
import toast from 'react-hot-toast';

export const StationDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [station, setStation] = useState<ChargingStation | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Mock fetch station data
    const mockStation: ChargingStation = {
      id: id || '1',
      hostId: '1',
      hostName: 'Rajesh Kumar',
      hostRating: 4.8,
      title: 'FastCharge Home Station',
      description: 'Premium charging station with covered parking and 24/7 availability. Located near metro station with easy access. Equipped with latest Type-2 charging technology and security cameras for your safety.',
      address: 'No. 123, 4th Cross, Koramangala 5th Block, Bangalore, Karnataka 560095',
      coordinates: { lat: 12.9352, lng: 77.6245 },
      socketType: 'Type-2',
      powerCapacity: 3.3,
      pricing: { perMinute: 2, perKwh: 8 },
      availability: 'available',
      amenities: ['Covered Parking', 'Security Camera', 'WiFi', 'Restroom', 'Café Nearby', 'Metro Access'],
      images: [
        'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg',
        'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg',
        'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg'
      ],
      reviews: [
        {
          id: '1',
          userId: '2',
          userName: 'Priya Sharma',
          userAvatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100',
          rating: 5,
          comment: 'Excellent charging station! Very clean and safe. Host was very helpful and responsive.',
          createdAt: '2024-01-10'
        },
        {
          id: '2',
          userId: '3',
          userName: 'Amit Singh',
          rating: 4,
          comment: 'Good location and fast charging. Covered parking is a plus during monsoon.',
          createdAt: '2024-01-08'
        },
        {
          id: '3',
          userId: '4',
          userName: 'Sneha Patel',
          userAvatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100',
          rating: 5,
          comment: 'Perfect charging experience. Will definitely book again!',
          createdAt: '2024-01-05'
        }
      ],
      isActive: true,
      createdAt: '2024-01-01'
    };
    setStation(mockStation);
  }, [id]);

  const handleBookNow = () => {
    if (!user) {
      toast.error('Please login to book a charging session');
      navigate('/login');
      return;
    }
    navigate(`/booking?stationId=${station?.id}`);
  };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? 'Removed from favorites' : 'Added to favorites');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: station?.title,
        text: `Check out this charging station: ${station?.title}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  const handleGetDirections = () => {
    if (station) {
      const url = `https://www.google.com/maps/dir/?api=1&destination=${station.coordinates.lat},${station.coordinates.lng}`;
      window.open(url, '_blank');
    }
  };

  const handleContactHost = () => {
    toast.info('Host contact feature will be available soon!');
  };

  const handleReport = () => {
    toast.info('Report feature will be available soon!');
  };

  if (!station) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading station details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            icon={<ArrowLeft className="h-4 w-4" />}
          >
            Back to Map
          </Button>
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              onClick={handleToggleFavorite}
              icon={<Heart className={`h-4 w-4 ${isFavorite ? 'fill-current text-red-500' : ''}`} />}
            >
              {isFavorite ? 'Saved' : 'Save'}
            </Button>
            <Button 
              variant="ghost" 
              onClick={handleShare}
              icon={<Share2 className="h-4 w-4" />}
            >
              Share
            </Button>
            <Button 
              variant="ghost" 
              onClick={handleReport}
              icon={<Flag className="h-4 w-4" />}
            >
              Report
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden mb-6"
            >
              <div className="relative">
                <img
                  src={station.images[selectedImageIndex]}
                  alt={station.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  {station.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === selectedImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    station.availability === 'available' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {station.availability === 'available' ? 'Available Now' : 'Currently Busy'}
                  </span>
                </div>
              </div>
              
              {station.images.length > 1 && (
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex space-x-2 overflow-x-auto">
                    {station.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                          index === selectedImageIndex 
                            ? 'border-blue-500' 
                            : 'border-gray-300 dark:border-gray-600'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${station.title} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Station Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 mb-6"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {station.title}
                  </h1>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 mr-1" />
                      <span className="font-medium">{station.hostRating}</span>
                      <span className="text-gray-500 ml-1">({station.reviews.length} reviews)</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <User className="h-4 w-4 mr-1" />
                      <span>Hosted by {station.hostName}</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400">
                      {station.address}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">
                    ₹{station.pricing.perKwh}
                  </div>
                  <div className="text-sm text-gray-500">per kWh</div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {station.description}
              </p>

              {/* Technical Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Zap className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-medium text-gray-900 dark:text-white">Power Capacity</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {station.powerCapacity} kW
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {station.socketType} Socket
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-medium text-gray-900 dark:text-white">Charging Time</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    ~2-3 hrs
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    For typical EV bike
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <DollarSign className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-medium text-gray-900 dark:text-white">Pricing</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    ₹{station.pricing.perKwh}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    per kWh
                  </p>
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Amenities & Features
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {station.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="flex-1"
                  onClick={handleBookNow}
                  icon={<Calendar className="h-4 w-4" />}
                >
                  Book Now
                </Button>
                <Button 
                  variant="outline"
                  onClick={handleGetDirections}
                  icon={<Navigation className="h-4 w-4" />}
                >
                  Get Directions
                </Button>
                <Button 
                  variant="outline"
                  onClick={handleContactHost}
                  icon={<MessageCircle className="h-4 w-4" />}
                >
                  Contact Host
                </Button>
              </div>
            </motion.div>

            {/* Reviews Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Reviews ({station.reviews.length})
                </h2>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="font-medium">{station.hostRating}</span>
                  <span className="text-gray-500">average rating</span>
                </div>
              </div>

              <div className="space-y-6">
                {station.reviews.map((review, index) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-medium">
                        {review.userAvatar ? (
                          <img 
                            src={review.userAvatar} 
                            alt={review.userName}
                            className="h-12 w-12 rounded-full object-cover"
                          />
                        ) : (
                          review.userName.charAt(0)
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900 dark:text-white">
                            {review.userName}
                          </h4>
                          <span className="text-sm text-gray-500">
                            {new Date(review.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-gray-300 dark:text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                          {review.comment}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-6">
                <Button variant="outline">
                  View All Reviews
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  ₹{station.pricing.perKwh}
                </div>
                <div className="text-gray-600 dark:text-gray-400">per kWh</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Availability</span>
                  <span className={`text-sm font-medium ${
                    station.availability === 'available' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {station.availability === 'available' ? 'Available Now' : 'Currently Busy'}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Response Time</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    Usually within 1 hour
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Cancellation</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    Free until 30 mins before
                  </span>
                </div>
              </div>

              <Button 
                className="w-full mb-4"
                onClick={handleBookNow}
                disabled={station.availability !== 'available'}
                icon={<Calendar className="h-4 w-4" />}
              >
                {station.availability === 'available' ? 'Book This Station' : 'Currently Unavailable'}
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleGetDirections}
                  icon={<Navigation className="h-4 w-4" />}
                >
                  Directions
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleContactHost}
                  icon={<Phone className="h-4 w-4" />}
                >
                  Call Host
                </Button>
              </div>
            </div>

            {/* Host Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mt-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                About Your Host
              </h3>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-16 w-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {station.hostName.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {station.hostName}
                  </h4>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm font-medium">{station.hostRating}</span>
                    <span className="text-sm text-gray-500">• Verified Host</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <Shield className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600">KYC Verified</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Member since</span>
                  <span className="text-gray-900 dark:text-white">January 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Response rate</span>
                  <span className="text-gray-900 dark:text-white">98%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Languages</span>
                  <span className="text-gray-900 dark:text-white">English, Hindi, Kannada</span>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full mt-6"
                onClick={handleContactHost}
                icon={<MessageCircle className="h-4 w-4" />}
              >
                Message Host
              </Button>
            </motion.div>

            {/* Safety Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 mt-6"
            >
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                <div>
                  <h3 className="font-medium text-green-800 dark:text-green-200 mb-2">
                    Safety & Insurance
                  </h3>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• All charging sessions are insured</li>
                    <li>• Host identity verified with KYC</li>
                    <li>• 24/7 emergency support available</li>
                    <li>• Equipment safety certified</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};