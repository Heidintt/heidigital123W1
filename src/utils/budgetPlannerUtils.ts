
import { BudgetPlannerState, ChannelCalculations, OverallCalculations, SavedPlan } from "@/types/budgetPlanner";

export const calculateChannelMetrics = (plannerState: BudgetPlannerState): ChannelCalculations[] => {
  const { channels, totalBudget, planningMode, campaignGoal, leadToCustomerRate } = plannerState;
  
  if (planningMode === 'budget-first') {
    return channels.map(channel => {
      const allocatedBudget = (totalBudget * channel.budgetAllocation) / 100;
      const estimatedClicks = channel.cpc > 0 ? allocatedBudget / channel.cpc : 0;
      const estimatedLeads = (estimatedClicks * channel.cvr) / 100;
      const cpl = estimatedLeads > 0 ? allocatedBudget / estimatedLeads : 0;
      const estimatedRevenue = estimatedLeads * channel.valuePerLead;
      const roas = allocatedBudget > 0 ? estimatedRevenue / allocatedBudget : 0;

      return {
        id: channel.id,
        name: channel.name,
        allocatedBudget,
        estimatedClicks,
        estimatedLeads,
        cpl,
        estimatedRevenue,
        roas
      };
    });
  } else {
    // Goal-first mode - calculate required budget based on goal
    const totalLeadsRequired = campaignGoal / (leadToCustomerRate / 100);
    
    // Simple distribution - divide leads proportionally based on CVR efficiency
    const totalCVREfficiency = channels.reduce((sum, channel) => sum + (channel.cvr / Math.max(channel.cpc, 0.01)), 0);
    
    return channels.map(channel => {
      const channelEfficiency = channel.cvr / Math.max(channel.cpc, 0.01);
      const channelLeadShare = totalCVREfficiency > 0 ? channelEfficiency / totalCVREfficiency : 0;
      const estimatedLeads = totalLeadsRequired * channelLeadShare;
      const estimatedClicks = channel.cvr > 0 ? estimatedLeads / (channel.cvr / 100) : 0;
      const allocatedBudget = estimatedClicks * channel.cpc;
      const cpl = estimatedLeads > 0 ? allocatedBudget / estimatedLeads : 0;
      const estimatedRevenue = estimatedLeads * channel.valuePerLead;
      const roas = allocatedBudget > 0 ? estimatedRevenue / allocatedBudget : 0;

      return {
        id: channel.id,
        name: channel.name,
        allocatedBudget,
        estimatedClicks,
        estimatedLeads,
        cpl,
        estimatedRevenue,
        roas
      };
    });
  }
};

export const calculateOverallMetrics = (
  plannerState: BudgetPlannerState,
  channelCalculations: ChannelCalculations[]
): OverallCalculations => {
  const totalBudget = plannerState.planningMode === 'budget-first' 
    ? plannerState.totalBudget 
    : channelCalculations.reduce((sum, channel) => sum + channel.allocatedBudget, 0);
    
  const totalEstimatedLeads = channelCalculations.reduce((sum, channel) => sum + channel.estimatedLeads, 0);
  const totalEstimatedCustomers = (totalEstimatedLeads * plannerState.leadToCustomerRate) / 100;
  const totalEstimatedRevenue = channelCalculations.reduce((sum, channel) => sum + channel.estimatedRevenue, 0);
  const overallROI = totalBudget > 0 ? (totalEstimatedRevenue - totalBudget) / totalBudget : 0;
  const averageCAC = totalEstimatedCustomers > 0 ? totalBudget / totalEstimatedCustomers : 0;

  return {
    totalBudget,
    totalEstimatedLeads,
    totalEstimatedCustomers,
    totalEstimatedRevenue,
    overallROI,
    averageCAC
  };
};

// Save/Load functionality
export const savePlan = (plannerState: BudgetPlannerState, planName: string): void => {
  const savedPlan: SavedPlan = {
    id: Date.now().toString(),
    name: planName,
    data: plannerState,
    savedAt: new Date().toISOString()
  };

  const existingPlans = getSavedPlans();
  existingPlans.push(savedPlan);
  localStorage.setItem('budgetPlannerSavedPlans', JSON.stringify(existingPlans));
};

export const getSavedPlans = (): SavedPlan[] => {
  const saved = localStorage.getItem('budgetPlannerSavedPlans');
  return saved ? JSON.parse(saved) : [];
};

export const loadPlan = (planId: string): BudgetPlannerState | null => {
  const savedPlans = getSavedPlans();
  const plan = savedPlans.find(p => p.id === planId);
  return plan ? plan.data : null;
};

export const deleteSavedPlan = (planId: string): void => {
  const savedPlans = getSavedPlans();
  const filteredPlans = savedPlans.filter(p => p.id !== planId);
  localStorage.setItem('budgetPlannerSavedPlans', JSON.stringify(filteredPlans));
};

// Export to CSV functionality
export const exportToCSV = (channelCalculations: ChannelCalculations[]): void => {
  const headers = ['Channel', 'Budget ($)', 'Clicks', 'Conversions (Leads)', 'Cost Per Lead (CPL)', 'Revenue ($)', 'ROAS'];
  
  const csvContent = [
    headers.join(','),
    ...channelCalculations.map(channel => [
      `"${channel.name}"`,
      channel.allocatedBudget.toFixed(2),
      Math.round(channel.estimatedClicks),
      channel.estimatedLeads.toFixed(1),
      channel.cpl.toFixed(2),
      channel.estimatedRevenue.toFixed(2),
      channel.roas.toFixed(2)
    ].join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `marketing-budget-plan-${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
