
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ 
  name, 
  role, 
  bio, 
  image,
  socialLinks 
}) => {
  return (
    <Card className="card-hover text-center">
      <CardHeader className="pb-0">
        <div className="mx-auto w-32 h-32 rounded-full overflow-hidden mb-4">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <CardTitle>{name}</CardTitle>
        <span className="text-heisocial-blue font-medium">{role}</span>
      </CardHeader>
      <CardContent>
        <CardDescription>{bio}</CardDescription>
      </CardContent>
      <CardFooter className="justify-center space-x-4">
        {socialLinks?.linkedin && (
          <a
            href={socialLinks.linkedin}
            className="text-gray-500 hover:text-heisocial-blue transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={18} />
          </a>
        )}
        {socialLinks?.twitter && (
          <a
            href={socialLinks.twitter}
            className="text-gray-500 hover:text-heisocial-blue transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={18} />
          </a>
        )}
        {socialLinks?.email && (
          <a
            href={`mailto:${socialLinks.email}`}
            className="text-gray-500 hover:text-heisocial-blue transition-colors"
          >
            <Mail size={18} />
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default TeamMemberCard;
