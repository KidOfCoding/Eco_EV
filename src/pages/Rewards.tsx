import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Gift,
  Star,
  Trophy,
  Target,
  Users,
  Zap,
  Calendar,
  Award,
  TrendingUp,
  CheckCircle,
  Clock,
  Banknote
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';

export const Rewards: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user progress data
  const userProgress = {
    currentPoints: 1250,
    nextTierPoints: 2000,
    currentTier: 'Silver',
    completedChallenges: 8,
    totalReferrals: 3,
    carbonSaved: 125
  };

  const tiers = [
    {
      name: 'Bronze',
      minPoints: 0,
      color: 'from-amber-600 to-amber-700',
      benefits: ['5% cashback on charging', 'Basic customer support', 'Monthly newsletter']
    },
    {
      name: 'Silver',
      minPoints: 1000,
      color: 'from-gray-400 to-gray-600',
      benefits: ['10% cashback on charging', 'Priority customer support', 'Exclusive offers', 'Free cancellations']
    },
    {
      name: 'Gold',
      minPoints: 2000,
      color: 'from-yellow-400 to-yellow-600',
      benefits: ['15% cashback on charging', 'VIP customer support', 'Premium offers', 'Free cancellations', 'Early access to new features']
    },
    {
      name: 'Platinum',
      minPoints: 5000,
      color: 'from-purple-400 to-purple-600',
      benefits: ['20% cashback on charging', 'Dedicated account manager', 'Exclusive events', 'All previous benefits', 'Custom pricing options']
    }
  ];

  const challenges = [
    {
      id: 1,
      title: 'First Charge',
      description: 'Complete your first charging session',
      reward: 100,
      progress: 100,
      completed: true,
      icon: <Zap className="h-6 w-6" />
    },
    {
      id: 2,
      title: 'Weekly Warrior',
      description: 'Charge 5 times in a week',
      reward: 200,
      progress: 80,
      completed: false,
      icon: <Calendar className="h-6 w-6" />
    },
    {
      id: 3,
      title: 'Eco Champion',
      description: 'Save 100kg of CO₂ emissions',
      reward: 500,
      progress: 125,
      completed: true,
      icon: <Award className="h-6 w-6" />
    },
    {
      id: 4,
      title: 'Social Butterfly',
      description: 'Refer 5 friends to SuryaVolt',
      reward: 1000,
      progress: 60,
      completed: false,
      icon: <Users className="h-6 w-6" />
    },
    {
      id: 5,
      title: 'Station Explorer',
      description: 'Use 10 different charging stations',
      reward: 300,
      progress: 70,
      completed: false,
      icon: <Target className="h-6 w-6" />
    },
    {
      id: 6,
      title: 'Review Master',
      description: 'Leave 20 helpful reviews',
      reward: 250,
      progress: 45,
      completed: false,
      icon: <Star className="h-6 w-6" />
    }
  ];

  const recentRewards = [
    {
      id: 1,
      title: 'Eco Champion Challenge',
      points: 500,
      date: '2024-01-15',
      type: 'challenge'
    },
    {
      id: 2,
      title: 'Referral Bonus',
      points: 200,
      date: '2024-01-14',
      type: 'referral'
    },
    {
      id: 3,
      title: 'First Charge Bonus',
      points: 100,
      date: '2024-01-10',
      type: 'challenge'
    }
  ];

  const referralProgram = {
    referralCode: 'CHARGE' + user?.id?.slice(-4).toUpperCase(),
    totalReferrals: 3,
    pendingRewards: 400,
    earnedRewards: 600
  };

  const getCurrentTier = () => {
    return tiers.find(tier =>
      userProgress.currentPoints >= tier.minPoints &&
      userProgress.currentPoints < (tiers[tiers.indexOf(tier) + 1]?.minPoints || Infinity)
    ) || tiers[0];
  };

  const getNextTier = () => {
    const currentTierIndex = tiers.findIndex(tier => tier.name === getCurrentTier().name);
    return tiers[currentTierIndex + 1];
  };

  const currentTier = getCurrentTier();
  const nextTier = getNextTier();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Rewards & Loyalty
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Earn points, unlock benefits, and get rewarded for being an active community member
          </p>
        </div>

        {/* Current Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`bg-gradient-to-r ${currentTier.color} rounded-xl shadow-sm p-6 text-white`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Current Tier</h3>
              <Trophy className="h-6 w-6" />
            </div>
            <div className="text-2xl font-bold mb-2">{currentTier.name}</div>
            <div className="text-sm opacity-90">
              {userProgress.currentPoints} points
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Points Balance</h3>
              <Banknote className="h-6 w-6 text-yellow-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {userProgress.currentPoints.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Available points
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Next Tier</h3>
              <TrendingUp className="h-6 w-6 text-blue-500" />
            </div>
            {nextTier ? (
              <>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {nextTier.name}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {nextTier.minPoints - userProgress.currentPoints} points to go
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(userProgress.currentPoints / nextTier.minPoints) * 100}%` }}
                  ></div>
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Max Tier Reached!
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  You're at the highest tier
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-white dark:bg-gray-800 rounded-lg p-1">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'challenges', label: 'Challenges' },
              { id: 'referrals', label: 'Referrals' },
              { id: 'history', label: 'History' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-2 px-4 rounded-md transition-colors ${activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Tier Benefits */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Your {currentTier.name} Benefits
                </h3>
                <div className="space-y-3">
                  {currentTier.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* All Tiers */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  All Tiers
                </h3>
                <div className="space-y-4">
                  {tiers.map((tier, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-2 ${tier.name === currentTier.name
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-700'
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {tier.name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {tier.minPoints}+ points
                          </p>
                        </div>
                        {tier.name === currentTier.name && (
                          <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'challenges' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 ${challenge.completed ? 'ring-2 ring-green-500' : ''
                    }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${challenge.completed
                      ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
                      : 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                      }`}>
                      {challenge.completed ? <CheckCircle className="h-6 w-6" /> : challenge.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-yellow-600">+{challenge.reward}</div>
                      <div className="text-xs text-gray-500">points</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {challenge.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Progress</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {Math.min(challenge.progress, 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${challenge.completed ? 'bg-green-500' : 'bg-blue-500'
                          }`}
                        style={{ width: `${Math.min(challenge.progress, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                  {challenge.completed && (
                    <div className="mt-4 flex items-center text-green-600 dark:text-green-400">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">Completed!</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'referrals' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Referral Stats */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Referral Program
                </h3>
                <div className="space-y-6">
                  <div className="text-center p-6 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl text-white">
                    <h4 className="text-lg font-semibold mb-2">Your Referral Code</h4>
                    <div className="text-2xl font-bold mb-4">{referralProgram.referralCode}</div>
                    <Button variant="secondary" size="sm">
                      Share Code
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {referralProgram.totalReferrals}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Total Referrals</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        ₹{referralProgram.earnedRewards}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Earned Rewards</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How it Works */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  How Referrals Work
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Share Your Code</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Share your unique referral code with friends and family
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">They Sign Up</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Your friend registers using your referral code
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Both Get Rewarded</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        You get ₹200, they get ₹100 after their first charge
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Rewards History
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentRewards.map((reward, index) => (
                    <motion.div
                      key={reward.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                          <Gift className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">
                            {reward.title}
                          </h4>
                          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                            <Clock className="h-3 w-3" />
                            <span>{new Date(reward.date).toLocaleDateString()}</span>
                            <span>•</span>
                            <span className="capitalize">{reward.type}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-yellow-600">
                          +{reward.points}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          points
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
