
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2, Edit } from "lucide-react";

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
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg">Channel {index + 1}</CardTitle>
        <div className="flex space-x-2">
          <Button
            onClick={() => onToggleEdit(channel.id)}
            variant="outline"
            size="sm"
          >
            <Edit className="h-4 w-4" />
          </Button>
          {canDelete && (
            <Button
              onClick={() => onRemove(channel.id)}
              variant="outline"
              size="sm"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <Label htmlFor={`channel-${channel.id}`}>Channel Name</Label>
            <Input
              id={`channel-${channel.id}`}
              value={channel.channel}
              onChange={(e) => onUpdate(channel.id, 'channel', e.target.value)}
              disabled={!isEditing}
            />
          </div>
          <div>
            <Label htmlFor={`campaign-${channel.id}`}>Campaign Name</Label>
            <Input
              id={`campaign-${channel.id}`}
              value={channel.campaignName}
              onChange={(e) => onUpdate(channel.id, 'campaignName', e.target.value)}
              disabled={!isEditing}
            />
          </div>
          <div>
            <Label htmlFor={`spend-${channel.id}`}>Spend ($)</Label>
            <Input
              id={`spend-${channel.id}`}
              type="number"
              value={channel.spend}
              onChange={(e) => onUpdate(channel.id, 'spend', parseFloat(e.target.value) || 0)}
              disabled={!isEditing}
            />
          </div>
          <div>
            <Label htmlFor={`clicks-${channel.id}`}>Clicks</Label>
            <Input
              id={`clicks-${channel.id}`}
              type="number"
              value={channel.clicks}
              onChange={(e) => onUpdate(channel.id, 'clicks', parseInt(e.target.value) || 0)}
              disabled={!isEditing}
            />
          </div>
          <div>
            <Label htmlFor={`conversions-${channel.id}`}>Leads</Label>
            <Input
              id={`conversions-${channel.id}`}
              type="number"
              value={channel.conversions}
              onChange={(e) => onUpdate(channel.id, 'conversions', parseInt(e.target.value) || 0)}
              disabled={!isEditing}
            />
          </div>
          <div>
            <Label htmlFor={`revenue-${channel.id}`}>Revenue ($)</Label>
            <Input
              id={`revenue-${channel.id}`}
              type="number"
              value={channel.revenue}
              onChange={(e) => onUpdate(channel.id, 'revenue', parseFloat(e.target.value) || 0)}
              disabled={!isEditing}
            />
          </div>
          <div>
            <Label htmlFor={`customers-${channel.id}`}>Customers</Label>
            <Input
              id={`customers-${channel.id}`}
              type="number"
              value={channel.customers}
              onChange={(e) => onUpdate(channel.id, 'customers', parseInt(e.target.value) || 0)}
              disabled={!isEditing}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChannelCard;
