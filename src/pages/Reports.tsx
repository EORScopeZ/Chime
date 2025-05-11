
import { useState } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { useApp } from '@/contexts/AppContext';
import { formatCurrency, getCategoryColor } from '@/lib/mockData';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';

const Reports = () => {
  const { subscriptions } = useApp();
  const [reportType, setReportType] = useState<'category' | 'monthly' | 'yearly'>('category');
  
  // Generate data for category report
  const getCategoryData = () => {
    const categoryTotals: Record<string, number> = {};
    
    subscriptions.forEach(sub => {
      const category = sub.category;
      const cost = parseFloat(sub.cost.toString());
      
      if (!categoryTotals[category]) {
        categoryTotals[category] = 0;
      }
      
      if (sub.billingCycle === 'yearly') {
        categoryTotals[category] += cost / 12; // Convert yearly to monthly
      } else {
        categoryTotals[category] += cost;
      }
    });
    
    return Object.entries(categoryTotals).map(([name, value]) => ({
      name,
      value: Number(value.toFixed(2)),
    }));
  };
  
  // Generate data for monthly report
  const getMonthlyData = () => {
    const months = Array.from({ length: 12 }, (_, i) => {
      const date = new Date();
      date.setMonth(date.getMonth() - 11 + i);
      return {
        name: date.toLocaleString('default', { month: 'short' }),
        value: 0,
        date: new Date(date.getFullYear(), date.getMonth(), 1),
      };
    });
    
    subscriptions.forEach(sub => {
      const cost = parseFloat(sub.cost.toString());
      
      months.forEach(month => {
        const firstBilling = new Date(sub.firstBillingDate);
        
        // Check if subscription was active in this month
        if (firstBilling <= month.date) {
          if (sub.billingCycle === 'monthly') {
            month.value += cost;
          } else if (sub.billingCycle === 'yearly') {
            month.value += cost / 12;
          } else if (sub.billingCycle === 'quarterly') {
            // Add quarterly cost if it's a quarter month
            const monthDiff = (month.date.getFullYear() - firstBilling.getFullYear()) * 12 + 
                             month.date.getMonth() - firstBilling.getMonth();
            if (monthDiff % 3 === 0) {
              month.value += cost / 3;
            }
          }
        }
      });
    });
    
    return months;
  };
  
  // Generate data for yearly report
  const getYearlyData = () => {
    const yearlyData: Record<string, {total: number, subscriptions: number}> = {};
    
    subscriptions.forEach(sub => {
      const cost = parseFloat(sub.cost.toString());
      const category = sub.category;
      
      if (!yearlyData[category]) {
        yearlyData[category] = { total: 0, subscriptions: 0 };
      }
      
      if (sub.billingCycle === 'monthly') {
        yearlyData[category].total += cost * 12;
      } else if (sub.billingCycle === 'quarterly') {
        yearlyData[category].total += cost * 4;
      } else {
        yearlyData[category].total += cost;
      }
      yearlyData[category].subscriptions++;
    });
    
    return Object.entries(yearlyData).map(([name, data]) => ({
      name,
      total: Number(data.total.toFixed(2)),
      subscriptions: data.subscriptions,
    }));
  };
  
  // Custom tooltip for charts
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-3 bg-dark-elevated rounded-md shadow-md border border-white/10">
          <p className="font-medium text-white">{label}</p>
          <p className="text-neon-blue font-bold">
            {formatCurrency(payload[0].value)}
          </p>
          {payload[0].payload.subscriptions && (
            <p className="text-sm text-gray-400">
              {payload[0].payload.subscriptions} subscription{payload[0].payload.subscriptions !== 1 ? 's' : ''}
            </p>
          )}
        </div>
      );
    }
    return null;
  };
  
  return (
    <AppLayout
      title="Reports"
      subtitle="Analyze your subscription expenses"
    >
      {/* Report Type Selector */}
      <div className="mb-6">
        <div className="bg-dark-card border border-white/5 rounded-lg p-1 inline-flex">
          <button
            className={`px-4 py-2 rounded-md transition-colors ${
              reportType === 'category' ? 'bg-neon-blue text-white' : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setReportType('category')}
          >
            By Category
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-colors ${
              reportType === 'monthly' ? 'bg-neon-blue text-white' : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setReportType('monthly')}
          >
            Monthly Trend
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-colors ${
              reportType === 'yearly' ? 'bg-neon-blue text-white' : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setReportType('yearly')}
          >
            Yearly Breakdown
          </button>
        </div>
      </div>
      
      {/* Report Visualizations */}
      <div className="card-elevated p-6">
        <div className="h-96">
          {reportType === 'category' && (
            <>
              <h2 className="text-lg font-medium text-white mb-4">Expenses by Category</h2>
              <ResponsiveContainer width="100%" height="90%">
                <PieChart>
                  <Pie
                    data={getCategoryData()}
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    innerRadius={60}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {getCategoryData().map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={getCategoryColor(entry.name as any)} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </>
          )}
          
          {reportType === 'monthly' && (
            <>
              <h2 className="text-lg font-medium text-white mb-4">Monthly Spending Trend</h2>
              <ResponsiveContainer width="100%" height="90%">
                <BarChart data={getMonthlyData()} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                  <XAxis 
                    dataKey="name" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#8896b3', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#8896b3', fontSize: 12 }}
                    width={35}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }} />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]} fill="#1EAEDB" />
                </BarChart>
              </ResponsiveContainer>
            </>
          )}
          
          {reportType === 'yearly' && (
            <>
              <h2 className="text-lg font-medium text-white mb-4">Yearly Spending by Category</h2>
              <ResponsiveContainer width="100%" height="90%">
                <BarChart data={getYearlyData()} layout="vertical" margin={{ top: 10, right: 10, left: 80, bottom: 5 }}>
                  <XAxis 
                    type="number" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#8896b3', fontSize: 12 }}
                  />
                  <YAxis 
                    type="category"
                    dataKey="name" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#8896b3', fontSize: 12 }}
                    width={80}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }} />
                  <Bar dataKey="total" radius={[0, 4, 4, 0]}>
                    {getYearlyData().map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={getCategoryColor(entry.name as any)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </>
          )}
        </div>
      </div>
      
      {/* Export Options */}
      <div className="mt-6 flex justify-end">
        <button className="btn-glow">
          Export Report
        </button>
      </div>
    </AppLayout>
  );
};

export default Reports;
