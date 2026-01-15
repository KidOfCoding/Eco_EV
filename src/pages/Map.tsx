import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin,
  Filter,
  Search,
  Star,
  Zap,
  Clock,
  DollarSign,
  Navigation,
  RefreshCw
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ChargingStation } from '../types';

export const Map: React.FC = () => {
  const [stations, setStations] = useState<ChargingStation[]>([]);
  const [selectedStation, setSelectedStation] = useState<ChargingStation | null>(null);
  const [filters, setFilters] = useState({
    socketType: '',
    maxPrice: 100,
    availability: 'all'
  });
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - in real app, this would come from API
  useEffect(() => {
    const mockStations: ChargingStation[] = [
      {
        id: '1',
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
      },
      {
        id: '2',
        hostId: '2',
        hostName: 'Priya Sharma',
        hostRating: 4.9,
        title: 'Green Energy Hub',
        description: 'Solar powered charging, eco-friendly location',
        address: 'Indiranagar, Bangalore, Karnataka',
        coordinates: { lat: 12.9719, lng: 77.6412 },
        socketType: 'CCS',
        powerCapacity: 7.2,
        pricing: { perMinute: 3, perKwh: 12 },
        availability: 'busy',
        amenities: ['Solar Powered', 'Café Nearby', 'Rest Area'],
        images: ['https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg'],
        reviews: [],
        isActive: true,
        createdAt: '2024-01-02'
      },
      {
        id: '3',
        hostId: '3',
        hostName: 'Amit Singh',
        hostRating: 4.6,
        title: 'Quick Charge Point',
        description: 'Fast charging available, safe neighbourhood',
        address: 'Whitefield, Bangalore, Karnataka',
        coordinates: { lat: 12.9698, lng: 77.7500 },
        socketType: 'Type-2',
        powerCapacity: 5.0,
        pricing: { perMinute: 2.5, perKwh: 10 },
        availability: 'available',
        amenities: ['Fast Charging', 'CCTV', 'Shopping Mall'],
        images: ['https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg'],
        reviews: [],
        isActive: true,
        createdAt: '2024-01-03'
      },
      // Bhubaneswar Stations
      {
        id: '4',
        hostId: '4',
        hostName: 'TML Tirupati Enterprises',
        hostRating: 4.5,
        title: 'TML Tirupati Enterprises Charging Station',
        description: 'IDCO, Plot No. 16,17,32&33 Bhagabanpur Industrial Area Bhubaneswar. Slot - 5',
        address: 'IDCO, Plot No. 16,17,32&33 Bhagabanpur Industrial Area, Bhubaneswar',
        coordinates: { lat: 20.2961, lng: 85.8245 },
        socketType: 'CCS',
        powerCapacity: 30,
        pricing: { perMinute: 5, perKwh: 18 },
        availability: 'available',
        amenities: ['24/7 Access', 'Restroom', 'Main Road Access'],
        images: ['https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg'],
        reviews: [],
        isActive: true,
        createdAt: '2024-01-04'
      },
      {
        id: '5',
        hostId: '5',
        hostName: 'Tata Power',
        hostRating: 4.7,
        title: 'Tata Power - BMC Bhawani Mall',
        description: 'BMC Bhawani Mall St, Saheed Nagar Bhubaneswar. Slot - 7',
        address: 'BMC Bhawani Mall St, Saheed Nagar, Bhubaneswar',
        coordinates: { lat: 20.2920, lng: 85.8450 },
        socketType: 'Type-2',
        powerCapacity: 22,
        pricing: { perMinute: 4, perKwh: 15 },
        availability: 'available',
        amenities: ['Mall Access', 'Food Court', 'Parking'],
        images: ['https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg'],
        reviews: [],
        isActive: true,
        createdAt: '2024-01-04'
      },
      {
        id: '6',
        hostId: '6',
        hostName: 'Gugnani Autocars',
        hostRating: 4.4,
        title: 'Tata Power - GUGNANI AUTOCARS',
        description: 'Plot No. S, 3/48, Block C, Sector A, Mancheswar Industrial Estate. Slot - 1',
        address: 'Mancheswar Industrial Estate, Bhubaneswar',
        coordinates: { lat: 20.3200, lng: 85.8300 },
        socketType: 'CCS',
        powerCapacity: 25,
        pricing: { perMinute: 4.5, perKwh: 16 },
        availability: 'busy',
        amenities: ['Service Center', 'Waiting Lounge'],
        images: ['https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg'],
        reviews: [],
        isActive: true,
        createdAt: '2024-01-04'
      },
      {
        id: '7',
        hostId: '7',
        hostName: 'MLCP',
        hostRating: 4.3,
        title: 'Tata Power - MLCP Charging Station',
        description: 'MLCP Saheed Nagar Plot No.150(P) Saheed Nagar Bhubaneswar. Slot - 6',
        address: 'MLCP Saheed Nagar, Bhubaneswar',
        coordinates: { lat: 20.2940, lng: 85.8420 },
        socketType: 'Type-2',
        powerCapacity: 7.2,
        pricing: { perMinute: 3, perKwh: 12 },
        availability: 'available',
        amenities: ['Multi-level Parking', 'City Center'],
        images: ['https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg'],
        reviews: [],
        isActive: true,
        createdAt: '2024-01-04'
      },
      {
        id: '8',
        hostId: '8',
        hostName: 'Dion Automotives',
        hostRating: 4.6,
        title: 'Tata Power - Dion Automotives',
        description: 'Plot No 2175, 3766, Lewis Road, Samantarapur, Old Town. Slot - 4',
        address: 'Lewis Road, Samantarapur, Old Town, Bhubaneswar',
        coordinates: { lat: 20.2500, lng: 85.8350 },
        socketType: 'CCS',
        powerCapacity: 50,
        pricing: { perMinute: 6, perKwh: 20 },
        availability: 'available',
        amenities: ['Showroom', 'Wifi', 'Coffee'],
        images: ['https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg'],
        reviews: [],
        isActive: true,
        createdAt: '2024-01-04'
      },
      {
        id: '9',
        hostId: '9',
        hostName: 'Geetanjali Stations',
        hostRating: 4.2,
        title: 'Charger - Geetanjali Charging Station',
        description: 'Service Rd W Acharya Vihar, Bhubaneswar. Slot - 1',
        address: 'Service Rd W Acharya Vihar, Bhubaneswar',
        coordinates: { lat: 20.3000, lng: 85.8300 },
        socketType: 'Type-2',
        powerCapacity: 22,
        pricing: { perMinute: 3.5, perKwh: 14 },
        availability: 'offline',
        amenities: ['Highway Access', '24/7'],
        images: ['https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg'],
        reviews: [],
        isActive: true,
        createdAt: '2024-01-04'
      },
      {
        id: '10',
        hostId: '10',
        hostName: 'Gugnani Tyres',
        hostRating: 4.5,
        title: 'Tata Power - GUGNANI TYRES',
        description: 'UCO Bank 1294, CRP - DAV Rd, Nilakantha Nagar, Nayapalli. Slot - 2',
        address: 'Nilakantha Nagar, Nayapalli, Bhubaneswar',
        coordinates: { lat: 20.2800, lng: 85.8150 },
        socketType: 'CCS',
        powerCapacity: 30,
        pricing: { perMinute: 5, perKwh: 18 },
        availability: 'available',
        amenities: ['Tyre Shop', 'Air Filling'],
        images: ['https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg'],
        reviews: [],
        isActive: true,
        createdAt: '2024-01-04'
      },
      {
        id: '11',
        hostId: '11',
        hostName: 'HPCL',
        hostRating: 4.4,
        title: 'HPCL - Regional Office Charging Station',
        description: '7RRW M8H, Saheed Nagar Bhubaneswar. Slot - 1',
        address: 'Saheed Nagar, Bhubaneswar',
        coordinates: { lat: 20.2910, lng: 85.8430 },
        socketType: 'Type-2',
        powerCapacity: 7.2,
        pricing: { perMinute: 3, perKwh: 12 },
        availability: 'available',
        amenities: ['Petrol Pump', 'Air', 'Water'],
        images: ['https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg'],
        reviews: [],
        isActive: true,
        createdAt: '2024-01-04'
      }
    ];
    setStations(mockStations);
  }, []);

  const filteredStations = stations.filter(station => {
    const matchesSearch = station.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      station.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSocket = !filters.socketType || station.socketType === filters.socketType;
    const matchesPrice = station.pricing.perKwh <= filters.maxPrice;
    const matchesAvailability = filters.availability === 'all' || station.availability === filters.availability;

    return matchesSearch && matchesSocket && matchesPrice && matchesAvailability;
  });

  const getStatusColor = (availability: string) => {
    switch (availability) {
      case 'available': return 'text-green-600 bg-green-100';
      case 'busy': return 'text-red-600 bg-red-100';
      case 'offline': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Find Charging Stations
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Discover available charging stations near you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Filters and Search */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Filters
                </h2>
                <Button variant="ghost" size="sm">
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Search Location
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Enter location or station name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Socket Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Socket Type
                </label>
                <select
                  value={filters.socketType}
                  onChange={(e) => setFilters(prev => ({ ...prev, socketType: e.target.value }))}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="">All Types</option>
                  <option value="Type-2">Type-2</option>
                  <option value="CCS">CCS</option>
                  <option value="CHAdeMO">CHAdeMO</option>
                </select>
              </div>

              {/* Max Price */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Max Price per kWh: ₹{filters.maxPrice}
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={filters.maxPrice}
                  onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: parseInt(e.target.value) }))}
                  className="w-full"
                />
              </div>

              {/* Availability */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Availability
                </label>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Stations' },
                    { value: 'available', label: 'Available Now' },
                    { value: 'busy', label: 'Currently Busy' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        name="availability"
                        value={option.value}
                        checked={filters.availability === option.value}
                        onChange={(e) => setFilters(prev => ({ ...prev, availability: e.target.value }))}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <Button className="w-full" icon={<Navigation className="h-4 w-4" />}>
                Use Current Location
              </Button>
            </div>
          </div>

          {/* Map and Results */}
          <div className="lg:col-span-2">
            {/* Map Placeholder */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm mb-6 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 dark:text-gray-400">
                  Interactive map would be displayed here
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Integration with Google Maps or MapMyIndia
                </p>
              </div>
            </div>

            {/* Results List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {filteredStations.length} stations found
                </h2>
                <select className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white">
                  <option>Sort by Distance</option>
                  <option>Sort by Price</option>
                  <option>Sort by Rating</option>
                </select>
              </div>

              {filteredStations.map((station) => (
                <motion.div
                  key={station.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedStation(station)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {station.title}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(station.availability)}`}>
                          {station.availability}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {station.address}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          {station.hostRating}
                        </div>
                        <div className="flex items-center">
                          <Zap className="h-4 w-4 mr-1" />
                          {station.powerCapacity}kW
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          ₹{station.pricing.perKwh}/kWh
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                        {station.socketType}
                      </span>
                      {station.amenities.slice(0, 2).map((amenity, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                          {amenity}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Link to={`/station/${station.id}`}>
                          View Details
                        </Link>
                      </Button>
                      <Button size="sm">
                        <Clock className="h-4 w-4 mr-1" />
                        <Link to={`/booking?stationId=${station.id}`}>
                          Book Now
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};