import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  Globe,
  Moon,
  Sun,
  Smartphone,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Save,
  Trash2
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

export const Settings: React.FC = () => {
  const { user, updateUser } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);

  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [notifications, setNotifications] = useState({
    bookingReminders: true,
    sessionUpdates: true,
    paymentAlerts: true,
    promotions: false,
    weeklyReports: true,
    emergencyAlerts: true
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public',
    locationSharing: true,
    dataCollection: true,
    marketingEmails: false
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: isDark ? Moon : Sun },
    { id: 'language', label: 'Language', icon: Globe }
  ];

  const handleProfileUpdate = () => {
    updateUser({
      name: profileData.name,
      email: profileData.email,
      phone: profileData.phone
    });
    alert('Profile updated successfully!');
  };

  const handleNotificationChange = (key: string) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const handlePrivacyChange = (key: string, value: any) => {
    setPrivacy(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी (Hindi)', flag: '🇮🇳' },
    { code: 'kn', name: 'ಕನ್ನಡ (Kannada)', flag: '🇮🇳' },
    { code: 'ta', name: 'தமிழ் (Tamil)', flag: '🇮🇳' },
    { code: 'te', name: 'తెలుగు (Telugu)', flag: '🇮🇳' },
    { code: 'mr', name: 'मराठी (Marathi)', flag: '🇮🇳' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-6 mb-8">
              <div className="h-20 w-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {user?.name?.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {user?.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 capitalize">
                  {user?.role} • {user?.kycVerified ? 'KYC Verified' : 'KYC Pending'}
                </p>
                <Button size="sm" variant="outline" className="mt-2">
                  Change Photo
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                value={profileData.name}
                onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                icon={<User className="h-4 w-4" />}
              />
              <Input
                label="Email Address"
                type="email"
                value={profileData.email}
                onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                icon={<Mail className="h-4 w-4" />}
              />
              <Input
                label="Phone Number"
                value={profileData.phone}
                onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                icon={<Smartphone className="h-4 w-4" />}
              />
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Change Password
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Input
                    label="Current Password"
                    type={showPassword ? 'text' : 'password'}
                    value={profileData.currentPassword}
                    onChange={(e) => setProfileData(prev => ({ ...prev, currentPassword: e.target.value }))}
                    icon={<Lock className="h-4 w-4" />}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-8 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                <Input
                  label="New Password"
                  type="password"
                  value={profileData.newPassword}
                  onChange={(e) => setProfileData(prev => ({ ...prev, newPassword: e.target.value }))}
                  icon={<Lock className="h-4 w-4" />}
                />
                <Input
                  label="Confirm Password"
                  type="password"
                  value={profileData.confirmPassword}
                  onChange={(e) => setProfileData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  icon={<Lock className="h-4 w-4" />}
                />
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" icon={<Trash2 className="h-4 w-4" />}>
                Delete Account
              </Button>
              <Button onClick={handleProfileUpdate} icon={<Save className="h-4 w-4" />}>
                Save Changes
              </Button>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Notification Preferences
            </h3>
            <div className="space-y-4">
              {Object.entries(notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {key === 'bookingReminders' && 'Get notified about upcoming bookings'}
                      {key === 'sessionUpdates' && 'Real-time updates during charging sessions'}
                      {key === 'paymentAlerts' && 'Notifications for payments and refunds'}
                      {key === 'promotions' && 'Special offers and promotional content'}
                      {key === 'weeklyReports' && 'Weekly summary of your activity'}
                      {key === 'emergencyAlerts' && 'Critical safety and emergency notifications'}
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={() => handleNotificationChange(key)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        );

      case 'privacy':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Privacy Settings
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Profile Visibility
                </label>
                <select
                  value={privacy.profileVisibility}
                  onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                >
                  <option value="public">Public - Visible to all users</option>
                  <option value="limited">Limited - Only name and rating visible</option>
                  <option value="private">Private - Minimal information shared</option>
                </select>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Location Sharing</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Allow the app to access your location for better recommendations
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={privacy.locationSharing}
                    onChange={(e) => handlePrivacyChange('locationSharing', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Data Collection</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Allow collection of usage data to improve our services
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={privacy.dataCollection}
                    onChange={(e) => handlePrivacyChange('dataCollection', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        );

      case 'appearance':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Appearance Settings
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  {isDark ? <Moon className="h-6 w-6 text-blue-600" /> : <Sun className="h-6 w-6 text-yellow-600" />}
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Dark Mode</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {isDark ? 'Currently using dark theme' : 'Currently using light theme'}
                    </p>
                  </div>
                </div>
                <Button onClick={toggleTheme} variant="outline">
                  {isDark ? 'Switch to Light' : 'Switch to Dark'}
                </Button>
              </div>
            </div>
          </div>
        );

      case 'language':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Language & Region
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  className="flex items-center justify-between p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="font-medium text-gray-900 dark:text-white">{lang.name}</span>
                  </div>
                  <input
                    type="radio"
                    name="language"
                    defaultChecked={lang.code === 'en'}
                    className="h-4 w-4 text-blue-600"
                  />
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your account preferences and privacy settings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8"
            >
              {renderTabContent()}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};