
// Subscription types
export type BillingCycle = "monthly" | "quarterly" | "yearly";

export type CategoryType = 
  | "Development" 
  | "Design" 
  | "Marketing" 
  | "Sales" 
  | "Productivity" 
  | "CRM" 
  | "Communication" 
  | "HR" 
  | "Finance" 
  | "Other";

export interface Subscription {
  id: string;
  vendor: string;
  cost: number;
  billingCycle: BillingCycle;
  firstBillingDate: Date;
  nextRenewalDate: Date;
  category: CategoryType;
  notes?: string;
  logo?: string;
}

// Team types
export type TeamRole = "admin" | "viewer";

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: TeamRole;
  avatarUrl?: string;
  joined: Date;
  status: "active" | "invited" | "inactive";
}

// Budget types
export interface BudgetCategory {
  name: CategoryType;
  allocated: number;
  actual: number;
}

export interface BudgetRecommendation {
  category: CategoryType;
  currentSpend: number;
  recommendedSpend: number;
  description: string;
}

// Expense types
export interface Expense {
  id: string;
  amount: number;
  date: Date;
  category: CategoryType;
  description: string;
}

// Chart data types
export interface ChartData {
  name: string;
  value: number;
}
