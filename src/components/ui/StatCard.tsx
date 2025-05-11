
import { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  trend?: {
    value: number;
    label: string;
    isPositive: boolean;
  };
  className?: string;
}

const StatCard = ({ title, value, icon, trend, className = '' }: StatCardProps) => {
  return (
    <div className={`card-elevated p-5 transition-all duration-300 hover:shadow-neon hover:border-neon-blue/30 ${className}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-gray-400">{title}</h3>
          <p className="text-2xl font-bold text-white mt-1">{value}</p>
        </div>
        {icon && (
          <div className="rounded-md p-2 bg-neon-blue/10 text-neon-blue shadow-neon">
            {icon}
          </div>
        )}
      </div>
      
      {trend && (
        <div className="mt-4 flex items-center">
          <span className={`text-xs font-medium ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
          </span>
          <span className="text-xs text-gray-400 ml-2">{trend.label}</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;
