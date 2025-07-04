
import React, { useState } from "react";
import { BudgetPlannerState, MarketingChannel, PlanningMode } from "@/types/budgetPlanner";
import BudgetPlannerInputs from "./BudgetPlannerInputs";
import BudgetPlannerResults from "./BudgetPlannerResults";

const BudgetPlannerContainer = () => {
  const [plannerState, setPlannerState] = useState<BudgetPlannerState>({
    planningMode: 'budget-first' as PlanningMode,
    totalBudget: 10000,
    campaignGoal: 100,
    leadToCustomerRate: 20,
    channels: [
      {
        id: '1',
        name: 'Google Ads',
        budgetAllocation: 40,
        cpc: 2.50,
        cvr: 3.5,
        valuePerLead: 150
      },
      {
        id: '2',
        name: 'Facebook Ads',
        budgetAllocation: 35,
        cpc: 1.80,
        cvr: 2.8,
        valuePerLead: 120
      },
      {
        id: '3',
        name: 'LinkedIn Ads',
        budgetAllocation: 25,
        cpc: 4.20,
        cvr: 5.2,
        valuePerLead: 200
      }
    ]
  });

  const updatePlannerState = (updates: Partial<BudgetPlannerState>) => {
    setPlannerState(prev => ({ ...prev, ...updates }));
  };

  const updateChannel = (channelId: string, updates: Partial<MarketingChannel>) => {
    setPlannerState(prev => ({
      ...prev,
      channels: prev.channels.map(channel =>
        channel.id === channelId ? { ...channel, ...updates } : channel
      )
    }));
  };

  const addChannel = () => {
    const newChannel: MarketingChannel = {
      id: Date.now().toString(),
      name: 'New Channel',
      budgetAllocation: 0,
      cpc: 1.00,
      cvr: 2.0,
      valuePerLead: 100
    };
    
    setPlannerState(prev => ({
      ...prev,
      channels: [...prev.channels, newChannel]
    }));
  };

  const removeChannel = (channelId: string) => {
    setPlannerState(prev => ({
      ...prev,
      channels: prev.channels.filter(channel => channel.id !== channelId)
    }));
  };

  return (
    <div className="space-y-8">
      <BudgetPlannerInputs
        plannerState={plannerState}
        updatePlannerState={updatePlannerState}
        updateChannel={updateChannel}
        addChannel={addChannel}
        removeChannel={removeChannel}
      />
      
      <BudgetPlannerResults
        plannerState={plannerState}
      />
    </div>
  );
};

export default BudgetPlannerContainer;
