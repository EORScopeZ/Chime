
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '@/components/layout/AppLayout';
import { useApp } from '@/contexts/AppContext';
import { Subscription, CategoryType, BillingCycle } from '@/types';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { toast } from '@/components/ui/sonner';

const AddSubscription = () => {
  const navigate = useNavigate();
  const { addSubscription } = useApp();
  
  const [formData, setFormData] = useState({
    vendor: '',
    cost: '',
    billingCycle: 'monthly' as BillingCycle,
    firstBillingDate: new Date().toISOString().split('T')[0],
    category: 'Other' as CategoryType,
    notes: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Calculate next renewal date based on billing cycle
    const firstBillingDate = new Date(formData.firstBillingDate);
    let nextRenewalDate = new Date(firstBillingDate);
    
    if (formData.billingCycle === 'monthly') {
      nextRenewalDate.setMonth(nextRenewalDate.getMonth() + 1);
    } else if (formData.billingCycle === 'quarterly') {
      nextRenewalDate.setMonth(nextRenewalDate.getMonth() + 3);
    } else if (formData.billingCycle === 'yearly') {
      nextRenewalDate.setFullYear(nextRenewalDate.getFullYear() + 1);
    }
    
    // Create new subscription object
    const newSubscription: Subscription = {
      id: 'sub-' + Math.random().toString(36).substr(2, 9),
      vendor: formData.vendor,
      cost: parseFloat(formData.cost),
      billingCycle: formData.billingCycle,
      firstBillingDate,
      nextRenewalDate,
      category: formData.category,
      notes: formData.notes,
    };
    
    // Add subscription and navigate back
    addSubscription(newSubscription);
    toast.success(`${formData.vendor} subscription added`);
    navigate('/subscriptions');
  };
  
  return (
    <AppLayout
      title="Add Subscription"
      subtitle="Track a new recurring payment"
      actions={
        <button
          onClick={() => navigate('/subscriptions')}
          className="flex items-center text-gray-400 hover:text-white"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-1" />
          Back to Subscriptions
        </button>
      }
    >
      <div className="card-elevated p-6 max-w-3xl mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vendor */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="vendor" className="block text-sm font-medium text-gray-400">
                Vendor / Service Name *
              </label>
              <input
                id="vendor"
                name="vendor"
                type="text"
                required
                value={formData.vendor}
                onChange={handleChange}
                className="input-glow w-full px-4 py-2.5 mt-1 text-white focus:outline-none"
                placeholder="e.g. Adobe Creative Cloud"
              />
            </div>
            
            {/* Cost */}
            <div>
              <label htmlFor="cost" className="block text-sm font-medium text-gray-400">
                Cost *
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-400">$</span>
                </div>
                <input
                  id="cost"
                  name="cost"
                  type="number"
                  step="0.01"
                  required
                  value={formData.cost}
                  onChange={handleChange}
                  className="input-glow w-full pl-8 pr-4 py-2.5 text-white focus:outline-none"
                  placeholder="0.00"
                />
              </div>
            </div>
            
            {/* Billing Cycle */}
            <div>
              <label htmlFor="billingCycle" className="block text-sm font-medium text-gray-400">
                Billing Cycle *
              </label>
              <select
                id="billingCycle"
                name="billingCycle"
                required
                value={formData.billingCycle}
                onChange={handleChange}
                className="input-glow w-full px-4 py-2.5 mt-1 text-white focus:outline-none"
              >
                <option value="monthly" className="bg-dark-bg">Monthly</option>
                <option value="quarterly" className="bg-dark-bg">Quarterly</option>
                <option value="yearly" className="bg-dark-bg">Yearly</option>
              </select>
            </div>
            
            {/* First Billing Date */}
            <div>
              <label htmlFor="firstBillingDate" className="block text-sm font-medium text-gray-400">
                First Billing Date *
              </label>
              <input
                id="firstBillingDate"
                name="firstBillingDate"
                type="date"
                required
                value={formData.firstBillingDate}
                onChange={handleChange}
                className="input-glow w-full px-4 py-2.5 mt-1 text-white focus:outline-none"
              />
            </div>
            
            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-400">
                Category *
              </label>
              <select
                id="category"
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="input-glow w-full px-4 py-2.5 mt-1 text-white focus:outline-none"
              >
                <option value="Development" className="bg-dark-bg">Development</option>
                <option value="Design" className="bg-dark-bg">Design</option>
                <option value="Marketing" className="bg-dark-bg">Marketing</option>
                <option value="Sales" className="bg-dark-bg">Sales</option>
                <option value="Productivity" className="bg-dark-bg">Productivity</option>
                <option value="CRM" className="bg-dark-bg">CRM</option>
                <option value="Communication" className="bg-dark-bg">Communication</option>
                <option value="HR" className="bg-dark-bg">HR</option>
                <option value="Finance" className="bg-dark-bg">Finance</option>
                <option value="Other" className="bg-dark-bg">Other</option>
              </select>
            </div>
            
            {/* Notes */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="notes" className="block text-sm font-medium text-gray-400">
                Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                className="input-glow w-full px-4 py-2.5 mt-1 text-white focus:outline-none"
                placeholder="Add any additional details..."
              ></textarea>
            </div>
          </div>
          
          {/* Form Actions */}
          <div className="mt-8 flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => navigate('/subscriptions')}
              className="px-4 py-2 border border-white/10 text-white rounded-md hover:bg-dark-elevated/50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-glow"
            >
              Add Subscription
            </button>
          </div>
        </form>
      </div>
    </AppLayout>
  );
};

export default AddSubscription;
