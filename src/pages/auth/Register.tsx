import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Phone, Zap, Eye, EyeOff } from 'lucide-react';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { useAuth } from '../../contexts/AuthContext';
import toast from 'react-hot-toast';

export const Register: React.FC = () => {
  const [searchParams] = useSearchParams();
  const defaultRole = searchParams.get('role') || 'rider';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: defaultRole as 'host' | 'rider'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      const success = await register(formData);
      if (success) {
        toast.success('Account created successfully!');
        navigate('/');
      } else {
        toast.error('Registration failed. Please try again.');
      }
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8"
      >
        <div>
          <div className="flex justify-center">
            <div className="flex items-center space-x-2">
              <Zap className="h-10 w-10 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">ChargeBike</span>
            </div>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in here
            </Link>
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Role Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                I want to <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, role: 'rider' }))}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    formData.role === 'rider'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                      : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
                  }`}
                >
                  <div className="font-medium">Find Chargers</div>
                  <div className="text-xs opacity-70">I need to charge my EV</div>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, role: 'host' }))}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    formData.role === 'host'
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300'
                      : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
                  }`}
                >
                  <div className="font-medium">Host Chargers</div>
                  <div className="text-xs opacity-70">I want to earn money</div>
                </motion.button>
              </div>
            </div>

            <Input
              label="Full Name"
              type="text"
              value={formData.name}
              onChange={handleChange('name')}
              icon={<User className="h-4 w-4" />}
              required
              placeholder="Enter your full name"
            />

            <Input
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleChange('email')}
              icon={<Mail className="h-4 w-4" />}
              required
              placeholder="Enter your email"
            />

            <Input
              label="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={handleChange('phone')}
              icon={<Phone className="h-4 w-4" />}
              required
              placeholder="+91 XXXXX XXXXX"
            />

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white transition-colors"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange('password')}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white transition-colors"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                I agree to the{' '}
                <Link to="/terms" className="text-blue-600 hover:text-blue-500">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-blue-600 hover:text-blue-500">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Creating account...' : 'Create account'}
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};