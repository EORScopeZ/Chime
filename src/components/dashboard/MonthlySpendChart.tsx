
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useState } from 'react';

// Generate mock data for spending trend
const generateMonthlyData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const currentMonth = new Date().getMonth();
  
  return months.map((month, index) => {
    let value = Math.floor(Math.random() * 1000) + 500;
    
    // Make sure recent months have a pattern
    if (index === currentMonth - 2) value = 680;
    if (index === currentMonth - 1) value = 720;
    if (index === currentMonth) value = 840;
    
    return {
      name: month,
      amount: value,
      current: index === currentMonth,
    };
  });
};

const MonthlySpendChart = () => {
  const [data] = useState(generateMonthlyData);
  
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-3 bg-dark-elevated rounded-md shadow-md border border-white/10">
          <p className="font-medium text-white">{label}</p>
          <p className="text-neon-blue font-bold">${payload[0].value}</p>
        </div>
      );
    }
    return null;
  };
  
  return (
    <div className="card-elevated p-5 h-80 bg-gradient-to-b from-black to-dark-elevated border border-white/5 backdrop-blur-xl">
      <h2 className="text-lg font-medium text-white mb-4">Monthly Spend</h2>
      
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
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
          <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.current ? "#1EAEDB" : "#2A2D37"} 
                style={entry.current ? {
                  filter: 'drop-shadow(0 0 4px #1EAEDB)'
                } : {}}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlySpendChart;
