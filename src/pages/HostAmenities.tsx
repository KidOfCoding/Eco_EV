import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Edit, 
  Trash2, 
  UtensilsCrossed, 
  Bed, 
  Music,
  Save,
  X
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export const HostAmenities: React.FC = () => {
  const [amenities, setAmenities] = useState({
    food: [
      { id: 1, name: 'South Indian Breakfast', description: 'Dosa, Idli, Vada', price: 80 },
      { id: 2, name: 'Local Thali', description: 'Traditional meal with rice, dal, vegetables', price: 120 }
    ],
    accommodation: [
      { id: 1, name: 'Budget Room', description: 'Clean AC room with basic amenities', price: 800 }
    ],
    entertainment: []
  });

  const [showAddForm, setShowAddForm] = useState({ type: '', show: false });
  const [newAmenity, setNewAmenity] = useState({ name: '', description: '', price: '' });

  const handleAddAmenity = (type: 'food' | 'accommodation' | 'entertainment') => {
    if (!newAmenity.name || !newAmenity.description || !newAmenity.price) return;

    const amenity = {
      id: Date.now(),
      name: newAmenity.name,
      description: newAmenity.description,
      price: parseInt(newAmenity.price)
    };

    setAmenities(prev => ({
      ...prev,
      [type]: [...prev[type], amenity]
    }));

    setNewAmenity({ name: '', description: '', price: '' });
    setShowAddForm({ type: '', show: false });
  };

  const handleDeleteAmenity = (type: 'food' | 'accommodation' | 'entertainment', id: number) => {
    setAmenities(prev => ({
      ...prev,
      [type]: prev[type].filter(item => item.id !== id)
    }));
  };

  const categories = [
    { 
      key: 'food' as const, 
      title: 'Food Options', 
      icon: <UtensilsCrossed className="h-6 w-6" />,
      color: 'from-orange-500 to-red-500',
      maxItems: 3
    },
    { 
      key: 'accommodation' as const, 
      title: 'Accommodation', 
      icon: <Bed className="h-6 w-6" />,
      color: 'from-blue-500 to-indigo-500',
      maxItems: 2
    },
    { 
      key: 'entertainment' as const, 
      title: 'Entertainment', 
      icon: <Music className="h-6 w-6" />,
      color: 'from-purple-500 to-pink-500',
      maxItems: 2
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Local Amenities
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Add food, accommodation, and entertainment options to increase your earnings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm"
            >
              <div className={`bg-gradient-to-r ${category.color} p-6 rounded-t-xl text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {category.icon}
                    <h2 className="text-xl font-semibold">{category.title}</h2>
                  </div>
                  <span className="text-sm opacity-80">
                    {amenities[category.key].length}/{category.maxItems}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4 mb-6">
                  {amenities[category.key].map((item) => (
                    <div key={item.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 dark:text-white">{item.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>
                          <p className="text-lg font-semibold text-green-600 mt-2">₹{item.price}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="ghost" icon={<Edit className="h-4 w-4" />} />
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            onClick={() => handleDeleteAmenity(category.key, item.id)}
                            icon={<Trash2 className="h-4 w-4" />} 
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {amenities[category.key].length < category.maxItems && (
                  <>
                    {showAddForm.type === category.key && showAddForm.show ? (
                      <div className="space-y-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <Input
                          label="Name"
                          value={newAmenity.name}
                          onChange={(e) => setNewAmenity(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Enter amenity name"
                        />
                        <Input
                          label="Description"
                          value={newAmenity.description}
                          onChange={(e) => setNewAmenity(prev => ({ ...prev, description: e.target.value }))}
                          placeholder="Enter description"
                        />
                        <Input
                          label="Price (₹)"
                          type="number"
                          value={newAmenity.price}
                          onChange={(e) => setNewAmenity(prev => ({ ...prev, price: e.target.value }))}
                          placeholder="Enter price"
                        />
                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            onClick={() => handleAddAmenity(category.key)}
                            icon={<Save className="h-4 w-4" />}
                          >
                            Save
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => setShowAddForm({ type: '', show: false })}
                            icon={<X className="h-4 w-4" />}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => setShowAddForm({ type: category.key, show: true })}
                        icon={<Plus className="h-4 w-4" />}
                      >
                        Add {category.title.slice(0, -1)}
                      </Button>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
          <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
            💡 Tips for Success
          </h3>
          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
            <li>• Price competitively based on local market rates</li>
            <li>• Ensure quality and hygiene for food options</li>
            <li>• Provide accurate descriptions to set proper expectations</li>
            <li>• Update availability regularly to avoid disappointments</li>
          </ul>
        </div>
      </div>
    </div>
  );
};