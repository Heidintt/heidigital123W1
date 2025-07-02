
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Trash2, HelpCircle, Save, Download } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { BudgetPlannerState, MarketingChannel, PlanningMode } from "@/types/budgetPlanner";
import { savePlan, getSavedPlans, loadPlan, deleteSavedPlan } from "@/utils/budgetPlannerUtils";
import { toast } from "sonner";

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
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [loadDialogOpen, setLoadDialogOpen] = useState(false);
  const [planName, setPlanName] = useState('');

  const handleBudgetAllocationChange = (channelId: string, newAllocation: number[]) => {
    const allocation = newAllocation[0];
    const currentChannel = plannerState.channels.find(c => c.id === channelId);
    if (!currentChannel) return;

    const otherChannels = plannerState.channels.filter(c => c.id !== channelId);
    const otherChannelsTotal = otherChannels.reduce((sum, c) => sum + c.budgetAllocation, 0);
    
    // Ensure the new allocation doesn't exceed what's available
    const maxAllocation = 100 - otherChannelsTotal;
    const finalAllocation = Math.min(allocation, maxAllocation);
    
    updateChannel(channelId, { budgetAllocation: finalAllocation });
  };

  const handleSavePlan = () => {
    if (!planName.trim()) {
      toast.error("Please enter a plan name");
      return;
    }
    
    try {
      savePlan(plannerState, planName.trim());
      toast.success("Plan saved successfully!");
      setPlanName('');
      setSaveDialogOpen(false);
    } catch (error) {
      toast.error("Failed to save plan");
    }
  };

  const handleLoadPlan = (planId: string) => {
    try {
      const loadedPlan = loadPlan(planId);
      if (loadedPlan) {
        updatePlannerState(loadedPlan);
        toast.success("Plan loaded successfully!");
        setLoadDialogOpen(false);
      }
    } catch (error) {
      toast.error("Failed to load plan");
    }
  };

  const totalAllocation = plannerState.channels.reduce((sum, channel) => sum + channel.budgetAllocation, 0);
  
  const savedPlans = getSavedPlans();

  return (
    <TooltipProvider>
      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Planning Configuration</h3>
            <div className="flex gap-2">
              <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Save className="h-4 w-4 mr-2" />
                    Save Plan
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Save Budget Plan</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="planName">Plan Name</Label>
                      <Input
                        id="planName"
                        value={planName}
                        onChange={(e) => setPlanName(e.target.value)}
                        placeholder="Enter plan name..."
                      />
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={() => setSaveDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleSavePlan}>Save Plan</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog open={loadDialogOpen} onOpenChange={setLoadDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Load Plan
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Load Saved Plan</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    {savedPlans.length === 0 ? (
                      <p className="text-gray-500 text-center py-4">No saved plans found</p>
                    ) : (
                      <div className="space-y-2">
                        {savedPlans.map((plan) => (
                          <div key={plan.id} className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                              <div className="font-medium">{plan.name}</div>
                              <div className="text-sm text-gray-500">
                                Saved: {new Date(plan.savedAt).toLocaleDateString()}
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" onClick={() => handleLoadPlan(plan.id)}>
                                Load
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => {
                                  deleteSavedPlan(plan.id);
                                  toast.success("Plan deleted");
                                  setLoadDialogOpen(false);
                                  setTimeout(() => setLoadDialogOpen(true), 100);
                                }}
                              >
                                Delete
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
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
                min="0"
                value={plannerState.totalBudget}
                onChange={(e) => updatePlannerState({ totalBudget: Math.max(0, Number(e.target.value)) })}
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
                min="0"
                value={plannerState.campaignGoal}
                onChange={(e) => updatePlannerState({ campaignGoal: Math.max(0, Number(e.target.value)) })}
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
              min="0"
              max="100"
              value={plannerState.leadToCustomerRate}
              onChange={(e) => updatePlannerState({ leadToCustomerRate: Math.min(100, Math.max(0, Number(e.target.value))) })}
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

          {plannerState.planningMode === 'budget-first' && (
            <div className={`p-3 rounded-lg mb-4 ${
              Math.abs(totalAllocation - 100) > 0.1 
                ? totalAllocation > 100 
                  ? 'bg-red-50 text-red-700' 
                  : 'bg-yellow-50 text-yellow-700'
                : 'bg-green-50 text-green-700'
            }`}>
              Total Allocation: {totalAllocation.toFixed(1)}% 
              {Math.abs(totalAllocation - 100) > 0.1 && (
                totalAllocation > 100 
                  ? ' (Over 100%)' 
                  : ` (${(100 - totalAllocation).toFixed(1)}% remaining)`
              )}
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
                      placeholder="Channel name..."
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
                        Budget Allocation: {channel.budgetAllocation.toFixed(1)}%
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
                          <TooltipContent>Cost Per Click - The average cost you pay for each click or visit</TooltipContent>
                        </Tooltip>
                      </Label>
                      <Input
                        id={`cpc-${channel.id}`}
                        type="number"
                        step="0.01"
                        min="0"
                        value={channel.cpc}
                        onChange={(e) => updateChannel(channel.id, { cpc: Math.max(0, Number(e.target.value)) })}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor={`cvr-${channel.id}`} className="flex items-center gap-1 text-sm">
                        CVR (%)
                        <Tooltip>
                          <TooltipTrigger><HelpCircle className="h-3 w-3" /></TooltipTrigger>
                          <TooltipContent>Conversion Rate - Percentage of clicks that become leads</TooltipContent>
                        </Tooltip>
                      </Label>
                      <Input
                        id={`cvr-${channel.id}`}
                        type="number"
                        step="0.1"
                        min="0"
                        max="100"
                        value={channel.cvr}
                        onChange={(e) => updateChannel(channel.id, { cvr: Math.min(100, Math.max(0, Number(e.target.value))) })}
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
                        min="0"
                        value={channel.valuePerLead}
                        onChange={(e) => updateChannel(channel.id, { valuePerLead: Math.max(0, Number(e.target.value)) })}
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
