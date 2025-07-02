
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Plus, Trash2, HelpCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { BudgetPlannerState, MarketingChannel, PlanningMode } from "@/types/budgetPlanner";

interface BudgetPlannerInputsProps {
  plannerState: BudgetPlannerState;
  updatePlannerState: (updates: Partial<BudgetPlannerState>) => void;
  updateChannel: (channelId: string, updates: Partial<MarketingChannel>) => void;
  addChannel: () => void;
  removeChannel: (channelId: string) => void;
}

const BudgetPlannerInputs: React.FC<BudgetPlannerInputsProps> = ({
  plannerState,
  updatePlannerState,
  updateChannel,
  addChannel,
  removeChannel
}) => {
  const handleBudgetAllocationChange = (channelId: string, newAllocation: number[]) => {
    const allocation = newAllocation[0];
    updateChannel(channelId, { budgetAllocation: allocation });
    
    // Auto-balance other channels if total exceeds 100%
    const otherChannels = plannerState.channels.filter(c => c.id !== channelId);
    const currentTotal = otherChannels.reduce((sum, c) => sum + c.budgetAllocation, 0) + allocation;
    
    if (currentTotal > 100) {
      const excess = currentTotal - 100;
      const adjustmentFactor = excess / (currentTotal - allocation);
      
      otherChannels.forEach(channel => {
        const newAlloc = Math.max(0, channel.budgetAllocation - (channel.budgetAllocation * adjustmentFactor));
        updateChannel(channel.id, { budgetAllocation: Math.round(newAlloc * 10) / 10 });
      });
    }
  };

  const totalAllocation = plannerState.channels.reduce((sum, channel) => sum + channel.budgetAllocation, 0);

  return (
    <TooltipProvider>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">Planning Configuration</h3>
          
          {/* Planning Mode Selection */}
          <div className="mb-6">
            <Label className="text-base font-medium mb-3 block">Planning Mode</Label>
            <RadioGroup
              value={plannerState.planningMode}
              onValueChange={(value: PlanningMode) => updatePlannerState({ planningMode: value })}
              className="grid grid-cols-1 gap-3"
            >
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="budget-first" id="budget-first" />
                <Label htmlFor="budget-first" className="flex-1">
                  <div className="font-medium">Budget First</div>
                  <div className="text-sm text-gray-600">Start with total budget, calculate potential outcomes</div>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="goal-first" id="goal-first" />
                <Label htmlFor="goal-first" className="flex-1">
                  <div className="font-medium">Goal First</div>
                  <div className="text-sm text-gray-600">Start with customer goal, calculate required budget</div>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Global Inputs */}
          {plannerState.planningMode === 'budget-first' ? (
            <div className="mb-4">
              <Label htmlFor="totalBudget" className="flex items-center gap-2">
                Total Marketing Budget ($)
                <Tooltip>
                  <TooltipTrigger><HelpCircle className="h-4 w-4" /></TooltipTrigger>
                  <TooltipContent>Your total available marketing budget for this campaign</TooltipContent>
                </Tooltip>
              </Label>
              <Input
                id="totalBudget"
                type="number"
                value={plannerState.totalBudget}
                onChange={(e) => updatePlannerState({ totalBudget: Number(e.target.value) })}
                className="mt-1"
              />
            </div>
          ) : (
            <div className="mb-4">
              <Label htmlFor="campaignGoal" className="flex items-center gap-2">
                Campaign Goal (New Customers)
                <Tooltip>
                  <TooltipTrigger><HelpCircle className="h-4 w-4" /></TooltipTrigger>
                  <TooltipContent>Target number of new customers you want to acquire</TooltipContent>
                </Tooltip>
              </Label>
              <Input
                id="campaignGoal"
                type="number"
                value={plannerState.campaignGoal}
                onChange={(e) => updatePlannerState({ campaignGoal: Number(e.target.value) })}
                className="mt-1"
              />
            </div>
          )}

          <div className="mb-6">
            <Label htmlFor="leadToCustomerRate" className="flex items-center gap-2">
              Lead-to-Customer Conversion Rate (%)
              <Tooltip>
                <TooltipTrigger><HelpCircle className="h-4 w-4" /></TooltipTrigger>
                <TooltipContent>Percentage of leads that become paying customers</TooltipContent>
              </Tooltip>
            </Label>
            <Input
              id="leadToCustomerRate"
              type="number"
              value={plannerState.leadToCustomerRate}
              onChange={(e) => updatePlannerState({ leadToCustomerRate: Number(e.target.value) })}
              className="mt-1"
            />
          </div>
        </div>

        {/* Marketing Channels */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Marketing Channels</h3>
            <Button onClick={addChannel} variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Channel
            </Button>
          </div>

          {totalAllocation !== 100 && plannerState.planningMode === 'budget-first' && (
            <div className={`p-3 rounded-lg mb-4 ${totalAllocation > 100 ? 'bg-red-50 text-red-700' : 'bg-yellow-50 text-yellow-700'}`}>
              Current allocation: {totalAllocation.toFixed(1)}% 
              {totalAllocation > 100 ? ' (Over 100%)' : ` (${(100 - totalAllocation).toFixed(1)}% remaining)`}
            </div>
          )}

          <div className="space-y-4">
            {plannerState.channels.map((channel) => (
              <Card key={channel.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Input
                      value={channel.name}
                      onChange={(e) => updateChannel(channel.id, { name: e.target.value })}
                      className="font-medium text-lg border-none p-0 h-auto"
                    />
                    {plannerState.channels.length > 1 && (
                      <Button
                        onClick={() => removeChannel(channel.id)}
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plannerState.planningMode === 'budget-first' && (
                    <div>
                      <Label className="text-sm font-medium">
                        Budget Allocation: {channel.budgetAllocation}%
                      </Label>
                      <Slider
                        value={[channel.budgetAllocation]}
                        onValueChange={(value) => handleBudgetAllocationChange(channel.id, value)}
                        max={100}
                        step={0.1}
                        className="mt-2"
                      />
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor={`cpc-${channel.id}`} className="flex items-center gap-1 text-sm">
                        CPC ($)
                        <Tooltip>
                          <TooltipTrigger><HelpCircle className="h-3 w-3" /></TooltipTrigger>
                          <TooltipContent>Cost Per Click or cost per visit</TooltipContent>
                        </Tooltip>
                      </Label>
                      <Input
                        id={`cpc-${channel.id}`}
                        type="number"
                        step="0.01"
                        value={channel.cpc}
                        onChange={(e) => updateChannel(channel.id, { cpc: Number(e.target.value) })}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor={`cvr-${channel.id}`} className="flex items-center gap-1 text-sm">
                        CVR (%)
                        <Tooltip>
                          <TooltipTrigger><HelpCircle className="h-3 w-3" /></TooltipTrigger>
                          <TooltipContent>Click-to-Lead Conversion Rate</TooltipContent>
                        </Tooltip>
                      </Label>
                      <Input
                        id={`cvr-${channel.id}`}
                        type="number"
                        step="0.1"
                        value={channel.cvr}
                        onChange={(e) => updateChannel(channel.id, { cvr: Number(e.target.value) })}
                        className="mt-1"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor={`valuePerLead-${channel.id}`} className="flex items-center gap-1 text-sm">
                        Value per Lead ($)
                        <Tooltip>
                          <TooltipTrigger><HelpCircle className="h-3 w-3" /></TooltipTrigger>
                          <TooltipContent>Average revenue value per lead from this channel</TooltipContent>
                        </Tooltip>
                      </Label>
                      <Input
                        id={`valuePerLead-${channel.id}`}
                        type="number"
                        value={channel.valuePerLead}
                        onChange={(e) => updateChannel(channel.id, { valuePerLead: Number(e.target.value) })}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default BudgetPlannerInputs;
