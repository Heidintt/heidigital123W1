
import { 
  Brain, 
  PenTool, 
  Search, 
  Share2, 
  Palette, 
  Target,
  LucideIcon 
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Brain,
  PenTool,
  Search,
  Share2,
  Palette,
  Target,
};

export const getIconByName = (iconName: string): LucideIcon => {
  return iconMap[iconName] || Search; // fallback to Search icon if icon not found
};
