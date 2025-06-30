
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
  return (
    <section className={`py-16 px-4 ${backgroundClass}`}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-heidigital-blue hover:bg-gray-100">
            <Link to={primaryButtonLink}>{primaryButtonText}</Link>
          </Button>
          {secondaryButtonText && secondaryButtonLink && (
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-white text-heidigital-blue bg-white hover:bg-gray-100"
            >
              <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
