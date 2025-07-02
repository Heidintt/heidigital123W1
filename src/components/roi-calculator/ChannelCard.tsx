
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit2, Save, Trash2, X } from "lucide-react";
import { type MarketingChannel } from "./calculatorUtils";

interface ChannelCardProps {
  channel: MarketingChannel;
  index: number;
  isEditing: boolean;
  canDelete: boolean;
  onUpdate: (id: string, field: keyof MarketingChannel, value: string | number) => void;
  onToggleEdit: (id: string) => void;
  onRemove: (id: string) => void;
}

const ChannelCard = ({
  channel,
  index,
  isEditing,
  canDelete,
  onUpdate,
  onToggleEdit,
  onRemove
}: ChannelCardProps) => {
  const handleInputChange = (field: keyof MarketingChannel, value: string) => {
    if (field === 'channel' || field === 'campaignName') {
      onUpdate(channel.id, field, value);
    } else {
      const numValue = parseFloat(value) || 0;
      onUpdate(channel.id, field, numValue);
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Channel {index + 1}</h3>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onToggleEdit(channel.id)}
            >
              {isEditing ? <X className="h-4 w-4" /> : <Edit2 className="h-4 w-4" />}
              {isEditing ? "Cancel" : "Edit"}
            </Button>
            {canDelete && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => onRemove(channel.id)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
                Delete
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Channel Name</label>
            {isEditing ? (
              <Input
                value={channel.channel}
                onChange={(e) => handleInputChange('channel', e.target.value)}
                placeholder="Channel name"
              />
            ) : (
              <p className="text-sm text-gray-600">{channel.channel}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Campaign Name</label>
            {isEditing ? (
              <Input
                value={channel.campaignName}
                onChange={(e) => handleInputChange('campaignName', e.target.value)}
                placeholder="Campaign name"
              />
            ) : (
              <p className="text-sm text-gray-600">{channel.campaignName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Spend ($)</label>
            {isEditing ? (
              <Input
                type="number"
                value={channel.spend}
                onChange={(e) => handleInputChange('spend', e.target.value)}
                placeholder="0"
                min="0"
                step="0.01"
              />
            ) : (
              <p className="text-sm text-gray-600">${channel.spend.toFixed(2)}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Clicks</label>
            {isEditing ? (
              <Input
                type="number"
                value={channel.clicks}
                onChange={(e) => handleInputChange('clicks', e.target.value)}
                placeholder="0"
                min="0"
              />
            ) : (
              <p className="text-sm text-gray-600">{channel.clicks}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Leads</label>
            {isEditing ? (
              <Input
                type="number"
                value={channel.conversions}
                onChange={(e) => handleInputChange('conversions', e.target.value)}
                placeholder="0"
                min="0"
              />
            ) : (
              <p className="text-sm text-gray-600">{channel.conversions}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Revenue ($)</label>
            {isEditing ? (
              <Input
                type="number"
                value={channel.revenue}
                onChange={(e) => handleInputChange('revenue', e.target.value)}
                placeholder="0"
                min="0"
                step="0.01"
              />
            ) : (
              <p className="text-sm text-gray-600">${channel.revenue.toFixed(2)}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Customers</label>
            {isEditing ? (
              <Input
                type="number"
                value={channel.customers}
                onChange={(e) => handleInputChange('customers', e.target.value)}
                placeholder="0"
                min="0"
              />
            ) : (
              <p className="text-sm text-gray-600">{channel.customers}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChannelCard;
