import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: any) => Promise<boolean>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for stored user data
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock login - in real app, this would call your API
    const mockUsers: User[] = [
      {
        id: '1',
        email: 'host@example.com',
        name: 'John Host',
        phone: '+91 9876543210',
        role: 'host',
        kycVerified: true,
        rating: 4.8,
        totalReviews: 156,
        wallet: 2500,
        createdAt: '2024-01-01'
      },
      {
        id: '2',
        email: 'rider@example.com',
        name: 'Sarah Rider',
        phone: '+91 9876543211',
        role: 'rider',
        kycVerified: true,
        rating: 4.6,
        totalReviews: 89,
        wallet: 500,
        createdAt: '2024-01-02'
      },
      {
        id: '3',
        email: 'admin@example.com',
        name: 'Admin User',
        phone: '+91 9876543212',
        role: 'admin',
        kycVerified: true,
        rating: 5.0,
        totalReviews: 0,
        wallet: 0,
        createdAt: '2024-01-01'
      }
    ];

    const foundUser = mockUsers.find(u => u.email === email);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const register = async (userData: any): Promise<boolean> => {
    // Mock registration
    const newUser: User = {
      id: Math.random().toString(36),
      ...userData,
      kycVerified: false,
      rating: 0,
      totalReviews: 0,
      wallet: 0,
      createdAt: new Date().toISOString()
    };

    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};