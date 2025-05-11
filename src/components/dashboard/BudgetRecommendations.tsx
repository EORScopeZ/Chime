
import { useApp } from '@/contexts/AppContext';
import { formatCurrency } from '@/lib/mockData';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const BudgetRecommendations = () => {
  const { budgetRecommendations } = useApp();
  
  return (
    <div className="card-elevated p-5 bg-gradient-to-b from-black to-dark-elevated border border-white/5 backdrop-blur-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-white">Budget Recommendations</h2>
        <button className="text-neon-purple text-sm hover:underline">
          View All
        </button>
      </div>
      
      {budgetRecommendations.length > 0 ? (
        <div className="space-y-4">
          {budgetRecommendations.map((rec, index) => (
            <div key={index} className="p-3 bg-black/50 rounded-md border border-white/5">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-white">{rec.category}</h3>
                <div className="flex items-center">
                  <span className={`text-xs font-medium px-2 py-1 rounded-md ${
                    rec.currentSpend > rec.recommendedSpend 
                      ? 'bg-neon-blue/10 text-neon-blue' 
                      : 'bg-neon-purple/10 text-neon-purple'
                  }`}>
                    {rec.currentSpend > rec.recommendedSpend ? 'Reduce' : 'Increase'}
                  </span>
                </div>
              </div>
              
              <div className="flex justify-between mt-2">
                <div>
                  <p className="text-xs text-gray-400">Current spend</p>
                  <p className="text-sm font-medium text-white">{formatCurrency(rec.currentSpend)}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">Recommended</p>
                  <p className={`text-sm font-medium ${
                    rec.currentSpend > rec.recommendedSpend ? 'text-neon-blue' : 'text-neon-purple'
                  }`}>
                    {formatCurrency(rec.recommendedSpend)}
                  </p>
                </div>
              </div>
              
              <p className="text-xs text-gray-400 mt-2">{rec.description}</p>
              
              <button className={`flex items-center mt-2 text-xs ${
                rec.currentSpend > rec.recommendedSpend ? 'text-neon-blue' : 'text-neon-purple'
              } hover:underline`}>
                See Details
                <ChevronRightIcon className="h-3 w-3 ml-1" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-40 text-gray-400">
          No budget recommendations available
        </div>
      )}
    </div>
  );
};

export default BudgetRecommendations;
