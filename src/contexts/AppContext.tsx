
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Subscription, TeamMember, BudgetRecommendation } from "@/types";
import { generateMockData } from "@/lib/mockData";

interface AppContextType {
  subscriptions: Subscription[];
  teamMembers: TeamMember[];
  budgetRecommendations: BudgetRecommendation[];
  isMenuOpen: boolean;
  isMobile: boolean;
  totalMonthlySpend: number;
  totalYearlySpend: number;
  addSubscription: (subscription: Subscription) => void;
  updateSubscription: (id: string, subscription: Partial<Subscription>) => void;
  deleteSubscription: (id: string) => void;
  addTeamMember: (member: TeamMember) => void;
  updateTeamMember: (id: string, member: Partial<TeamMember>) => void;
  removeTeamMember: (id: string) => void;
  toggleMenu: () => void;
  setMenuOpen: (isOpen: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  // Initial state
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [budgetRecommendations, setBudgetRecommendations] = useState<BudgetRecommendation[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  // Calculate totals
  const totalMonthlySpend = subscriptions.reduce((acc, sub) => {
    const cost = parseFloat(sub.cost.toString());
    if (sub.billingCycle === 'monthly') return acc + cost;
    else if (sub.billingCycle === 'yearly') return acc + (cost / 12);
    return acc;
  }, 0);

  const totalYearlySpend = subscriptions.reduce((acc, sub) => {
    const cost = parseFloat(sub.cost.toString());
    if (sub.billingCycle === 'yearly') return acc + cost;
    else if (sub.billingCycle === 'monthly') return acc + (cost * 12);
    return acc;
  }, 0);

  // Load mock data on mount
  useEffect(() => {
    const mockData = generateMockData();
    
    setSubscriptions(mockData.subscriptions);
    setTeamMembers(mockData.teamMembers);
    setBudgetRecommendations(mockData.budgetRecommendations);

    // Handle resize events for responsive design
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Subscription CRUD operations
  const addSubscription = (subscription: Subscription) => {
    setSubscriptions(prev => [...prev, subscription]);
  };

  const updateSubscription = (id: string, updatedData: Partial<Subscription>) => {
    setSubscriptions(prev => 
      prev.map(sub => sub.id === id ? { ...sub, ...updatedData } : sub)
    );
  };

  const deleteSubscription = (id: string) => {
    setSubscriptions(prev => prev.filter(sub => sub.id !== id));
  };

  // Team member CRUD operations
  const addTeamMember = (member: TeamMember) => {
    setTeamMembers(prev => [...prev, member]);
  };

  const updateTeamMember = (id: string, updatedData: Partial<TeamMember>) => {
    setTeamMembers(prev => 
      prev.map(member => member.id === id ? { ...member, ...updatedData } : member)
    );
  };

  const removeTeamMember = (id: string) => {
    setTeamMembers(prev => prev.filter(member => member.id !== id));
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <AppContext.Provider value={{ 
      subscriptions,
      teamMembers,
      budgetRecommendations,
      isMenuOpen,
      isMobile,
      totalMonthlySpend,
      totalYearlySpend,
      addSubscription,
      updateSubscription,
      deleteSubscription,
      addTeamMember,
      updateTeamMember,
      removeTeamMember,
      toggleMenu,
      setMenuOpen: setIsMenuOpen
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
