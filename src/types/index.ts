export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: 'host' | 'rider' | 'admin';
  avatar?: string;
  kycVerified: boolean;
  rating: number;
  totalReviews: number;
  wallet: number;
  createdAt: string;
}

export interface ChargingStation {
  id: string;
  hostId: string;
  hostName: string;
  hostRating: number;
  title: string;
  description: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  socketType: string;
  powerCapacity: number; // in kW
  pricing: {
    perMinute: number;
    perKwh: number;
  };
  availability: 'available' | 'busy' | 'offline';
  amenities: string[];
  images: string[];
  reviews: Review[];
  isActive: boolean;
  createdAt: string;
}

export interface Booking {
  id: string;
  riderId: string;
  riderName: string;
  stationId: string;
  stationTitle: string;
  hostId: string;
  hostName: string;
  startTime: string;
  endTime: string;
  duration: number; // in minutes
  energyConsumed?: number; // in kWh
  totalAmount: number;
  platformFee: number;
  hostEarnings: number;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  paymentMethod: string;
  paymentStatus: 'pending' | 'completed' | 'failed';
  createdAt: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'booking' | 'payment' | 'general';
  isRead: boolean;
  createdAt: string;
}