
import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ROIInstructions from "./ROIInstructions";
import DataInputSection from "./DataInputSection";
import ROICharts from "./ROICharts";
import ROIMetrics from "./ROIMetrics";
import BudgetOptimizer from "./BudgetOptimizer";
import { 
  calculateMetrics, 
  defaultChannels, 
  exportToCSV,
  type MarketingChannel,
  type CalculatedMetrics 
} from "./calculatorUtils";

const ROICalculatorTool = () => {
  const [channels, setChannels] = useState<MarketingChannel[]>(defaultChannels);
  const [calculatedData, setCalculatedData] = useState<CalculatedMetrics[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Calculate metrics whenever channels change
  useEffect(() => {
    try {
      console.log('Calculating metrics for channels:', channels);
      const calculated = calculateMetrics(channels);
      console.log('Calculated data:', calculated);
      setCalculatedData(calculated);
    } catch (error) {
      console.error('Error calculating metrics:', error);
      setCalculatedData([]);
    }
  }, [channels]);

  const addChannel = () => {
    const newChannel: MarketingChannel = {
      id: Date.now().toString(),
      channel: "New Channel",
      campaignName: "New Campaign",
      spend: 0,
      clicks: 0,
      conversions: 0,
      revenue: 0,
      customers: 0
    };
    setChannels([...channels, newChannel]);
  };

  const removeChannel = (id: string) => {
    setChannels(channels.filter(channel => channel.id !== id));
    if (editingId === id) {
      setEditingId(null);
    }
  };

  const updateChannel = (id: string, field: keyof MarketingChannel, value: string | number) => {
    setChannels(channels.map(channel => 
      channel.id === id ? { ...channel, [field]: value } : channel
    ));
  };

  const toggleEdit = (id: string) => {
    setEditingId(editingId === id ? null : id);
  };

  const handleExportData = () => {
    exportToCSV(calculatedData);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Tabs defaultValue="input" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="instructions">Instructions</TabsTrigger>
          <TabsTrigger value="input">Data Input</TabsTrigger>
          <TabsTrigger value="results">Results & Metrics</TabsTrigger>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        </TabsList>

        <TabsContent value="instructions" className="space-y-4">
          <ROIInstructions />
        </TabsContent>

        <TabsContent value="input" className="space-y-4">
          <DataInputSection
            channels={channels}
            editingId={editingId}
            onAddChannel={addChannel}
            onRemoveChannel={removeChannel}
            onUpdateChannel={updateChannel}
            onToggleEdit={toggleEdit}
            onExportData={handleExportData}
          />
        </TabsContent>

        <TabsContent value="results">
          <ROIMetrics data={calculatedData} />
          <div className="mt-6">
            <BudgetOptimizer data={calculatedData} />
          </div>
        </TabsContent>

        <TabsContent value="dashboard">
          <ROICharts data={calculatedData} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ROICalculatorTool;
