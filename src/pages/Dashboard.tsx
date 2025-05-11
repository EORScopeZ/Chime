
import { useEffect } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import StatCard from '@/components/ui/StatCard';
import SubscriptionChart from '@/components/dashboard/SubscriptionChart';
import MonthlySpendChart from '@/components/dashboard/MonthlySpendChart';
import UpcomingRenewals from '@/components/dashboard/UpcomingRenewals';
import BudgetRecommendations from '@/components/dashboard/BudgetRecommendations';
import { useApp } from '@/contexts/AppContext';
import { formatCurrency } from '@/lib/mockData';
import { CreditCardIcon, BanknotesIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { totalMonthlySpend, totalYearlySpend, subscriptions } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    // Log data for demonstration purposes
    console.log('Dashboard loaded with data:', {
      totalMonthlySpend,
      totalYearlySpend,
      subscriptionsCount: subscriptions.length
    });
  }, [totalMonthlySpend, totalYearlySpend, subscriptions]);
  
  return (
    <AppLayout 
      title="Dashboard" 
      subtitle="Track your subscription expenses"
      actions={
        <button 
          onClick={() => navigate('/subscriptions/add')}
          className="btn-glow"
        >
          Add Subscription
        </button>
      }
    >
      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard 
          title="Monthly Spend" 
          value={formatCurrency(totalMonthlySpend)}
          icon={<BanknotesIcon className="h-5 w-5" />}
          trend={{ value: 8.2, label: "vs last month", isPositive: false }}
          className="bg-gradient-to-b from-black to-dark-elevated border border-white/5"
        />
        <StatCard 
          title="Annual Spend" 
          value={formatCurrency(totalYearlySpend)}
          icon={<ChartBarIcon className="h-5 w-5" />}
          trend={{ value: 3.1, label: "vs last year", isPositive: true }}
          className="bg-gradient-to-b from-black to-dark-elevated border border-white/5"
        />
        <StatCard 
          title="Active Subscriptions" 
          value={subscriptions.length}
          icon={<CreditCardIcon className="h-5 w-5" />}
          className="bg-gradient-to-b from-black to-dark-elevated border border-white/5"
        />
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <SubscriptionChart />
        <MonthlySpendChart />
      </div>
      
      {/* Additional widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UpcomingRenewals />
        <BudgetRecommendations />
      </div>
    </AppLayout>
  );
};

export default Dashboard;
