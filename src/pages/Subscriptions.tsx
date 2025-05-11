
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '@/components/layout/AppLayout';
import SubscriptionCard from '@/components/ui/SubscriptionCard';
import { useApp } from '@/contexts/AppContext';
import { CategoryType } from '@/types';
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';

const Subscriptions = () => {
  const { subscriptions } = useApp();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'All'>('All');
  
  // Get unique categories
  const categories = ['All', ...new Set(subscriptions.map(sub => sub.category))];
  
  // Filter subscriptions based on search and category
  const filteredSubscriptions = subscriptions.filter(sub => {
    const matchesSearch = sub.vendor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || sub.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  return (
    <AppLayout 
      title="Subscriptions" 
      subtitle="Manage your subscriptions"
      actions={
        <button 
          onClick={() => navigate('/subscriptions/add')}
          className="btn-glow flex items-center"
        >
          <PlusIcon className="h-5 w-5 mr-1" />
          Add Subscription
        </button>
      }
    >
      {/* Search and Filter */}
      <div className="mb-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search subscriptions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-glow w-full pl-10 pr-4 py-2.5 text-white focus:outline-none"
          />
        </div>
        
        <div className="flex-none md:w-48">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as CategoryType | 'All')}
            className="input-glow w-full px-4 py-2.5 text-white appearance-none bg-right bg-no-repeat border"
          >
            {categories.map((category) => (
              <option key={category} value={category} className="bg-dark-bg">
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Subscriptions List */}
      {filteredSubscriptions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSubscriptions.map(subscription => (
            <SubscriptionCard key={subscription.id} subscription={subscription} />
          ))}
        </div>
      ) : (
        <div className="card-elevated p-10 flex flex-col items-center justify-center text-center">
          <div className="h-16 w-16 rounded-full bg-dark-bg flex items-center justify-center mb-4">
            <CreditCardIcon className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">No subscriptions found</h3>
          <p className="text-gray-400 mb-6">
            {searchTerm || selectedCategory !== 'All'
              ? "Try adjusting your search or filter"
              : "Add your first subscription to get started"}
          </p>
          <button 
            onClick={() => navigate('/subscriptions/add')}
            className="btn-glow flex items-center"
          >
            <PlusIcon className="h-5 w-5 mr-1" />
            Add Subscription
          </button>
        </div>
      )}
    </AppLayout>
  );
};

// Import the icon for the empty state
import { CreditCardIcon } from '@heroicons/react/24/outline';

export default Subscriptions;
