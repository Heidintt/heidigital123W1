
export type PlanningMode = 'budget-first' | 'goal-first';

export interface MarketingChannel {
  id: string;
  name: string;
  budgetAllocation: number; // Percentage
  cpc: number; // Cost Per Click
  cvr: number; // Click-to-Lead Conversion Rate (%)
  valuePerLead: number; // Average Value per Lead ($)
}

export interface BudgetPlannerState {
  planningMode: PlanningMode;
  totalBudget: number;
  campaignGoal: number; // Number of new customers
  leadToCustomerRate: number; // Percentage
  channels: MarketingChannel[];
}

export interface ChannelCalculations {
  id: string;
  name: string;
  allocatedBudget: number;
  estimatedClicks: number;
  estimatedLeads: number;
  cpl: number; // Cost Per Lead
  estimatedRevenue: number;
  roas: number; // Return on Ad Spend
}

export interface OverallCalculations {
  totalBudget: number;
  totalEstimatedLeads: number;
  totalEstimatedCustomers: number;
  totalEstimatedRevenue: number;
  overallROI: number;
  averageCAC: number; // Customer Acquisition Cost
}

export interface SavedPlan {
  id: string;
  name: string;
  data: BudgetPlannerState;
  savedAt: string;
}
