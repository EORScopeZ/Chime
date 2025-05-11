
import { 
  Subscription, 
  TeamMember, 
  BudgetRecommendation, 
  CategoryType 
} from "@/types";

export const generateMockData = () => {
  // Mock subscriptions
  const subscriptions: Subscription[] = [
    {
      id: "sub-1",
      vendor: "Adobe Creative Cloud",
      cost: 52.99,
      billingCycle: "monthly",
      firstBillingDate: new Date(2023, 3, 15),
      nextRenewalDate: new Date(2023, 11, 15),
      category: "Design",
      notes: "Team license for 5 designers"
    },
    {
      id: "sub-2",
      vendor: "Slack",
      cost: 12.50,
      billingCycle: "monthly",
      firstBillingDate: new Date(2023, 1, 10),
      nextRenewalDate: new Date(2023, 11, 10),
      category: "Communication",
      notes: "Pro plan with unlimited history"
    },
    {
      id: "sub-3",
      vendor: "AWS",
      cost: 329.45,
      billingCycle: "monthly",
      firstBillingDate: new Date(2023, 0, 1),
      nextRenewalDate: new Date(2023, 11, 1),
      category: "Development",
      notes: "EC2, S3, and RDS instances"
    },
    {
      id: "sub-4",
      vendor: "Notion",
      cost: 8,
      billingCycle: "monthly",
      firstBillingDate: new Date(2023, 2, 22),
      nextRenewalDate: new Date(2023, 11, 22),
      category: "Productivity",
      notes: "Team workspace"
    },
    {
      id: "sub-5",
      vendor: "Salesforce",
      cost: 1200,
      billingCycle: "yearly",
      firstBillingDate: new Date(2023, 5, 15),
      nextRenewalDate: new Date(2024, 5, 15),
      category: "CRM",
      notes: "Enterprise edition"
    },
    {
      id: "sub-6",
      vendor: "HubSpot",
      cost: 800,
      billingCycle: "yearly",
      firstBillingDate: new Date(2023, 3, 1),
      nextRenewalDate: new Date(2024, 3, 1),
      category: "Marketing",
      notes: "Marketing hub professional"
    },
    {
      id: "sub-7",
      vendor: "Google Workspace",
      cost: 12,
      billingCycle: "monthly",
      firstBillingDate: new Date(2023, 0, 5),
      nextRenewalDate: new Date(2023, 11, 5),
      category: "Productivity",
      notes: "Business standard per user"
    }
  ];

  // Mock team members
  const teamMembers: TeamMember[] = [
    {
      id: "member-1",
      name: "John Doe",
      email: "john@example.com",
      role: "admin",
      joined: new Date(2022, 5, 15),
      status: "active"
    },
    {
      id: "member-2",
      name: "Jane Smith",
      email: "jane@example.com",
      role: "viewer",
      joined: new Date(2022, 7, 20),
      status: "active"
    },
    {
      id: "member-3",
      name: "Robert Johnson",
      email: "robert@example.com",
      role: "viewer",
      joined: new Date(2023, 1, 10),
      status: "active"
    },
    {
      id: "member-4",
      name: "Lisa Brown",
      email: "lisa@example.com",
      role: "admin",
      joined: new Date(2023, 3, 5),
      status: "active"
    },
    {
      id: "member-5",
      name: "Michael Wilson",
      email: "michael@example.com",
      role: "viewer",
      joined: new Date(2023, 6, 12),
      status: "invited"
    }
  ];

  // Budget recommendations
  const budgetRecommendations: BudgetRecommendation[] = [
    {
      category: "Development",
      currentSpend: 450,
      recommendedSpend: 400,
      description: "Consider consolidating AWS services or optimizing usage to reduce costs."
    },
    {
      category: "Marketing",
      currentSpend: 200,
      recommendedSpend: 300,
      description: "Increasing marketing budget could help with customer acquisition."
    },
    {
      category: "Communication",
      currentSpend: 50,
      recommendedSpend: 40,
      description: "Look into bundled communication tools to reduce overlap."
    },
    {
      category: "Design",
      currentSpend: 120,
      recommendedSpend: 100,
      description: "Consider alternative design tools for non-specialized team members."
    }
  ];

  return {
    subscriptions,
    teamMembers,
    budgetRecommendations
  };
};

export const getRandomColor = () => {
  const colors = [
    "#FF6B6B", "#FF9E7A", "#FFCE85", "#C5EC98", 
    "#87EAC0", "#7CD5F8", "#8896FF", "#D193FF"
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const getCategoryColor = (category: CategoryType): string => {
  const colorMap: Record<CategoryType, string> = {
    "Development": "#8896FF",
    "Design": "#D193FF",
    "Marketing": "#FF9E7A",
    "Sales": "#FF6B6B",
    "Productivity": "#87EAC0",
    "CRM": "#FFCE85",
    "Communication": "#7CD5F8",
    "HR": "#FFCE85",
    "Finance": "#C5EC98",
    "Other": "#AAAAAA"
  };
  
  return colorMap[category] || "#AAAAAA";
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(amount);
};
