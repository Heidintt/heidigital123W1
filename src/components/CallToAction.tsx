import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
interface CallToActionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundClass?: string;
}
const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundClass = "bg-heisocial-blue"
}) => {
  return <section className={`py-16 px-4 ${backgroundClass}`}>
      
    </section>;
};
export default CallToAction;