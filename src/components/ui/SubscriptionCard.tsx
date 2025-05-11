
import { Subscription } from '@/types';
import { formatCurrency } from '@/lib/mockData';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';

interface SubscriptionCardProps {
  subscription: Subscription;
}

const SubscriptionCard = ({ subscription }: SubscriptionCardProps) => {
  const navigate = useNavigate();
  const { deleteSubscription } = useApp();
  
  const formatRenewal = (date: Date) => {
    const today = new Date();
    const renewalDate = new Date(date);
    const diffTime = renewalDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays <= 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays <= 7) return `In ${diffDays} days`;
    if (diffDays <= 30) return `In ${Math.floor(diffDays / 7)} weeks`;
    return renewalDate.toLocaleDateString();
  };
  
  return (
    <div className="card-elevated p-4 transition-all duration-300 hover:translate-y-[-2px]">
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-md bg-dark-bg flex items-center justify-center text-white font-medium">
            {subscription.vendor.charAt(0)}
          </div>
          <div className="ml-3">
            <h3 className="font-medium text-white">{subscription.vendor}</h3>
            <p className="text-sm text-gray-400">{subscription.category}</p>
          </div>
        </div>
        
        <div className="text-right">
          <p className="font-bold text-white">{formatCurrency(subscription.cost)}</p>
          <p className="text-xs text-gray-400">{subscription.billingCycle}</p>
        </div>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-400">Next renewal</p>
          <p className="text-sm text-white">{formatRenewal(subscription.nextRenewalDate)}</p>
        </div>
        
        <div className="flex space-x-2">
          <button 
            onClick={() => navigate(`/subscriptions/${subscription.id}/edit`)}
            className="p-1.5 rounded-md text-gray-400 hover:text-white bg-dark-bg hover:bg-dark-elevated transition-colors"
          >
            <PencilIcon className="h-4 w-4" />
          </button>
          <button 
            onClick={() => deleteSubscription(subscription.id)}
            className="p-1.5 rounded-md text-gray-400 hover:text-red-500 bg-dark-bg hover:bg-red-500/10 transition-colors"
          >
            <TrashIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
