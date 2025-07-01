
import { 
  Brain, 
  PenTool, 
  Search, 
  Share2, 
  Target, 
  TrendingUp, 
  Users, 
  Zap,
  LucideIcon 
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  "Brain": Brain,
  "PenTool": PenTool,
  "Search": Search,
  "Share2": Share2,
  "Target": Target,
  "TrendingUp": TrendingUp,
  "Users": Users,
  "Zap": Zap
};

export const getIcon = (iconName: string): LucideIcon => {
  return iconMap[iconName] || Brain;
};
