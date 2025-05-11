
import { useApp } from '@/contexts/AppContext';
import { formatCurrency } from '@/lib/mockData';

const UpcomingRenewals = () => {
  const { subscriptions } = useApp();
  
  // Get subscriptions renewing in the next 30 days
  const today = new Date();
  const thirtyDaysFromNow = new Date();
  thirtyDaysFromNow.setDate(today.getDate() + 30);
  
  const upcomingRenewals = subscriptions
    .filter(sub => {
      const renewalDate = new Date(sub.nextRenewalDate);
      return renewalDate >= today && renewalDate <= thirtyDaysFromNow;
    })
    .sort((a, b) => {
      return new Date(a.nextRenewalDate).getTime() - new Date(b.nextRenewalDate).getTime();
    })
    .slice(0, 5);
  
  const formatRenewalDate = (date: Date) => {
    const renewalDate = new Date(date);
    const diffTime = renewalDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    return `In ${diffDays} days`;
  };
  
  return (
    <div className="card-elevated p-5 bg-gradient-to-b from-black to-dark-elevated border border-white/5 backdrop-blur-xl">
      <h2 className="text-lg font-medium text-white mb-4">Upcoming Renewals</h2>
      
      {upcomingRenewals.length > 0 ? (
        <div className="space-y-4">
          {upcomingRenewals.map(sub => (
            <div key={sub.id} className="flex justify-between items-center p-3 bg-black/50 rounded-md border border-white/5">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-md bg-neon-blue/10 flex items-center justify-center text-neon-blue shadow-neon">
                  {sub.vendor.charAt(0)}
                </div>
                <div className="ml-3">
                  <h3 className="font-medium text-white text-sm">{sub.vendor}</h3>
                  <p className="text-xs text-neon-blue">{formatRenewalDate(sub.nextRenewalDate)}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-white">{formatCurrency(sub.cost)}</p>
                <p className="text-xs text-gray-400">{sub.billingCycle}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-40 text-gray-400">
          No upcoming renewals in the next 30 days
        </div>
      )}
    </div>
  );
};

export default UpcomingRenewals;
