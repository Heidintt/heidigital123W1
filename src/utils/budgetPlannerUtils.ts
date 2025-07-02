
import { BudgetPlannerState, ChannelCalculations, OverallCalculations } from "@/types/budgetPlanner";

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
    const totalCVREfficiency = channels.reduce((sum, channel) => sum + (channel.cvr / channel.cpc), 0);
    
    return channels.map(channel => {
      const channelEfficiency = channel.cvr / channel.cpc;
      const channelLeadShare = channelEfficiency / totalCVREfficiency;
      const estimatedLeads = totalLeadsRequired * channelLeadShare;
      const estimatedClicks = estimatedLeads / (channel.cvr / 100);
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
