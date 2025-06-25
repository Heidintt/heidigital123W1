
import React from "react";
import { Badge } from "@/components/ui/badge";

interface ResourceFilterProps {
  labelOptions: string[];
  selectedLabel: string;
  onLabelChange: (label: string) => void;
}

const ResourceFilter: React.FC<ResourceFilterProps> = ({
  labelOptions,
  selectedLabel,
  onLabelChange,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {labelOptions.map((label) => (
        <Badge
          key={label}
          variant={selectedLabel === label ? "default" : "outline"}
          className={`cursor-pointer px-4 py-2 ${
            selectedLabel === label 
              ? "bg-heisocial-blue text-white" 
              : "hover:bg-heisocial-blue/10 border-heisocial-blue text-heisocial-blue"
          }`}
          onClick={() => onLabelChange(label)}
        >
          {label}
        </Badge>
      ))}
    </div>
  );
};

export default ResourceFilter;
