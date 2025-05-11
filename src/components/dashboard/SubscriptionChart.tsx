
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useApp } from '@/contexts/AppContext';
import { CategoryType } from '@/types';
import { ChartContainer, ChartLegendContent } from '@/components/ui/chart';

// Custom color scheme with blue/purple neon theme
const COLORS = {
  'Tools': '#3B82F6', // bright blue
  'Marketing': '#2563EB', // medium blue
  'Entertainment': '#8B5CF6', // purple
  'Communication': '#7E69AB', // medium purple
  'Development': '#9b87f5', // light purple
  'Design': '#D946EF', // magenta pink
  'Other': '#4F46E5', // indigo
};

const SubscriptionChart = () => {
  const { subscriptions } = useApp();
  
  const categoryTotals = subscriptions.reduce((acc, sub) => {
    const category = sub.category;
    const cost = sub.billingCycle === 'monthly' ? sub.cost : sub.cost / 12;
    
    if (!acc[category]) {
      acc[category] = 0;
    }
    
    acc[category] += cost;
    return acc;
  }, {} as Record<CategoryType, number>);
  
  const chartData = Object.entries(categoryTotals).map(([name, value]) => ({
    name,
    value: Number(value.toFixed(2)),
  }));
  
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-2 bg-dark-elevated rounded-md shadow-md border border-white/10 backdrop-blur-lg">
          <p className="font-medium text-white">{payload[0].name}</p>
          <p className="text-neon-blue">
            ${payload[0].value}
            <span className="text-xs text-gray-400 ml-1">
              ({(payload[0].payload.percent * 100).toFixed(0)}%)
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  const getCategoryColor = (category: string) => {
    return COLORS[category as keyof typeof COLORS] || '#3B82F6';
  };

  const renderColorfulLegendText = (value: string) => {
    return <span className="text-white hover:text-neon-blue transition-colors">{value}</span>;
  };
  
  // Custom legend that shows the category name and its percentage
  const CustomLegend = ({ payload }: any) => {
    if (!payload || payload.length === 0) return null;
    
    // Calculate the total value for percentage calculation
    const total = payload.reduce((sum: number, entry: any) => sum + entry.payload.value, 0);
    
    return (
      <div className="flex flex-wrap justify-center gap-3 mt-2">
        {payload.map((entry: any, index: number) => {
          const percentage = ((entry.payload.value / total) * 100).toFixed(0);
          return (
            <div 
              key={`legend-${index}`} 
              className="flex items-center px-2 py-1 rounded-full bg-black/50 border border-white/5 backdrop-blur-sm"
            >
              <div 
                className="h-3 w-3 rounded-full mr-2 shadow-sm"
                style={{ 
                  backgroundColor: entry.color,
                  boxShadow: `0 0 6px ${entry.color}` 
                }} 
              />
              <span className="text-xs font-medium text-white">
                {entry.value} <span className="text-gray-400">{percentage}%</span>
              </span>
            </div>
          );
        })}
      </div>
    );
  };
  
  return (
    <div className="card-elevated p-5 h-80 bg-gradient-to-b from-black to-dark-elevated border border-white/5 backdrop-blur-xl">
      <h2 className="text-lg font-medium text-white mb-4">Expenses by Category</h2>
      
      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height="90%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              dataKey="value"
              paddingAngle={1}
              stroke="#000"
              strokeWidth={1}
            >
              {chartData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={getCategoryColor(entry.name)}
                  style={{
                    filter: `drop-shadow(0 0 4px ${getCategoryColor(entry.name)})`,
                    opacity: 0.9
                  }}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              content={<CustomLegend />}
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
            />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <div className="flex items-center justify-center h-full text-gray-400">
          No subscription data available
        </div>
      )}
    </div>
  );
};

export default SubscriptionChart;
