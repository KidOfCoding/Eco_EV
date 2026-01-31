import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin,
  Star,
  CreditCard,
  Wallet,
  ArrowLeft,
  CheckCircle,
  User,
  Shield
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';
import { ChargingStation } from '../types';
import toast from 'react-hot-toast';

export const BookingFlow: React.FC = () => {
  const [searchParams] = useSearchParams();
  const stationId = searchParams.get('stationId');
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [duration, setDuration] = useState(60);
  const [paymentMethod, setPaymentMethod] = useState('wallet');
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // Mock station data - in real app, fetch from API
  const [station, setStation] = useState<ChargingStation | null>(null);

  // Amenities Data
  const AMENITIES_DATA = [
    {
      category: 'Food',
      items: [
        { id: 'food_1', name: 'South Indian Breakfast', price: 80, description: 'Dosa, Idli, Vada' },
        { id: 'food_2', name: 'Local Thali', price: 120, description: 'Traditional meal with rice, dal, vegetables' },
        { id: 'food_3', name: 'Street Food Combo', price: 60, description: 'Chaat, Pani Puri, Bhel' },
      ]
    },
    {
      category: 'Accommodation',
      items: [
        { id: 'stay_1', name: 'Budget Room', price: 800, description: 'Clean AC room with basic amenities (per night)' },
        { id: 'stay_2', name: 'Premium Stay', price: 1500, description: 'Deluxe room with WiFi, breakfast included (per night)' },
      ]
    },
    {
      category: 'Entertainment',
      items: [
        { id: 'ent_1', name: 'Local Sightseeing', price: 300, description: 'Guided tour of nearby attractions' },
        { id: 'ent_2', name: 'Cultural Experience', price: 200, description: 'Traditional music/dance performance' },
      ]
    }
  ];

  useEffect(() => {
    // Mock fetch station data
    const mockStation: ChargingStation = {
      id: stationId || '1',
      hostId: '1',
      hostName: 'Rajesh Kumar',
      hostRating: 4.8,
      title: 'FastCharge Home Station',
      description: 'Covered parking, 24/7 available, near metro station',
      address: 'Koramangala, Bangalore, Karnataka',
      coordinates: { lat: 12.9352, lng: 77.6245 },
      socketType: 'Type-2',
      powerCapacity: 3.3,
      pricing: { perMinute: 2, perKwh: 8 },
      availability: 'available',
      amenities: ['Covered Parking', 'Security Camera', 'WiFi'],
      images: ['https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg'],
      reviews: [],
      isActive: true,
      createdAt: '2024-01-01'
    };
    setStation(mockStation);
  }, [stationId]);

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'
  ];

  const getAmenitiesTotal = () => {
    let total = 0;
    AMENITIES_DATA.forEach(cat => {
      cat.items.forEach(item => {
        if (selectedAmenities.includes(item.id)) {
          total += item.price;
        }
      });
    });
    return total;
  };

  const getChargingCost = () => {
    if (!station) return 0;
    return Math.round((duration / 60) * station.powerCapacity * station.pricing.perKwh);
  };

  function calculateTotal() {
    if (!station) return 0;
    const baseAmount = getChargingCost();
    const platformFee = Math.round(baseAmount * 0.05); // 5% platform fee
    const gst = Math.round(baseAmount * 0.18); // 18% GST
    const amenitiesCost = getAmenitiesTotal();

    return baseAmount + platformFee + gst + amenitiesCost;
  }

  const paymentMethods = [
    {
      id: 'wallet',
      name: 'SuryaVolt Wallet',
      description: `Balance: ₹${user?.wallet || 0}`,
      icon: <Wallet className="h-6 w-6" />,
      available: (user?.wallet || 0) >= calculateTotal()
    },
    {
      id: 'upi',
      name: 'UPI',
      description: 'PhonePe, Google Pay, Paytm',
      icon: <CreditCard className="h-6 w-6" />,
      available: true
    },
    {
      id: 'card',
      name: 'Credit/Debit Card',
      description: 'Visa, Mastercard, RuPay',
      icon: <CreditCard className="h-6 w-6" />,
      available: true
    }
  ];

  const handleBooking = async () => {
    if (!station) return;

    if (!user) {
      toast.error('Please log in to complete your booking');
      navigate('/login');
      return;
    }

    setLoading(true);

    try {
      // Simulate booking process
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Calculate final values
      const baseAmount = getChargingCost();
      const platformFee = Math.round(baseAmount * 0.05);
      const gst = Math.round(baseAmount * 0.18);
      const amenitiesCost = getAmenitiesTotal();
      const totalAmount = calculateTotal();

      // Resolve selected amenities details
      const selectedAmenityDetails = AMENITIES_DATA
        .flatMap(cat => cat.items)
        .filter(item => selectedAmenities.includes(item.id));

      // Create booking (mock)
      const booking = {
        id: Math.random().toString(36).substr(2, 9).toUpperCase(),
        stationId: station.id,
        stationTitle: station.title,
        stationAddress: station.address,
        hostName: station.hostName,
        date: selectedDate,
        time: selectedTime,
        duration,
        amount: totalAmount,
        status: 'confirmed',
        amenities: selectedAmenityDetails,
        breakdown: {
          energyCharge: baseAmount,
          platformFee,
          gst,
          amenitiesCost
        }
      };

      // Save to local storage for persistence (mock backend)
      const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
      localStorage.setItem('bookings', JSON.stringify([booking, ...existingBookings]));

      toast.success('Payment successful! Booking confirmed.');
      navigate('/booking-confirmation', {
        state: { booking, station }
      });
    } catch (error) {
      toast.error('Booking failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getNextAvailableDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const toggleAmenity = (id: string) => {
    setSelectedAmenities(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            icon={<ArrowLeft className="h-4 w-4" />}
          >
            Back
          </Button>
          <div className="ml-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Book Charging Session
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Complete your booking in {currentStep === 1 ? '3' : currentStep === 2 ? '2' : '1'} steps
            </p>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center font-semibold ${step <= currentStep
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                  }`}>
                  {step < currentStep ? <CheckCircle className="h-5 w-5" /> : step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 mx-2 ${step < currentStep ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                    }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <div className="flex space-x-16 text-sm text-gray-600 dark:text-gray-400">
              <span className={currentStep >= 1 ? 'text-blue-600 font-medium' : ''}>
                Select Time
              </span>
              <span className={currentStep >= 2 ? 'text-blue-600 font-medium' : ''}>
                Review Details
              </span>
              <span className={currentStep >= 3 ? 'text-blue-600 font-medium' : ''}>
                Payment
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8"
            >
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Select Date & Time
                  </h2>

                  {/* Date Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Select Date
                    </label>
                    <input
                      type="date"
                      min={getNextAvailableDate()}
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  {/* Time Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Select Time Slot
                    </label>
                    <div className="grid grid-cols-4 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-lg border-2 transition-all ${selectedTime === time
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                            : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:border-gray-400'
                            }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Duration */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Duration: {duration} minutes
                    </label>
                    <input
                      type="range"
                      min="30"
                      max="240"
                      step="15"
                      value={duration}
                      onChange={(e) => setDuration(parseInt(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>30 min</span>
                      <span>4 hours</span>
                    </div>
                  </div>

                  <Button
                    className="w-full"
                    onClick={() => setCurrentStep(2)}
                    disabled={!selectedDate || !selectedTime}
                  >
                    Continue to Review
                  </Button>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Review Booking Details
                  </h2>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                      Booking Summary
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Date</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {new Date(selectedDate).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Time</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {selectedTime}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Duration</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {duration} minutes
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Power Capacity</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {station.powerCapacity} kW
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Cost Breakdown - Moved to Step 3 or kept simple here */}
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                      Estimated Cost
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">
                          Charging Cost
                        </span>
                        <span className="text-gray-900 dark:text-white">
                          ₹{getChargingCost()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-gray-300 dark:border-gray-600 font-semibold">
                        <span>Subtotal (before tax)</span>
                        <span>₹{getChargingCost()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentStep(1)}
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={() => setCurrentStep(3)}
                      className="flex-1"
                    >
                      Proceed to Add-ons & Pay
                    </Button>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  {/* Local Amenities Section */}
                  <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Local Amenities (Optional)
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Enhance your charging experience with local food, accommodation, and entertainment options
                    </p>

                    {AMENITIES_DATA.map((category) => (
                      <div key={category.category} className="mb-6">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                          {category.category} Options
                        </h4>
                        <div className="space-y-2">
                          {category.items.map((item) => (
                            <label key={item.id} className="flex items-center cursor-pointer p-2 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg">
                              <input
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 rounded mr-3"
                                checked={selectedAmenities.includes(item.id)}
                                onChange={() => toggleAmenity(item.id)}
                              />
                              <div className="flex-1">
                                <div className="flex justify-between">
                                  <span className="text-sm font-medium text-gray-900 dark:text-white">{item.name}</span>
                                  <span className="text-sm font-medium text-blue-600">₹{item.price}</span>
                                </div>
                                <p className="text-xs text-gray-500">{item.description}</p>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Select Payment Method
                  </h2>

                  <div className="space-y-4">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${paymentMethod === method.id
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : method.available
                            ? 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
                            : 'border-gray-200 dark:border-gray-700 opacity-50 cursor-not-allowed'
                          }`}
                        onClick={() => method.available && setPaymentMethod(method.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${method.available
                              ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-400'
                              }`}>
                              {method.icon}
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900 dark:text-white">
                                {method.name}
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {method.description}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            {!method.available && method.id === 'wallet' && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  navigate('/wallet');
                                }}
                              >
                                Add Money
                              </Button>
                            )}
                            <input
                              type="radio"
                              name="payment"
                              checked={paymentMethod === method.id}
                              onChange={() => { }}
                              className="ml-3 h-4 w-4 text-blue-600"
                              disabled={!method.available}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentStep(2)}
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleBooking}
                      disabled={loading || !paymentMethod}
                      className="flex-1"
                    >
                      {loading ? 'Processing...' : `Pay ₹${calculateTotal()}`}
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Station Details Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 sticky top-24">
              <img
                src={station.images[0]}
                alt={station.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {station.title}
              </h3>

              <div className="flex items-center space-x-2 mb-3">
                <div className="flex items-center">
                  <User className="h-4 w-4 text-gray-400 mr-1" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {station.hostName}
                  </span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{station.hostRating}</span>
                </div>
              </div>

              <div className="flex items-start space-x-2 mb-4">
                <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {station.address}
                </span>
              </div>

              {currentStep > 1 && (
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                    Booking Breakdown
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Date & Time</span>
                      <span className="text-gray-900 dark:text-white text-right">
                        {new Date(selectedDate).toLocaleDateString()}<br />{selectedTime}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-gray-100 dark:border-gray-700"></div>

                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">EV Charges</span>
                      <span className="text-gray-900 dark:text-white">₹{getChargingCost()}</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Platform Fee (5%)</span>
                      <span>₹{Math.round(getChargingCost() * 0.05)}</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>GST (18%)</span>
                      <span>₹{Math.round(getChargingCost() * 0.18)}</span>
                    </div>

                    {getAmenitiesTotal() > 0 && (
                      <>
                        <div className="pt-2 border-t border-gray-100 dark:border-gray-700"></div>
                        <div className="flex justify-between font-medium">
                          <span className="text-gray-900 dark:text-white">Amenities</span>
                          <span className="text-gray-900 dark:text-white">₹{getAmenitiesTotal()}</span>
                        </div>
                        {selectedAmenities.length > 0 && (
                          <div className="text-xs text-gray-500 pl-2">
                            {AMENITIES_DATA.flatMap(cat => cat.items).filter(i => selectedAmenities.includes(i.id)).map(amenity => (
                              <div key={amenity.id} className="flex justify-between">
                                <span className="truncate w-32">{amenity.name}</span>
                                <span>₹{amenity.price}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    )}

                    <div className="flex justify-between font-bold text-lg border-t border-gray-300 dark:border-gray-600 pt-2 mt-2">
                      <span className="text-gray-900 dark:text-white">Total Pay</span>
                      <span className="text-blue-600">₹{calculateTotal()}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
