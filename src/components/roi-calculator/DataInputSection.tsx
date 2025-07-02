
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus, Download } from "lucide-react";
import ChannelCard from "./ChannelCard";

interface MarketingChannel {
  id: string;
  channel: string;
  campaignName: string;
  spend: number;
  clicks: number;
  conversions: number;
  revenue: number;
  customers: number;
}

interface DataInputSectionProps {
  channels: MarketingChannel[];
  editingId: string | null;
  onAddChannel: () => void;
  onRemoveChannel: (id: string) => void;
  onUpdateChannel: (id: string, field: keyof MarketingChannel, value: string | number) => void;
  onToggleEdit: (id: string) => void;
  onExportData: () => void;
}

const DataInputSection = ({
  channels,
  editingId,
  onAddChannel,
  onRemoveChannel,
  onUpdateChannel,
  onToggleEdit,
  onExportData
}: DataInputSectionProps) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Marketing Channel Data</h2>
        <div className="space-x-2">
          <Button onClick={onAddChannel} variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add Channel
          </Button>
          <Button onClick={onExportData} variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {channels.map((channel, index) => (
          <ChannelCard
            key={channel.id}
            channel={channel}
            index={index}
            isEditing={editingId === channel.id}
            canDelete={channels.length > 1}
            onUpdate={onUpdateChannel}
            onToggleEdit={onToggleEdit}
            onRemove={onRemoveChannel}
          />
        ))}
      </div>
    </div>
  );
};

export default DataInputSection;
